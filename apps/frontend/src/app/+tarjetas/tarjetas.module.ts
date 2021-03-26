import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';

import { IsCourseGuard, RestApiModule } from '@thinko/rest-api';
import { UiModule } from '@thinko/ui';
import { TranslocoModule } from '@ngneat/transloco';

import { TarjetasComponent } from './views/tarjetas/tarjetas.component';
import { HomeComponent } from './views/home/home.component';
import { DetailComponent } from './views/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: TarjetasComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: ':trimesterId/detail',
        canActivate: [IsCourseGuard],
        component: DetailComponent,
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [TarjetasComponent, HomeComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    UiModule,
    TranslocoModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
  ],
})
export class TarjetasModule {}
