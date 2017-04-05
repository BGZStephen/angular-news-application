import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { NewsSearchService } from "../services/news-search.service"
import { Articles } from "../models/articles"

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css'],
})
export class AllNewsComponent implements OnInit {

  articles = [];
  sources = ["associated-press", "bbc-news", "bbc-sport", "bloomberg", "business-insider-uk", "buzzfeed", "daily-mail", "engadget", "financial-times", "google-news", "hacker-news", "ign", "independent", "mashable", "metro", "mirror", "national-geographic"]

  constructor(private newsSearchService: NewsSearchService) {
  }

  ngOnInit() {
    this.articles = []
      this.newsSearchService.getNews(this.sources[0]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.articles.push(news.articles);
        console.log(this.articles)
      })
      this.newsSearchService.getNews(this.sources[1]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.articles.push(news.articles);
        console.log(this.articles)
      })
      this.newsSearchService.getNews(this.sources[2]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.articles.push(news.articles);
        console.log(this.articles)
      })
      this.newsSearchService.getNews(this.sources[3]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.articles.push(news.articles);
        console.log(this.articles)
      })
      this.newsSearchService.getNews(this.sources[4]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.articles.push(news.articles);
        console.log(this.articles)
      })
      this.newsSearchService.getNews(this.sources[5]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.articles.push(news.articles);
        console.log(this.articles)
      })
      this.newsSearchService.getNews(this.sources[6]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.articles.push(news.articles);
        console.log(this.articles)
      })
  }
}
