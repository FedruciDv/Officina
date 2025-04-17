import { Body, Controller, Get, Post } from "@nestjs/common";
import { WorksService } from "./works.service";
import { WorkDTO } from "./dto/work.dto";
import { CreateWorkDTO } from "./dto/create_work.dto";

@Controller("works")
export class WorksController{

    constructor(private works : WorksService){}
    @Get("/")
    async get() : Promise<WorkDTO[]>{
        return await this.works.findAll()
    }

    @Post("/create")
    async create(@Body() work : CreateWorkDTO) : Promise<WorkDTO>
    {
        return await this.works.create(work)
    }
}