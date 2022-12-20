import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-table-article',
  templateUrl: './table-article.component.html',
  styleUrls: ['./table-article.component.scss']
})
export class TableArticleComponent {

  articles : Article []= [];
  
  constructor(private articleService: ArticleService,private router:Router) {

  }
  ngOnInit(): void {
  //  this.articles = this.articleService.getTable();
    this.RefreshList();

  }

  onDelete(id :number){
    this.articleService.deleteArticle(id).subscribe(()=>this.RefreshList());
   // window.location.reload();
  }

  RefreshList(){
    this.articleService.getArticles().subscribe((data)=>(this.articles=data));
  }

}
