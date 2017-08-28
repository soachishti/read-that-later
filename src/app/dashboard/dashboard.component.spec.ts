import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Store } from '@ngrx/store';
import { AuthSignInAction } from '../_core/store/auth/authSignIn.action';
import { AppTestingModule } from '../appTesting.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let store: Store<any>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        AppTestingModule
      ]
    })
      .compileComponents();
    store = TestBed.get(Store);
    // store.dispatch(new AuthSignInAction({name: 'AntonTest'}));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
