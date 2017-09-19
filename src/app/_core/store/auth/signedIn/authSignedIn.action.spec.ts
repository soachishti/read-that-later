import {
  AuthSignedInAction,
  AuthSignedInActionEffect,
  AuthSignedInActionHandler,
  AuthSignedInActionType
} from './authSignedIn.action';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';
import { ItemsLoadedAction } from '../../items/loaded/itemsLoaded.action';
import { AuthRouterService } from '../../../../_shared/auth/authRouter.service';
import { RouterTestingModule } from '@angular/router/testing';
import { TagsLoadedAction } from '../../tags/loaded/tagsLoaded.action';
import { AppComponent } from '../../../../app.component';
import { Router } from '@angular/router';
import { CoreState } from '../../core.state';

export const testUser = {
  displayName: null,
  email: '2spy4x+firebase-test@gmail.com',
  phoneNumber: null,
  photoURL: null,
  providerId: 'firebase',
  uid: 'ntvx4eO1e4WJQUyQhbYmmGghVu52'
};

describe('authSignedIn.action.ts', () => {

  describe('Action', () => {
    let action: AuthSignedInAction;
    beforeEach(() => {
      action = new AuthSignedInAction(testUser);
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(AuthSignedInActionType);
    });

    it('should have proper payload', () => {
      expect(action.payload).toEqual(testUser);
    });
  });

  describe('Handler', () => {
    it('should update "user" property in the state', () => {
      const oldState: CoreState = {auth: {}};
      const newState = AuthSignedInActionHandler(oldState, new AuthSignedInAction(testUser));
      const expectedState = {auth: {user: testUser}};
      expect(newState).toEqual(expectedState);
    });
    it('should update only "user" property in the state', () => {
      const user2 = {...testUser, displayName: 'Artem'} as any;
      const oldState: CoreState = {
        auth: {
          user: user2
        },
        items: [1, 2, 3],
        tags: [1, 2, 3]
      };
      const newState = AuthSignedInActionHandler(oldState, new AuthSignedInAction(testUser));
      const expectedState: CoreState = {
        auth: {
          user: testUser
        },
        items: [1, 2, 3],
        tags: [1, 2, 3]
      };
      expect(newState).toEqual(expectedState as any);
    });
  });

  describe('Effect', () => {
    let effects: AuthSignedInActionEffect;
    let actions: Observable<any>;
    let router: Router;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule.withRoutes([{
            path: 'dashboard',
            component: AppComponent
          }])
        ],
        declarations: [
          AppComponent
        ],
        providers: [
          AuthSignedInActionEffect,
          AuthRouterService,
          provideMockActions(() => actions)
        ],
      });
      effects = TestBed.get(AuthSignedInActionEffect);
      router = TestBed.get(Router);
    });

    it('should emit ItemsLoadedAction', () => {
      actions = hot('--a-', {a: new AuthSignedInAction(testUser)});
      const expected = cold('--b', {
        b: new ItemsLoadedAction([
          'Implement basic Auth',
          'Implement basic Items module',
          'Implement basic Tags module',
          'Implement basic Dashboard module',
          'Push'
        ])
      });
      expect(effects.loadItems$).toBeObservable(expected);
    });

    it('should emit TagsLoadedAction', () => {
      actions = hot('--a-', {a: new AuthSignedInAction(testUser)});
      const expected = cold('--b', {
        b: new TagsLoadedAction([
          'code',
          'technologies',
          'archery'
        ])
      });
      expect(effects.loadTags$).toBeObservable(expected);
    });
  });
});
