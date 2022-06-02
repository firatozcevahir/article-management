import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/_core/guards/auth.guard';
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@app/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'articles',
    loadChildren: () => import('@app/article/list/article-list.module').then(m => m.ArticleListModule)
  },
  {
    path: 'article/view/:id',
    loadChildren: () => import('@app/article/detail/article-detail.module').then(m => m.ArticleDetailModule)
  },
  {
    path: 'article/new',
    loadChildren: () => import('@app/article/edit/article-edit.module').then(m => m.ArticleEditModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'article/edit/:id',
    loadChildren: () => import('@app/article/edit/article-edit.module').then(m => m.ArticleEditModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
