import { SignInPage } from '../sign-in/sign-in.po';
import { SignedInPage } from '../signed-in/signed-in.po';
import { browser } from 'protractor';
export interface NavigatablePage {
  navigateTo();
  isOn();
}

export const reachGuardedPage = async (page: NavigatablePage) => {
  const signInPage = new SignInPage();
  const signedInPage = new SignedInPage();
  page.navigateTo();
  if (await page.isOn()) {
    return;
  }
  if (await signedInPage.isOn()) {
    signedInPage.navigateTo();
    signedInPage.signOutIfPresent();
  }
  signInPage.navigateTo();
  signInPage.signIn();
  page.navigateTo();
};

export const reachPublicPage = async (page: NavigatablePage) => {
  const signedInPage = new SignedInPage();
  const signInPage = new SignInPage();
  page.navigateTo();
  if (await page.isOn()) {
    return;
  }
  signedInPage.navigateTo();
  await browser.wait(() => signedInPage.isOn(), 1000, 'Wait for SignedInPage to be On');
  signedInPage.signOutIfPresent();
  await browser.wait(() => signInPage.isOn(), 1000, 'Wait for SignInPage to be On');
  page.navigateTo();
};
