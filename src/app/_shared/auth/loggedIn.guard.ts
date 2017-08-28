import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthRouterService } from './authRouter.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor (private auth: AuthService,
               private authRouterService: AuthRouterService) {
  }

  canActivate (): boolean {
    if (!this.auth.isLoggedIn()) {
      this.authRouterService.navigateToPublicRoute();
      return false;
    }

    return true;
  }
}
