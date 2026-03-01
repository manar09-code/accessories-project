// #1 ApplicationConfig types and global browser error listener provider.
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// #2 Router provider used to register app route definitions.
import { provideRouter } from '@angular/router';

// #3 Centralized route list for navigation.
import { routes } from './app.routes';

// #4 Optional app-wide configuration object used at bootstrap time.
export const appConfig: ApplicationConfig = {
  providers: [
    // #4.1 Captures uncaught browser errors and forwards them to Angular handling.
    provideBrowserGlobalErrorListeners(),
    // #4.2 Enables URL-based navigation for the app.
    provideRouter(routes)
  ]
};
