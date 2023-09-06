import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjemplarLibrosService } from './ejemplar-libros.service';
import { CreateEjemplarLibroDto } from './dto/create-ejemplar-libro.dto';
import { UpdateEjemplarLibroDto } from './dto/update-ejemplar-libro.dto';

@Controller('ejemplar-libros')
export class EjemplarLibrosController {
  constructor(private readonly ejemplarLibrosService: EjemplarLibrosService) {}

  @Post()
  create(@Body() createEjemplarLibroDto: CreateEjemplarLibroDto) {
    return this.ejemplarLibrosService.create(createEjemplarLibroDto);
  }

  @Get()
  findAll() {
    return this.ejemplarLibrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejemplarLibrosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEjemplarLibroDto: UpdateEjemplarLibroDto) {
    return this.ejemplarLibrosService.update(+id, updateEjemplarLibroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejemplarLibrosService.remove(+id);
  }
}
