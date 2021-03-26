import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'libs/rest-api/src/lib/services/courses/courses.service';
import { SessionsService } from 'libs/rest-api/src/lib/services/sessions/sessions.service';
import { DialogAcceptComponent } from 'libs/ui/src/lib/components/dialog-accept/dialog-accept.component';
import { Course } from 'libs/ui/src/lib/models/course/course';
import { Session } from 'libs/ui/src/lib/models/session/session';
import { forkJoin, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'thinko-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  constructor(
    private _router: Router,
    public _dialog: MatDialog,
    public _activatedRoute: ActivatedRoute,
    private sessionsService: SessionsService
  ) {}

  public trimesterId: string | number;
  public sessions: Observable<Array<Session>>;
  public trimesterSessions: Observable<Array<Session>>;

  private _subscriptions: Array<Subscription> = [];

  ngOnInit(): void {
    this.trimesterId = this._activatedRoute.snapshot.paramMap.get(
      'trimesterId'
    );

    this._subscriptions.push(
      this.sessionsService.sessionsByCourse.subscribe(
        (sessions: Array<Session>) => {
          this.sessions = of(sessions);
          this.trimesterSessions = of(
            sessions.filter((s) => s.trimester == this.trimesterId)
          );
        }
      )
    );
  }

  public goToHomepage(): void {
    this._router.navigate(['/home']);
  }

  public onOpenDialog(): void {
    const dialogRef = this._dialog.open(DialogAcceptComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100vw',
    });
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
