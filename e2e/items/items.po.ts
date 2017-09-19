import { by, element, protractor } from 'protractor';
import { NavigatablePage } from '../_helpers/navigatablePage.class';

export class ItemsPage extends NavigatablePage {
  urlPath = '/items';
  componentSelector = 'rl-items';

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
