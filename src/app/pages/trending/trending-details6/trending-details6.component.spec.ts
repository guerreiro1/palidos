import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDetails6Component } from './trending-details6.component';

describe('TrendingDetails6Component', () => {
  let component: TrendingDetails6Component;
  let fixture: ComponentFixture<TrendingDetails6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingDetails6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingDetails6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
