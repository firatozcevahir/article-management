import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar'
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(
    private matSnackBar: MatSnackBar,
    private translateService: TranslateService
  ) {
  }


  showError(message: string): void {
    this.showSnackbar(message, 'error');
  }

  showSuccess(message: string): void {
    this.showSnackbar(message, 'success');
  }
  showInfo(message: string): void {
    this.showSnackbar(message, 'info');
  }
  showWarning(message: string): void {
    this.showSnackbar(message, 'warning');
  }

  private showSnackbar(message: string, type: 'success' | 'info' | 'error' | 'warning') {
    let translated = '';
     this.translateService.get(message).subscribe((translatedVal) =>{
       translated = translatedVal;
    });
    this.matSnackBar.open(translated, null, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['custom-snackbar', type]
    });
  }
}
