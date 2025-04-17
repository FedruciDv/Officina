import { IsDate, IsISO8601, isNotEmpty, IsNotEmpty, IsNumber, IsObject, IsString } from "class-validator"

export class CreatePreventiveDto{
    @IsNotEmpty()
    @IsString()
    idVehicle : string

    @IsNotEmpty()
    @IsString()
    description : string

    @IsNotEmpty()
    @IsNumber()
    cost : number


    @IsNotEmpty()
    @IsNumber()
    discount : number

    @IsNotEmpty()
    @IsISO8601()
    e_end_date : Date;

    @IsNotEmpty()
    @IsString()
    additional_notes : string

    @IsNotEmpty()
    @IsString()
    type : string

}