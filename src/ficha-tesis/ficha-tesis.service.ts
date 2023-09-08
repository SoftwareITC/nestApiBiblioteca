import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFichaTesiDto } from './dto/create-ficha-tesi.dto';
import { UpdateFichaTesiDto } from './dto/update-ficha-tesi.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Autor } from 'src/autor/entities/autor.entity';
import { Carrera } from 'src/carrera/entities/carrera.entity';
import { Editorial } from 'src/editorial/entities/editorial.entity';
import { CreateFichaLibroDto } from 'src/ficha-libro/dto/create-ficha-libro.dto';
import { Lenguaje } from 'src/lenguaje/entities/lenguaje.entity';
import { Lugar } from 'src/lugar/entities/lugar.entity';
import { Tema } from 'src/temas/entities/tema.entity';
import { Repository } from 'typeorm';
import { FichaTesi } from './entities/ficha-tesi.entity';

@Injectable()
export class FichaTesisService {



  constructor(
    @InjectRepository(FichaTesi)
    private fichaTesiRepository: Repository<FichaTesi>,

    @InjectRepository(Lugar)
    private lugarRepository: Repository<Lugar>,

    @InjectRepository(Lenguaje)
    private lenguajeRepository: Repository<Lenguaje>,

    @InjectRepository(Carrera)
    private carreraRepository: Repository<Carrera>,

    @InjectRepository(Tema)
    private temaRepository: Repository<Tema>,

    @InjectRepository(Autor)
    private autorRepository: Repository<Autor>
  ) {}


  async create(createFichaTesiDto: CreateFichaTesiDto) {

    const lugar = await this.lugarRepository.findOneBy({
      nombre: createFichaTesiDto.lugar
    });

    if (!lugar) {
      throw new BadRequestException('lugar not found');
    }

    const lenguaje = await this.lenguajeRepository.findOneBy({
      nombre: createFichaTesiDto.lenguaje
    });

    if (!lenguaje) {
      throw new BadRequestException('lenguaje not found');
    }

    const carrera = await this.carreraRepository.findOneBy({
      nombre: createFichaTesiDto.carrera
    });

    if (!carrera) {
      throw new BadRequestException('carrera not found');
    }



    const temas = await this.temaRepository.findByIds(createFichaTesiDto.temas);

    const autores = await this.autorRepository.findByIds(createFichaTesiDto.autores);



    const fichaLibro = this.fichaTesiRepository.create({
      ...createFichaTesiDto,
      lugar,
      lenguaje,
      carrera,
      temas,
      autores
    }
    );
    const resp = await this.fichaTesiRepository.save(fichaLibro)

    if(resp)  return {status:true, resp};
    else return { status: false}

   }

   async findAll() {
    return this.fichaTesiRepository.find();
  }





  findOne(id: number) {
    return `This action returns a #${id} fichaTesi`;
  }

  update(id: number, updateFichaTesiDto: UpdateFichaTesiDto) {
    return `This action updates a #${id} fichaTesi`;
  }

  remove(id: number) {
    return `This action removes a #${id} fichaTesi`;
  }
}
