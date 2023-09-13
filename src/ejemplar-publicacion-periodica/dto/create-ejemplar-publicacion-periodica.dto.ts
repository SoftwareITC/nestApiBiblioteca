import { IsDateString, IsNumber, IsString } from "class-validator";

export class CreateEjemplarPublicacionPeriodicaDto {

    @IsNumber()
    fichaPublicacionPeriodica: number;

    @IsString()
    tituloEdicion: string;

    @IsNumber()
    numeroEjemplar: number;

    @IsDateString()
    fechaPublicacion:string;

    @IsNumber()
    numeroVolumen: number;

    @IsNumber()
    numero: number;

    @IsNumber()
    numeroCopia: number;

    @IsString()
    notaCopia: string;

    @IsNumber()
    accesibilidad: number;

    @IsString()
    estante: string;
    
    @IsString()
    analista: string;
    
    @IsDateString()
    fechaRegistro: string;
    
    @IsDateString()
    fechaUltimaModificacion: string;

}
