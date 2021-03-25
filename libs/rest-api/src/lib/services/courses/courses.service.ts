import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiDataService } from '../api/api-data.service';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ApiEndpointTypes } from '../api/url-generator';
import { Course } from 'libs/ui/src/lib/models/course/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(
    private _http: HttpClient,
    private apiDataService: ApiDataService
  ) {}

  public _courseSelected: Subject<Course> = new BehaviorSubject<Course>(null);

  get courseSelected() {
    return this._courseSelected.asObservable();
  }

  public getCourses(): Observable<any> {
    return this._http.get(
      this.apiDataService.generateUrl(ApiEndpointTypes.COURSES)
    );
  }
}
