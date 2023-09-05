import { IsString } from "class-validator";

export class CreateAccesibilidadDto {

@IsString()
descripcion: string;

}
