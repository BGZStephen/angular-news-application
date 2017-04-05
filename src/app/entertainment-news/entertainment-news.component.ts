import { Component, OnInit } from '@angular/core';
import { NewsSearchService } from "../services/news-search.service"
import { Articles } from "../models/articles"

@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.css']
})
export class EntertainmentNewsComponent implements OnInit {

  sources = ["entertainment-weekly", "time", "mtv-news-uk"]
  news = []

  constructor(private newsSearchService: NewsSearchService) { }

    ngOnInit() {

      this.getNews(this.sources[0])
      this.getNews(this.sources[1])
      this.getNews(this.sources[2])
    }

  getNews(source) {
    this.newsSearchService.getNews(source) // loop through sources to generate http requests for each source to the api
    .subscribe(news => {
      this.news.push(news);
      console.log(news.articles)
    })
  }
}
