import { Component, OnInit } from '@angular/core';
import { NewsSearchService } from "../services/news-search.service"
import { Articles } from "../models/articles"

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css']
})
export class SportNewsComponent implements OnInit {

  sources = ["bbc-sport", "football-italia", "nfl-news", "sky-sports-news", "the-sport-bible"]
  news = []

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
