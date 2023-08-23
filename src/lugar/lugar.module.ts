import { Module } from '@nestjs/common';
import { LugarService } from './lugar.service';
import { LugarController } from './lugar.controller';
import { Lugar } from './entities/lugar.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lugar])],
  controllers: [LugarController],
  providers: [LugarService],
  exports: [TypeOrmModule]
})
export class LugarModule {}
