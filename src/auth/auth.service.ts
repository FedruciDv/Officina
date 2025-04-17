import { Injectable } from "@nestjs/common";
import { SignInDTO } from "./dto/signin.dto";
import UserDTO from "src/users/dto/user.dto";
import { plainToInstance } from "class-transformer";
import { PrismaService } from "src/prisma/prisma.service";
const bcrypt=require("bcrypt")
@Injectable()
export class AuthService{

    constructor(private prisma : PrismaService){

    }

    async signin (user : SignInDTO) : Promise<UserDTO> {

        const exist=await this.prisma.user.findUnique({
            where:{
                email:user.email
            }
        })

        if (!exist){
            throw new Error("Utente e/o password errati")
        }
        
        const result= await bcrypt.compare(user.password,exist.password);

        if(!result){
            throw new Error("Utente e/o password errati")
        }

        return plainToInstance(UserDTO,exist, {excludeExtraneousValues:true})

    }

}