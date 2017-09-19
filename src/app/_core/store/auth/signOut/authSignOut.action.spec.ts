import {
  AuthSignOutAction,
  AuthSignOutActionHandler,
  AuthSignOutActionType
} from './authSignOut.action';
import { AppStateInitial } from '../../app.state';
import { testUser } from '../signedIn/authSignedIn.action.spec';

describe('authSignOut.action.ts', () => {
  describe('Action', () => {
    let action: AuthSignOutAction;
    beforeEach(() => {
      action = new AuthSignOutAction();
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(AuthSignOutActionType);
    });

    it('should have no payload', () => {
      expect(action['payload']).toEqual(undefined);
    });
  });

  describe('Handler', () => {
    it('should return state to initial shape', () => {
      expect(AuthSignOutActionHandler(
        {core: {auth: {user: testUser}}},
        new AuthSignOutAction()))
        .toEqual(AppStateInitial);
    });
  });
});
