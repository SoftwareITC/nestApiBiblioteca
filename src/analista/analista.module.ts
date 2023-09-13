import { Module } from '@nestjs/common';
import { AnalistaService } from './analista.service';
import { AnalistaController } from './analista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Analista } from './entities/analista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Analista])],
  controllers: [AnalistaController],
  providers: [AnalistaService],
  exports: [TypeOrmModule, AnalistaService]
})
export class AnalistaModule {}
