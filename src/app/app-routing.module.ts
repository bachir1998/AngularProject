import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './public/layout/layout.component';
import { ArticlesComponent } from './public/articles/articles.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { BackOfficeComponent } from './protected/back-office/back-office.component';
import { AuthGuard } from './utils/auth.guard';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children:[
      {path:'', component: HomeComponent},
      {path:'articles', component: ArticlesComponent},
      {path : 'login', component: LoginComponent},
    ]},
    {path : 'admin', component: BackOfficeComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
