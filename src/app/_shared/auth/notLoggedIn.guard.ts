import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthRouterService } from './authRouter.service';
import { AppState } from '../../_core/store/app.state';
import { Store } from '@ngrx/store';

@Injectable()
export class NotLoggedInGuard implements CanActivate {

  constructor (private store: Store<AppState>,
               private authRouterService: AuthRouterService) {
  }

  canActivate () {
    const isLoggedIn$ = this.store
      .select(s => s.core.auth.user)
      .take(1)
      .map(user => !user);
    isLoggedIn$
      .filter(isSignedIn => !isSignedIn)
      .do(() => this.authRouterService.navigateToSignedInRoute())
      .subscribe();
    return isLoggedIn$;
  }
}
