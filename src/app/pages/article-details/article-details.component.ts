import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article: any = {};
  constructor(public articlesService: ArticlesService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getArticle();
  }

  private getArticle(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.articlesService.getArticle(id).subscribe(
      data => {
        this.article = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

}
