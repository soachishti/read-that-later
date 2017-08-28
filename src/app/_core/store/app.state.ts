import { CoreState, CoreStateInitial } from './core.state';
import { ItemsState } from '../../items/_store/items.state';
import { TagsState } from '../../tags/_store/tags.state';
import { DashboardState } from '../../dashboard/_store/dashboard.state';

export interface AppState {
  core: CoreState;
  items?: ItemsState;
  tags?: TagsState;
  dashboard?: DashboardState;
}

export const AppStateInitial: AppState = {
  core: CoreStateInitial
};
