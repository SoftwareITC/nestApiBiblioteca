import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FichaTesisService } from './ficha-tesis.service';
import { CreateFichaTesiDto } from './dto/create-ficha-tesi.dto';
import { UpdateFichaTesiDto } from './dto/update-ficha-tesi.dto';

@Controller('ficha-tesis')
export class FichaTesisController {
  constructor(private readonly fichaTesisService: FichaTesisService) {}

  @Post()
  create(@Body() createFichaTesiDto: CreateFichaTesiDto) {
    return this.fichaTesisService.create(createFichaTesiDto);
  }

  @Get()
  findAll() {
    return this.fichaTesisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fichaTesisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFichaTesiDto: UpdateFichaTesiDto) {
    return this.fichaTesisService.update(+id, updateFichaTesiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichaTesisService.remove(+id);
  }
}
