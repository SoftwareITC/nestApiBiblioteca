import { Injectable } from '@nestjs/common';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';
import { Lenguaje } from './entities/lenguaje.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LenguajeService {
  constructor(
    @InjectRepository(Lenguaje)
    private lenguajeRepository: Repository<Lenguaje>,
  ) {}

  async create(createLenguajeDto: CreateLenguajeDto) {
    const lenguaje = this.lenguajeRepository.create(createLenguajeDto);
    const resp = await this.lenguajeRepository.save(lenguaje);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  findAll() {
    return this.lenguajeRepository.find();
  }


  findOne(id: number) {
    return `This action returns a #${id} lenguaje`;
  }

  update(id: number, updateLenguajeDto: UpdateLenguajeDto) {
    return `This action updates a #${id} lenguaje`;
  }

  remove(id: number) {
    return `This action removes a #${id} lenguaje`;
  }
}
