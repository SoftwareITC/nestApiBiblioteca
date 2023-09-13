import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator"
import { CreateAnalistaDto } from "./create-analista.dto"
import { PartialType } from "@nestjs/mapped-types"

export class UpdateAnalistaDto extends PartialType(CreateAnalistaDto) {

    @IsOptional()
    @IsBoolean()
    isActivo: boolean
    
    }
    