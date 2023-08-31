import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FichaLibroService } from './ficha-libro.service';
import { CreateFichaLibroDto } from './dto/create-ficha-libro.dto';
import { UpdateFichaLibroDto } from './dto/update-ficha-libro.dto';

@Controller('ficha-libro')
export class FichaLibroController {
  constructor(private readonly fichaLibroService: FichaLibroService) {}

  @Post()
  create(@Body() createFichaLibroDto: CreateFichaLibroDto) {
    return this.fichaLibroService.create(createFichaLibroDto);
  }

  @Get()
  findAll() {
    return this.fichaLibroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fichaLibroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFichaLibroDto: UpdateFichaLibroDto) {
    return this.fichaLibroService.update(+id, updateFichaLibroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichaLibroService.remove(+id);
  }
}
