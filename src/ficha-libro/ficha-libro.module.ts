import { Module } from '@nestjs/common';
import { FichaLibroService } from './ficha-libro.service';
import { FichaLibroController } from './ficha-libro.controller';
import { FichaLibro } from './entities/ficha-libro.entity';
import { LugarModule } from 'src/lugar/lugar.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LenguajeModule } from 'src/lenguaje/lenguaje.module';
import { CarreraModule } from 'src/carrera/carrera.module';
import { EditorialModule } from 'src/editorial/editorial.module';
import { TemasModule } from 'src/temas/temas.module';

@Module({
  imports: [TypeOrmModule.forFeature([FichaLibro]),LugarModule,LenguajeModule,CarreraModule,EditorialModule,TemasModule],
  controllers: [FichaLibroController],
  providers: [FichaLibroService],
})
export class FichaLibroModule {}
