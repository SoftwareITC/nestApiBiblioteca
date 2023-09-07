import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecursoBibliograficoService } from './recurso-bibliografico.service';
import { CreateRecursoBibliograficoDto } from './dto/create-recurso-bibliografico.dto';
import { UpdateRecursoBibliograficoDto } from './dto/update-recurso-bibliografico.dto';

@Controller('recurso-bibliografico')
export class RecursoBibliograficoController {
  constructor(private readonly recursoBibliograficoService: RecursoBibliograficoService) {}

  @Post()
  create(@Body() createRecursoBibliograficoDto: CreateRecursoBibliograficoDto) {
    return this.recursoBibliograficoService.create(createRecursoBibliograficoDto);
  }

  @Get()
  findAll() {
    return this.recursoBibliograficoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recursoBibliograficoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecursoBibliograficoDto: UpdateRecursoBibliograficoDto) {
    return this.recursoBibliograficoService.update(+id, updateRecursoBibliograficoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recursoBibliograficoService.remove(+id);
  }
}
