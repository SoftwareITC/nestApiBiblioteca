import { Module } from '@nestjs/common';
import { FichaTesisService } from './ficha-tesis.service';
import { FichaTesisController } from './ficha-tesis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaTesi } from './entities/ficha-tesi.entity';
import { LugarModule } from 'src/lugar/lugar.module';
import { LenguajeModule } from 'src/lenguaje/lenguaje.module';
import { CarreraModule } from 'src/carrera/carrera.module';
import { TemasModule } from 'src/temas/temas.module';
import { AutorModule } from 'src/autor/autor.module';

@Module({
  imports: [TypeOrmModule.forFeature([FichaTesi]),LugarModule,LenguajeModule,CarreraModule,TemasModule,AutorModule],
  controllers: [FichaTesisController],
  providers: [FichaTesisService],
  exports: [TypeOrmModule]
})
export class FichaTesisModule {}
