import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimesterDetailComponent } from './trimester-detail.component';

describe('TrimesterDetailComponent', () => {
  let component: TrimesterDetailComponent;
  let fixture: ComponentFixture<TrimesterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrimesterDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimesterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
