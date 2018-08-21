import { AuthService } from './user/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  templateUrl: './events-app.component.html'
 })
export class EventsAppComponent implements OnInit {
constructor(private auth: AuthService) {}
ngOnInit() {
this.auth.checkAuthenticationStatus().subscribe();
}
}
