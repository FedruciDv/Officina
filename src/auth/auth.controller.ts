import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDTO } from "./dto/signin.dto";
import UserDTO from "src/users/dto/user.dto";
import { Response } from "express";
import { SignUpDTO } from "./dto/signup.dto";
import { AuthGuard } from "src/common/guard/auth.guard";
var jwt = require('jsonwebtoken');

@Controller("auth")
export class AuthController{


    constructor(private auth : AuthService){
        
    }
    @Post("/signin")
    async signin(@Body() user:SignInDTO, @Res({passthrough:true}) res: Response): Promise<UserDTO>
    {
        const result = await this.auth.signin(user); 
        const token=jwt.sign({user:result.email},process.env.SECRET_KEY);
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60
          });

          return result
    }
    @Post("/signup")
    async signup(@Body() user:SignUpDTO, @Res({passthrough:true}) res: Response): Promise<UserDTO>
    {
        const result = await this.auth.signup(user); 
        const token=jwt.sign({user:result.email},process.env.SECRET_KEY);
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60
          });

          return result
    }

    @Get("/")
    @UseGuards(AuthGuard)
    async getSession(@Req() req: Request) : Promise<object>
    {
        return req["user"]
    }

}