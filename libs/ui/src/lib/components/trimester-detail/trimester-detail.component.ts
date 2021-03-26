import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Session } from '../../models/session/session';
import { SessionsService } from 'libs/rest-api/src/lib/services/sessions/sessions.service';
import { cloneDeep, concat } from 'lodash';

@Component({
  selector: 'thinko-trimester-detail',
  templateUrl: './trimester-detail.component.html',
  styleUrls: ['./trimester-detail.component.scss'],
})
export class TrimesterDetailComponent implements OnInit {
  @Input()
  public title: string | number;

  @Input('sessions')
  set sessions(sessions: Array<Session>) {
    this._sessions = sessions;
    this.trimesterSessions = sessions.filter((s) => s.trimester == this.title);
    this.seenSessions = sessions.filter(
      (s) => s.seen && s.trimester == this.title
    );
  }

  get sessions() {
    return this._sessions;
  }

  @Output()
  public openDialog = new EventEmitter();

  private _sessions: Array<Session>;
  public seenSessions: Array<Session>;
  public trimesterSessions: Array<Session>;
  public activeSession: Session;

  constructor(
    public _translocoService: TranslocoService,
    private sessionsService: SessionsService
  ) {}

  ngOnInit(): void {}

  public seenSession(session: Session, isSeen: boolean): void {
    session.seen = isSeen;
    this.sessionsService._sessionsByCourse.next(
      concat(
        this.sessions.filter(
          (s) => this.trimesterSessions.findIndex((tS) => tS.id === s.id) === -1
        ),
        this.trimesterSessions
      )
    );
  }
}
