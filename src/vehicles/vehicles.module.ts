import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { VehiclesController } from "./vehicles.controllers";
import { VehiclesService } from "./vehicles.services";

@Module({
    controllers:[VehiclesController],
    imports:[],
    providers:[PrismaService,VehiclesService]
})

export default class VehicleModule{}