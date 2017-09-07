import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedInComponent } from './signed-in.component';
import { AppTestingModule } from '../../appTesting.module';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { AuthSignOutAction } from '../store/auth/signOut/authSignOut.action';

describe('SignedInComponent', () => {
  let component: SignedInComponent;
  let fixture: ComponentFixture<SignedInComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedInComponent ],
      imports: [
        AppTestingModule
      ]
    })
    .compileComponents();
    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch AuthSignOutAction on signOut()', () => {
    component.signOut();
    expect(store.dispatch).toHaveBeenCalledWith(
      new AuthSignOutAction());
  });

  it('should dispatch AuthSignOutAction on click Sign Out button in menu()', () => {
    fixture.debugElement.nativeElement.querySelector('.menu__item_sign-out').click();
    expect(store.dispatch).toHaveBeenCalledWith(
      new AuthSignOutAction());
  });
});
