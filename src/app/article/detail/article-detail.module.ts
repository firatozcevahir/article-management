import { NgModule } from '@angular/core';

import { ArticleDetailRoutingModule } from './article-detail-routing.module';
import { ArticleDetailComponent } from './article-detail.component';
import { ArticleModule } from '../article.module';


@NgModule({
  declarations: [
    ArticleDetailComponent
  ],
  imports: [
    ArticleModule,
    ArticleDetailRoutingModule
  ]
})
export class ArticleDetailModule { }
