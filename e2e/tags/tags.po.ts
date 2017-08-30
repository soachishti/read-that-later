import { browser, by, element, protractor } from 'protractor';
import { NavigatablePage } from '../_helpers/reachPage.helper';

export class TagsPage implements NavigatablePage {
  navigateTo () {
    return browser.get('/tags');
  }

  isOn () {
    return element(by.css('rl-tags')).isPresent();
  }

  getHeadText () {
    return element(by.css('h2')).getText();
  }

  getTags () {
    return element.all(by.css('.tags__tag__title'));
  }

  async addTag (tagTitle: string) {
    await element(by.css('rl-tags-add input')).sendKeys(tagTitle);
    await element(by.css('rl-tags-add input')).sendKeys(protractor.Key.ENTER);
  }
}
