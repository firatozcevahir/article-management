import { EntityBase } from '@app/_core/models/base-models';

export class ArticleDto extends EntityBase {
  title: string;
  author: string;
  summary: string;
  content: string;
  publishDate: Date;
}
