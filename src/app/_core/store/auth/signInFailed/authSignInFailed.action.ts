import { Action } from '@ngrx/store';
import { CoreState } from '../../core.state';
import { AuthSignInFailDetails } from './authSignInFailDetails.type';
export const AuthSignInFailedActionType = 'AUTH_SIGN_IN_FAILED';

export class AuthSignInFailedAction implements Action {
  readonly type = AuthSignInFailedActionType;

  constructor (public payload: AuthSignInFailDetails) {
  }
}

export const AuthSignInFailedActionHandler = (state: CoreState,
                                              action: AuthSignInFailedAction) => {
  const auth = Object.assign({}, state.auth, {
    isInProgress: false,
    failDetails: action.payload
  });
  return Object.assign({}, state, {auth});
};
