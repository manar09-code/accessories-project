// #1 Angular component decorator.
import { Component } from '@angular/core';
// #2 FormsModule enables two-way binding like [(ngModel)] in the login form.
import { FormsModule } from '@angular/forms';
// #3 CommonModule enables common directives in the template.
import { CommonModule } from '@angular/common';
// #4 Router is used to navigate after successful login.
import { Router } from '@angular/router';
// #5 Auth service validates credentials and stores auth state.
import { Auth } from '../../services/auth';

// #6 Login page component.
@Component({
  // #6.1 Standalone component that imports its own dependencies.
  standalone:true,
  // #6.2 CommonModule for template directives, FormsModule for form binding.
  imports:[CommonModule,FormsModule],
  // #6.3 Template and styles used by this login component.
  templateUrl:'./login.html',
  styleUrls:['./login.css']
})
export class LoginComponent {
  // #7 Bound to username input.
  username = '';
  // #8 Bound to password input.
  password = '';
  // #9 Displays validation/authentication message in the UI.
  errorMessage = '';
  // #10 Prevents duplicate submits while a login attempt is in progress.
  isSubmitting = false;

  // #11 Inject services needed for auth check and page redirection.
  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  // #12 Handles login button submit.
  login() {
    // #12.1 Guard against accidental repeated clicks.
    if (this.isSubmitting) {
      return;
    }

    // #12.2 Reset previous error and lock submit.
    this.errorMessage = '';
    this.isSubmitting = true;

    // #12.3 Call auth service with trimmed username.
    const success = this.auth.login(this.username.trim(), this.password);

    // #12.4 Show message and unlock form when credentials are invalid.
    if (!success) {
      this.errorMessage = 'Please enter a valid username and password.';
      this.isSubmitting = false;
      return;
    }

    // #12.5 Redirect authenticated user to dashboard.
    this.router.navigate(['/dashboard']);
  }
}
