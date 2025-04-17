import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PreventiveDto } from "./dto/preventive.dto";
import { CreatePreventiveDto } from "./dto/create_preventive.dto";
import { plainToInstance } from "class-transformer";

@Injectable()

export class PreventivesService{

    constructor(private prisma : PrismaService){}

    async findAll() : Promise<PreventiveDto[]>{
        try{
            const preventive= await this.prisma.preventive.findMany({include:{vehicle:true}});
            return plainToInstance(PreventiveDto, preventive);
        }
        catch(err){
            throw new Error("C'è stato un problema")
        }

    }

    async create(preventive : CreatePreventiveDto) : Promise<PreventiveDto>{
        try{
            const result= await this.prisma.preventive.create({
                data:{
                    ...preventive
                },
                include:{
                    vehicle:true
                }
            });
            return plainToInstance(PreventiveDto, result);
        }
        catch(err){
            throw new Error("C'è stato un problema")
        }
    }

}