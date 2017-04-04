import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { MainstreamNewsComponent } from './mainstream-news/mainstream-news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllNewsComponent,
    TechNewsComponent,
    SportNewsComponent,
    BusinessNewsComponent,
    EntertainmentNewsComponent,
    MainstreamNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
