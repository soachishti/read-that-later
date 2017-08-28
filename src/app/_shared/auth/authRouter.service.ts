import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthRouterService {

  constructor (private router: Router) {
  }

  navigateToPublicRoute (): void {
    this.router.navigate(['/sign-in']);
  }

  navigateToSignedInRoute (): void {
    this.router.navigate(['/dashboard']);
  }
}
