import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent {

  ArticleForm = new FormGroup({

    name : new FormControl('',[Validators.required]),
    description : new FormControl('',Validators.required),
    url : new FormControl('',Validators.required),
    categorie : new FormControl('',Validators.required)
   
  })

  constructor(private articleService: ArticleService, private router : Router){}
  
  onSubmit(){
    console.log(this.ArticleForm.value)
    let credentials = {...this.ArticleForm.value}
    this.articleService.addArticle(credentials).subscribe({
      next: (data) => {

        console.log(data)
       
      },
      error: (error) => {
         console.log(error)
      }
    })

    
  }



  /*article : Article;

  
  
  
  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {

    this.articleService.addArticle(this.article).subscribe()

  }*/

}
