import { Module } from '@nestjs/common';
import { EstanteService } from './estante.service';
import { EstanteController } from './estante.controller';
import { Estante } from './entities/estante.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BibliotecaModule } from '../biblioteca/biblioteca.module';

@Module({
  imports: [TypeOrmModule.forFeature([Estante]),BibliotecaModule],
  controllers: [EstanteController],
  providers: [EstanteService],
  exports: [TypeOrmModule]
})
export class EstanteModule {}
