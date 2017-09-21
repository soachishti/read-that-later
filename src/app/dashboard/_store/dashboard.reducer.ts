import {
  DashboardChangeChartTypeAction,
  DashboardChangeChartTypeActionHandler,
  DashboardChangeChartTypeActionType
} from './chartType/changeChartType/changeChartType.action';
import { DashboardState, DashboardStateInitial } from './dashboard.state';

const DashboardStateFromLocalStorage: DashboardState =
  JSON.parse(localStorage.getItem('dashboard'));

export function DashboardReducer (state = DashboardStateFromLocalStorage || DashboardStateInitial,
                                  action: any): DashboardState {
  switch (action.type) {
    case DashboardChangeChartTypeActionType:
      return DashboardChangeChartTypeActionHandler(state,
        action as DashboardChangeChartTypeAction);
    default:
      return state;
  }
}
