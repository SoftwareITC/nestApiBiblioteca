import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePruebaDto } from './dto/create-prueba.dto';
import { UpdatePruebaDto } from './dto/update-prueba.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prueba } from './entities/prueba.entity';
import { Carrera } from 'src/carreras/entities/carrera.entity';

@Injectable()
export class PruebaService {

   constructor(
     @InjectRepository(Prueba)
     private pruebaRepository: Repository<Prueba>,

     @InjectRepository(Carrera)
     private carreraRepository: Repository<Carrera>
   ) {}


   async create(createPruebaDto: CreatePruebaDto) {

    const carrera = await this.carreraRepository.findOneBy({
      nombre: createPruebaDto.carrera
    });

    if (!carrera) {
      throw new BadRequestException('carrera not found');
    }

    const prueba = this.pruebaRepository.create({
      ...createPruebaDto,
      carrera
    }
    );
    const resp = await this.pruebaRepository.save(prueba)

    if(resp)  return {status:true, resp};
    else return { status: false}

   }


  async findAll() {
    return this.pruebaRepository.find();
  }
  

  async findOne(id: number) {
    return this.pruebaRepository.findOneBy({id});
  }


  async update(id: number, updatePruebaDto: UpdatePruebaDto) {

    const prueba =  await this.pruebaRepository.findOneBy({id});

    if(!prueba){
      throw new BadRequestException('Prueba not found');
    }

    let carrera;
    if(updatePruebaDto.carrera){
      carrera = await this.carreraRepository.findOneBy({nombre: updatePruebaDto.carrera});
      
      if (!carrera) {
        throw new BadRequestException('Carrera not found');
      }
    }

     return await this.pruebaRepository.save({
       ...prueba,
       ...updatePruebaDto,
       carrera
     })

  }


  async remove(id: number) {
    return this.pruebaRepository.softDelete({id});
  }
}
