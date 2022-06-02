import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize, forkJoin } from 'rxjs';
import { ArticleDto } from '../models/article.dto';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  id: string;
  article: ArticleDto;
  randomArticles: ArticleDto[] =[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private spinner: NgxSpinnerService
  ) {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getRecordById();

  }

  ngOnInit(): void {
  }

  getRecordById(): void {

    this.spinner.show();
    forkJoin([
      this.articleService.getArticleDetailById(this.id),
      this.articleService.getRandomArticles(this.id, 2),
    ])
      .pipe(finalize(() => {
        this.spinner.hide();
      }))
      .subscribe(([article, randomArticles]) => {
        this.article = article;
        this.randomArticles = randomArticles;
      });
  }

}
