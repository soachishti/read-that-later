import { by, element } from 'protractor';
import { timeoutSignIn } from '../_helpers/timeouts';
import { NavigatablePage } from '../_helpers/navigatablePage.class';

export class SignInPage extends NavigatablePage {
  urlPath = '/sign-in';
  componentSelector = 'rl-sign-in';

  async signIn () {
    element(by.css('button.sign-in_credentials')).click();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, timeoutSignIn);
    });
  }
}
