import { Module } from '@nestjs/common';
import { PruebaService } from './prueba.service';
import { PruebaController } from './prueba.controller';
import { Prueba } from './entities/prueba.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarreraModule } from 'src/carrera/carrera.module';
import { CarreraService } from 'src/carrera/carrera.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prueba]),CarreraModule],
  controllers: [PruebaController],
  providers: [PruebaService,CarreraService],
})
export class PruebaModule {}
