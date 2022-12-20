import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/articles/article.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent {

  showMsg: boolean = false;


  ArticleForm = new FormGroup({

    name : new FormControl('',[Validators.required]),
    description : new FormControl('',Validators.required),
    url : new FormControl('',Validators.required),
    categorie : new FormControl('',Validators.required)
   
  })

  constructor(private articleService: ArticleService,private router :Router,private toastr: ToastrService){}
  
  onSubmit(){
    console.log(this.ArticleForm.value)
    let credentials = {...this.ArticleForm.value}
    this.articleService.addArticle(credentials).subscribe({
      
      next: (data) => {
           console.log(data)
          // this.ArticleForm.reset()   
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
    if(this.toastr.success('Ajout d\'article réalisé avec succès ')){
       this.router.navigateByUrl('admin')
    }
  }
}
