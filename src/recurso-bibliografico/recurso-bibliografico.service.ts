import { Injectable } from '@nestjs/common';
import { CreateRecursoBibliograficoDto } from './dto/create-recurso-bibliografico.dto';
import { UpdateRecursoBibliograficoDto } from './dto/update-recurso-bibliografico.dto';
import { RecursoBibliografico } from './entities/recurso-bibliografico.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RecursoBibliograficoService {

  constructor(
    @InjectRepository(RecursoBibliografico)
    private recursoBibliograficoRepository: Repository<RecursoBibliografico>,
  ) {}

  async create(createRecursoBibliograficoDto: CreateRecursoBibliograficoDto) {
    
    const recursoBibliografico = this.recursoBibliograficoRepository.create(createRecursoBibliograficoDto);
    const resp = await this.recursoBibliograficoRepository.save(recursoBibliografico);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  async findAll() {
    return await this.recursoBibliograficoRepository.find();;
  }

  findOne(id: number) {
    return `This action returns a #${id} recursoBibliografico`;
  }

  update(id: number, updateRecursoBibliograficoDto: UpdateRecursoBibliograficoDto) {
    return `This action updates a #${id} recursoBibliografico`;
  }

  remove(id: number) {
    return `This action removes a #${id} recursoBibliografico`;
  }
}
