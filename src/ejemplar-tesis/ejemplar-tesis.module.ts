import { Module } from '@nestjs/common';
import { EjemplarTesisService } from './ejemplar-tesis.service';
import { EjemplarTesisController } from './ejemplar-tesis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccesibilidadModule } from 'src/accesibilidad/accesibilidad.module';
import { AnalistaModule } from 'src/analista/analista.module';
import { EstanteModule } from 'src/estante/estante.module';
import { EjemplarTesi } from './entities/ejemplar-tesi.entity';
import { FichaTesisModule } from 'src/ficha-tesis/ficha-tesis.module';

@Module({
  imports: [TypeOrmModule.forFeature([EjemplarTesi]),AccesibilidadModule,AnalistaModule,EstanteModule,FichaTesisModule],
  controllers: [EjemplarTesisController],
  providers: [EjemplarTesisService],
  exports: [TypeOrmModule]
})
export class EjemplarTesisModule {}
