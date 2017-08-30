import { SignInPage } from './sign-in.po';
import { reachPublicPage } from '../_helpers/reachPage.helper';
import { DashboardPage } from '../dashboard/dashboard.po';

describe('SignInPage', () => {
  let page: SignInPage;
  let dashboardPage: DashboardPage;

  beforeAll(async () => {
    page = new SignInPage();
    dashboardPage = new DashboardPage();
    reachPublicPage(page);
    // browser.wait(browser.ExpectedConditions.urlContains('/sign-in'), 1000);
  });

  it('should sign in', async () => {
    page.signIn();
    expect(dashboardPage.getHeadText()).toEqual('Dashboard');
  });
});
