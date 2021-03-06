import { Action, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CoreReducer } from './core.reducer';
import { environment } from '../../../environments/environment';
import { AppState } from './app.state';
import {
  AuthSignOutAction,
  AuthSignOutActionHandler,
  AuthSignOutActionType
} from './auth/signOut/authSignOut.action';
import { storeLogger } from 'ngrx-store-logger';
import { localStorageSync } from 'ngrx-store-localstorage';

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

export function LoggerReducer (reducer): any {
  return storeLogger({collapsed: true})(reducer);
}

export function LocalStorageSyncReducer (reducer): any {
  return localStorageSync({
    keys: ['core', 'dashboard', 'items', 'tags'],
    rehydrate: true
  })(reducer);
}

const productionReducers = [AppStateLevelReducer, LocalStorageSyncReducer];
const developmentReducers = [LoggerReducer, /*storeFreeze or similar meta reducers*/];
const testReducers = [/*storeFreeze or similar meta reducers*/];

export const AppMetaReducers: MetaReducer<AppState, Action>[] =
  environment.type === 'prod'
    ? productionReducers
    :
    environment.type === 'dev'
      ? [...productionReducers, ...developmentReducers]
      : [...productionReducers, ...testReducers]; // 'test'
