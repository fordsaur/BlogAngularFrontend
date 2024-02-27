import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestArticlesComponent } from './latest-articles.component';

describe('LatestArticlesComponent', () => {
  let component: LatestArticlesComponent;
  let fixture: ComponentFixture<LatestArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LatestArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
