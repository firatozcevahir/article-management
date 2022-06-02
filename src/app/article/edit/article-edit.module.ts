import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleEditRoutingModule } from './article-edit-routing.module';
import { ArticleEditComponent } from './article-edit.component';
import { ArticleModule } from '../article.module';
import { ArticlePreviewDialogComponent } from './preview/article-preview-dialog.component';


@NgModule({
  declarations: [
    ArticleEditComponent,
    ArticlePreviewDialogComponent
  ],
  imports: [
    ArticleModule,
    ArticleEditRoutingModule
  ]
})
export class ArticleEditModule { }
