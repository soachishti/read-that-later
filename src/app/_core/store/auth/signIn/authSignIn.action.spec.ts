import {
  AuthSignInAction,
  AuthSignInActionEffect,
  AuthSignInActionHandler,
  AuthSignInActionType
} from './authSignIn.action';
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

describe('authSignIn.action.ts', () => {
  const user = {name: 'Anton'};

  describe('Action', () => {
    let action: AuthSignInAction;
    beforeEach(() => {
      action = new AuthSignInAction(user);
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(AuthSignInActionType);
    });

    it('should have proper payload', () => {
      expect(action.payload).toEqual({name: 'Anton'});
    });
  });

  describe('Handler', () => {
    it('should update "user" property in the state', () => {
      expect(AuthSignInActionHandler({}, new AuthSignInAction(user)))
        .toEqual({user: user});
    });
    it('should update only "user" property in the state', () => {
      const state = {
        user: {name: 'Test'},
        items: [1, 2, 3],
        tags: [1, 2, 3]
      };
      expect(AuthSignInActionHandler(state, new AuthSignInAction(user)))
        .toEqual({
          user: user,
          items: [1, 2, 3],
          tags: [1, 2, 3]
        });
    });
  });

  describe('Effect', () => {
    let effects: AuthSignInActionEffect;
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
          AuthSignInActionEffect,
          AuthRouterService,
          provideMockActions(() => actions)
        ],
      });
      effects = TestBed.get(AuthSignInActionEffect);
      router = TestBed.get(Router);
    });

    it('should emit ItemsLoadedAction', () => {
      actions = hot('--a-', {a: new AuthSignInAction(user)});
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
      actions = hot('--a-', {a: new AuthSignInAction(user)});
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
