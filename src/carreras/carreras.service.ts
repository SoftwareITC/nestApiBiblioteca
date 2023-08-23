import { Injectable } from '@nestjs/common';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carrera } from './entities/carrera.entity';

@Injectable()
export class CarrerasService {

  constructor(
    @InjectRepository(Carrera)
    private carrerasRepository: Repository<Carrera>,
  ) {}

  async create(createCarreraDto: CreateCarreraDto) {
    
    const carrera = this.carrerasRepository.create(createCarreraDto);
    const resp = await this.carrerasRepository.save(carrera);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  async findAll() {
    return await this.carrerasRepository.find();;
  }



  // findOne(id: number) {
  //   return `This action returns a #${id} carrera`;
  // }

  // update(id: number, updateCarreraDto: UpdateCarreraDto) {
  //   return `This action updates a #${id} carrera`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} carrera`;
  // }
}
