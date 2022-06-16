import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDetails8Component } from './trending-details8.component';

describe('TrendingDetails8Component', () => {
  let component: TrendingDetails8Component;
  let fixture: ComponentFixture<TrendingDetails8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingDetails8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDetails8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
