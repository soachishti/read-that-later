import {
  AuthSignInFailedAction,
  AuthSignInFailedActionHandler,
  AuthSignInFailedActionType
} from './authSignInFailed.action';
import { CoreState } from '../../core.state';
import { AuthSignInFailDetails } from './authSignInFailDetails.type';

describe('authSignInFailed.action.ts', () => {
  const failDetails: AuthSignInFailDetails = {
    code: 'wrong login/password',
    message: 'There is no account with provided login & password'
  };
  describe('Action', () => {
    let action: AuthSignInFailedAction;
    beforeEach(() => {
      action = new AuthSignInFailedAction(failDetails);
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(AuthSignInFailedActionType);
    });

    it('should have proper payload', () => {
      expect(action.payload).toEqual(failDetails);
    });
  });

  describe('Handler', () => {
    it('should set "isInProgress" to false and add "failDetails"', () => {
      const oldState: CoreState = {
        auth: {
          provider: 'google',
          isInProgress: true
        }
      };
      const newState = AuthSignInFailedActionHandler(
        oldState, new AuthSignInFailedAction(failDetails));
      const expectedState: CoreState = {
        auth: {
          provider: 'google',
          isInProgress: false,
          failDetails: failDetails
        }
      };
      expect(newState).toEqual(expectedState as any);
    });
  });
});
