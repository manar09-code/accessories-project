// #1 `inject` lets functional guards resolve dependencies without a class constructor.
import { inject } from '@angular/core';
// #2 CanActivateFn is the function type for route access guards.
import { CanActivateFn, Router } from '@angular/router';
// #3 Auth service provides current authentication state.
import { Auth } from '../../services/auth';

// #4 Route guard that allows protected routes only for authenticated users.
export const AuthGuard: CanActivateFn = () => {
  // #4.1 Resolve required services inside the guard function.
  const auth = inject(Auth);
  const router = inject(Router);

  // #4.2 Redirect anonymous users to login and block route activation.
  if (!auth.isAuthenticated()) {
    router.navigate(['/login']);
    return false;
  }

  // #4.3 Allow navigation when user is authenticated.
  return true;
};
