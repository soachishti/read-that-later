import { Action } from '@ngrx/store';
import { CoreState } from '../../core.state';
import { Item } from '../_types/item.interface';
export const ItemsLoadedActionType = 'ITEMS_LOADED';

export class ItemsLoadedAction implements Action {
  readonly type = ItemsLoadedActionType;

  constructor (public payload: Item[]) {
  }
}

export const ItemsLoadedActionHandler = (state: CoreState,
                                         action: ItemsLoadedAction) => {
  return Object.assign({}, state, {items: action.payload});
};
