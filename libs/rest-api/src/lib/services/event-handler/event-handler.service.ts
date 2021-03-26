import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventHandlerService {
  public _onSidenavClose: Subject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  get onSidenavClosed() {
    return this._onSidenavClose.asObservable();
  }

  constructor() {}
}
