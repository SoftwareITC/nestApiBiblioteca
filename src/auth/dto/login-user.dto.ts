import { Transform } from "class-transformer";
import { IsString } from "class-validator";

export class LoginUserDto {
    @Transform(({value}) => value.trim())
    @IsString()
    nombreUsuario: string;

    @Transform(({value}) => value.trim())
    @IsString()
    contrasena: string;


}