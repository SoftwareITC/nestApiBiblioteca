import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEjemplarTesiDto } from './dto/create-ejemplar-tesi.dto';
import { UpdateEjemplarTesiDto } from './dto/update-ejemplar-tesi.dto';
import { EjemplarTesi } from './entities/ejemplar-tesi.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Accesibilidad } from 'src/accesibilidad/entities/accesibilidad.entity';
import { Analista } from 'src/analista/entities/analista.entity';
import { Estante } from 'src/estante/entities/estante.entity';
import { FichaTesi } from 'src/ficha-tesis/entities/ficha-tesi.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EjemplarTesisService {
  constructor(
    @InjectRepository(EjemplarTesi)
    private ejemplarTesiRepository: Repository<EjemplarTesi>,

    @InjectRepository(Accesibilidad)
    private accesibilidadRepository: Repository<Accesibilidad>,

    @InjectRepository(Analista)
    private analistaRepository: Repository<Analista>,

    @InjectRepository(Estante)
    private estanteRepository: Repository<Estante>,

     @InjectRepository(FichaTesi)
     private fichaTesiRepository: Repository<FichaTesi>
  ) {}

  async create(createEjemplarTesiDto: CreateEjemplarTesiDto) {

    const accesibilidad = await this.accesibilidadRepository.findOneBy({
      id: createEjemplarTesiDto.accesibilidad
    });

    if (!accesibilidad) {
      throw new BadRequestException('Accesibilidad not found');
    }

    const analista = await this.analistaRepository.findOneBy({
      nombre: createEjemplarTesiDto.analista
    });

    if (!analista) {
      throw new BadRequestException('Analista not found');
    }

    const estante = await this.estanteRepository.findOneBy({
      nombre: createEjemplarTesiDto.estante
    });

    if (!estante) {
      throw new BadRequestException('Estante not found');
    }

    const fichaTesi = await this.fichaTesiRepository.findOneBy({
      id: createEjemplarTesiDto.fichaTesi
    });

    if (!fichaTesi) {
      throw new BadRequestException('Ficha Tesis not found');
    }


    const ejemplarTesi = this.ejemplarTesiRepository.create({
      ...createEjemplarTesiDto,
      accesibilidad,
      analista,
      estante,
      fichaTesi
    });

    const resp = await this.ejemplarTesiRepository.save(ejemplarTesi);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  findAll() {
    return this.ejemplarTesiRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ejemplarTesi`;
  }

  update(id: number, updateEjemplarTesiDto: UpdateEjemplarTesiDto) {
    return `This action updates a #${id} ejemplarTesi`;
  }

  remove(id: number) {
    return `This action removes a #${id} ejemplarTesi`;
  }
}
