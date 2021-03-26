import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SessionsService } from 'libs/rest-api/src/lib/services/sessions/sessions.service';
import { cloneDeep } from 'lodash';
import { Session } from '../../models/session/session';

@Component({
  selector: 'thinko-mini-info-card',
  templateUrl: './mini-info-card.component.html',
  styleUrls: ['./mini-info-card.component.scss'],
})
export class MiniInfoCardComponent implements OnInit {
  @Input()
  public title: string;

  @Input('sessions')
  set sessions(sessions: Array<Session>) {
    this._sessions = sessions;
    this.calculateSeenSession();
  }

  get sessions() {
    return this._sessions;
  }

  @Input()
  public clickable: boolean;

  @Output()
  public onClick = new EventEmitter();

  private _sessions: Array<Session>;
  public seenSessions: Array<Session> = [];

  constructor(private sessionsService: SessionsService) {}

  ngOnInit(): void {}

  private calculateSeenSession() {
    if (this.sessions)
      this.seenSessions = cloneDeep(this.sessions).filter((s) => s.seen);
  }
}
