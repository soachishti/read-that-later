import { by, element } from 'protractor';
import { timeoutSignOut } from '../_helpers/timeouts';
import { NavigatablePage } from '../_helpers/navigatablePage.class';

export class SignedInPage extends NavigatablePage {
  urlPath = '/';
  componentSelector = 'rl-signed-in';

  async hasMenuItems () {
    const hasMenu = await element(by.css('.menu')).isPresent();
    const hasDashboard = await this.getMenuItemDashboard().isPresent();
    const hasItems = await this.getMenuItemItems().isPresent();
    const hasTags = await this.getMenuItemTags().isPresent();
    const hasSignOutButton = await this.getSignOutButton().isPresent();
    return hasMenu && hasDashboard && hasItems && hasTags && hasSignOutButton;
  }

  async signOut () {
    this.getSignOutButton().click();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeoutSignOut);
    });
  }

  async signOutIfPresent () {
    const signOutButton = this.getSignOutButton();
    if (await signOutButton.isPresent()) {
      await this.signOut();
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
