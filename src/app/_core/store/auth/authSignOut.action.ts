import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AppState, AppStateInitial } from '../app.state';
import { AuthRouterService } from '../../../_shared/auth/authRouter.service';
export const AuthSignOutActionType = 'AUTH_SIGN_OUT';

export class AuthSignOutAction implements Action {
  readonly type = AuthSignOutActionType;

  constructor () {
  }
}

export const AuthSignOutActionHandler = (state: AppState,
                                         action: AuthSignOutAction) => {
  return Object.assign({}, AppStateInitial);
};

@Injectable()
export class AuthSignOutActionEffect {

  constructor (private actions$: Actions,
               private authRouterService: AuthRouterService) {
  }

  @Effect({dispatch: false}) cleanUp$ = this.actions$
    .ofType(AuthSignOutActionType)
    .map(action => {
      console.log('User signed out');
      // TODO: this.logger.setAuth();
      // TODO: this.auth.signOut();
      this.authRouterService.navigateToPublicRoute();
      localStorage.removeItem('user');
      // TODO: return this.introduceService.cleanUpOnUserSignOut();
    });
}
