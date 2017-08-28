import { Action } from '@ngrx/store';
import { CoreState } from '../core.state';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
export const ItemsLoadedActionType = 'ITEMS_LOADED';

export class ItemsLoadedAction implements Action {
  readonly type = ItemsLoadedActionType;

  constructor (public payload: string[]) {
  }
}

export const ItemsLoadedActionHandler = (state: CoreState,
                                        action: ItemsLoadedAction) => {
  return Object.assign({}, state, {items: action.payload});
};

@Injectable()
export class ItemsLoadedActionEffect {

  constructor (private actions$: Actions) {
  }

  @Effect({dispatch: false}) itemsLoaded$ = this.actions$
    .ofType(ItemsLoadedActionType)
    .map((action: ItemsLoadedAction) => {
      console.log('Items loaded:', action.payload);
    });
}
