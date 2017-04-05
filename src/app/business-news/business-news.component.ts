import { Component, OnInit } from '@angular/core';
import { NewsSearchService } from "../services/news-search.service"
import { Articles } from "../models/articles"

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  businessArticles = [];
  sources = ["associated-press", "bbc-news", "bbc-sport", "bloomberg", "business-insider-uk", "buzzfeed", "daily-mail", "engadget", "financial-times", "google-news", "hacker-news", "ign", "independent", "mashable", "metro", "mirror", "national-geographic"]

  constructor(private newsSearchService: NewsSearchService) {

  }

  ngOnInit() {
    this.businessArticles = []
      this.newsSearchService.getNews(this.sources[0]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.businessArticles.push(news.articles);
        console.log(this.businessArticles)
      })
      this.newsSearchService.getNews(this.sources[1]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.businessArticles.push(news.articles);
        console.log(this.businessArticles)
      })
      this.newsSearchService.getNews(this.sources[2]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.businessArticles.push(news.articles);
        console.log(this.businessArticles)
      })
      this.newsSearchService.getNews(this.sources[3]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.businessArticles.push(news.articles);
        console.log(this.businessArticles)
      })
      this.newsSearchService.getNews(this.sources[4]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.businessArticles.push(news.articles);
        console.log(this.businessArticles)
      })
      this.newsSearchService.getNews(this.sources[5]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.businessArticles.push(news.articles);
        console.log(this.businessArticles)
      })
      this.newsSearchService.getNews(this.sources[6]) // loop through sources to generate http requests for each source to the api
      .subscribe(news => {
        this.businessArticles.push(news.articles);
        console.log(this.businessArticles)
      })
    }
  }
