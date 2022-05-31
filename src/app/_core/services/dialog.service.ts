import { Injectable } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from "@app/_shared/components/dialogs/confirmation-dialog/confirmation-dialog.component";


@Injectable({ providedIn: 'root' })

export class DialogService {


  constructor(
    private dialog: MatDialog
  ) {

  }

  public openConfirmation(title: string, message: string) {
    return this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      autoFocus: false,
      restoreFocus: false,
      data: {
        title,
        message
      }
    });
  }


}
