import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent {

  articles : Article []= [];
  
  constructor(private articleService: ArticleService,private router:Router) {

  }
  ngOnInit(): void {
  //  this.articles = this.articleService.getTable();
    this.articleService.getArticles().subscribe((data)=>(this.articles=data));

  }

  onDelete(id :number){
    if(this.articleService.deleteArticle(id).subscribe())
    window.location.reload();
  }

}
