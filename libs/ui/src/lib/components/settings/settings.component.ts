import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { CoursesService } from 'libs/rest-api/src/lib/services/courses/courses.service';
import { SessionsService } from 'libs/rest-api/src/lib/services/sessions/sessions.service';
import { Subscription } from 'rxjs';
import { Course } from '../../models/course/course';
import { EventHandlerService } from 'libs/rest-api/src/lib/services/event-handler/event-handler.service';
import { clone, isEqual } from 'lodash';

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
  private lastLangSelected: string;
  private lastCourseSelected: Course;

  private _subscriptions: Array<Subscription> = [];

  constructor(
    public _translocoService: TranslocoService,
    private coursesService: CoursesService,
    private sessionsService: SessionsService,
    private eventHandlerService: EventHandlerService
  ) {}

  ngOnInit(): void {
    this.activeLang = this._translocoService.getActiveLang();
    this.lastLangSelected = clone(this.activeLang);
    this.lastCourseSelected = clone(this.activeCourse);
    this.availableLangs = this._translocoService.getAvailableLangs();

    this._subscriptions.push(
      this.coursesService.getCourses().subscribe((courses) => {
        this.courses = courses;
      })
    );

    this._subscriptions.push(
      this.eventHandlerService.onSidenavClosed.subscribe((isSidenavClosed) => {
        if (isSidenavClosed) this.restoreValues();
      })
    );
  }

  public saveChanges(): void {
    this.lastLangSelected = clone(this.activeLang);
    this.lastCourseSelected = clone(this.activeCourse);

    this._translocoService.setActiveLang(this.activeLang);

    if (this.activeCourse) {
      this.coursesService._courseSelected.next(this.activeCourse);

      this._subscriptions.push(
        this.sessionsService
          .getSessionsByCourse(this.activeCourse.id)
          .subscribe((sessions) => {
            this.sessionsService._sessionsByCourse.next(sessions);
          })
      );
    }
  }

  private restoreValues(): void {
    if (this.activeLang != this.lastLangSelected)
      this.activeLang = clone(this.lastLangSelected);
    if (!isEqual(this.activeCourse, this.lastCourseSelected)) {
      this.activeCourse = clone(this.lastCourseSelected);
    }
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
