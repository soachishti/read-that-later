import { ItemsState } from '../items.state';
import { Action } from '@ngrx/store';

export const ItemsToggleActionType = 'ITEMS_TOGGLE';

export class ItemsToggleAction implements Action {
  readonly type = ItemsToggleActionType;

  constructor (public payload: string) {
  }
}

export const ItemsToggleActionHandler = (state: ItemsState,
                                         action: ItemsToggleAction) => {
  const index = state.selected.indexOf(action.payload);
  let newSelected;
  if (index >= 0) {
    newSelected = state.selected.filter((item, indexx) => indexx !== index);
  } else {
    newSelected = [...state.selected, action.payload];
  }
  return Object.assign({}, state, {selected: newSelected});
};
