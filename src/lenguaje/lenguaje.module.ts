import { Module } from '@nestjs/common';
import { LenguajeService } from './lenguaje.service';
import { LenguajeController } from './lenguaje.controller';
import { Lenguaje } from './entities/lenguaje.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lenguaje])],
  controllers: [LenguajeController],
  providers: [LenguajeService],
  exports: [TypeOrmModule],
})
export class LenguajeModule {}
