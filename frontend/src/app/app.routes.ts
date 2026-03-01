// #1 Routes type for strongly-typed Angular route definitions.
import { Routes } from '@angular/router';
// #2 Shared page layout (sidebar/header + routed content area).
import { Layout } from './layout/layout/layout';
// #3 Login screen component.
import { LoginComponent } from './components/login/login';
// #4 Dashboard page component.
import { DashboardComponent } from './components/dashboard/dashboard';
// #5 Products management page component.
import { Products } from './pages/products/products';
// #6 Guard that blocks private routes when the user is not authenticated.
import { AuthGuard } from './core/guards/auth-guard';

// #7 Application route map.
export const routes: Routes = [
  // #7.1 Public route for user authentication.
  { path: 'login', component: LoginComponent },

  {
    // #7.2 Parent route that renders the common layout for private pages.
    path: '',
    component: Layout,
    // #7.3 Protect this route tree so only logged-in users can access it.
    canActivate: [AuthGuard],
    // #7.4 Child pages shown inside Layout's router outlet.
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: Products}
    ]
  },

  // #7.5 Fallback for unknown URLs.
  { path: '**', redirectTo: 'login' }
];
