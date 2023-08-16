import {IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    Nombre: string;

    @IsNotEmpty()
    EsAdmin: string;

    @IsNotEmpty()
    NombreUsuario: string;

    @IsNotEmpty()
    Contrasena: string;
}