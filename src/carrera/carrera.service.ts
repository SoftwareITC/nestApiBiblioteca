import { Injectable } from '@nestjs/common';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrera } from './entities/carrera.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarreraService {

  constructor(
    @InjectRepository(Carrera)
    private carreraRepository: Repository<Carrera>
  ){}


  async create(createCarreraDto: CreateCarreraDto) {

    const carrera = this.carreraRepository.create(createCarreraDto);
    const resp = await this.carreraRepository.save(carrera);

    if(resp) return {status:true, resp};
    else return {status:false}

  }

  async findAll() {
    return this.carreraRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} carrera`;
  }

  update(id: number, updateCarreraDto: UpdateCarreraDto) {
    return `This action updates a #${id} carrera`;
  }

  remove(id: number) {
    return `This action removes a #${id} carrera`;
  }
}
