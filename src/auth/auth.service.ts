import { Injectable } from "@nestjs/common";
import { SignInDTO } from "./dto/signin.dto";
import UserDTO from "src/users/dto/user.dto";
import { plainToInstance } from "class-transformer";
import { PrismaService } from "src/prisma/prisma.service";
import { SignUpDTO } from "./dto/signup.dto";
import { AuthGuard } from "src/common/guard/auth.guard";
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

    async signup (user : SignUpDTO) : Promise<UserDTO> {
        const exist=await this.prisma.user.findUnique({
            where:{
                email:user.email
            },
            omit:{
                password:true
            }
        })

        if (exist){
            throw new Error("Email gia esistente")
        }
        try{
            user.password=await bcrypt.hash(user.password,10);
            
            const result = await this.prisma.user.create({
                data:{
                    ...user
                },
                omit:{
                    password:true
                }
            })
    
            return plainToInstance(UserDTO,result, {excludeExtraneousValues:true})
        }catch(error){
            throw new Error("C'è stato un problema")
        }
    }

}