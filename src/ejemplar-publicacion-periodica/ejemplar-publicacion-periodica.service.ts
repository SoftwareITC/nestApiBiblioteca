import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEjemplarPublicacionPeriodicaDto } from './dto/create-ejemplar-publicacion-periodica.dto';
import { UpdateEjemplarPublicacionPeriodicaDto } from './dto/update-ejemplar-publicacion-periodica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Accesibilidad } from 'src/accesibilidad/entities/accesibilidad.entity';
import { Analista } from 'src/analista/entities/analista.entity';
import { EjemplarTesi } from 'src/ejemplar-tesis/entities/ejemplar-tesi.entity';
import { Estante } from 'src/estante/entities/estante.entity';
import { FichaPublicacionPeriodica } from 'src/ficha-publicacion-periodica/entities/ficha-publicacion-periodica.entity';
import { FichaTesi } from 'src/ficha-tesis/entities/ficha-tesi.entity';
import { Repository } from 'typeorm';
import { EjemplarPublicacionPeriodica } from './entities/ejemplar-publicacion-periodica.entity';

@Injectable()
export class EjemplarPublicacionPeriodicaService {


  constructor(
    @InjectRepository(EjemplarPublicacionPeriodica)
    private ejemplarPublicacionPeriodicaRepository: Repository<EjemplarPublicacionPeriodica>,

    @InjectRepository(Accesibilidad)
    private accesibilidadRepository: Repository<Accesibilidad>,

    @InjectRepository(Analista)
    private analistaRepository: Repository<Analista>,

    @InjectRepository(Estante)
    private estanteRepository: Repository<Estante>,

     @InjectRepository(FichaPublicacionPeriodica)
     private fichaPublicacionPeriodicaRepository: Repository<FichaPublicacionPeriodica>
  ) {}


  async create(createEjemplarPublicacionPeriodicaDto: CreateEjemplarPublicacionPeriodicaDto) {
    const accesibilidad = await this.accesibilidadRepository.findOneBy({
      id: createEjemplarPublicacionPeriodicaDto.accesibilidad
    });

    if (!accesibilidad) {
      throw new BadRequestException('Accesibilidad not found');
    }

    const analista = await this.analistaRepository.findOneBy({
      nombre: createEjemplarPublicacionPeriodicaDto.analista
    });

    if (!analista) {
      throw new BadRequestException('Analista not found');
    }

    const estante = await this.estanteRepository.findOneBy({
      nombre: createEjemplarPublicacionPeriodicaDto.estante
    });

    if (!estante) {
      throw new BadRequestException('Estante not found');
    }

    const fichaPublicacionPeriodica = await this.fichaPublicacionPeriodicaRepository.findOneBy({
      id: createEjemplarPublicacionPeriodicaDto.fichaPublicacionPeriodica
    });

    if (!fichaPublicacionPeriodica) {
      throw new BadRequestException('Ficha Publicacion Periodica not found');
    }


    const ejemplarTesi = this.ejemplarPublicacionPeriodicaRepository.create({
      ...createEjemplarPublicacionPeriodicaDto,
      fichaPublicacionPeriodica,
      accesibilidad,
      estante,
      analista
    });

    const resp = await this.ejemplarPublicacionPeriodicaRepository.save(ejemplarTesi);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  findAll() {
    return this.ejemplarPublicacionPeriodicaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ejemplarPublicacionPeriodica`;
  }

  update(id: number, updateEjemplarPublicacionPeriodicaDto: UpdateEjemplarPublicacionPeriodicaDto) {
    return `This action updates a #${id} ejemplarPublicacionPeriodica`;
  }

  remove(id: number) {
    return `This action removes a #${id} ejemplarPublicacionPeriodica`;
  }
}
