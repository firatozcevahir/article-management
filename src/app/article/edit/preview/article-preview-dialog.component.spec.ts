import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePreviewDialogComponent } from './article-preview-dialog.component';

describe('ArticlePreviewDialogComponent', () => {
  let component: ArticlePreviewDialogComponent;
  let fixture: ComponentFixture<ArticlePreviewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePreviewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePreviewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
