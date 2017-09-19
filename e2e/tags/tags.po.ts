import { by, element, protractor } from 'protractor';
import { NavigatablePage } from '../_helpers/navigatablePage.class';

export class TagsPage extends NavigatablePage {
  urlPath = '/tags';
  componentSelector = 'rl-tags';

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
