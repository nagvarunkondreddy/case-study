import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { AppConfig } from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articleContent = new BehaviorSubject<Article[]>([]);

  constructor(private http:HttpClient) { }


  getArticlesContentObserver(): Observable<Article[]>{
    return this.articleContent.asObservable();
  }

  getArticles(){
     this.http.get<Article[]>(`${AppConfig.ARTICLE_URL}`).subscribe((data)=>{
      this.articleContent.next(data);
     
    });;
  }
  addArticle(data:any){
    const obj = {"title":"Article 05", "content":data};
    this.http.post<Article[]>(`${AppConfig.ADD_ARTICLE_URL}`,obj).subscribe((data)=>{
      this.articleContent.next(data);
    });
  }

  deleteArticle(data:any){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data
    };
     this.http.delete<Article[]>(`${AppConfig.DELETE_ARTICLE_URL}`,options).subscribe((data)=>{
       this.articleContent.next(data);
     })
  }
}
