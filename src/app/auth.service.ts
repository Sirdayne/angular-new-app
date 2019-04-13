import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public getToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return token;
    }
    return null;
  }

  public getTenant() {
    const tenant = localStorage.getItem('tenant');
    if (tenant) {
      return tenant;
    }
    return null;
  }
}
