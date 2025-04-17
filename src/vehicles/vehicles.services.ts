import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { plainToInstance } from "class-transformer";
import VehicleDTO from "./dto/vehicle.dto";
import CreateVehicleDTO from "./dto/create_vehicle.dto";
import EditVehicleDTO from "./dto/edit_vehicle.dto";

@Injectable()
export class VehiclesService{


    constructor(private prisma : PrismaService){

    }

    async findAll() : Promise<VehicleDTO[]> {
        try{
            const result= await this.prisma.vehicle.findMany(
                {
                    include:{preventives:true}
                });
            return plainToInstance(VehicleDTO,result,{excludeExtraneousValues:true})
        }
        catch(error){
            throw new Error("C'è stato un problema")
        }
    }

    async create(vehicle : CreateVehicleDTO) : Promise<VehicleDTO> {
        try{
            const exist= await this.prisma.vehicle.findUnique({
                where:{
                    plate:vehicle.plate
                }
            })
            if (exist){
                throw new Error("Targa gia in uso!")
            }
            const result= await this.prisma.vehicle.create({data:{...vehicle}});
            return plainToInstance(VehicleDTO,result,{excludeExtraneousValues:true})
        }
        catch(error){
            throw new Error("C'è stato un problema")
        }
    }

    async edit(vehicle : EditVehicleDTO) : Promise<VehicleDTO> {
        try{
            const result= await this.prisma.vehicle.update({
                where:{
                    id:vehicle.id
                },
                data:{
                    ...vehicle
                }
            })
            return plainToInstance(VehicleDTO,result,{excludeExtraneousValues:true})
        }
        catch(error){
            throw new Error("C'è stato un problema")
        }
    }

 }