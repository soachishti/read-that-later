import { Action } from '@ngrx/store';
import { DashboardState } from '../../dashboard.state';
import { DashboardChartType } from '../chartType.type';
export const DashboardChangeChartTypeActionType = 'DASHBOARD_CHANGE_CHART_TYPE';

export class DashboardChangeChartTypeAction implements Action {
  readonly type = DashboardChangeChartTypeActionType;

  constructor (public payload: DashboardChartType) {
  }
}

export const DashboardChangeChartTypeActionHandler =
  (state: DashboardState,
   action: DashboardChangeChartTypeAction) => {
    return Object.assign({}, state, {chartType: action.payload});
  };
