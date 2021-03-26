import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiDataService } from '../api/api-data.service';
import { ApiEndpointTypes } from '../api/url-generator';
import { Session } from 'libs/ui/src/lib/models/session/session';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  constructor(
    private _http: HttpClient,
    private apiDataService: ApiDataService
  ) {}

  public _sessionsByCourse: Subject<Array<Session>> = new BehaviorSubject<
    Array<Session>
  >(null);

  get sessionsByCourse() {
    return this._sessionsByCourse.asObservable();
  }

  public getSessionsByCourse(courseId: string): Observable<any> {
    return this._http.get(
      this.apiDataService.generateUrl(ApiEndpointTypes.SESSIONS) +
        `/?courseId=${courseId}`
    );
  }
}
