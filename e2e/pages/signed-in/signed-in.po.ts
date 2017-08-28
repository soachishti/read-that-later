import { browser, by, element } from 'protractor';
import { NavigatablePage } from '../_helpers/reachPage.helper';

export class SignedInPage implements NavigatablePage {
  navigateTo () {
    return browser.get('/');
  }

  isOn () {
    return element(by.css('rl-signed-in')).isPresent();
  }

  getSignOutButton () {
    return element(by.css('.menu .menu__item_sign-out'));
  }

  signOut () {
    return this.getSignOutButton().click();
  }

  getContentRouterOutlet() {
    return element(by.css('.content router-outlet'));
  }

  async hasMenuItems() {
    const hasMenu = await element(by.css('.menu')).isPresent();
    const hasDashboard = await element(by.css('.menu .menu__item_dashboard')).isPresent();
    const hasItems = await element(by.css('.menu .menu__item_items')).isPresent();
    const hasTags = await element(by.css('.menu .menu__item_tags')).isPresent();
    const hasSignOutButton = await this.getSignOutButton().isPresent();
    return hasMenu && hasDashboard && hasItems && hasTags && hasSignOutButton;
  }

  async signOutIfPresent () {
    const signOutButton = this.getSignOutButton();
    if (await signOutButton.isPresent()) {
      this.signOut();
    }
  }
}
