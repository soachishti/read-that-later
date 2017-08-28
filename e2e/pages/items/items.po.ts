import { browser, by, element, protractor } from 'protractor';
import { NavigatablePage } from '../_helpers/reachPage.helper';

export class ItemsPage implements NavigatablePage {
  navigateTo () {
    return browser.get('/items');
  }

  isOn () {
    return element(by.css('rl-items')).isPresent();
  }

  getHeadText () {
    return element(by.css('.page-head-text')).getText();
  }

  getItems () {
    return element.all(by.css('.items__item__title'));
  }

  async addItem (itemTitle: string) {
    await element(by.css('rl-items-add input')).sendKeys(itemTitle);
    await element(by.css('rl-items-add input')).sendKeys(protractor.Key.ENTER);
  }
}
