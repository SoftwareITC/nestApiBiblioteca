import { Module } from '@nestjs/common';
import { TemasService } from './temas.service';
import { TemasController } from './temas.controller';
import { Tema } from './entities/tema.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  controllers: [TemasController],
  providers: [TemasService],
  exports: [TypeOrmModule]
})
export class TemasModule {}
