import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestApiConfig, RestApiConfigService } from './rest-api.config';

@NgModule({
  imports: [CommonModule],
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
