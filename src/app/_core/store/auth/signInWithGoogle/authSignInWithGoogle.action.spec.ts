import {
  AuthSignInWithGoogleAction,
  AuthSignInWithGoogleActionHandler,
  AuthSignInWithGoogleActionType
} from './authSignInWithGoogle.action';
import { CoreState } from '../../core.state';

describe('authSignInWithGoogle.action.ts', () => {

  describe('Action', () => {
    let action: AuthSignInWithGoogleAction;
    beforeEach(() => {
      action = new AuthSignInWithGoogleAction();
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(AuthSignInWithGoogleActionType);
    });

    it('should have no payload', () => {
      expect(action['payload']).toEqual(undefined);
    });
  });

  describe('Handler', () => {
    it('should set "state.core.auth.isInProgress" to "true"', () => {
      const oldState = {
        auth: {
          isInProgress: false
        }
      };
      const newState = AuthSignInWithGoogleActionHandler(oldState,
        new AuthSignInWithGoogleAction());
      const expectedState = {
        auth: {
          isInProgress: true,
          provider: 'google'
        }
      };
      expect(newState).toEqual(expectedState as any);
    });
    it('should set "state.core.auth.failDetails" to "undefined"', () => {
      const oldState: CoreState = {
        auth: {
          isInProgress: false,
          failDetails: {
            code: 'test',
            message: 'test'
          }
        }
      };
      const newState = AuthSignInWithGoogleActionHandler(oldState,
        new AuthSignInWithGoogleAction());
      const expectedState = {
        auth: {
          isInProgress: true,
          provider: 'google'
        }
      };
      expect(newState).toEqual(expectedState as any);
    });
    it('should update only "state.core.auth.isInProgress" property', () => {
      const oldState = {
        auth: {
          provider: undefined,
          isInProgress: false
        },
        items: [1, 2, 3],
        tags: [1, 2, 3]
      };
      const expectedState = {
        auth: {
          provider: 'google',
          isInProgress: true
        },
        items: [1, 2, 3],
        tags: [1, 2, 3]
      };
      const newState = AuthSignInWithGoogleActionHandler(oldState,
        new AuthSignInWithGoogleAction());
      expect(newState).toEqual(expectedState as any);
    });
  });

  // TODO: https://github.com/spy4x/read-that-later/issues/24
  // describe('Effect', () => {
  //   let effects: AuthSignInWithGoogleActionEffect;
  //   let actions: Observable<any>;
  //   let angularFireAuth: AngularFireAuth;
  //   const error2 = new Error();
  //   error2['code'] = 'test code';
  //   error2['message'] = 'test message';
  //   const angularFireAuthMock: any = {
  //     auth: {
  //       signInWithPopup: () => {
  //         console.error('angularFireAuthMock - signInWithPopup');
  //         return Promise.reject(error2);
  //       }
  //     }
  //   };
  //
  //   beforeEach(() => {
  //     TestBed.configureTestingModule({
  //       providers: [
  //         AuthSignInWithGoogleActionEffect,
  //         {provide: AngularFireAuth, useValue: angularFireAuthMock},
  //         provideMockActions(() => actions)
  //       ],
  //     });
  //     effects = TestBed.get(AuthSignInWithGoogleActionEffect);
  //     angularFireAuth = TestBed.get(AngularFireAuth);
  //   });
  //
  //   // it('should return rejected promise', (done) => {
  //   //   angularFireAuth.auth.signInWithPopup(new
  // firebase.auth.GoogleAuthProvider()) //     .then(done) //     .catch(error
  // => { //       expect(error['code']).toEqual('test code'); //
  // expect(error['message']).toEqual('test message'); //       done(); //
  // }); // });  it('should emit AuthSignInFailed on fail', () => { actions =
  // hot('--a-', {a: new AuthSignInWithGoogleAction()}); const expected =
  // cold('-----b', { b: new AuthSignInFailedAction({ code: 'test code',
  // message: 'test message' }) });
  // expect(effects.startSignIn$).toBeObservable(expected); }); });
});
