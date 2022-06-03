import { AfterViewInit, Component, LOCALE_ID, OnInit } from '@angular/core';
import { HEADER_MENU_ITEMS, LANGUAGES } from '@app/_core/constants/base-constants';
import { IdTitlePair } from '@app/_core/models/base-models';
import { AuthService } from '@app/_core/services/auth.service';
import { DialogService } from '@app/_core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  mobileMenuExpanded = false;

  menuItems = HEADER_MENU_ITEMS;
  languages = LANGUAGES;
  language: IdTitlePair;

  isLoggedIn = false;
  userInfo: string;

  constructor(
    private translateService: TranslateService,
    private authService: AuthService,
    private dialogService: DialogService
  ) {
    this.language = this.languages.find(i => i.id === this.translateService.currentLang);
    this.isLoggedIn = this.authService.isLoggedIn;
    this.userInfo = this.authService.getUserInfo();
  }

  setLanguage(language: IdTitlePair): void {
    this.translateService.use(language.id);
    this.language = language;
  }


  logout(): void {
    this.dialogService.openConfirmation('system.confirmation.confirmLogout', 'system.confirmation.sureToLogout')
      .afterClosed()
      .subscribe((res) => {
        if (!res) {
          return;
        }

        this.authService.logOut();
        this.isLoggedIn = false;
      });
  }
}
