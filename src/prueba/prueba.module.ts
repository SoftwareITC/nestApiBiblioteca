import { Module } from '@nestjs/common';
import { PruebaService } from './prueba.service';
import { PruebaController } from './prueba.controller';
import { Prueba } from './entities/prueba.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarrerasModule } from 'src/carreras/carreras.module';
import { CarrerasService } from 'src/carreras/carreras.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prueba]),CarrerasModule],
  controllers: [PruebaController],
  providers: [PruebaService,CarrerasService],
})
export class PruebaModule {}
