import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDetails3Component } from './music-details3.component';

describe('MusicDetails3Component', () => {
  let component: MusicDetails3Component;
  let fixture: ComponentFixture<MusicDetails3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicDetails3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
