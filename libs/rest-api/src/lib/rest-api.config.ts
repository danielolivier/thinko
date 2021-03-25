import { InjectionToken } from '@angular/core';

export interface RestApiConfig {
  baseUrl: string;
}

export const RestApiConfigService = new InjectionToken<RestApiConfig>(
  'RestApiConfig'
);
