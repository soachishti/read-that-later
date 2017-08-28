import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { AuthRouterService } from './auth/authRouter.service';
import { LoggedInGuard } from './auth/loggedIn.guard';
import { NotLoggedInGuard } from './auth/notLoggedIn.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    AuthService,
    AuthRouterService,
    LoggedInGuard,
    NotLoggedInGuard
  ]
})
export class SharedModule { }
