import { PartialType } from '@nestjs/mapped-types';
import { CreateFichaPublicacionPeriodicaDto } from './create-ficha-publicacion-periodica.dto';

export class UpdateFichaPublicacionPeriodicaDto extends PartialType(CreateFichaPublicacionPeriodicaDto) {}
