import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './_layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    component: MainLayoutComponent,
    path: '',
    loadChildren: () => import('./_layout/main-layout/main-layout.module').then(m => m.MainLayoutModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
