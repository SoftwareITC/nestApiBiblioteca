import { PartialType } from '@nestjs/mapped-types';
import { CreateAnalistaDto } from './create-analista.dto';

export class UpdateAnalistaDto extends PartialType(CreateAnalistaDto) {}
