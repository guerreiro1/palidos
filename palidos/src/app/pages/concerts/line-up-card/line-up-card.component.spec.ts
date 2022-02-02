import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineUpCardComponent } from './line-up-card.component';

describe('LineUpCardComponent', () => {
  let component: LineUpCardComponent;
  let fixture: ComponentFixture<LineUpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineUpCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineUpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
