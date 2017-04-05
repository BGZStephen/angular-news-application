import { Component, OnInit } from '@angular/core';
import { NewsSearchService } from "../services/news-search.service"
import { Articles } from "../models/articles"

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css']
})
export class AllNewsComponent implements OnInit {

  constructor(private newsSearchService: NewsSearchService) { }

  articles: Articles[] = [];
  sources = ["associated-press", "bbc-news", "bbc-sport", "bloomberg", "business-insider-uk", "buzzfeed", "daily-mail", "engadget", "financial-times", "google-news", "hacker-news", "ign", "independent", "mashable", "metro", "mirror", "national-geographic"]

  ngOnInit() {
    for( let i = 0; i < this.sources.length; i++ ) {
      this.newsSearchService.getAllNews(this.sources[i]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        for (let i = 0; i < news.articles.length; i++) { // loop through the array of articles presented by each source and push them to the articles for interpolation
            this.articles.push(news.articles[i]);
        }
        console.log(this.articles)
      })
    }
  }
}
