import { Body, Controller, Get, HttpException, Post, UseGuards } from "@nestjs/common";
import { VehiclesService } from "./vehicles.services";
import VehicleDTO from "./dto/vehicle.dto";
import CreateVehicleDTO from "./dto/create_vehicle.dto";
import EditVehicleDTO from "./dto/edit_vehicle.dto";
import { AuthGuard } from "src/common/guard/auth.guard";

@UseGuards(AuthGuard)
@Controller("vehicles")
export class VehiclesController{
    constructor(private vehicles : VehiclesService){}
    @Get("/")
    async getAll() : Promise<VehicleDTO[]>{
        return await this.vehicles.findAll()
    }

    @Post("/create")
    async create(@Body() vehicle : CreateVehicleDTO) : Promise<VehicleDTO>{
            return await this.vehicles.create(vehicle)
    }   

    @Post("/edit")
    async edit(@Body() vehicle : EditVehicleDTO) : Promise<VehicleDTO>{
            return await this.vehicles.edit(vehicle)
    } 

}