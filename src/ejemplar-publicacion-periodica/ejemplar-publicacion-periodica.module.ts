import { Module } from '@nestjs/common';
import { EjemplarPublicacionPeriodicaService } from './ejemplar-publicacion-periodica.service';
import { EjemplarPublicacionPeriodicaController } from './ejemplar-publicacion-periodica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EjemplarPublicacionPeriodica } from './entities/ejemplar-publicacion-periodica.entity';
import { AccesibilidadModule } from 'src/accesibilidad/accesibilidad.module';
import { AnalistaModule } from 'src/analista/analista.module';
import { EstanteModule } from 'src/estante/estante.module';
import { FichaPublicacionPeriodicaModule } from '../ficha-publicacion-periodica/ficha-publicacion-periodica.module';

@Module({
  imports: [TypeOrmModule.forFeature([EjemplarPublicacionPeriodica]),AccesibilidadModule,AnalistaModule,EstanteModule,FichaPublicacionPeriodicaModule],
  controllers: [EjemplarPublicacionPeriodicaController],
  providers: [EjemplarPublicacionPeriodicaService],
  exports: [TypeOrmModule]
})
export class EjemplarPublicacionPeriodicaModule {}
