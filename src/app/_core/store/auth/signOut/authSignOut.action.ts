import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AppState, AppStateInitial } from '../../app.state';
import { AuthRouterService } from '../../../../_shared/auth/authRouter.service';
import { AngularFireAuth } from 'angularfire2/auth';
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
               private authRouterService: AuthRouterService,
               private afAuth: AngularFireAuth) {
  }

  @Effect({dispatch: false}) cleanUp$ = this.actions$
    .ofType(AuthSignOutActionType)
    .map(action => {
      // TODO: this.logger.setAuth();
      this.authRouterService.navigateToPublicRoute();
      this.afAuth.auth
        .signOut()
        .catch(console.error);
      // TODO: return this.introduceService.cleanUpOnUserSignOut();
    });
}
