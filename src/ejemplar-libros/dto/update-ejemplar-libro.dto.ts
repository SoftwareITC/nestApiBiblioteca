import { PartialType } from '@nestjs/mapped-types';
import { CreateEjemplarLibroDto } from './create-ejemplar-libro.dto';

export class UpdateEjemplarLibroDto extends PartialType(CreateEjemplarLibroDto) {}
