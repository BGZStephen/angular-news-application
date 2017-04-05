import { Routes, RouterModule } from "@angular/router";
import { SportNewsComponent } from "./sport-news/sport-news.component";
import { TechNewsComponent } from "./tech-news/tech-news.component";
import { BusinessNewsComponent } from "./business-news/business-news.component";
import { EntertainmentNewsComponent } from "./entertainment-news/entertainment-news.component";

const APP_ROUTES: Routes = [
  {path : '', redirectTo: "tech", pathMatch: "full"},
  {path : 'tech', component: TechNewsComponent },
  {path : 'entertainment', component: EntertainmentNewsComponent },
  {path : 'sport', component: SportNewsComponent },
  {path : 'business', component: BusinessNewsComponent },
]

export const router = RouterModule.forRoot(APP_ROUTES)
