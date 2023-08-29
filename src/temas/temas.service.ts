import { Injectable } from '@nestjs/common';
import { CreateTemaDto } from './dto/create-tema.dto';
import { UpdateTemaDto } from './dto/update-tema.dto';
import { Tema } from './entities/tema.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TemasService {

  constructor(
    @InjectRepository(Tema)
    private temaRepository: Repository<Tema>,
  ) {}

  async create(createTemaDto: CreateTemaDto) {
    
    const tema = this.temaRepository.create(createTemaDto);
    const resp = await this.temaRepository.save(tema);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  async findAll() {
    return await this.temaRepository.find();;
  }

  findOne(id: number) {
    return `This action returns a #${id} tema`;
  }

  update(id: number, updateTemaDto: UpdateTemaDto) {
    return `This action updates a #${id} tema`;
  }

  remove(id: number) {
    return `This action removes a #${id} tema`;
  }
}
