// #1 Marks this class as an injectable service.
import { Injectable } from '@angular/core';

// #2 Authentication state service used by login screens and route guard.
@Injectable({
  // #2.1 Singleton service available app-wide.
  providedIn: 'root',
})
export class Auth {
  // #3 Stores current user in memory; null means "not logged in".
  user: { username: string } | null = null;

  // #4 Simple local login check (no backend call in this implementation).
  login(username: string, password: string): boolean {
    // #4.1 Require both fields so empty credentials are rejected.
    if (!username || !password) {
      return false;
    }

    // #4.2 Save minimal user state so guards/components know user is logged in.
    this.user = { username };
    return true;
  }

  // #5 Returns true when a user object exists.
  isAuthenticated(): boolean {
    return !!this.user;
  }

  // #6 Clears session state to log user out.
  logout(): void {
    this.user = null;
  }
}
