import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@app/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'articles',
    loadChildren: () => import('@app/article/list/article-list.module').then(m => m.ArticleListModule)
  },
  {
    path: 'article/:id',
    loadChildren: () => import('@app/article/detail/article-detail.module').then(m => m.ArticleDetailModule)
  },
  {
    path: 'article/edit/:id',
    loadChildren: () => import('@app/article/edit/article-edit.module').then(m => m.ArticleEditModule),
    // TODO: HANDLE canActivate logic
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
