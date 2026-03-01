// #1 Angular component decorator.
import { Component } from '@angular/core';
// #2 CommonModule enables structural directives like *ngIf and *ngFor in template.
import { CommonModule } from '@angular/common';
// #3 Router utilities for links/navigation in the layout shell.
import { Router, RouterModule } from '@angular/router';
// #4 Authentication service used to clear user session on logout.
import { Auth } from '../../services/auth';

// #5 Layout component used as a wrapper around protected pages.
@Component({
  // #5.1 Component selector.
  selector: 'app-layout',
  // #5.2 HTML template and CSS for the layout shell.
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  // #5.3 Standalone component imports required Angular modules directly.
  standalone: true,
  // #5.4 CommonModule for template directives, RouterModule for routerLink/router-outlet support.
  imports: [CommonModule, RouterModule]
})
export class Layout {
  // #6 Tracks whether sidebar is collapsed in the UI.
  collapsed = false;
  // #7 Tracks whether light theme is active.
  lightMode = false;

  // #8 Inject auth service for logout and router for navigation.
  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  // #9 Toggles sidebar open/closed state.
  toggleSidebar(): void {
    this.collapsed = !this.collapsed;
  }

  // #10 Toggles light theme and updates the global body CSS class.
  toggleTheme(): void {
    this.lightMode = !this.lightMode;
    document.body.classList.toggle('light-mode', this.lightMode);
  }

  // #11 Logs out the current user and redirects to login page.
  logout(): void {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
