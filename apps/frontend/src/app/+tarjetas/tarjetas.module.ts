import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { UiModule } from '@thinko/ui';

import { TarjetasComponent } from './views/tarjetas/tarjetas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tarjetas',
        component: TarjetasComponent,
      },
      {
        path: '',
        redirectTo: 'tarjetas',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [TarjetasComponent],
  imports: [CommonModule, RouterModule.forChild(routes), UiModule],
})
export class TarjetasModule {}
