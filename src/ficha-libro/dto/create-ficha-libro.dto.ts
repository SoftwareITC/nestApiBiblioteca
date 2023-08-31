import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateFichaLibroDto {

    @IsNumber()
    anioPublicacion:number

    @IsString()
    lugar: string

    @IsString()
    lenguaje: string

    @IsString()
    nivelIntelectual: string

    @IsString()
    carrera: string

    @IsString()
    isbn:string

    @IsString()
    clasificacionLs:string

    @IsString()
    titulo:string

    @IsString()
    edicion:string

    @IsString()
    editorial:string

    @IsString()
    paginasdimensiones: string

    @IsArray()
    temas: string[]

}
