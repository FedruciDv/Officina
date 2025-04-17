import { Body, Controller, Get, Post } from "@nestjs/common";
import { PreventivesService } from "./preventives.service";
import { PreventiveDto } from "./dto/preventive.dto";
import { CreatePreventiveDto } from "./dto/create_preventive.dto";

@Controller("preventives")

export class PreventivesController{

    constructor(private preventives : PreventivesService){}

    @Get("/")
    async get(){
        return await this.preventives.findAll()
    }

    @Post("/create")
    async create(@Body() preventive : CreatePreventiveDto) : Promise<PreventiveDto>{
        return await this.preventives.create(preventive)
    }
}