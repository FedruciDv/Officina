import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UserServices } from "./users.services";
import { UsersController } from "./users.controllers";

@Module({
    controllers:[UsersController],
    imports:[],
    providers:[PrismaService,UserServices]
})

export default class UsersModel{}