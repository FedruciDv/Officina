import { Body, Controller, Get, HttpException, Post, UseGuards } from "@nestjs/common";
import { UserServices } from "./users.services";
import { User, UserDb } from "./entities/user.entity";
import UserDTO from "./dto/user.dto";
import CreateUserDTO from "./dto/create_user.dto";
import { AuthGuard } from "src/common/guard/auth.guard";
@UseGuards(AuthGuard)
@Controller("users")
export class UsersController{
    constructor(private user : UserServices){}
    @Get("/")
    async getAll() : Promise<UserDTO[]>{
        return await this.user.findAll()
    }

    @Post("/create")
    async create(@Body() user : CreateUserDTO) : Promise<User>{
            return await this.user.create(user)
    }   

    

}