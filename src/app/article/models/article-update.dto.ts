import { EntityBase } from '@app/_core/constants/models/base-models';

export class ArticleUpdateDto {
  id: string;
  title: string;
  author: string;
  content: string;
  publishDate: Date;
}
