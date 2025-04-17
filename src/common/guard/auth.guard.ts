import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<Request>();
    const token: string = req.cookies?.jwt;

    if (!token) {
      throw new UnauthorizedException('Token mancante nei cookie');
    }

    try {
      const payload = AuthGuard.JwtVerify(token);
      req['user'] = payload;
      return true;
    } catch (err) {
      throw new UnauthorizedException('Token non valido o scaduto');
    }
  }

    static JwtVerify(token: string) {
    return jwt.verify(token, process.env.SECRET_KEY);
  }
}
