import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDetails3Component } from './trending-details3.component';

describe('TrendingDetails3Component', () => {
  let component: TrendingDetails3Component;
  let fixture: ComponentFixture<TrendingDetails3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingDetails3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
