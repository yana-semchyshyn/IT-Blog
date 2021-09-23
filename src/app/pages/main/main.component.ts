import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  categories: Array<string> = this.articlesService.categories;
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  constructor(public articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.sideNavToggle();
  }

  sideNavToggle(){
    this.articlesService.sideNavToggleSubject.subscribe(() => {
      setTimeout(() => {
        this.sidenav.toggle();
      }, 2);
    });
  }

}
