import { IsString, MinLength } from "class-validator";

export class CreateCarreraDto {

    @IsString()
    nombre: string;

}
