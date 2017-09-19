import { CoreState, CoreStateInitial } from './core.state';
import {
  ItemsAddAction,
  ItemsAddActionHandler,
  ItemsAddActionType
} from './items/add/itemsAdd.action';
import {
  AuthSignedInAction,
  AuthSignedInActionHandler,
  AuthSignedInActionType
} from './auth/signedIn/authSignedIn.action';
import {
  ItemsLoadedAction,
  ItemsLoadedActionHandler,
  ItemsLoadedActionType
} from './items/loaded/itemsLoaded.action';
import {
  TagsLoadedAction,
  TagsLoadedActionHandler,
  TagsLoadedActionType
} from './tags/loaded/tagsLoaded.action';
import {
  TagsAddAction,
  TagsAddActionHandler,
  TagsAddActionType
} from './tags/add/tagsAdd.action';
import {
  AuthSignInFailedAction,
  AuthSignInFailedActionHandler,
  AuthSignInFailedActionType
} from './auth/signInFailed/authSignInFailed.action';
import {
  AuthSignInWithGoogleAction,
  AuthSignInWithGoogleActionHandler,
  AuthSignInWithGoogleActionType
} from './auth/signInWithGoogle/authSignInWithGoogle.action';
import {
  AuthSignInWithPasswordAction,
  AuthSignInWithPasswordActionHandler,
  AuthSignInWithPasswordActionType
} from './auth/signInWithPassword/authSignInWithPassword.action';

export function CoreReducer (state = CoreStateInitial, action: any): CoreState {
  switch (action.type) {
    // Auth
    case AuthSignedInActionType:
      return AuthSignedInActionHandler(state, action as AuthSignedInAction);
    case AuthSignInFailedActionType:
      return AuthSignInFailedActionHandler(state, action as AuthSignInFailedAction);
    case AuthSignInWithGoogleActionType:
      return AuthSignInWithGoogleActionHandler(state, action as AuthSignInWithGoogleAction);
    case AuthSignInWithPasswordActionType:
      return AuthSignInWithPasswordActionHandler(state, action as AuthSignInWithPasswordAction);

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
