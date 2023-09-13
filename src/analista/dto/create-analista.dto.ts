import { Transform } from "class-transformer";
import { IsBoolean, IsString } from "class-validator";

export class CreateAnalistaDto {

@IsBoolean()
esAdmin: boolean

@Transform(({value}) => value.trim())
@IsString()
nombre: string

@Transform(({value}) => value.trim())
@IsString()
nombreUsuario: string


@Transform(({value}) => value.trim())
@IsString()
contrasena: string


}
