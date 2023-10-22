import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appRoutes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { USERS_FEATURE_KEY, userReducer } from './users/data-access/+state/users.reducer';
import { UsersEffects } from './users/data-access/+state/users.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(
      UsersEffects
    ),
    provideStore({
      [USERS_FEATURE_KEY]: userReducer 
    }),
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
  }),

  ],
};
