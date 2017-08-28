import { DashboardChartType } from './chartType/chartType.type';
export interface DashboardState {
  chartType: DashboardChartType;
}

export const DashboardStateInitial: DashboardState = {
  chartType: 'pie'
};
