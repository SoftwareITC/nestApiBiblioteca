import { PartialType } from '@nestjs/mapped-types';
import { CreateEjemplarTesiDto } from './create-ejemplar-tesi.dto';

export class UpdateEjemplarTesiDto extends PartialType(CreateEjemplarTesiDto) {}
