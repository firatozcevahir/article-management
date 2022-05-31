import { Injectable } from "@angular/core";

@Injectable()
export class ArticleService {



  /**
   *
   */
  constructor() {
  }

  healthCheck(): string {
    return 'Service WORKS';
  }
}
