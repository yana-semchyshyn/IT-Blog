import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IArticle } from 'src/app/shared/interfaces/article.interface';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'app-articles-sorted',
  templateUrl: './articles-sorted.component.html',
  styleUrls: ['./articles-sorted.component.scss']
})
export class ArticlesSortedComponent implements OnInit {
  articles: Array<IArticle> = [];
  filteredArticles: Array<IArticle> = [];
  constructor(public articlesService: ArticlesService, private ActivatedRoute: ActivatedRoute, private router: Router) { 
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) this.getFilteredArticles();
    })
  }

  ngOnInit(): void {
    this.getAllArticles();
    this.updateArticles();
  }


  getAllArticles(category?: string | null): void {
    this.articlesService.getArticles().subscribe(
      data => {
        this.articles = data;
        this.articles.reverse();
        if (category) this.filteredArticles = this.articles.filter(article => article.category == category);
      },
      err => {
        console.log(err);
      }
    )
  }

  updateArticles(): void {
    this.articlesService.postSubject.subscribe(
      () => {
        const category = this.ActivatedRoute.snapshot.paramMap.get('category');
        this.getAllArticles(category);
      },
    );
  }

  getFilteredArticles(): void {
    const category = this.ActivatedRoute.snapshot.paramMap.get('category');
    this.getAllArticles(category);
  }

}
