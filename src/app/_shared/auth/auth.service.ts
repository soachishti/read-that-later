import { Store } from '@ngrx/store';
import { AppState } from '../../_core/store/app.state';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor (private store: Store<AppState>) {
  }

  isLoggedIn (): boolean {
    let user: any;
    const sub = this.store.select(s => s.core.user).subscribe(u => user = u);
    sub.unsubscribe();
    return !!user;
  }
}
