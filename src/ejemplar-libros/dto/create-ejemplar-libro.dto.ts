import { IsBoolean, IsDate, IsDateString, IsNumber, IsString } from "class-validator";

export class CreateEjemplarLibroDto {

@IsNumber()
fichaLibro: number;

@IsNumber()
numeroEjemplar: number;

@IsNumber()
numeroVolumen: number;

@IsNumber()
numeroTomo: number;

@IsNumber()
accesibilidad: number;

@IsString()
proveedor: string;

@IsString()
tipoAdquisicion: string;

@IsString()
estante: string;

@IsString()
analista: string;

@IsDateString()
fechaRegistro: string;

@IsDateString()
fechaUltimaModificacion: string;


}
