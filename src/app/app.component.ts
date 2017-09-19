import { Component, OnInit } from '@angular/core';
import { AuthService } from './_shared/auth/auth.service';

@Component({
  selector: 'rl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor (private auth: AuthService, /* This is for initialization of AuthService */) {
  }

  ngOnInit () {
    const exceptionsUrls = [
      '',
      '/',
      '/sign-in',
      '/loading',
    ];
    if (exceptionsUrls.indexOf(window.location.pathname) === -1) {
      localStorage.setItem('redirectUrl', window.location.pathname);
    }
  }
}
