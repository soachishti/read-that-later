import { Action } from '@ngrx/store';
import { CoreState } from '../../core.state';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthSignInFailedAction } from '../signInFailed/authSignInFailed.action';
import { pick } from 'lodash';
export const AuthSignInWithGoogleActionType = 'AUTH_SIGN_IN_WITH_GOOGLE';

export class AuthSignInWithGoogleAction implements Action {
  readonly type = AuthSignInWithGoogleActionType;
}

export const AuthSignInWithGoogleActionHandler = (state: CoreState,
                                                  action: AuthSignInWithGoogleAction) => {
  const auth = Object.assign({}, state.auth, {
    isInProgress: true,
    provider: 'google'
  });
  delete(auth.failDetails);
  return Object.assign({}, state, {auth});
};

@Injectable()
export class AuthSignInWithGoogleActionEffect {

  constructor (private actions$: Actions,
               private afAuth: AngularFireAuth) {
  }

  @Effect() startSignIn$ = this.actions$
    .ofType(AuthSignInWithGoogleActionType)
    .switchMap((action: AuthSignInWithGoogleAction) => {
      const signInWithPopupPromise = this.afAuth.auth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());
      return Observable.fromPromise(signInWithPopupPromise)
        .catch(error => Observable.of(error))
        .filter(error => error instanceof Error)
        .do(error => console.warn('Sign in with Google - Error:', error))
        .map(errorData => {
          const fields = ['code', 'message'];
          const failDetails = pick<{ code: string, message: string }, Error>(errorData, fields);
          return new AuthSignInFailedAction(failDetails);
        })
        .do(data => console.warn('Sign in with Google - Error handler action:', data));
    });
}
