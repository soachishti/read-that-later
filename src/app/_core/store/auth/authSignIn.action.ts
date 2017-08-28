import { Action } from '@ngrx/store';
import { CoreState } from '../core.state';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ItemsLoadedAction } from '../items/itemsLoaded.action';
import { TagsLoadedAction } from '../tags/tagsLoaded.action';
import { AuthRouterService } from '../../../_shared/auth/authRouter.service';
import { Router } from '@angular/router';
export const AuthSignInActionType = 'AUTH_SIGN_IN';

export class AuthSignInAction implements Action {
  readonly type = AuthSignInActionType;

  constructor (public payload: any) {
  }
}

export const AuthSignInActionHandler = (state: CoreState,
                                        action: AuthSignInAction) => {
  return Object.assign({}, state, {user: action.payload});
};

@Injectable()
export class AuthSignInActionEffect {

  constructor (private actions$: Actions,
               private authRouterService: AuthRouterService,
               private router: Router) {
  }

  @Effect({dispatch: false}) registerUser$ = this.actions$
    .ofType(AuthSignInActionType)
    .map((action: AuthSignInAction) => {
      const user = action.payload;
      // TODO: this.logger.setAuth(user);
      console.log('User signed in:', user);
      localStorage.setItem('user', JSON.stringify(user));
      const redirectUrl = localStorage.getItem('redirectUrl'); // TODO: store it in Store!
      localStorage.removeItem('redirectUrl');
      if (redirectUrl) {
        this.router.navigateByUrl(redirectUrl);
      } else {
        this.authRouterService.navigateToSignedInRoute();
      }
    });

  // TODO: @Effect() showHintsIfNecessary$:Observable<Action> = this.actions$
  // .ofType(AuthSignInActionType)
  // .map(action =>
  // this.introduceService.shouldShowHintsForNewAuth(action.payload))
  // .filter(showGreeting => showGreeting) .map(() => new
  // ToggleHintsAction(true));

  @Effect() loadItems$ = this.actions$
    .ofType(AuthSignInActionType)
    .map((action: AuthSignInAction) => {
      return new ItemsLoadedAction([
        'Implement basic Auth',
        'Implement basic Items module',
        'Implement basic Tags module',
        'Implement basic Dashboard module',
        'Push'
      ]);
    });

  @Effect() loadTags$ = this.actions$
    .ofType(AuthSignInActionType)
    .map(action => {
      return new TagsLoadedAction([
        'code',
        'technologies',
        'archery'
      ]);
    });

  // TODO: @Effect() loadDataFromDB$: Observable<Action> = this.actions$
  //   .ofType(AuthSignOutActionType)
  //   .switchMap(action => this.itemsService.loadItems())
  //   .map((items: Item[]) => new ItemsLoadedAction(items));
}
