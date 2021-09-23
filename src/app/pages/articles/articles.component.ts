import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Array<IArticle> = [];
  constructor(public articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.getAllArticles();
    this.updateArticles();
  }

  getAllArticles(): void {
    this.articlesService.getArticles().subscribe(
      data => {
        this.articles = data;
        this.articles.reverse();
      },
      err => {
        console.log(err);
      }
    )
  }

  updateArticles(): void {
    this.articlesService.postSubject.subscribe(
      () => {
        this.getAllArticles();
      },
    );
  }

}
