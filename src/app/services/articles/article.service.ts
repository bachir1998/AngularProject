import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  Articles: Article[] = [];

  constructor(private httpClient : HttpClient){ }


    getTable(): Observable<Article[]> {
      const headers = new HttpHeaders().set('apikey', environment.api.key);
      return this.httpClient.get<Article[]>(environment.api.url + 'article', {
        headers: headers,
      });
    }

}
