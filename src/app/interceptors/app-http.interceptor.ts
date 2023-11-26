import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AppHttpInterceptor implements HttpInterceptor {
  token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mjc5MjgyMzksInVzZXJSb2xlcyI6WyJBRE1JTiIsIkRCX1JFQUQiLCJEQl9XUklURSJdLCJ1c2VySWQiOjEyMzQ1LCJpYXQiOjE2Mjc5MjgxMTl9.8vTwsBOp8LSa0sdc0nWAUnmWAAgOnS0ElB3bfaiSRfQ';
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + this.token),
      });
    }
    console.log(req);

    
    return next.handle(req);
  }
}
