import { Module } from '@nestjs/common';
import { AccesibilidadService } from './accesibilidad.service';
import { AccesibilidadController } from './accesibilidad.controller';
import { Accesibilidad } from './entities/accesibilidad.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Accesibilidad])],
  controllers: [AccesibilidadController],
  providers: [AccesibilidadService],
  exports: [TypeOrmModule]
})
export class AccesibilidadModule {}
