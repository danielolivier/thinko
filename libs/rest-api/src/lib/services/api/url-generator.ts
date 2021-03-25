export enum ApiEndpointTypes {
  COURSES,
  SESSIONS,
}

export enum UrlTypes {
  STATIC,
}

export class ApiUrl {
  constructor(type: UrlTypes, urlFn: () => string);
  constructor(public type: UrlTypes, public urlFn: (args?: any) => string) {}
}

export const URL_DICTIONARY: { [index: number]: ApiUrl } = {
  [ApiEndpointTypes.COURSES]: new ApiUrl(UrlTypes.STATIC, () => 'courses'),
  [ApiEndpointTypes.SESSIONS]: new ApiUrl(UrlTypes.STATIC, () => 'sessions'),
};
