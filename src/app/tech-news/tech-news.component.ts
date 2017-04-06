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

  constructor(private newsSearchService: NewsSearchService) {
    this.getNews(this.sources[0])
    this.getNews(this.sources[1])
    this.getNews(this.sources[2])
    this.getNews(this.sources[3])
    this.getNews(this.sources[4])
    this.getNews(this.sources[5])
  }

    ngOnInit() {
    }

  getNews(source) {
    this.newsSearchService.getNews(source) // loop through sources to generate http requests for each source to the api
    .subscribe(news => {
      this.news.push(news);
      console.log(news.articles)
    })
  }
}
