import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthSignInAction } from '../store/auth/signIn/authSignIn.action';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'rl-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {

  constructor (private store: Store<AppState>) {
  }

  ngOnInit () {
    const userSerialized = localStorage.getItem('user');
    if (userSerialized) {
      const user = JSON.parse(userSerialized);
      this.store.dispatch(new AuthSignInAction(user));
    }
  }

  signIn () {
    this.store.dispatch(new AuthSignInAction({name: 'Anton'}));
  }

}
