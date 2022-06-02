import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from '@app/_core/services/dialog.service';
import * as moment from 'moment';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, Observable } from 'rxjs';
import { ArticleDto } from '../models/article.dto';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  id: string;
  article: ArticleDto;
  isEdit = false;
  isLoading = false;

  form = this.formBuilder.group({
    id: [null],
    title: [null, Validators.required],
    author: [null, Validators.required],
    content: [null, Validators.required],
    publishDate: [null, Validators.required]
  });

  get formData(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private articleService: ArticleService,
    private spinner: NgxSpinnerService,
    private dialog: DialogService
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.isEdit = this.id ? true : false;
    if (this.isEdit) {
      this.getRecordById();
    }
  }

  ngOnInit(): void {

  }

  getRecordById(): void {
    this.spinner.show();
    this.articleService.getArticleDetailById(this.id)
      .pipe(finalize(() => {
        this.spinner.hide();
      }))
      .subscribe((article) => {
        this.article = article;
        this.form.patchValue(article);

        this.form.patchValue({ publishDate: moment(this.article.publishDate).format("YYYY-MM-DDThh:mm") });
        // to bind value to datetime-local input element correctly
      });
  }


  showPreview(): void {
    this.dialog.openArticlePreview(
      this.formData.title.value,
      this.formData.author.value,
      this.formData.publishDate.value,
      this.formData.content.value,
    );
  }

  isControlInvalid(controlName: string): boolean {
    return this.form.get(controlName).invalid && this.form.get(controlName).touched;
  }

  saveArticle(shouldClose = true): void {
    if (this.form.invalid) {
      return;
    }

    this.spinner.show();
    this.isLoading = true;
    const formData = this.form.getRawValue();
    let observable: Observable<string>;
    const data: ArticleDto = {
      id: formData.id,
      title: formData.title,
      author: formData.author,
      publishDate: formData.publishDate,
      content: formData.content
    };

    if (this.isEdit) {
      observable = this.articleService.updateArticle(data);
    } else {
      observable = this.articleService.createArticle(data);
    }

    observable
    .pipe(finalize(()=>{
      this.spinner.hide();
      this.isLoading = false;
    }))
    .subscribe((data) => {
      console.log(data);
      if (shouldClose) {
        this.router.navigateByUrl('/articles');
        return;
      }

      this.router.navigateByUrl('/article/edit/' + data);
    });
  }

}
