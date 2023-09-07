import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateEstanteDto } from './dto/create-estante.dto';
import { UpdateEstanteDto } from './dto/update-estante.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBibliotecaDto } from 'src/biblioteca/dto/create-biblioteca.dto';
import { Biblioteca } from 'src/biblioteca/entities/biblioteca.entity';
import { Repository } from 'typeorm';
import { Estante } from './entities/estante.entity';

@Injectable()
export class EstanteService {

  constructor(
    @InjectRepository(Estante)
    private estanteRepository: Repository<Estante>,

    @InjectRepository(Biblioteca)
    private bibliotecaRepository: Repository<Biblioteca>
    
  ) {}

  async create(createEstanteDto: CreateEstanteDto) {

    const biblioteca = await this.bibliotecaRepository.findOneBy({
      nombre: createEstanteDto.biblioteca
    });

    if (!biblioteca) {
      throw new BadRequestException('Biblioteca not found');
    }
    
    const estante = this.estanteRepository.create({...createEstanteDto,
    biblioteca});
    const resp = await this.estanteRepository.save(estante);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  async findAll() {
    return await this.estanteRepository.find();;
  }
  findOne(id: number) {
    return `This action returns a #${id} estante`;
  }

  update(id: number, updateEstanteDto: UpdateEstanteDto) {
    return `This action updates a #${id} estante`;
  }

  remove(id: number) {
    return `This action removes a #${id} estante`;
  }
}
