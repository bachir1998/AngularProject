import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {

  //heroes : Hero []= [];
  articles : Observable<Article[]> = new Observable();
  
  constructor(private articleService: ArticleService) {

  }
  ngOnInit(): void {
    this.articles = this.articleService.getArticles();

  }


}
