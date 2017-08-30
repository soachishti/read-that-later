import { browser, by, element } from 'protractor';
import { NavigatablePage } from '../_helpers/reachPage.helper';

export class DashboardPage implements NavigatablePage {
  navigateTo () {
    return browser.get('/dashboard');
  }

  isOn () {
    return element(by.css('rl-dashboard')).isPresent();
  }

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
