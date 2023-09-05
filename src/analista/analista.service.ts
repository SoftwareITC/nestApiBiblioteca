import { Injectable } from '@nestjs/common';
import { CreateAnalistaDto } from './dto/create-analista.dto';
import { UpdateAnalistaDto } from './dto/update-analista.dto';
import { Analista } from './entities/analista.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AnalistaService {

  constructor(
    @InjectRepository(Analista)
    private analistaRepository: Repository<Analista>,
  ) {}

  async create(createAnalistaDto: CreateAnalistaDto) {
    
    const analista = this.analistaRepository.create(createAnalistaDto);
    const resp = await this.analistaRepository.save(analista);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  async findAll() {
    return await this.analistaRepository.find();;
  }

  findOne(id: number) {
    return `This action returns a #${id} analista`;
  }

  update(id: number, updateAnalistaDto: UpdateAnalistaDto) {
    return `This action updates a #${id} analista`;
  }

  remove(id: number) {
    return `This action removes a #${id} analista`;
  }
}
