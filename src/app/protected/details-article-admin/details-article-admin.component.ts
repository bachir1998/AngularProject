import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ArticleService } from 'src/app/services/articles/article.service';

@Component({
  selector: 'app-details-article-admin',
  templateUrl: './details-article-admin.component.html',
  styleUrls: ['./details-article-admin.component.scss']
})
export class DetailsArticleAdminComponent implements OnInit {
  showMsg: boolean = false;
  id = 0;

  ArticleForm = new FormGroup({
//    id: new FormControl(0),
  //  created_at: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    categorie: new FormControl('', Validators.required)
  })

  constructor(private articleService: ArticleService, private router: ActivatedRoute,private routerUrl :Router,private toastr: ToastrService) { }

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
        this.showMsg=true;

          if(this.showMsg){
            this.success()
          }

      },
      error: (error) => {
        console.log(error)
      }
    })


  }

  success(): void {
    if(this.toastr.success('Modification de  l\'article réalisée avec succès ')){
       this.routerUrl.navigateByUrl('admin')
    }
  }

}