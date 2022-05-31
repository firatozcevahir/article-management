import { registerLocaleData } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { IdTitlePair } from "./models/base-models";
import { LANGUAGE_FILE_PATH } from "./path-constants";


export const TRANSLATOR_LOADER_FACTORY = (http: HttpClient) => {
  return new TranslateHttpLoader(http, LANGUAGE_FILE_PATH, '.json');
}

export const REGISTER_LOCALE_DATA = (...locales) => {
  locales.forEach(i => {
    registerLocaleData(i);
  });
}

export const LANGUAGES: IdTitlePair[] = [
  {
    id: 'tr',
    title: 'system.language.turkish'
  },
  {
    id: 'en',
    title: 'system.language.english'
  },
];
