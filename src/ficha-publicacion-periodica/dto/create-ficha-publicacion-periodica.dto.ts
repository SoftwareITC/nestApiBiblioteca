import { IsArray, IsDateString, IsString } from "class-validator"

export class CreateFichaPublicacionPeriodicaDto {

    @IsString()
    lugar: string

    @IsString()
    lenguaje: string

    @IsString()
    tipoPublicacion: string

    @IsString()
    carrera: string

    @IsString()
    proveedor: string

    @IsString()
    editorial: string

    @IsString()
    periodicidad: string;

    @IsString()
    tipoAdquisicion: string;

    @IsString()
    suscripcion: string;

    @IsDateString()
    fechaSuscripcion: string;

    @IsString()
    titulo: string;

    @IsString()
    pieImprenta: string;

    @IsString()
    descripcionFisica: string;

    @IsArray()
    temas: string[]

    @IsString()
    acervo: string;

}
