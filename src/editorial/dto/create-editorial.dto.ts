import { IsNumber, IsOptional, IsString, Max,  MaxLength,  Min, MinLength } from "class-validator";

export class CreateEditorialDto {

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
