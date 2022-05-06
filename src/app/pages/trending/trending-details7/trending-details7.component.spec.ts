import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDetails7Component } from './trending-details7.component';

describe('TrendingDetails7Component', () => {
  let component: TrendingDetails7Component;
  let fixture: ComponentFixture<TrendingDetails7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingDetails7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDetails7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
