import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnalistaService } from './analista.service';
import { CreateAnalistaDto } from './dto/create-analista.dto';
import { UpdateAnalistaDto } from './dto/update-analista.dto';
import { RenewPassword } from './dto/renewPassword.dto';

@Controller('analista')
export class AnalistaController {
  constructor(private readonly analistaService: AnalistaService) {}

  @Post()
  create(@Body() createAnalistaDto: CreateAnalistaDto) {
    return this.analistaService.create(createAnalistaDto);
  }

  @Get()
  findAll() {
    return this.analistaService.findAll();
  }

  @Get(':id')
  findOneId(@Param('id') id: string) {
    return this.analistaService.findOneId(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnalistaDto: UpdateAnalistaDto) {
    return this.analistaService.update(+id, updateAnalistaDto);
  }

  @Patch('/renew-password/:id')
  updatePassword(@Param('id') id: string, @Body() renewPassword: RenewPassword) {
    return this.analistaService.updatePassword(+id, renewPassword);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.analistaService.remove(+id);
  }
}
