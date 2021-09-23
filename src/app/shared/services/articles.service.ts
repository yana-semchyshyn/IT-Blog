import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IArticle } from '../interfaces/article.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private url: string;
  categories: Array<string> = ["Angular", "Java Script", "HTML", "CSS"];
  postSubject: Subject<boolean> = new Subject();
  public sideNavToggleSubject: Subject<boolean> = new Subject();
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/articles';
  }

  getArticles(): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(this.url);
  }

  postArticle(article: IArticle): Observable<IArticle> {
    return this.http.post<IArticle>(this.url, article);
  }

  getCategoryArticles(category: string): Observable<Array<IArticle>> {
    return this.http.get<Array<IArticle>>(`${this.url}?category.urlName=${category}`);
  }

  getArticle(id: number | string | null ): Observable<IArticle> {
    return this.http.get<IArticle>(`${this.url}/${id}`);
  }

  toggle() {
    return this.sideNavToggleSubject.next();
  } 

}
