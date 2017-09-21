import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent, signInCredentials } from './sign-in.component';
import { AppTestingModule } from '../../appTesting.module';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AuthSignInWithPasswordAction } from '../store/auth/signInWithPassword/authSignInWithPassword.action';
import { AuthSignOutAction } from '../store/auth/signOut/authSignOut.action';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [
        AppTestingModule
      ]
    })
      .compileComponents();
    store = TestBed.get(Store);
    store.dispatch(new AuthSignOutAction());
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch AuthSignedInAction on signedIn()', () => {
    component.signInWithCredentials();
    expect(store.dispatch).toHaveBeenCalledWith(
      new AuthSignInWithPasswordAction(signInCredentials));
  });

  it('should dispatch AuthSignedInAction on click sign in button()', done => {
    fixture.debugElement.nativeElement.querySelector('button.sign-in_credentials').click();
    setTimeout(() => {
      expect(store.dispatch).toHaveBeenCalledWith(
        new AuthSignInWithPasswordAction(signInCredentials));
      done();
    }, 300);
  });

  it('should not show div.loading when "auth.isInProgress == false"', () => {
    const loadingElement = fixture.debugElement.nativeElement.querySelector('.loading');
    expect(loadingElement).toBeFalsy();
  });

  it('should show div.loading when "auth.isInProgress == true"', () => {
    store.dispatch(new AuthSignInWithPasswordAction({email: '', password: ''}));
    fixture.detectChanges();
    const loadingElement = fixture.debugElement.nativeElement.querySelector('.loading');
    expect(loadingElement).toBeTruthy();
  });
});
