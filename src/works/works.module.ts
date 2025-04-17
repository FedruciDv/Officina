import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { WorksService } from "./works.service";
import { WorksController } from "./works.controller";

@Module(
    {
        imports:[],
        providers:[PrismaService,WorksService],
        controllers:[WorksController]
    }
)

export class WorksModule{}