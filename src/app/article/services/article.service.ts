import { Injectable } from '@angular/core';
import { newUUID } from '@app/_core/constants/base-constants';
import { delay, finalize, Observable, of } from 'rxjs';
import { ArticleDto } from '../models/article.dto';

@Injectable()
export class ArticleService {


  constructor() {
  }

  healthCheck(): string {
    return 'Service WORKS';
  }


  getArticles(): Observable<ArticleDto[]> {
    const dataList = (JSON.parse(localStorage.getItem('articles')) || []) as ArticleDto[];
    return of(dataList).pipe(delay(1500));
  }

  getArticleDetailById(id: string): Observable<ArticleDto> {
    const dataList = (JSON.parse(localStorage.getItem('articles')) || []) as ArticleDto[];
    const foundItem = dataList.find(i => i.id === id);
    return of(foundItem).pipe(delay(1000));
  }

  getRandomArticles(idNotToInclude: string, count: number): Observable<ArticleDto[]> {

    const dataList = (JSON.parse(localStorage.getItem('articles')) || []) as ArticleDto[];
    const shuffled = dataList.filter(i => i.id !== idNotToInclude).sort(() => 0.5 - Math.random());
    const foundArticles = shuffled.slice(0, count);
    return of(foundArticles);
  }

  createArticle(articleDto: ArticleDto): Observable<string> {
    const article: ArticleDto = {
      id: newUUID(),
      title: articleDto.title,
      publishDate: new Date(articleDto.publishDate),
      author: articleDto.author,
      summary: articleDto.summary,
      content: articleDto.content,
      createdOn: new Date(),
      isActive: true
    };
    const dataList = (JSON.parse(localStorage.getItem('articles')) || []) as ArticleDto[];
    dataList.push(article);
    localStorage.setItem('articles', JSON.stringify(dataList));
    return of(article.id).pipe(delay(1000));
  }

  updateArticle(articleDto: ArticleDto): Observable<string> {
    const dataList = (JSON.parse(localStorage.getItem('articles')) || []) as ArticleDto[];
    const foundItem = dataList.find(i => i.id === articleDto.id);
    if (!foundItem) {
      return of(null);
    }

    foundItem.title = articleDto.title;
    foundItem.author = articleDto.author;
    foundItem.summary = articleDto.summary;
    foundItem.content = articleDto.content;
    foundItem.publishDate = new Date(articleDto.publishDate);
    localStorage.setItem('articles', JSON.stringify(dataList));

    return of(articleDto.id).pipe(delay(1000));
  }

  deleteArticle(id: string): Observable<string> {
    const dataList = (JSON.parse(localStorage.getItem('articles')) || []) as ArticleDto[];
    const foundIndex = dataList.findIndex(i => i.id === id);
    dataList.splice(foundIndex, 1);
    localStorage.setItem('articles', JSON.stringify(dataList));

    return of(id).pipe(delay(1000));
  }

}
