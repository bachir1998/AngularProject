import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  articles : Article []= [];
  
  constructor(private articleService: ArticleService) {

  }
  ngOnInit(): void {
  //  this.articles = this.articleService.getTable();
    this.articleService.getTable().subscribe((data)=>(this.articles=data));

  }


}
