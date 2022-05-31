import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';

import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TruncatePipe } from './pipes/truncate.pipe';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmationDialogModule } from './components/dialogs/confirmation-dialog/confirmation-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    LocalizedDatePipe,
    TruncatePipe
  ],
  exports: [
    // Common Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxSpinnerModule,

    // Material Modules
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,

    // Custom Modules
    ConfirmationDialogModule,

    // Custom Pipes
    LocalizedDatePipe,
    TruncatePipe
  ]
})
export class SharedModule { }
