import { Module } from '@nestjs/common';
import { EjemplarLibrosService } from './ejemplar-libros.service';
import { EjemplarLibrosController } from './ejemplar-libros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EjemplarLibro } from './entities/ejemplar-libro.entity';
import { AccesibilidadModule } from 'src/accesibilidad/accesibilidad.module';
import { ProveedorModule } from 'src/proveedor/proveedor.module';
import { AnalistaModule } from 'src/analista/analista.module';
import { EstanteModule } from 'src/estante/estante.module';
import { FichaLibroModule } from 'src/ficha-libro/ficha-libro.module';

@Module({
  imports: [TypeOrmModule.forFeature([EjemplarLibro]),AccesibilidadModule,ProveedorModule,AnalistaModule,EstanteModule,FichaLibroModule],
  controllers: [EjemplarLibrosController],
  providers: [EjemplarLibrosService],
  exports:[TypeOrmModule]
})
export class EjemplarLibrosModule {}
