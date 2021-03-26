import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RestApiConfig, RestApiConfigService } from './rest-api.config';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
})
export class RestApiModule {
  static forRoot(config: RestApiConfig): ModuleWithProviders<RestApiModule> {
    return {
      ngModule: RestApiModule,
      providers: [
        {
          provide: RestApiConfigService,
          useValue: config,
        },
      ],
    };
  }
}
