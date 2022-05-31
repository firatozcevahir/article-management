import { EntityBase } from '@app/_core/constants/models/base-models';

export class ArticleCreateDto {
  title: string;
  author: string;
  content: string;
  publishDate: Date;
}
