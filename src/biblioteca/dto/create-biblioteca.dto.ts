import { IsString } from "class-validator";
import { RecursoBibliografico } from '../../recurso-bibliografico/entities/recurso-bibliografico.entity';

export class CreateBibliotecaDto {

@IsString()
nombre: string;

@IsString()
abreviacion: string;

@IsString()
recursoBibliografico: string;

@IsString()
administrador: string;

}
