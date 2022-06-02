import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
@NgModule({
  declarations: [
    LocalizedDatePipe,
    TruncatePipe,
    SanitizeHtmlPipe
  ],
  exports: [
    // Common Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxSpinnerModule,
    AngularEditorModule,

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
    TruncatePipe,
    SanitizeHtmlPipe
  ]
})
export class SharedModule { }
