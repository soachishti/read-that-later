import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthRouterService } from './authRouter.service';

@Injectable()
export class NotLoggedInGuard implements CanActivate {

  constructor (private auth: AuthService,
               private authRouterService: AuthRouterService) {
  }

  canActivate (): boolean {
    if (this.auth.isLoggedIn()) {
      this.authRouterService.navigateToSignedInRoute();
      return false;
    }

    return true;
  }
}
