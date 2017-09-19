import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthRouterService } from './authRouter.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../_core/store/app.state';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor (private store: Store<AppState>,
               private authRouterService: AuthRouterService) {
  }

  canActivate () {
    return this.store
      .select(s => s.core.auth.user)
      .take(1)
      .map(user => !!user)
      .do(isSignedIn => {
        if (!isSignedIn) {
          this.authRouterService.navigateToPublicRoute();
        }
      });
  }
}
