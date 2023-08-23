import { IsString } from "class-validator";

export class CreateLugarDto {

    @IsString()
    nombre: string;

    @IsString()
    codigo: string;

}
