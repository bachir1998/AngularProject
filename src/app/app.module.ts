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
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { LoginComponent } from './public/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { LogFormComponent } from './components/log-form/log-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackOfficeComponent } from './protected/back-office/back-office.component';


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
