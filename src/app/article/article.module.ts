import { NgModule } from '@angular/core';
import { SharedModule } from '@app/_shared/shared.module';
import { ArticleService } from './services/article.service';



@NgModule({
  exports: [
    SharedModule
  ],
  providers: [
    ArticleService
  ]
})
export class ArticleModule { }
