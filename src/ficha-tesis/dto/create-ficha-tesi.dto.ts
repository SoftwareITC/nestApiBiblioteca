import { IsArray, IsDateString, IsString } from "class-validator";

export class CreateFichaTesiDto {

@IsDateString()
fechaPublicacion: string;

@IsString()
lugar: string;

@IsString()
lenguaje: string;

@IsString()
carrera: string;

@IsString()
cronologico: string;

@IsString()
clasificacionLocal: string;

@IsArray()
autores: string[];

@IsString()
titulo:string;

@IsString()
lugarEspecifico:string;

@IsString()
paginasDimensiones: string;

@IsString()
notaTesis:string;

@IsArray()
temas: string[];

}
