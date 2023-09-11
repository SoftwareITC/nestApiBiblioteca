import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FichaPublicacionPeriodicaService } from './ficha-publicacion-periodica.service';
import { CreateFichaPublicacionPeriodicaDto } from './dto/create-ficha-publicacion-periodica.dto';
import { UpdateFichaPublicacionPeriodicaDto } from './dto/update-ficha-publicacion-periodica.dto';

@Controller('ficha-publicacion-periodica')
export class FichaPublicacionPeriodicaController {
  constructor(private readonly fichaPublicacionPeriodicaService: FichaPublicacionPeriodicaService) {}

  @Post()
  create(@Body() createFichaPublicacionPeriodicaDto: CreateFichaPublicacionPeriodicaDto) {
    return this.fichaPublicacionPeriodicaService.create(createFichaPublicacionPeriodicaDto);
  }

  @Get()
  findAll() {
    return this.fichaPublicacionPeriodicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fichaPublicacionPeriodicaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFichaPublicacionPeriodicaDto: UpdateFichaPublicacionPeriodicaDto) {
    return this.fichaPublicacionPeriodicaService.update(+id, updateFichaPublicacionPeriodicaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichaPublicacionPeriodicaService.remove(+id);
  }
}
