import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Article } from 'src/app/models/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  Articles: Article[] = [];

  constructor(private httpClient : HttpClient){ }


    getArticles(): Observable<Article[]> {
      const headers = new HttpHeaders().set('apikey', environment.api.key);
      return this.httpClient.get<Article[]>(environment.api.url + 'article', {
        headers: headers,
      });
    }

    getArticleID(id:number): Observable<Article[]>{
      const headers = new HttpHeaders().set('apikey', environment.api.key);
      return this.httpClient.get<Article[]>(environment.api.url + 'article?id=eq.'+id, {
        headers: headers,
      });

    }

    addArticle(credentials: {name?: string | null | undefined, description?: string | null | undefined,categorie?: string | null | undefined,url?: string | null | undefined}): Observable<Article> {
      const headers = new HttpHeaders().set('apikey', environment.api.key);
      return this.httpClient.post<Article>(environment.api.url + 'article', credentials, {headers: headers})
    }

    updateArticle(id:number|null|undefined,credentials: {name?: string | null | undefined, description?: string | null | undefined,categorie?: string | null | undefined,url?: string | null | undefined}): Observable<Article> {
      const headers = new HttpHeaders().set('apikey', environment.api.key);
      return this.httpClient.patch<Article>(environment.api.url + 'article?id=eq.'+id,credentials, {headers: headers})
    }

    deleteArticle(id:number): Observable<Article>{
      const headers = new HttpHeaders().set('apikey', environment.api.key);
      return this.httpClient.delete<Article>(environment.api.url + 'article?id=eq.'+id, {
        headers: headers,
      });

    }

}
