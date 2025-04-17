import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { WorkDTO } from "./dto/work.dto";
import { plainToInstance } from "class-transformer";
import { CreateWorkDTO } from "./dto/create_work.dto";
import { FilterWorkDTO } from "./dto/filter.dto";

@Injectable()
export class WorksService{

    constructor( private prisma : PrismaService){}

    async findAll(filter : FilterWorkDTO) : Promise<WorkDTO[]>{
        const filters={
            id:filter?.id,
            preventive:{
                id:filter.idPreventive,
                idVehicle:filter?.idVehicle 
            }
        }
        
        try{
            const works= await this.prisma.work.findMany({
                include:{
                    preventive:true,
                },
                where:{
                    ...filters
                }
            })

            return plainToInstance(WorkDTO, works)
        }catch(error){
            throw new Error("C'è stato un problema")
        }
    }

    async create( work : CreateWorkDTO) : Promise<WorkDTO>
    {   
        try{
            const result=await this.prisma.work.create({
                data:{
                    ...work
                },
                include:{
                    preventive:true
                }
            })
            return plainToInstance(WorkDTO,result)
        }catch(error){
            throw new Error("C'è stato un problema")
        }
    }

}