import { IsDate, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator"
import VehicleDTO from "src/vehicles/dto/vehicle.dto"

export class PreventiveDto{
    @IsNotEmpty()
    @IsString()
    id: string

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
    @IsDate()
    e_end_date : Date

    @IsNotEmpty()
    @IsString()
    additional_notes : string

    @IsNotEmpty()
    @IsString()
    type : string

    @IsNotEmpty()
    @IsDate()
    updated_at : Date

    @IsNotEmpty()
    @IsDate()
    created_at : Date

    @IsNotEmpty()
    @IsObject()
    vehicle : VehicleDTO

    @IsNotEmpty()
    @IsObject()
    @IsOptional()
    work? : object

}