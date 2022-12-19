import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private LoggedIn : boolean = false;

  constructor(private httpClient : HttpClient) { }

  login(credentials: {email ?: string | null | undefined, password?: string | null | undefined}): Observable<any>{
    const headers = new HttpHeaders().set('apikey', environment.api.key);
    return this.httpClient.post(
      environment.api.urlAuth+'token?grant_type=password',
        credentials,{ "headers" : headers}
    )
  }

  signup(credentials: {email: string | null | undefined, password: string | null | undefined }): Observable<any>{
    return this.httpClient.post(
      environment.api.urlAuth+'signup',
        credentials
    )
  }

  setLogin(){
    this.LoggedIn=true;
  }

  getLogin(){
    return this.LoggedIn;
  }

}
