import { Routes, RouterModule } from "@angular/router";
import { AllNewsComponent } from "./all-news/all-news.component";
import { SportNewsComponent } from "./sport-news/sport-news.component";
import { TechNewsComponent } from "./tech-news/tech-news.component";
import { BusinessNewsComponent } from "./business-news/business-news.component";
import { EntertainmentNewsComponent } from "./entertainment-news/entertainment-news.component";
import { MainstreamNewsComponent } from "./mainstream-news/mainstream-news.component";

const APP_ROUTES: Routes = [
  {path : '', component: AllNewsComponent },
  {path : 'tech', component: TechNewsComponent },
  {path : 'entertainment', component: EntertainmentNewsComponent },
  {path : 'sport', component: SportNewsComponent },
  {path : 'business', component: BusinessNewsComponent },
  {path : 'mainstream', component: MainstreamNewsComponent },
]

export const router = RouterModule.forRoot(APP_ROUTES)
