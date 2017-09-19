import { by, element } from 'protractor';
import { NavigatablePage } from '../_helpers/navigatablePage.class';

export class DashboardPage extends NavigatablePage {
  urlPath = '/dashboard';
  componentSelector = 'rl-dashboard';

  getHeadText () {
    return element(by.css('.page-head-text')).getText();
  }

  getChartTypeSwitcher (type: string) {
    return element(by.css(
      'button.chart-type-switcher.chart-type-switcher_' + type));
  }

  getIndicatorText (indicatorName: string) {
    return element(by.css('.indicator_' + indicatorName)).getText();
  }

}
