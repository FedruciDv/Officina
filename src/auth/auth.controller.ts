import { Body, Controller, Get, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInDTO } from "./dto/signin.dto";
import UserDTO from "src/users/dto/user.dto";
import { Response } from "express";
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


}