import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniInfoCardComponent } from './mini-info-card.component';

describe('MiniInfoCardComponent', () => {
  let component: MiniInfoCardComponent;
  let fixture: ComponentFixture<MiniInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
