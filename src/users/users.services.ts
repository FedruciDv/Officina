import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User, UserDb } from "./entities/user.entity";
import { plainToInstance } from "class-transformer";
import UserDTO from "./dto/user.dto";
import CreateUserDTO from "./dto/create_user.dto";
const bcrypt=require("bcrypt");
@Injectable()
export class UserServices{

    constructor(private prisma : PrismaService){}

    async findAll() : Promise<UserDTO[]> {
        const result= await this.prisma.user.findMany({include:{vehicles:{omit:{userId:true},include:{preventives:{include:{work:true}}}}}});        
        return plainToInstance(UserDTO,result,{excludeExtraneousValues:true})
    }

    async create(user : CreateUserDTO) : Promise<UserDTO> {
        const exist= await this.prisma.user.findUnique({where:{email:user.email}})
        if (exist){
            throw new Error("Email gia in uso!")
        }
        user.password=await bcrypt.hash(user.password,10);
        const result= await this.prisma.user.create({data:{...user},omit:{password:true}});
        return plainToInstance(UserDTO,result,{excludeExtraneousValues:true})
    }



 }