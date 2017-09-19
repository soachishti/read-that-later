import * as firebase from 'firebase/app';
import { AuthSignInFailDetails } from './auth/signInFailed/authSignInFailDetails.type';
export interface CoreState {
  auth: {
    user?: firebase.UserInfo;
    provider?: 'google' | 'password'
    isInProgress?: boolean,
    failDetails?: AuthSignInFailDetails
  };
  items?: any[];
  tags?: any[];
}

export const CoreStateInitial: CoreState = {
  auth: {
    isInProgress: false
  }
};
