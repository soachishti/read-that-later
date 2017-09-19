import {
  AuthSignInWithPasswordAction,
  AuthSignInWithPasswordActionHandler,
  AuthSignInWithPasswordActionType
} from './authSignInWithPassword.action';
import { CoreState } from '../../core.state';

describe('authSignInWithPassword.action.ts', () => {
  const credentials = {email: 'login', password: 'password'};

  describe('Action', () => {
    let action: AuthSignInWithPasswordAction;
    beforeEach(() => {
      action = new AuthSignInWithPasswordAction(credentials);
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(AuthSignInWithPasswordActionType);
    });

    it('should have proper payload', () => {
      expect(action.payload).toEqual(credentials);
    });
  });

  describe('Handler', () => {
    it('should set "state.core.auth.isInProgress" to "true"', () => {
      const oldState: CoreState = {
        auth: {
          isInProgress: false
        }
      };
      const newState = AuthSignInWithPasswordActionHandler(oldState,
        new AuthSignInWithPasswordAction(credentials));
      const expectedState = {
        auth: {
          isInProgress: true,
          provider: 'password'
        }
      };
      expect(newState).toEqual(expectedState as any);
    });
    it('should set "state.core.auth.isInProgress" to "true"', () => {
      const oldState: CoreState = {
        auth: {
          isInProgress: false,
          failDetails: {
            code: 'test',
            message: 'test'
          }
        }
      };
      const newState = AuthSignInWithPasswordActionHandler(oldState,
        new AuthSignInWithPasswordAction(credentials));
      const expectedState = {
        auth: {
          isInProgress: true,
          provider: 'password'
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
          provider: 'password',
          isInProgress: true
        },
        items: [1, 2, 3],
        tags: [1, 2, 3]
      };
      const newState = AuthSignInWithPasswordActionHandler(oldState,
        new AuthSignInWithPasswordAction(credentials));
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
