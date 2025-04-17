
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(next.handle());
    
    return next
      .handle()
      .pipe(
        map((data)=> {
            return {
                ok:true,
                data
            }
        }) 
      );
  }
}
