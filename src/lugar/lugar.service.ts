import { Injectable } from '@nestjs/common';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lugar } from './entities/lugar.entity';

@Injectable()
export class LugarService {

  constructor(
    @InjectRepository(Lugar)
    private lugarRepository: Repository<Lugar>,
  ) {}

  async create(createLugarDto: CreateLugarDto) {
    const lugar = this.lugarRepository.create(createLugarDto);
    const resp = await this.lugarRepository.save(lugar);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  findAll() {
    return this.lugarRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} lugar`;
  }

  update(id: number, updateLugarDto: UpdateLugarDto) {
    return `This action updates a #${id} lugar`;
  }

  remove(id: number) {
    return `This action removes a #${id} lugar`;
  }
}
