import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./app.routes";
import { NewsSearchService } from "./services/news-search.service"

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllNewsComponent } from './all-news/all-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { SportNewsComponent } from './sport-news/sport-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EntertainmentNewsComponent } from './entertainment-news/entertainment-news.component';
import { MainstreamNewsComponent } from './mainstream-news/mainstream-news.component';
import { CharLimit } from "./pipes/charlimit.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllNewsComponent,
    TechNewsComponent,
    SportNewsComponent,
    BusinessNewsComponent,
    EntertainmentNewsComponent,
    MainstreamNewsComponent,
    CharLimit,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [NewsSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
