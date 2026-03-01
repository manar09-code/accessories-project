// #1 Angular component decorator.
import { Component } from '@angular/core';
// #2 CommonModule provides common template directives.
import { CommonModule } from '@angular/common';
// #3 FormsModule enables two-way data binding for form fields.
import { FormsModule } from '@angular/forms';
// #4 Router is used for navigation after login.
import { Router } from '@angular/router';
// #5 Auth service handles login state.
import { Auth } from '../../services/auth';

// #6 Simple login page component.
@Component({
  // #6.1 Component selector.
  selector: 'app-login',
  // #6.2 Standalone component with direct module imports.
  standalone: true,
  // #6.3 CommonModule for directives, FormsModule for ngModel form bindings.
  imports: [CommonModule, FormsModule],
  // #6.4 Template and style files.
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // #7 Username entered by the user.
  username = '';
  // #8 Password entered by the user.
  password = '';
  // #9 Error message shown when login fails.
  errorMessage = '';

  // #10 Inject authentication and navigation services.
  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  // #11 Attempts login and redirects to dashboard on success.
  login(): void {
    const success = this.auth.login(this.username.trim(), this.password);
    if (!success) {
      this.errorMessage = 'Please enter a valid username and password.';
      return;
    }

    this.router.navigate(['/dashboard']);
  }
}
