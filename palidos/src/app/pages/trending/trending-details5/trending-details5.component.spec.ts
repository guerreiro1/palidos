import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDetails5Component } from './trending-details5.component';

describe('TrendingDetails5Component', () => {
  let component: TrendingDetails5Component;
  let fixture: ComponentFixture<TrendingDetails5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingDetails5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDetails5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
