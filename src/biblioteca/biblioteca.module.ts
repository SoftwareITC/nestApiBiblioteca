import { Module } from '@nestjs/common';
import { BibliotecaService } from './biblioteca.service';
import { BibliotecaController } from './biblioteca.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Biblioteca } from './entities/biblioteca.entity';
import { RecursoBibliograficoModule } from 'src/recurso-bibliografico/recurso-bibliografico.module';

@Module({
  imports: [TypeOrmModule.forFeature([Biblioteca]),RecursoBibliograficoModule],
  controllers: [BibliotecaController],
  providers: [BibliotecaService],
  exports: [TypeOrmModule]
})
export class BibliotecaModule {}
