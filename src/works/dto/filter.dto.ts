import { IsOptional, IsUUID, isUUID } from "class-validator";

export class FilterWorkDTO{
    @IsUUID()
    @IsOptional()
    id: string

    @IsUUID()
    @IsOptional()
    idPreventive: string

    @IsUUID()
    @IsOptional()
    idVehicle : string

}