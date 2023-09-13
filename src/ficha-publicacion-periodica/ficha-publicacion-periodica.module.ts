import { Module } from '@nestjs/common';
import { FichaPublicacionPeriodicaService } from './ficha-publicacion-periodica.service';
import { FichaPublicacionPeriodicaController } from './ficha-publicacion-periodica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FichaPublicacionPeriodica } from './entities/ficha-publicacion-periodica.entity';
import { AutorModule } from 'src/autor/autor.module';
import { CarreraModule } from 'src/carrera/carrera.module';
import { EditorialModule } from 'src/editorial/editorial.module';
import { LenguajeModule } from 'src/lenguaje/lenguaje.module';
import { LugarModule } from 'src/lugar/lugar.module';
import { TemasModule } from 'src/temas/temas.module';
import { ProveedorModule } from 'src/proveedor/proveedor.module';

@Module({
  imports: [TypeOrmModule.forFeature([FichaPublicacionPeriodica]),LugarModule,LenguajeModule,CarreraModule,ProveedorModule,EditorialModule,TemasModule],
  controllers: [FichaPublicacionPeriodicaController],
  providers: [FichaPublicacionPeriodicaService],
  exports: [TypeOrmModule]
})
export class FichaPublicacionPeriodicaModule {}
