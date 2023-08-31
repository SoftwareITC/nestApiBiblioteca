import { PartialType } from '@nestjs/mapped-types';
import { CreateFichaLibroDto } from './create-ficha-libro.dto';

export class UpdateFichaLibroDto extends PartialType(CreateFichaLibroDto) {}
