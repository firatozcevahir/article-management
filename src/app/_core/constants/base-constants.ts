import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HeaderMenuItem, IdTitlePair } from '../models/base-models';
import { LANGUAGE_FILE_PATH } from './path-constants';
import { AngularEditorConfig } from '@kolkov/angular-editor';


export const TRANSLATOR_LOADER_FACTORY = (http: HttpClient) => {
  return new TranslateHttpLoader(http, LANGUAGE_FILE_PATH, '.json');
}

export const REGISTER_LOCALE_DATA = (...locales) => {
  locales.forEach(i => {
    registerLocaleData(i);
  });
}

export const newUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    c => {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
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


export const HEADER_MENU_ITEMS: HeaderMenuItem[] = [
  {
    id: 'home-menu',
    title: 'home.title',
    icon: 'home',
    url: '/home'
  },
  {
    id: 'article-menu',
    title: 'article.title',
    icon: 'article',
    url: '/articles'
  }
];


export const DEFAULT_EDITOR_CONFIG: AngularEditorConfig = {
  editable: true,
  enableToolbar: false,
  height: '200px',
  sanitize: false,
  toolbarHiddenButtons: [
    [
      'insertImage',
      'insertVideo',
      'heading'
    ]
  ]
};
