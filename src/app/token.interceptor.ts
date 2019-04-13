import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from './auth.service';

import { Observable } from 'rxjs';
import { config } from './config';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authEndpoint = config.url + 'auth';
    if (this.auth.getToken() && this.auth.getTenant() && request.url !== authEndpoint) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`,
          'X-TenantID': this.auth.getTenant()
        }
      });
    };

    return next.handle(request);
  }
}
