import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PruebaModule } from './prueba/prueba.module';
import { CarrerasModule } from './carreras/carreras.module';
import { LugarModule } from './lugar/lugar.module';
import { LenguajeModule } from './lenguaje/lenguaje.module';
import { AutorModule } from './autor/autor.module';
import { EditorialModule } from './editorial/editorial.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { TemasModule } from './temas/temas.module';
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
    CarrerasModule,
    LugarModule,
    LenguajeModule,
    AutorModule,
    EditorialModule,
    ProveedorModule,
    TemasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(morgan('dev')).forRoutes('*');
  }
}
