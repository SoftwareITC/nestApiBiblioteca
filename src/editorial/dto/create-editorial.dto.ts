import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateEditorialDto {

    @IsString()
    nombre: string;

    @IsOptional()
    direccion: string;

    @IsOptional()
    @IsNumber()
    telefono: number;

    @IsOptional()
    email: string;


}
