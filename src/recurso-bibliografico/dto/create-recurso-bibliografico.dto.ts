import { IsString } from "class-validator";

export class CreateRecursoBibliograficoDto {

@IsString()
nombre: string;

}
