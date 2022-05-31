import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    LocalizedDatePipe
  ],
  exports: [
    // Common Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,

    // Material Modules
    MatIconModule,


    // Custom Pipes
    LocalizedDatePipe
  ]
})
export class SharedModule { }
