import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { CoursesService } from 'libs/rest-api/src/lib/services/courses/courses.service';
import { Subscription } from 'rxjs';
import { Course } from '../../models/course/course';

@Component({
  selector: 'thinko-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  @Output()
  public closeSettings = new EventEmitter();

  public activeLang: string;
  public availableLangs: AvailableLangs;
  public activeCourse: Course;
  public courses: Array<Course>;

  private _subscriptions: Array<Subscription> = [];

  constructor(
    private _translocoService: TranslocoService,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.activeLang = this._translocoService.getActiveLang();
    this.availableLangs = this._translocoService.getAvailableLangs();

    this._subscriptions.push(
      this.coursesService.getCourses().subscribe((courses) => {
        this.activeCourse = courses[0]; // We'll set course with id=1 as default chosen
        this.coursesService._courseSelected.next(this.activeCourse);
        this.courses = courses;
      })
    );
  }

  public setActiveLang(lang: string): void {
    this._translocoService.setActiveLang(lang);
  }

  public saveChanges(): void {}

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
