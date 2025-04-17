import { Module } from "@nestjs/common";
import { PreventivesService } from "./preventives.service";
import { PrismaService } from "src/prisma/prisma.service";
import { PreventivesController } from "./preventives.controller";


@Module(
    {
        controllers:[PreventivesController],
        imports:[],
        providers:[PreventivesService,PrismaService]
    }
)

export class PreventivesModule{}