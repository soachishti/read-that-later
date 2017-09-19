import { Action } from '@ngrx/store';
import { CoreState } from '../../core.state';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ItemsLoadedAction } from '../../items/loaded/itemsLoaded.action';
import { TagsLoadedAction } from '../../tags/loaded/tagsLoaded.action';
import { AuthRouterService } from '../../../../_shared/auth/authRouter.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
export const AuthSignedInActionType = 'AUTH_SIGNED_IN';

export class AuthSignedInAction implements Action {
  readonly type = AuthSignedInActionType;

  constructor (public payload: firebase.UserInfo) {
  }
}

export const AuthSignedInActionHandler = (state: CoreState,
                                          action: AuthSignedInAction) => {
  const auth = Object.assign({}, state.auth, {user: action.payload});
  return Object.assign({}, state, {auth});
};

@Injectable()
export class AuthSignedInActionEffect {

  constructor (private actions$: Actions,
               private authRouterService: AuthRouterService,
               private router: Router) {
  }

  @Effect({dispatch: false}) registerUser$ = this.actions$
    .ofType(AuthSignedInActionType)
    .map((action: AuthSignedInAction) => {
      const user = action.payload;
      //     // TODO: this.logger.setAuth(user);
      const redirectUrl = localStorage.getItem('redirectUrl'); // TODO: store
                                                               // it in Store!
      localStorage.removeItem('redirectUrl');
      if (redirectUrl) {
        this.router.navigateByUrl(redirectUrl);
      } else {
        this.authRouterService.navigateToSignedInRoute();
      }
    });

  // TODO: @Effect() showHintsIfNecessary$:Observable<Action> = this.actions$
  // .ofType(AuthSignedInActionType)
  // .map(action =>
  // this.introduceService.shouldShowHintsForNewAuth(action.payload))
  // .filter(showGreeting => showGreeting) .map(() => new
  // ToggleHintsAction(true));

  @Effect() loadItems$ = this.actions$
    .ofType(AuthSignedInActionType)
    .map((action: AuthSignedInAction) => {
      return new ItemsLoadedAction([
        'Implement basic Auth',
        'Implement basic Items module',
        'Implement basic Tags module',
        'Implement basic Dashboard module',
        'Push'
      ]);
    });

  @Effect() loadTags$ = this.actions$
    .ofType(AuthSignedInActionType)
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
