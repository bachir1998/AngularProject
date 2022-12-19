import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { ArticlesComponent } from './public/articles/articles.component';
import { ItemArticlesComponent } from './public/articles/item-articles/item-articles.component';
import { LayoutComponent } from './public/layout/layout.component';
import { NavbarComponent } from './public/layout/navbar/navbar.component';
import { FooterComponent } from './public/layout/footer/footer.component';
import { DashboardComponent } from './protected/dashboard/dashboard.component';
import { LoginComponent } from './public/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { LogFormComponent } from './components/log-form/log-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackOfficeComponent } from './protected/back-office/back-office.component';
import { DetailsArticleComponent } from './public/articles/details-article/details-article.component';
import { NewArticleComponent } from './protected/new-article/new-article.component';
import { NavbarBoComponent } from './protected/back-office/navbar-bo/navbar-bo.component';
import { FooterBoComponent } from './protected/back-office/footer-bo/footer-bo.component';
import { HomeAdminComponent } from './protected/back-office/home-admin/home-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    ItemArticlesComponent,
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    LogFormComponent,
    BackOfficeComponent,
    DetailsArticleComponent,
    NewArticleComponent,
    NavbarBoComponent,
    FooterBoComponent,
    HomeAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
