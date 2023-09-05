import { IsBoolean, IsString } from "class-validator";

export class CreateAnalistaDto {

@IsBoolean()
esAdmin: boolean

@IsString()
nombre: string

@IsString()
nombreUsuario: string

@IsString()
contrasena: string

}
