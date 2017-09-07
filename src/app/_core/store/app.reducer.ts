import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CoreReducer } from './core.reducer';
import { environment } from '../../../environments/environment';
import { AppState } from './app.state';
import {
  AuthSignOutAction,
  AuthSignOutActionHandler,
  AuthSignOutActionType
} from './auth/signOut/authSignOut.action';

export const AppReducers: ActionReducerMap<AppState> = {
  core: CoreReducer
};

export function AppStateLevelReducer (reducer) {
  return function (state, action) {
    switch (action.type) {
      case AuthSignOutActionType:
        state = AuthSignOutActionHandler(state, action as AuthSignOutAction);
        break;
      default:
        break;
    }
    return reducer(state, action);
  };
}

const productionReducers = [AppStateLevelReducer];
const developmentReducers = [/*storeFreeze or similar meta reducers*/];

export const AppMetaReducers: MetaReducer<AppState, Action>[] = environment.production
  ? productionReducers
  : [...productionReducers, ...developmentReducers];
