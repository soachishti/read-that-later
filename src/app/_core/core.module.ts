import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { AppMetaReducers, AppReducers } from './store/app.reducer';
import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { SignInComponent } from './sign-in/sign-in.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthSignInActionEffect } from './store/auth/authSignIn.action';
import { AppStateInitial } from './store/app.state';
import { AuthSignOutActionEffect } from './store/auth/authSignOut.action';
import { SignedInComponent } from './signed-in/signed-in.component';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot(AppReducers, {
      initialState: AppStateInitial,
      metaReducers: AppMetaReducers
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    EffectsModule.forRoot([
      AuthSignInActionEffect,
      AuthSignOutActionEffect
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
  ],
  providers: []
})
export class CoreModule {
}
