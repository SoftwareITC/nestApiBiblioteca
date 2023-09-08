import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PruebaModule } from './prueba/prueba.module';
import { LugarModule } from './lugar/lugar.module';
import { LenguajeModule } from './lenguaje/lenguaje.module';
import { AutorModule } from './autor/autor.module';
import { EditorialModule } from './editorial/editorial.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { TemasModule } from './temas/temas.module';
import { FichaLibroModule } from './ficha-libro/ficha-libro.module';
import { CarreraModule } from './carrera/carrera.module';
import { AnalistaModule } from './analista/analista.module';
import { AccesibilidadModule } from './accesibilidad/accesibilidad.module';
import { EjemplarLibrosModule } from './ejemplar-libros/ejemplar-libros.module';
import { RecursoBibliograficoModule } from './recurso-bibliografico/recurso-bibliografico.module';
import { BibliotecaModule } from './biblioteca/biblioteca.module';
import { EstanteModule } from './estante/estante.module';
import { FichaTesisModule } from './ficha-tesis/ficha-tesis.module';
import * as morgan from 'morgan';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'alex',
      password: '747563616e',
      database: 'Biblioteca',
      entities: [],
      autoLoadEntities: true,
      synchronize: true}),
    PruebaModule,
    LugarModule,
    LenguajeModule,
    AutorModule,
    EditorialModule,
    ProveedorModule,
    TemasModule,
    FichaLibroModule,
    CarreraModule,
    AnalistaModule,
    AccesibilidadModule,
    EjemplarLibrosModule,
    RecursoBibliograficoModule,
    BibliotecaModule,
    EstanteModule,
    FichaTesisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(morgan('dev')).forRoutes('*');
  }
}
