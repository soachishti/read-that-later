import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoggedInGuard } from '../_shared/auth/loggedIn.guard';
import { NotLoggedInGuard } from '../_shared/auth/notLoggedIn.guard';
import { SignedInComponent } from './signed-in/signed-in.component';
export const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    path: '',
    component: SignedInComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'items',
        loadChildren: '../items/items.module#ItemsModule',
      },
      {
        path: 'tags',
        loadChildren: '../tags/tags.module#TagsModule',
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
