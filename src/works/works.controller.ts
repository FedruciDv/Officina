import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { WorksService } from "./works.service";
import { WorkDTO } from "./dto/work.dto";
import { CreateWorkDTO } from "./dto/create_work.dto";
import { FilterWorkDTO } from "./dto/filter.dto";

@Controller("works")
export class WorksController{

    constructor(private works : WorksService){}
    @Get("/")
    async get(@Query() filter : FilterWorkDTO) : Promise<WorkDTO[]>{
        return await this.works.findAll(filter)
    }

    @Post("/create")
    async create(@Body() work : CreateWorkDTO) : Promise<WorkDTO>
    {
        return await this.works.create(work)
    }
}