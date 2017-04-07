import { Component, OnInit } from '@angular/core';
import { NewsSearchService } from "../services/news-search.service"
import { Articles } from "../models/articles"

@Component({
  selector: 'app-sport-news',
  templateUrl: './sport-news.component.html',
  styleUrls: ['./sport-news.component.css']
})
export class SportNewsComponent implements OnInit {

  private sources = ["bbc-sport", "football-italia", "nfl-news", "sky-sports-news", "the-sport-bible"]
  private news = []

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
