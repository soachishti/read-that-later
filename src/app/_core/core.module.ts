import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { AppMetaReducers, AppReducers } from './store/app.reducer';
import { environment } from '../../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { SignInComponent } from './sign-in/sign-in.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthSignedInActionEffect } from './store/auth/signedIn/authSignedIn.action';
import { AppStateInitial } from './store/app.state';
import { AuthSignOutActionEffect } from './store/auth/signOut/authSignOut.action';
import { SignedInComponent } from './signed-in/signed-in.component';
import { AuthSignInWithGoogleActionEffect } from './store/auth/signInWithGoogle/authSignInWithGoogle.action';
import { AuthSignInWithPasswordActionEffect } from './store/auth/signInWithPassword/authSignInWithPassword.action';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(AppReducers, {
      initialState: AppStateInitial,
      metaReducers: AppMetaReducers
    }),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([
      AuthSignedInActionEffect,
      AuthSignOutActionEffect,
      AuthSignInWithGoogleActionEffect,
      AuthSignInWithPasswordActionEffect
    ]),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    SignInComponent,
    SignedInComponent
  ],
  exports: [
    StoreModule
  ]
})
export class CoreModule {
}
