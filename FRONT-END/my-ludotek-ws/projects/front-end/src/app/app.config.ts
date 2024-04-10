import { ApplicationConfig } from '@angular/core';
import { provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { WithDataCustomPreloadStrategy } from 'tools-routes';
//../../../tools-routes/src/public-api

export const appConfig: ApplicationConfig = {
      providers: [
          provideRouter(routes), // TODO, mis activate route withPreloading(WithDataCustomPreloadStrategy)
          provideClientHydration() //avoid app to refrech
      ]
};
