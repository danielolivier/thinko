import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { CoursesService } from '../services/courses/courses.service';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root',
})
export class IsCourseGuard implements CanActivate {
  constructor(
    private coursesSerive: CoursesService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _translocoService: TranslocoService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.coursesSerive.courseSelected.pipe(
      first(),
      map((courseSelected) => {
        if (!courseSelected) {
          this._translocoService.selectTranslation('es').subscribe(() => {
            this._snackBar.open(
              this._translocoService.translate('SHARED.GUARD_MESSAGE'),
              this._translocoService.translate('SHARED.GOT_IT'),
              {
                duration: 3000,
                panelClass: 'error',
              }
            );
          });
          this._router.navigate(['/']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
