import { browser, by, element } from 'protractor';
import { NavigatablePage } from '../_helpers/reachPage.helper';

export class SignedInPage implements NavigatablePage {
  navigateTo () {
    return browser.get('/');
  }

  isOn () {
    return element(by.css('rl-signed-in')).isPresent();
  }

  async hasMenuItems () {
    const hasMenu = await element(by.css('.menu')).isPresent();
    const hasDashboard = await this.getMenuItemDashboard().isPresent();
    const hasItems = await this.getMenuItemItems().isPresent();
    const hasTags = await this.getMenuItemTags().isPresent();
    const hasSignOutButton = await this.getSignOutButton().isPresent();
    return hasMenu && hasDashboard && hasItems && hasTags && hasSignOutButton;
  }

  signOut () {
    return this.getSignOutButton().click();
  }

  async signOutIfPresent () {
    const signOutButton = this.getSignOutButton();
    if (await signOutButton.isPresent()) {
      this.signOut();
    }
  }

  navigateToDashboard () {
    this.getMenuItemDashboard().click();
  }

  navigateToItems () {
    this.getMenuItemItems().click();
  }

  navigateToTags () {
    this.getMenuItemTags().click();
  }

  getContentRouterOutlet () {
    return element(by.css('.content router-outlet'));
  }

  private getMenuItemDashboard () {
    return element(by.css('.menu .menu__item_dashboard'));
  }

  private getMenuItemItems () {
    return element(by.css('.menu .menu__item_items'));
  }

  private getMenuItemTags () {
    return element(by.css('.menu .menu__item_tags'));
  }

  private getSignOutButton () {
    return element(by.css('.menu .menu__item_sign-out'));
  }
}
