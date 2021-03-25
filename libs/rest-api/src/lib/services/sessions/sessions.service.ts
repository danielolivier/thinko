import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiDataService } from '../api/api-data.service';
import { ApiEndpointTypes } from '../api/url-generator';

@Injectable({
  providedIn: 'root',
})
export class SessionsService {
  constructor(
    private _http: HttpClient,
    private apiDataService: ApiDataService
  ) {}

  public getSessionsByCourse(courseId: string): Observable<any> {
    return this._http.get(
      this.apiDataService.generateUrl(ApiEndpointTypes.SESSIONS) +
        `/?courseId=${courseId}`
    );
  }
}
