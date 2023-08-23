import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class CreatePruebaDto {

    @IsString()
    nombre: string;
  
    @IsInt()
    @IsPositive()
    edad: number;
  
    @IsString()
    matricula: string;
    
    @IsString()
    @IsOptional()
    carrera: string;

}
