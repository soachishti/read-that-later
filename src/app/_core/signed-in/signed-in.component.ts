import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AuthSignOutAction } from '../store/auth/signOut/authSignOut.action';

@Component({
  selector: 'rl-signed-in',
  templateUrl: './signed-in.component.html',
  styleUrls: ['./signed-in.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignedInComponent {
  constructor (private store: Store<AppState>) {
  }

  signOut () {
    this.store.dispatch(new AuthSignOutAction());
  }
}
