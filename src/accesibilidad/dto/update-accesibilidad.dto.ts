import { PartialType } from '@nestjs/mapped-types';
import { CreateAccesibilidadDto } from './create-accesibilidad.dto';

export class UpdateAccesibilidadDto extends PartialType(CreateAccesibilidadDto) {}
