import { IsString, isNumber } from "class-validator";

export class RenewPassword {
    
    id: number

    @IsString()
    contrasena: string

  


}
