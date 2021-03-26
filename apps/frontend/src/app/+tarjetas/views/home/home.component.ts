import { Component, OnDestroy, OnInit } from '@angular/core';
import { SessionsService } from 'libs/rest-api/src/lib/services/sessions/sessions.service';
import { Observable, of, Subscription } from 'rxjs';
import { Session } from 'libs/ui/src/lib/models/session/session';
import { Router } from '@angular/router';

@Component({
  selector: 'thinko-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private _subscriptions: Array<Subscription> = [];

  public sessions: Observable<Array<Array<Session>>>;

  constructor(
    private sessionsService: SessionsService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._subscriptions.push(
      this.sessionsService.sessionsByCourse.subscribe((sessionsByCourse) => {
        if (sessionsByCourse)
          this.sessions = of([
            sessionsByCourse.filter((s) => s.trimester === 1),
            sessionsByCourse.filter((s) => s.trimester === 2),
            sessionsByCourse.filter((s) => s.trimester === 3),
          ]);
      })
    );
  }

  public goToTrimesterDetail(trimesterId: number) {
    this._router.navigate([trimesterId, 'detail']);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
