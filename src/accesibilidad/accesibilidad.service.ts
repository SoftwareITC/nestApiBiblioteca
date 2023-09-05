import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAccesibilidadDto } from './dto/create-accesibilidad.dto';
import { UpdateAccesibilidadDto } from './dto/update-accesibilidad.dto';
import { Accesibilidad } from './entities/accesibilidad.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccesibilidadService {

  constructor(
    @InjectRepository(Accesibilidad)
    private accesibilidadRepository: Repository<Accesibilidad>,
  ) {}

  async create(createAccesibilidadDto: CreateAccesibilidadDto) {
    
    const accesibilidad = this.accesibilidadRepository.create(createAccesibilidadDto);
    const resp = await this.accesibilidadRepository.save(accesibilidad);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  async findAll() {
    return await this.accesibilidadRepository.find();;
  }
  findOne(id: number) {
    return `This action returns a #${id} accesibilidad`;
  }

  async update(id: number, updateAccesibilidadDto: UpdateAccesibilidadDto) {

    const corregir =  await this.accesibilidadRepository.findOneBy({id});

    if(!corregir){
      throw new BadRequestException('Prueba not found');
    }

    return await this.accesibilidadRepository.save({
      ...corregir,
      ...updateAccesibilidadDto
    })
  }

  remove(id: number) {
    return `This action removes a #${id} accesibilidad`;
  }
}
