import { Action } from '@ngrx/store';
import { CoreState } from '../../core.state';
import { Item } from '../_types/item.interface';

export const ItemsAddActionType = 'ITEMS_ADD';

export class ItemsAddAction implements Action {
  readonly type = ItemsAddActionType;

  constructor (public payload: Item) {
  }
}

export const ItemsAddActionHandler = (state: CoreState,
                                      action: ItemsAddAction) => {
  return Object.assign({}, state, {items: [...state.items, action.payload]});
};
