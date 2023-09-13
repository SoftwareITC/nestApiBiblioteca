import { PartialType } from '@nestjs/mapped-types';
import { CreateEjemplarPublicacionPeriodicaDto } from './create-ejemplar-publicacion-periodica.dto';

export class UpdateEjemplarPublicacionPeriodicaDto extends PartialType(CreateEjemplarPublicacionPeriodicaDto) {}
