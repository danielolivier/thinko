import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { TranslocoRootModule } from './transloco/transloco-root.module';

import { AppComponent } from './app.component';

/**
 * Routes config
 */
const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./+tarjetas/tarjetas.module').then((m) => m.TarjetasModule),
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
