import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjemplarPublicacionPeriodicaService } from './ejemplar-publicacion-periodica.service';
import { CreateEjemplarPublicacionPeriodicaDto } from './dto/create-ejemplar-publicacion-periodica.dto';
import { UpdateEjemplarPublicacionPeriodicaDto } from './dto/update-ejemplar-publicacion-periodica.dto';

@Controller('ejemplar-publicacion-periodica')
export class EjemplarPublicacionPeriodicaController {
  constructor(private readonly ejemplarPublicacionPeriodicaService: EjemplarPublicacionPeriodicaService) {}

  @Post()
  create(@Body() createEjemplarPublicacionPeriodicaDto: CreateEjemplarPublicacionPeriodicaDto) {
    return this.ejemplarPublicacionPeriodicaService.create(createEjemplarPublicacionPeriodicaDto);
  }

  @Get()
  findAll() {
    return this.ejemplarPublicacionPeriodicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejemplarPublicacionPeriodicaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEjemplarPublicacionPeriodicaDto: UpdateEjemplarPublicacionPeriodicaDto) {
    return this.ejemplarPublicacionPeriodicaService.update(+id, updateEjemplarPublicacionPeriodicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejemplarPublicacionPeriodicaService.remove(+id);
  }
}
