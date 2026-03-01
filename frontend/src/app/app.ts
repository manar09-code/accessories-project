// #1 Angular decorator used to define this class as a UI component.
import { Component } from '@angular/core';
// #2 RouterOutlet is the placeholder where routed pages are displayed.
import { RouterOutlet } from '@angular/router';

// #3 Root component configuration for the entire frontend application.
@Component({
  // #3.1 HTML tag used to mount the root component in index.html.
  selector: 'app-root',
  // #3.2 Standalone means this component does not need an NgModule.
  standalone: true,
  // #3.3 Import RouterOutlet so child route components can render here.
  imports: [RouterOutlet],
  // #3.4 Template and styles used by this component.
  templateUrl: './app.html',
  styleUrl: './app.css',
})
// #4 Root shell component. It mostly hosts the router outlet.
export class App {}
