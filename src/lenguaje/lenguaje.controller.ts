import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LenguajeService } from './lenguaje.service';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';
import { UpdateLenguajeDto } from './dto/update-lenguaje.dto';

@Controller('lenguaje')
export class LenguajeController {
  constructor(private readonly lenguajeService: LenguajeService) {}

  @Post()
  create(@Body() createLenguajeDto: CreateLenguajeDto) {
    return this.lenguajeService.create(createLenguajeDto);
  }

  @Get()
  findAll() {
    return this.lenguajeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lenguajeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLenguajeDto: UpdateLenguajeDto) {
    return this.lenguajeService.update(+id, updateLenguajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lenguajeService.remove(+id);
  }
}
