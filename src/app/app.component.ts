import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

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
