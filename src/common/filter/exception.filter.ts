import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
  import { Response } from 'express';
  
  
@Catch()
export class AllExceptionFilter implements ExceptionFilter {
catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    console.log(exception);
    
    if(exception instanceof Error){
      return response.status(500).json({ok:false,message:exception.message})
    }
    response.status(500).json({ok:false,message:"C'è stato un problema"})
    
}
}
