import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDetails2Component } from './trending-details2.component';

describe('TrendingDetails2Component', () => {
  let component: TrendingDetails2Component;
  let fixture: ComponentFixture<TrendingDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingDetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
