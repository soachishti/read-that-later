import { ItemsState, ItemsStateInitial } from './items.state';
import {
  ItemsToggleAction,
  ItemsToggleActionHandler,
  ItemsToggleActionType
} from './toggle/toggle.action';

export function ItemsReducer (state = ItemsStateInitial,
                              action: any): ItemsState {
  switch (action.type) {
    case ItemsToggleActionType:
      return ItemsToggleActionHandler(state, action as ItemsToggleAction);
    default:
      return state;
  }
}
