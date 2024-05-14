import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

//test01-06

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
