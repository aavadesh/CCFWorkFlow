import { AuthService } from './auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
export const InterceptorSkipHeader = 'X-Skip-Interceptor';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    if(req.headers.has(InterceptorSkipHeader)){
      const headers = req.headers.delete(InterceptorSkipHeader);
      return next.handle(req.clone({ headers }));
    }
    const authToken = this.auth.getAuthorizationToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const headers = new HttpHeaders({
      'Authorization': authToken
    });
    const authReq = req.clone({headers});

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}