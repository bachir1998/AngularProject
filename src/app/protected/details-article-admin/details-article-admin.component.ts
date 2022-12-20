import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-details-article-admin',
  templateUrl: './details-article-admin.component.html',
  styleUrls: ['./details-article-admin.component.scss']
})
export class DetailsArticleAdminComponent implements OnInit {

  id = 0;

  ArticleForm = new FormGroup({
//    id: new FormControl(0),
  //  created_at: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    categorie: new FormControl('', Validators.required)
  })

  constructor(private articleService: ArticleService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((param) => {
      this.articleService.getArticleID(param['id']).subscribe((data) => {
        const {id,created_at,...article} = data[0];
        this.id= data[0].id;
        this.ArticleForm.setValue(article);
      })
    })
  }

  onSubmit() {
    console.log(this.ArticleForm.value, this.id)
    let credentials = { ...this.ArticleForm.value }
    this.articleService.updateArticle(this.id,credentials).subscribe({
      next: (data) => {

        console.log(data)

      },
      error: (error) => {
        console.log(error)
      }
    })


  }

}