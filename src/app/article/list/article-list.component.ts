import { Component, OnInit } from '@angular/core';
import { DialogService } from '@app/_core/services/dialog.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';
import { ArticleDto } from '../models/article.dto';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {

  articles: ArticleDto[] = [];

  isLoading = false;

  constructor(
    private articleService: ArticleService,
    private spinner: NgxSpinnerService,
    private dialogService: DialogService
  ) {
    this.loadData();
  }


  loadData(): void {
    this.spinner.show();
    this.isLoading = true;
    this.articleService.getArticles()
      .pipe(finalize(() => {
        this.isLoading = false;
        this.spinner.hide();
      }))
      .subscribe((data) => {
        this.articles = data;
      });
  }


  deleteArticle(article: ArticleDto): void {
    this.dialogService.openConfirmation('system.action.confirmDelete', 'system.action.areYouSure')
      .afterClosed()
      .subscribe((res) => {

        if (!res) {
          return;
        }

        this.isLoading = true;
        this.spinner.show();
        this.articleService.deleteArticle(article.id)
          .pipe(finalize(() => {
            this.isLoading = false;
            this.spinner.hide();
          }))
          .subscribe((data) => {

          });
      });
  }



}
