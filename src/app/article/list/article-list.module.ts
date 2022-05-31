import { NgModule } from '@angular/core';

import { ArticleListRoutingModule } from './article-list-routing.module';
import { ArticleListComponent } from './article-list.component';
import { ArticleModule } from '../article.module';


@NgModule({
  declarations: [
    ArticleListComponent
  ],
  imports: [
    ArticleModule,
    ArticleListRoutingModule
  ]
})
export class ArticleListModule { }
