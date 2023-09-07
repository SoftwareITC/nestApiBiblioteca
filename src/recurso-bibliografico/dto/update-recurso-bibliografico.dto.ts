import { PartialType } from '@nestjs/mapped-types';
import { CreateRecursoBibliograficoDto } from './create-recurso-bibliografico.dto';

export class UpdateRecursoBibliograficoDto extends PartialType(CreateRecursoBibliograficoDto) {}
