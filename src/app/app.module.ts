import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { Error404Component } from './errors/404.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { NavBarComponent } from './events/nav/navbar.component';
import { TOASTR_TOKEN, Toastr} from './events/common/toastr.service';
import { EventsAppComponent } from './events-app.component';

import {
  EventDetailsComponent,
  EventListResolver,
  EventRouteActivator,
  CreateEVentComponent,
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';
import { CollapsibleWellComponent } from './events/common/collapsible-well.component';

const toastr: Toastr = window['toastr'];
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEVentComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
     ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CustomerDashboardModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [EventService, {provide: TOASTR_TOKEN, useValue: toastr}, EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: dirtyEvent },
    EventListResolver,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
// tslint:disable-next-line:no-shadowed-variable
export function dirtyEvent(Component: CreateEVentComponent) {
  if (Component.isDirty) {
    return window.confirm('Do you really want to cancel the changes?');
  }
  return true;
}
