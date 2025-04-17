import { IsDate, IsISO8601, IsNotEmpty, IsObject, IsOptional, IsString, IsUUID } from "class-validator"




export class CreateWorkDTO{

    
        @IsUUID()
        @IsNotEmpty()
        idPreventive : string
    
        @IsUUID()
        @IsOptional()
        idWorkType : string
        
        @IsNotEmpty()
        @IsISO8601()
        start_date : Date

        @IsNotEmpty()
        @IsISO8601()
        end_date : Date
    
        @IsNotEmpty()
        @IsString()
        status : string
    
        @IsString()
        @IsNotEmpty()
        additional_notes : string
}