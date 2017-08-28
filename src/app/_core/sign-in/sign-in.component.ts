import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthSignInAction } from '../store/auth/authSignIn.action';
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
    const user = localStorage.getItem('user');
    if (user) {
      this.store.dispatch(new AuthSignInAction(user));
    }
  }

  signIn () {
    this.store.dispatch(new AuthSignInAction({name: 'Anton'}));
  }

}
