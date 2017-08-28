import { SignedInPage } from './signed-in.po';
import { reachGuardedPage } from '../_helpers/reachPage.helper';
import { SignInPage } from '../sign-in/sign-in.po';

describe('SignedInPage', () => {
  let page: SignedInPage;
  let signInPage: SignInPage;

  beforeEach(() => {
    page = new SignedInPage();
    signInPage = new SignInPage();
    reachGuardedPage(page);
  });

  it('should has sign out button', () => {
    expect(page.getSignOutButton().isPresent()).toEqual(true);
  });

  it('should has menu', () => {
    expect(page.hasMenuItems()).toEqual(true);
  });

  it('should has content area', () => {
    expect(page.getContentRouterOutlet().isPresent()).toEqual(true);
  });

  it('should sign out', () => {
    page.signOut();
    expect(signInPage.isOn()).toEqual(true);
  });
});
