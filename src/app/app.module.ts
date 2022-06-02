import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '@env/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { REGISTER_LOCALE_DATA, TRANSLATOR_LOADER_FACTORY } from './_core/constants/base-constants';

import { DatePipe } from '@angular/common';

import localeTr from '@angular/common/locales/tr';
import localeEn from '@angular/common/locales/en';
import { SharedModule } from './_shared/shared.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

REGISTER_LOCALE_DATA(localeTr, localeEn);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: environment.defaultLanguage,
      loader: {
        provide: TranslateLoader,
        useFactory: TRANSLATOR_LOADER_FACTORY,
        deps: [HttpClient]
      }
    }),
    SharedModule,
    MatSnackBarModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
