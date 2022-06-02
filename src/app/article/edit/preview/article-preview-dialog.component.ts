import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-article-preview-dialog',
  templateUrl: './article-preview-dialog.component.html',
  styleUrls: ['./article-preview-dialog.component.scss']
})
export class ArticlePreviewDialogComponent {


  title: string;
  author: string;
  publishDate: Date;
  content: string;

  constructor(
    public dialogRef: MatDialogRef<ArticlePreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      author: string,
      publishDate: Date,
      content: string
    }
  ) {
    this.title = this.data.title;
    this.author = this.data.author;
    this.publishDate = this.data.publishDate;
    this.content = this.data.content;
  }

}
