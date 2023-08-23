import { Injectable } from '@nestjs/common';
import { CreateEditorialDto } from './dto/create-editorial.dto';
import { UpdateEditorialDto } from './dto/update-editorial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Editorial } from './entities/editorial.entity';

@Injectable()
export class EditorialService {
  constructor(
    @InjectRepository(Editorial)
    private editorialRepository: Repository<Editorial>,
  ) {}

  async create(createEditorialDto: CreateEditorialDto) {
    
    const editorial = this.editorialRepository.create(createEditorialDto);
    const resp = await this.editorialRepository.save(editorial);

    if(resp)  return {status:true, resp};
    else return { status: false}
  }

  async findAll() {
    return await this.editorialRepository.find();;
  }


  findOne(id: number) {
    return `This action returns a #${id} editorial`;
  }

  update(id: number, updateEditorialDto: UpdateEditorialDto) {
    return `This action updates a #${id} editorial`;
  }

  remove(id: number) {
    return `This action removes a #${id} editorial`;
  }
}
