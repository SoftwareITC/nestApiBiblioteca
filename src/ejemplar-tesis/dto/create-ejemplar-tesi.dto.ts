import { IsNumber, IsString, IsDateString } from "class-validator";

export class CreateEjemplarTesiDto {

    @IsNumber()
    fichaTesi: number;
    
    @IsNumber()
    numeroEjemplar: number;
    
    @IsNumber()
    numeroVolumen: number;
    
    @IsNumber()
    numeroTomo: number;
    
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
