// #1 Marks this class as an injectable Angular service.
import { Injectable } from '@angular/core';

// #2 Placeholder core auth service (methods are intentionally not implemented yet).
@Injectable({
  // #2.1 Register as a root-level singleton.
  providedIn: 'root',
})
export class Auth {
  // #3 Stub login method kept for future implementation.
  login(username: string, password: string) {
    throw new Error('Method not implemented.');
  }
  // #4 Stub auth-state check method kept for future implementation.
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }
}
