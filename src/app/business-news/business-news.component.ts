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

      this.getNews(this.sources[0])
      this.getNews(this.sources[1])
      this.getNews(this.sources[2])
      this.getNews(this.sources[3])
      this.getNews(this.sources[4])
    }

  getNews(source) {
    this.newsSearchService.getNews(source) // loop through sources to generate http requests for each source to the api
    .subscribe(news => {
      this.news.push(news);
      console.log(news.articles)
    })
  }
}
