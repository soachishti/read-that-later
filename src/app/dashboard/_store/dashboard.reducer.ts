import {
  DashboardChangeChartTypeAction,
  DashboardChangeChartTypeActionHandler,
  DashboardChangeChartTypeActionType
} from './chartType/changeChartType/changeChartType.action';
import { DashboardState, DashboardStateInitial } from './dashboard.state';

export function DashboardReducer (state = DashboardStateInitial, action: any): DashboardState {
  switch (action.type) {
    case DashboardChangeChartTypeActionType:
      return DashboardChangeChartTypeActionHandler(state, action as DashboardChangeChartTypeAction);
    default:
      return state;
  }
}
