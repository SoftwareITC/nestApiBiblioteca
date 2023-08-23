import { IsString } from "class-validator";

export class CreateLenguajeDto {

    @IsString()
    nombre: string;

    @IsString()
    codigo: string;

}
