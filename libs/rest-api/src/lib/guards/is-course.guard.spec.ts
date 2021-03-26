import { TestBed } from '@angular/core/testing';

import { IsCourseGuard } from './is-course.guard';

describe('IsCourseGuard', () => {
  let guard: IsCourseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsCourseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
