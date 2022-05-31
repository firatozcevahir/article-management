import { EntityBase } from '@app/_core/constants/models/base-models';

export class ArticleDto extends EntityBase {
  title: string;
  author: string;
  content: string;
  publishDate: Date;
}
