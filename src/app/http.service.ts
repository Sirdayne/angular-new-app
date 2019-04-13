import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { config } from './config';
import { AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.auth.getToken(),
      'X-TenantID': this.auth.getTenant(),
    })
  };

  constructor(private http: HttpClient, private auth: AuthService) { }

  public post(form): Observable<any> {
    const url = config.url + 'auth';
    return this.http.post(url, form);
  }

  public get(url: string): Observable<any> {
    const endpoint = config.url + url;
    return this.http.get(endpoint);
  }
}
