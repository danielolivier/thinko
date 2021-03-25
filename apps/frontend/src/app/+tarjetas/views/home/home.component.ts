import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoursesService } from 'libs/rest-api/src/lib/services/courses/courses.service';
import { SessionsService } from 'libs/rest-api/src/lib/services/sessions/sessions.service';
import { Subscription } from 'rxjs';
import { Session } from 'libs/ui/src/lib/models/session/session';

@Component({
  selector: 'thinko-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  private firstTrimester: Array<Session>;
  private secondTrimester: Array<Session>;
  private thirdTrimester: Array<Session>;

  constructor(
    private coursesService: CoursesService,
    private sessionsService: SessionsService
  ) {}

  ngOnInit(): void {
    this._subscriptions.push(
      this.coursesService.courseSelected.subscribe((course) => {
        if (course) {
          this.getAllSessionsByCourse(course.id);
        }
      })
    );
  }

  private getAllSessionsByCourse(courseId: string): void {
    this._subscriptions.push(
      this.sessionsService
        .getSessionsByCourse(courseId)
        .subscribe((sessions) => {
          this.firstTrimester = sessions.filter((s) => s.trimester === 1);
          this.secondTrimester = sessions.filter((s) => s.trimester === 2);
          this.thirdTrimester = sessions.filter((s) => s.trimester === 3);
        })
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
