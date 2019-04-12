import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { config } from './config';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(url: string): Observable<any> {
    const token = localStorage.getItem('token')
    const endpoint = config.url + url;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: token,
        'X-TenantID': '1'
      })
    };
    return this.http.get(endpoint, httpOptions);
  }
}
