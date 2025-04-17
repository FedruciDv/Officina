import { IsDate, IsISO8601, IsNotEmpty, IsObject, IsOptional, IsString, IsUUID } from "class-validator";
import { UUID } from "crypto";
import { PreventiveDto } from "src/preventives/dto/preventive.dto";

export class WorkDTO{

    @IsNotEmpty()
    @IsUUID()
    id : string

    @IsUUID()
    @IsNotEmpty()
    idPreventive : string

    @IsUUID()
    idWorkType : string

    @IsNotEmpty()
    @IsDate()
    start_date : Date

    @IsNotEmpty()
    @IsDate()
    end_date : Date

    @IsNotEmpty()
    @IsString()
    status : string

    @IsString()
    @IsNotEmpty()
    additional_notes : string

    @IsDate()
    @IsNotEmpty()
    updated_at : Date

    @IsDate()
    @IsNotEmpty()
    created_at : Date
  
    @IsNotEmpty()
    @IsObject()
    preventive : PreventiveDto

    @IsObject()
    worktype : object



}