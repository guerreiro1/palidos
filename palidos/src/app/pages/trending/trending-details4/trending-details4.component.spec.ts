import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDetails4Component } from './trending-details4.component';

describe('TrendingDetails4Component', () => {
  let component: TrendingDetails4Component;
  let fixture: ComponentFixture<TrendingDetails4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingDetails4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDetails4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
