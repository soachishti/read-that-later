import { Store } from '@ngrx/store';
import { AppState } from '../../_core/store/app.state';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AuthSignedInAction } from '../../_core/store/auth/signedIn/authSignedIn.action';
import { pick } from 'lodash';
import { AuthSignOutAction } from '../../_core/store/auth/signOut/authSignOut.action';

@Injectable()
export class AuthService {

  constructor (private store: Store<AppState>,
               private afAuth: AngularFireAuth) {
    this.afAuth.authState
      .subscribe(user => {
        if (user) {
          const fields = ['displayName', 'email', 'phoneNumber', 'photoURL',
            'providerId', 'uid'];
          const userInfo = pick<firebase.UserInfo, firebase.User>(user, fields);
          this.store.dispatch(new AuthSignedInAction(userInfo));
        } else {
          this.store.dispatch(new AuthSignOutAction());
        }
      });
  }

}
