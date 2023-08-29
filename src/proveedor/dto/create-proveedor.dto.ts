import { IsString, IsOptional, MaxLength, MinLength } from "class-validator";

export class CreateProveedorDto {

    @IsString()
    nombre: string;

    @IsOptional()
    @IsString()
    direccion: string;
    
    @IsOptional()
    @IsString()
    @MaxLength(10)
    @MinLength(10)
    telefono: number;

    @IsOptional()
    @IsString()
    email: string;

}
