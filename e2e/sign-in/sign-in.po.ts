import { browser, by, element } from 'protractor';
import { NavigatablePage } from '../_helpers/reachPage.helper';

export class SignInPage implements NavigatablePage {
  navigateTo () {
    return browser.get('/sign-in');
  }

  isOn () {
    return element(by.css('rl-sign-in')).isPresent();
  }

  signIn () {
    return element(by.css('button.sign-in')).click();
  }
}
