import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleStatsComponent } from './article-stats.component';

describe('ArticleStatsComponent', () => {
  let component: ArticleStatsComponent;
  let fixture: ComponentFixture<ArticleStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
