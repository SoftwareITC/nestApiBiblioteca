import { Module } from '@nestjs/common';
import { RecursoBibliograficoService } from './recurso-bibliografico.service';
import { RecursoBibliograficoController } from './recurso-bibliografico.controller';
import { RecursoBibliografico } from './entities/recurso-bibliografico.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RecursoBibliografico])],
  controllers: [RecursoBibliograficoController],
  providers: [RecursoBibliograficoService],
  exports: [TypeOrmModule]
})
export class RecursoBibliograficoModule {}
