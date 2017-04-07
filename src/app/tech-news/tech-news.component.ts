import { Component, OnInit } from '@angular/core';
import { NewsSearchService } from "../services/news-search.service"
import { Articles } from "../models/articles"

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  private news = []
  private sources = ["buzzfeed", "engadget", "mashable", "recode", "techcrunch", "techradar"]

  constructor(private newsSearchService: NewsSearchService) {}

  ngOnInit() {
    for(let i = 0; i < this.sources.length; i++) {
      this.getNews(this.sources[i])
    }
  }

  getNews(source) {
    this.newsSearchService.getNews(source) // loop through sources to generate http requests for each source to the api
    .subscribe(news => {
      this.news.push(news);
      console.log(news.articles)
    })
  }
}
