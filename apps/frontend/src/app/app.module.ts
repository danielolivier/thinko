import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { TranslocoRootModule } from './transloco/transloco-root.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from 'libs/ui/src/lib/components/not-found/not-found.component';
import { RestApiModule } from '@thinko/rest-api';
import { environment } from '../environments/environment';

/**
 * Routes config
 */
const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./+tarjetas/tarjetas.module').then((m) => m.TarjetasModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslocoRootModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'top' }),
    RestApiModule.forRoot({ baseUrl: environment.baseUrl }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
