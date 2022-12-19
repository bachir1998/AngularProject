import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, map, of } from 'rxjs';

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

  isLoggedIn():Observable<boolean>{

    const headers = new HttpHeaders().set('apikey', environment.api.key).set("Authorization","Bearer "+localStorage.getItem("token"));
    return this.httpClient.get(
           environment.api.urlAuth+'user',{"headers": headers}
        ).pipe(
          //Transformation de la valeur
          map(
            (dataUser: any)=>{
              return true;
            }
          ),
          catchError(
            (error: any)=>{
              return of (false);
            }
          )

        )

  }

  isLogout(){
    localStorage.removeItem("token");
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
