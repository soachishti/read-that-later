import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { AuthSignInWithGoogleAction } from '../store/auth/signInWithGoogle/authSignInWithGoogle.action';
import { AuthSignInWithPasswordAction } from '../store/auth/signInWithPassword/authSignInWithPassword.action';
import { Observable } from 'rxjs/Observable';
import { AuthSignInFailDetails } from '../store/auth/signInFailed/authSignInFailDetails.type';

export const signInCredentials = {
  email: '2spy4x+firebase-test@gmail.com',
  password: 'Danger12'
};

@Component({
  selector: 'rl-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  isAuthInProgress$: Observable<boolean>;
  failDetails$: Observable<AuthSignInFailDetails>;

  constructor (private store: Store<AppState>) {
    this.isAuthInProgress$ = this.store.select(s => s.core.auth.isInProgress);
    this.failDetails$ = this.store.select(s => s.core.auth.failDetails);
  }

  signInWithGoogle () {
    this.store.dispatch(new AuthSignInWithGoogleAction());
  }

  signInWithCredentials () {
    this.store.dispatch(new AuthSignInWithPasswordAction(signInCredentials));
  }

  signInWithWrongCredentials () {
    this.store.dispatch(new AuthSignInWithPasswordAction(
      {email: '2spy4x+firebase-test@gmail.com', password: '000'}
    ));
  }


}
