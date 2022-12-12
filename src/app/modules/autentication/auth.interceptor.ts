import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = window.localStorage.getItem("token");

    if (token) {
      const authRequest = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });

      return next.handle(authRequest);
    }

    return next.handle(req);
  }
}
