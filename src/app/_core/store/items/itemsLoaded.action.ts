import { Action } from '@ngrx/store';
import { CoreState } from '../core.state';
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
