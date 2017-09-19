import { SignedInPage } from './signed-in.po';
import { reachGuardedPage } from '../_helpers/reachPage.helper';
import { SignInPage } from '../sign-in/sign-in.po';
import { DashboardPage } from '../dashboard/dashboard.po';
import { ItemsPage } from '../items/items.po';
import { TagsPage } from '../tags/tags.po';

describe('SignedInPage', () => {
  let page: SignedInPage;

  describe('same page checks', () => {
    beforeAll(async () => {
      page = new SignedInPage();
      await reachGuardedPage(page);
    });

    it('should has menu', () => {
      expect(page.hasMenuItems()).toEqual(true);
    });

    it('should has content area', () => {
      expect(page.getContentRouterOutlet().isPresent()).toEqual(true);
    });
  });

  describe('navigation to other pages checks', () => {
    beforeEach(async () => {
      page = new SignedInPage();
      await reachGuardedPage(page);
    });

    it('should move to "Dashboard" page on menu item click', () => {
      page.navigateToDashboard();
      expect(new DashboardPage().isOn()).toEqual(true);
    });

    it('should move to "Items" page on menu item click', () => {
      page.navigateToItems();
      expect(new ItemsPage().isOn()).toEqual(true);
    });

    it('should move to "Tags" page on menu item click', () => {
      page.navigateToTags();
      expect(new TagsPage().isOn()).toEqual(true);
    });

    it('should sign out', async () => {
      await page.signOut();
      expect(new SignInPage().isOn()).toEqual(true);
    });
  });
});
