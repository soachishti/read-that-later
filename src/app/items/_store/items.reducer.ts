import { ItemsState, ItemsStateInitial } from './items.state';
import {
  ItemsToggleAction,
  ItemsToggleActionHandler,
  ItemsToggleActionType
} from './toggle/itemsToggle.action';

const ItemsStateFromLocalStorage: ItemsState =
  JSON.parse(localStorage.getItem('items'));

export function ItemsReducer (state = ItemsStateFromLocalStorage || ItemsStateInitial,
                              action: any): ItemsState {
  switch (action.type) {
    case ItemsToggleActionType:
      return ItemsToggleActionHandler(state, action as ItemsToggleAction);
    default:
      return state;
  }
}
