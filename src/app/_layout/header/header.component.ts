import { AfterViewInit, Component, LOCALE_ID, OnInit } from '@angular/core';
import { LANGUAGES } from '@app/_core/constants/base-constants';
import { IdTitlePair } from '@app/_core/constants/models/base-models';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  mobileMenuExpanded = false;

  languages = LANGUAGES;
  language: IdTitlePair;

  constructor(
    private translateService: TranslateService
  ) {
    this.language = this.languages.find(i => i.id === this.translateService.currentLang);
  }

  setLanguage(language: IdTitlePair): void {
    this.translateService.use(language.id);
    this.language = language;
  }
}
