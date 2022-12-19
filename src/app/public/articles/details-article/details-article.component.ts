import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-details-article',
  templateUrl: './details-article.component.html',
  styleUrls: ['./details-article.component.scss']
})
export class DetailsArticleComponent {

  article : Article | undefined;


  constructor(private articleService : ArticleService, private route: ActivatedRoute){};
  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.articleService.getArticleID(params['id']).subscribe(
          (data)=> {
            if(data.length>0){
              this.article=data[0]
            }
            
          }
        )
      }
    )
    
  }
}
