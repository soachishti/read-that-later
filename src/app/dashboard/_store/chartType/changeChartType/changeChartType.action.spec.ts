import {
  DashboardChangeChartTypeAction,
  DashboardChangeChartTypeActionHandler,
  DashboardChangeChartTypeActionType
} from './changeChartType.action';
import { DashboardChartType } from '../chartType.type';

describe('changeChartType.action.ts', () => {
  describe('Action', () => {
    let action: DashboardChangeChartTypeAction;
    beforeEach(() => {
      action = new DashboardChangeChartTypeAction('pie' as DashboardChartType);
    });

    it('should have proper type', () => {
      expect(action.type).toEqual(DashboardChangeChartTypeActionType);
    });

    it('should have proper payload', () => {
      expect(action.payload).toEqual('pie');
    });
  });

  describe('Handler', () => {
    it('should change chartType from "pie" to "line"', () => {
      const newState = DashboardChangeChartTypeActionHandler({chartType: 'pie'},
        new DashboardChangeChartTypeAction('line'));
      expect(newState).toEqual({chartType: 'line'});
    });
    it('should change chartType from "line" to "pie"', () => {
      const newState = DashboardChangeChartTypeActionHandler({chartType: 'line'},
        new DashboardChangeChartTypeAction('pie'));
      expect(newState).toEqual({chartType: 'pie'});
    });
  });
});
