import { Action } from '@ngrx/store';
import { CoreState } from '../../core.state';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthSignInFailedAction } from '../signInFailed/authSignInFailed.action';
import { pick } from 'lodash';
export const AuthSignInWithPasswordActionType = 'AUTH_SIGN_IN_WITH_PASSWORD';

export class AuthSignInWithPasswordAction implements Action {
  readonly type = AuthSignInWithPasswordActionType;

  constructor (public payload: { email: string, password: string }) {
  }
}

export const AuthSignInWithPasswordActionHandler = (state: CoreState,
                                                    action: AuthSignInWithPasswordAction) => {
  const auth = Object.assign({}, state.auth, {
    isInProgress: true,
    provider: 'password'
  });
  delete(auth.failDetails);
  return Object.assign({}, state, {auth});
};

@Injectable()
export class AuthSignInWithPasswordActionEffect {

  constructor (private actions$: Actions,
               private afAuth: AngularFireAuth) {
  }

  @Effect() startSignIn$ = this.actions$
    .ofType(AuthSignInWithPasswordActionType)
    .switchMap((action: AuthSignInWithPasswordAction) => {
      const signInWithPasswordPromise = this.afAuth.auth
        .signInWithEmailAndPassword(action.payload.email, action.payload.password);
      return Observable.fromPromise(signInWithPasswordPromise)
        .catch(error => Observable.of(error))
        .filter(error => error instanceof Error)
        .do(error => console.warn('Sign in with Password - Error:', error))
        .map(errorData => {
          const fields = ['code', 'message'];
          const failDetails = pick<{ code: string, message: string }, Error>(errorData, fields);
          return new AuthSignInFailedAction(failDetails);
        })
        .do(data => console.warn('Sign in with Password - Error handler action:', data));
    });
}
