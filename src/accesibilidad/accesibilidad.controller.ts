import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccesibilidadService } from './accesibilidad.service';
import { CreateAccesibilidadDto } from './dto/create-accesibilidad.dto';
import { UpdateAccesibilidadDto } from './dto/update-accesibilidad.dto';

@Controller('accesibilidad')
export class AccesibilidadController {
  constructor(private readonly accesibilidadService: AccesibilidadService) {}

  @Post()
  create(@Body() createAccesibilidadDto: CreateAccesibilidadDto) {
    return this.accesibilidadService.create(createAccesibilidadDto);
  }

  @Get()
  findAll() {
    return this.accesibilidadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accesibilidadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccesibilidadDto: UpdateAccesibilidadDto) {
    return this.accesibilidadService.update(+id, updateAccesibilidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accesibilidadService.remove(+id);
  }
}
