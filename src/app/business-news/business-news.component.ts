import { Component, OnInit } from '@angular/core';
import { NewsSearchService } from "../services/news-search.service"
import { Articles } from "../models/articles"

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  private news = [];
  private sources = ["bloomberg", "business-insider-uk", "financial-times", "reuters", "the-economist"]

  constructor(private newsSearchService: NewsSearchService) { }

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
