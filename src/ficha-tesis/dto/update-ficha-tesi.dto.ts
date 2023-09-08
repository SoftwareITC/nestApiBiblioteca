import { PartialType } from '@nestjs/mapped-types';
import { CreateFichaTesiDto } from './create-ficha-tesi.dto';

export class UpdateFichaTesiDto extends PartialType(CreateFichaTesiDto) {}
