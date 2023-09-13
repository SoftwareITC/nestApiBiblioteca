import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjemplarTesisService } from './ejemplar-tesis.service';
import { CreateEjemplarTesiDto } from './dto/create-ejemplar-tesi.dto';
import { UpdateEjemplarTesiDto } from './dto/update-ejemplar-tesi.dto';

@Controller('ejemplar-tesis')
export class EjemplarTesisController {
  constructor(private readonly ejemplarTesisService: EjemplarTesisService) {}

  @Post()
  create(@Body() createEjemplarTesiDto: CreateEjemplarTesiDto) {
    return this.ejemplarTesisService.create(createEjemplarTesiDto);
  }

  @Get()
  findAll() {
    return this.ejemplarTesisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejemplarTesisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEjemplarTesiDto: UpdateEjemplarTesiDto) {
    return this.ejemplarTesisService.update(+id, updateEjemplarTesiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejemplarTesisService.remove(+id);
  }
}
