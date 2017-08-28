import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';
import { AppTestingModule } from '../../appTesting.module';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AuthSignInAction } from '../store/auth/authSignIn.action';

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

  it('should dispatch AuthSignInAction on signIn()', () => {
    component.signIn();
    expect(store.dispatch).toHaveBeenCalledWith(
      new AuthSignInAction({name: 'Anton'}));
  });

});
