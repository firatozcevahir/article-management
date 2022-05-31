import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';



@NgModule({
  declarations: [
    LocalizedDatePipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,


    // Custom Pipes
    LocalizedDatePipe
  ]
})
export class SharedModule { }
