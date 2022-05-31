import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'article-management';

  constructor(
    private translateService: TranslateService
  ) {
    this.initTranslate();
  }

  private initTranslate(): void {
    this.translateService.setDefaultLang(environment.defaultLanguage);
    this.translateService.use(environment.defaultLanguage);
  }

}
