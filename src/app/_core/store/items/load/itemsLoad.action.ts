import { Action } from '@ngrx/store';
import { CoreState } from '../../core.state';
export const ItemsLoadActionType = 'ITEMS_LOAD';

export class ItemsLoadAction implements Action {
  readonly type = ItemsLoadActionType;
}

export const ItemsLoadActionHandler = (state: CoreState,
                                       action: ItemsLoadAction) => {
  return Object.assign({}, state, {itemsLoading: true});
};
