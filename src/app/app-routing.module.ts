import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './public/layout/layout.component';
import { ArticlesComponent } from './public/articles/articles.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { BackOfficeComponent } from './protected/back-office/back-office.component';
import { AuthGuard } from './utils/auth.guard';
import { DetailsArticleComponent } from './public/articles/details-article/details-article.component';
import { NewArticleComponent } from './protected/new-article/new-article.component';
import { HomeAdminComponent } from './protected/back-office/home-admin/home-admin.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children:[
      {path:'', component: HomeComponent},
      {path:'articles', component: ArticlesComponent},
      {path : 'articles/:id', component : DetailsArticleComponent},
      {path : 'login', component: LoginComponent},
    ]},
    {path : 'admin', component: BackOfficeComponent, canActivate:[AuthGuard],children:[
      {path:'', component:HomeAdminComponent},
      {path:'newArticle', component:NewArticleComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
