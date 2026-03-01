// #1 Bootstrap helper for starting a standalone Angular application.
import { bootstrapApplication } from '@angular/platform-browser';
// #2 Registers application routes so Router can render pages by URL.
import { provideRouter } from '@angular/router';
// #3 Registers HttpClient globally so services can call backend APIs.
import { provideHttpClient } from '@angular/common/http';
// #4 Root component that Angular mounts at app startup.
import { App } from './app/app';
// #5 Route definitions used by provideRouter(...).
import { routes } from './app/app.routes';

// #6 Entry point: start the app with router and HTTP providers.
bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
// #7 Catch and log startup failures (for example, invalid configuration).
}).catch(err => console.error(err));
