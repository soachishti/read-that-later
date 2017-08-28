import { CoreState, CoreStateInitial } from './core.state';
import {
  ItemsAddAction,
  ItemsAddActionHandler,
  ItemsAddActionType
} from './items/itemsAdd.action';
import {
  AuthSignInAction,
  AuthSignInActionHandler,
  AuthSignInActionType
} from './auth/authSignIn.action';
import {
  ItemsLoadedAction,
  ItemsLoadedActionHandler,
  ItemsLoadedActionType
} from './items/itemsLoaded.action';
import {
  TagsLoadedAction,
  TagsLoadedActionHandler,
  TagsLoadedActionType
} from './tags/tagsLoaded.action';
import {
  TagsAddAction,
  TagsAddActionHandler,
  TagsAddActionType
} from './tags/tagsAdd.action';

export function CoreReducer (state = CoreStateInitial, action: any): CoreState {
  switch (action.type) {
    // Auth
    case AuthSignInActionType:
      return AuthSignInActionHandler(state, action as AuthSignInAction);

    // Items
    case ItemsLoadedActionType:
      return ItemsLoadedActionHandler(state, action as ItemsLoadedAction);
    case ItemsAddActionType:
      return ItemsAddActionHandler(state, action as ItemsAddAction);

    // Tags
    case TagsLoadedActionType:
      return TagsLoadedActionHandler(state, action as TagsLoadedAction);
    case TagsAddActionType:
      return TagsAddActionHandler(state, action as TagsAddAction);

    default:
      return state;
  }
}
