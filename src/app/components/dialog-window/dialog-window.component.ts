import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ArticlesService } from 'src/app/shared/services/articles.service';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './dialog-window.component.html',
  styleUrls: ['./dialog-window.component.scss']
})
export class DialogWindowComponent implements OnInit {
  categories: Array<string> = this.articleService.categories;
  category: string = "";
  image: string = "";
  title: string = "";
  shortDescription: string = "";
  longDescription: string = "";
  isValid: boolean = false;
  articleForm: FormGroup | any;
  date = new Date;
  constructor(public articleService: ArticlesService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      category: ['', [Validators.required]],
      image: ['', Validators.required],
      title: ['', [Validators.required]],
      shortDescription: ['', [Validators.minLength(6), Validators.required]],
      longDescription: ['', Validators.required]
    })
  }

  onSubmit(newArticle: any): void{
    newArticle.date = this.date;
    if(this.articleForm.valid){
      this.articleService.postArticle(newArticle).subscribe(
        () => {
          this.articleService.postSubject.next(true);
        }
      );
    } 
  }

}
