import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBibliotecaDto } from './dto/create-biblioteca.dto';
import { UpdateBibliotecaDto } from './dto/update-biblioteca.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Biblioteca } from './entities/biblioteca.entity';
import { RecursoBibliografico } from 'src/recurso-bibliografico/entities/recurso-bibliografico.entity';

@Injectable()
export class BibliotecaService {

  constructor(
    @InjectRepository(Biblioteca)
    private bibliotecaRepository: Repository<Biblioteca>,

    @InjectRepository(RecursoBibliografico)
    private recursoBibliograficoRepository: Repository<RecursoBibliografico>
  ) {}

  async create(createBibliotecaDto: CreateBibliotecaDto) {

    const recursoBibliografico = await this.recursoBibliograficoRepository.findOneBy({
      nombre: createBibliotecaDto.recursoBibliografico
    });

    if (!recursoBibliografico) {
      throw new BadRequestException('Recurso bibliografico not found');
    }
    
    const biblioteca = this.bibliotecaRepository.create({...createBibliotecaDto,
    recursoBibliografico});
    const resp = await this.bibliotecaRepository.save(biblioteca);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  async findAll() {
    return await this.bibliotecaRepository.find();;
  }

  findOne(id: number) {
    return `This action returns a #${id} biblioteca`;
  }

  update(id: number, updateBibliotecaDto: UpdateBibliotecaDto) {
    return `This action updates a #${id} biblioteca`;
  }

  remove(id: number) {
    return `This action removes a #${id} biblioteca`;
  }
}
