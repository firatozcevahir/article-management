import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from '../header/header.component';
import { SharedModule } from '@app/_shared/shared.module';


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    MainLayoutRoutingModule
  ],
})
export class MainLayoutModule { }
