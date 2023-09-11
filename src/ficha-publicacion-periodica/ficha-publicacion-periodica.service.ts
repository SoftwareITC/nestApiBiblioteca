import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateFichaPublicacionPeriodicaDto } from './dto/create-ficha-publicacion-periodica.dto';
import { UpdateFichaPublicacionPeriodicaDto } from './dto/update-ficha-publicacion-periodica.dto';
import { Proveedor } from 'src/proveedor/entities/proveedor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrera } from 'src/carrera/entities/carrera.entity';
import { Editorial } from 'src/editorial/entities/editorial.entity';
import { Lenguaje } from 'src/lenguaje/entities/lenguaje.entity';
import { Lugar } from 'src/lugar/entities/lugar.entity';
import { Tema } from 'src/temas/entities/tema.entity';
import { Repository } from 'typeorm';
import { FichaPublicacionPeriodica } from './entities/ficha-publicacion-periodica.entity';

@Injectable()
export class FichaPublicacionPeriodicaService {

  constructor(
    @InjectRepository(FichaPublicacionPeriodica)
    private fichaPublicacionPeriodicaRepository: Repository<FichaPublicacionPeriodica>,

    @InjectRepository(Lugar)
    private lugarRepository: Repository<Lugar>,

    @InjectRepository(Lenguaje)
    private lenguajeRepository: Repository<Lenguaje>,

    @InjectRepository(Carrera)
    private carreraRepository: Repository<Carrera>,

    @InjectRepository(Editorial)
    private editorialRepository: Repository<Editorial>,

    @InjectRepository(Proveedor)
    private proveedorRepository: Repository<Proveedor>,

    @InjectRepository(Tema)
    private temaRepository: Repository<Tema>

  ) {}


  async create(createFichaPublicacionPeriodicaDto: CreateFichaPublicacionPeriodicaDto) {
    const lugar = await this.lugarRepository.findOneBy({
      nombre: createFichaPublicacionPeriodicaDto.lugar
    });

    if (!lugar) {
      throw new BadRequestException('lugar not found');
    }

    const lenguaje = await this.lenguajeRepository.findOneBy({
      nombre: createFichaPublicacionPeriodicaDto.lenguaje
    });

    if (!lenguaje) {
      throw new BadRequestException('lenguaje not found');
    }

    const carrera = await this.carreraRepository.findOneBy({
      nombre: createFichaPublicacionPeriodicaDto.carrera
    });

    if (!carrera) {
      throw new BadRequestException('carrera not found');
    }

    const proveedor = await this.proveedorRepository.findOneBy({
      nombre: createFichaPublicacionPeriodicaDto.proveedor
    });

    if (!proveedor) {
      throw new BadRequestException('Proveedor not found');
    }

    const editorial = await this.editorialRepository.findOneBy({
      nombre: createFichaPublicacionPeriodicaDto.editorial
    });

    if (!editorial) {
      throw new BadRequestException('editorial not found');
    }

    const temas = await this.temaRepository.findByIds(createFichaPublicacionPeriodicaDto.temas);



    const fichaLibro = this.fichaPublicacionPeriodicaRepository.create({
      ...createFichaPublicacionPeriodicaDto,
      lugar,
      lenguaje,
      carrera,
      proveedor,
      editorial,
      temas,
    }
    );
    const resp = await this.fichaPublicacionPeriodicaRepository.save(fichaLibro)

    if(resp)  return {status:true, resp};
    else return { status: false}
  }




  findAll() {
     return this.fichaPublicacionPeriodicaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} fichaPublicacionPeriodica`;
  }

  update(id: number, updateFichaPublicacionPeriodicaDto: UpdateFichaPublicacionPeriodicaDto) {
    return `This action updates a #${id} fichaPublicacionPeriodica`;
  }

  remove(id: number) {
    return `This action removes a #${id} fichaPublicacionPeriodica`;
  }
}
