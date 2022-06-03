import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/_core/services/auth.service';
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
  filteredArticles: ArticleDto[] = [];

  isLoading = false;

  searchTerm: string;

  isLoggedIn = false;

  constructor(
    private articleService: ArticleService,
    private spinner: NgxSpinnerService,
    private dialogService: DialogService,
    private authService: AuthService
  ) {
    this.loadData();
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  onSearchTermChange() {
    this.filteredArticles = this.articles
      .filter(
        i => i.author.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          i.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          i.summary.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }


  loadData(): void {
    this.spinner.show();
    this.isLoading = true;
    this.articleService.getArticles()
      .pipe(finalize(() => {
        this.isLoading = false;
        this.spinner.hide();
        this.searchTerm = null;
      }))
      .subscribe((data) => {
        this.articles = data;
        this.filteredArticles = data;
      });
  }


  deleteArticle(article: ArticleDto): void {
    this.dialogService.openConfirmation('system.confirmation.confirmDelete', 'system.confirmation.sureToDelete')
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
            this.loadData();
          });
      });
  }



}
