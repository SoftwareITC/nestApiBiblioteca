import { Module } from '@nestjs/common';
import { EditorialService } from './editorial.service';
import { EditorialController } from './editorial.controller';
import { Editorial } from './entities/editorial.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Editorial])],
  controllers: [EditorialController],
  providers: [EditorialService],
  exports: [TypeOrmModule]
})
export class EditorialModule {}
