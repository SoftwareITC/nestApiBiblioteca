import { IsString } from "class-validator";

export class CreateEstanteDto {

@IsString()
nombre: string;

@IsString()
biblioteca: string;

}
