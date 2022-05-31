import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleEditRoutingModule } from './article-edit-routing.module';
import { ArticleEditComponent } from './article-edit.component';
import { ArticleModule } from '../article.module';


@NgModule({
  declarations: [
    ArticleEditComponent
  ],
  imports: [
    ArticleModule,
    ArticleEditRoutingModule
  ]
})
export class ArticleEditModule { }
