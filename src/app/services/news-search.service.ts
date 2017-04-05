import { Injectable } from '@angular/core';
import { Http } from "@angular/http"
import "rxjs/Rx"

@Injectable()
export class NewsSearchService {

  private api_key: string = "c6263712cdd64ccaa20eb12746df0b3d"
  private searchUrl: string;

  constructor(private http: Http) { }

  getNews(source) {
    this.searchUrl = "https://newsapi.org/v1/articles?source="+source+"&apiKey=c6263712cdd64ccaa20eb12746df0b3d"
    return this.http.get(this.searchUrl)
    .map(res => res.json())
  }
}
