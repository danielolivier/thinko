import { Inject, Injectable } from '@angular/core';
import { RestApiConfig, RestApiConfigService } from '../../rest-api.config';
import { ApiEndpointTypes, URL_DICTIONARY } from './url-generator';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  constructor(
    @Inject(RestApiConfigService) private readonly config: RestApiConfig
  ) {}

  public generateUrl(url: ApiEndpointTypes): string {
    const endpoint = URL_DICTIONARY[url];
    return `${this.config.baseUrl}/${endpoint.urlFn()}`;
  }
}
