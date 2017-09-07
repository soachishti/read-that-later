import { Action } from '@ngrx/store';
import { CoreState } from '../../core.state';

export const ItemsAddActionType = 'ITEMS_ADD';

export class ItemsAddAction implements Action {
  readonly type = ItemsAddActionType;
  constructor (public payload: string) {
  }
}

export const ItemsAddActionHandler = (state: CoreState,
                                      action: ItemsAddAction) => {
  return Object.assign({}, state, {items: [...state.items, action.payload]});
};
