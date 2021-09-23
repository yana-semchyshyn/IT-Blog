import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from './pages/article-details/article-details.component';
import { ArticlesSortedComponent } from './pages/articles-sorted/articles-sorted.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent, children:
      [
        {path: '', component: ArticlesComponent},
        {path: 'articles/:category', component: ArticlesSortedComponent},
        {path: 'articles/:category/:id', component: ArticleDetailsComponent}
      ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
