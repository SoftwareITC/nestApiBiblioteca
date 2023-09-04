import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFichaLibroDto } from './dto/create-ficha-libro.dto';
import { UpdateFichaLibroDto } from './dto/update-ficha-libro.dto';
import { FichaLibro } from './entities/ficha-libro.entity';
import { Lugar } from 'src/lugar/entities/lugar.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lenguaje } from 'src/lenguaje/entities/lenguaje.entity';
import { Carrera } from '../carrera/entities/carrera.entity';
import { Editorial } from '../editorial/entities/editorial.entity';
import { Tema } from 'src/temas/entities/tema.entity';
import { Autor } from 'src/autor/entities/autor.entity';

@Injectable()
export class FichaLibroService {

  constructor(
    @InjectRepository(FichaLibro)
    private fichaLibroRepository: Repository<FichaLibro>,

    @InjectRepository(Lugar)
    private lugarRepository: Repository<Lugar>,

    @InjectRepository(Lenguaje)
    private lenguajeRepository: Repository<Lenguaje>,

    @InjectRepository(Carrera)
    private carreraRepository: Repository<Carrera>,

    @InjectRepository(Editorial)
    private editorialRepository: Repository<Editorial>,

    @InjectRepository(Tema)
    private temaRepository: Repository<Tema>,

    @InjectRepository(Autor)
    private autorRepository: Repository<Autor>
  ) {}


  async create(createFichaLibroDto: CreateFichaLibroDto) {

    const lugar = await this.lugarRepository.findOneBy({
      nombre: createFichaLibroDto.lugar
    });

    if (!lugar) {
      throw new BadRequestException('lugar not found');
    }

    const lenguaje = await this.lenguajeRepository.findOneBy({
      nombre: createFichaLibroDto.lenguaje
    });

    if (!lenguaje) {
      throw new BadRequestException('lenguaje not found');
    }

    const carrera = await this.carreraRepository.findOneBy({
      nombre: createFichaLibroDto.carrera
    });

    if (!carrera) {
      throw new BadRequestException('carrera not found');
    }

    const editorial = await this.editorialRepository.findOneBy({
      nombre: createFichaLibroDto.editorial
    });

    if (!editorial) {
      throw new BadRequestException('editorial not found');
    }

    const temas = await this.temaRepository.findByIds(createFichaLibroDto.temas);

    const autores = await this.autorRepository.findByIds(createFichaLibroDto.autores);



    const fichaLibro = this.fichaLibroRepository.create({
      ...createFichaLibroDto,
      lugar,
      lenguaje,
      carrera,
      editorial,
      temas,
      autores
    }
    );
    const resp = await this.fichaLibroRepository.save(fichaLibro)

    if(resp)  return {status:true, resp};
    else return { status: false}

   }

   async findAll() {
    return this.fichaLibroRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} fichaLibro`;
  }

  update(id: number, updateFichaLibroDto: UpdateFichaLibroDto) {
    return `This action updates a #${id} fichaLibro`;
  }

  remove(id: number) {
    return `This action removes a #${id} fichaLibro`;
  }
}
