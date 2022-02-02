import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDetails2Component } from './music-details2.component';

describe('MusicDetails2Component', () => {
  let component: MusicDetails2Component;
  let fixture: ComponentFixture<MusicDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicDetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
