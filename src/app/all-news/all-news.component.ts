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

  articles: Articles[];

  ngOnInit() {
    this.newsSearchService.getAllNews()
    .subscribe(news => {
      console.log(news)
      this.articles = news.results;
    })
  }

}
