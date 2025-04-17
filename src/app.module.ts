import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UserServices } from './users/users.services';
import UsersModel from './users/users.module';
import VehicleModule from './vehicles/vehicles.module';
import { AuthModule } from './auth/auth.module';
import { PreventivesModule } from './preventives/preventives.module';
import { WorksModule } from './works/works.module';
@Module({
  imports: [UsersModel,VehicleModule,AuthModule,PreventivesModule,WorksModule],
  controllers: [AppController],
  providers: [AppService,PrismaService],
})
export class AppModule {}
