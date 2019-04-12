import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(form): Observable<any> {
    const url = 'https://api-dev-globalspeller.azurewebsites.net/auth';
    return this.http.post(url, form);
  }
}
