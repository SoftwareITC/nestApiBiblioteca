import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LugarService } from './lugar.service';
import { CreateLugarDto } from './dto/create-lugar.dto';
import { UpdateLugarDto } from './dto/update-lugar.dto';

@Controller('lugar')
export class LugarController {
  constructor(private readonly lugarService: LugarService) {}

  @Post()
  create(@Body() createLugarDto: CreateLugarDto) {
    return this.lugarService.create(createLugarDto);
  }

  @Get()
  findAll() {
    return this.lugarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lugarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLugarDto: UpdateLugarDto) {
    return this.lugarService.update(+id, updateLugarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lugarService.remove(+id);
  }
}
