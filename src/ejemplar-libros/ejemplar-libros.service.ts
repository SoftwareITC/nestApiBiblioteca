import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEjemplarLibroDto } from './dto/create-ejemplar-libro.dto';
import { UpdateEjemplarLibroDto } from './dto/update-ejemplar-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EjemplarLibro } from './entities/ejemplar-libro.entity';
import { Accesibilidad } from 'src/accesibilidad/entities/accesibilidad.entity';
import { Proveedor } from 'src/proveedor/entities/proveedor.entity';
import { Analista } from '../analista/entities/analista.entity';
import { Estante } from 'src/estante/entities/estante.entity';
import { FichaLibro } from 'src/ficha-libro/entities/ficha-libro.entity';

@Injectable()
export class EjemplarLibrosService {

  constructor(
    @InjectRepository(EjemplarLibro)
    private ejemplarLibroRepository: Repository<EjemplarLibro>,

    @InjectRepository(Accesibilidad)
    private accesibilidadRepository: Repository<Accesibilidad>,

    @InjectRepository(Proveedor)
    private proveedorRepository: Repository<Proveedor>,

    @InjectRepository(Analista)
    private analistaRepository: Repository<Analista>,

    @InjectRepository(Estante)
    private estanteRepository: Repository<Estante>,

     @InjectRepository(FichaLibro)
     private fichaLibroRepository: Repository<FichaLibro>
  ) {}

  async create(createEjemplarLibroDto: CreateEjemplarLibroDto) {

    const accesibilidad = await this.accesibilidadRepository.findOneBy({
      id: createEjemplarLibroDto.accesibilidad
    });

    if (!accesibilidad) {
      throw new BadRequestException('Accesibilidad not found');
    }

    const proveedor = await this.proveedorRepository.findOneBy({
      nombre: createEjemplarLibroDto.proveedor
    });

    if (!proveedor) {
      throw new BadRequestException('Proveedor not found');
    }

    const analista = await this.analistaRepository.findOneBy({
      nombre: createEjemplarLibroDto.analista
    });

    if (!analista) {
      throw new BadRequestException('Analista not found');
    }

    const estante = await this.estanteRepository.findOneBy({
      nombre: createEjemplarLibroDto.estante
    });

    if (!estante) {
      throw new BadRequestException('Estante not found');
    }

    const fichaLibro = await this.fichaLibroRepository.findOneBy({
      id: createEjemplarLibroDto.fichaLibro
    });

    if (!fichaLibro) {
      throw new BadRequestException('Ficha Libro not found');
    }


    const ejemplarLibro = this.ejemplarLibroRepository.create({
      ...createEjemplarLibroDto,
      accesibilidad,
      proveedor,
      analista,
      estante,
      fichaLibro
    });

    const resp = await this.ejemplarLibroRepository.save(ejemplarLibro);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  findAll() {
    return this.ejemplarLibroRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ejemplarLibro`;
  }

  update(id: number, updateEjemplarLibroDto: UpdateEjemplarLibroDto) {
    return `This action updates a #${id} ejemplarLibro`;
  }

  remove(id: number) {
    return `This action removes a #${id} ejemplarLibro`;
  }
}
