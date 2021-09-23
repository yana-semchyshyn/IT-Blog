import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { ArticlesService } from 'src/app/shared/services/articles.service';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  articles: Array<object> = [];
  constructor( public dialog: MatDialog, public articleService: ArticlesService) { }

  ngOnInit(): void {
  }

  clickNav() { 
    this.articleService.toggle();
  }

  openDialog(): void {
    this.dialog.open(DialogWindowComponent, {
      width: '600px'
    });
  }

}
