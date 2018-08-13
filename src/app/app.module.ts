import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { Error404Component } from './errors/404.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { NavBarComponent } from './events/nav/navbar.component';
import { } from './events/common/toastr.service';
import { EventsAppComponent   } from './events-app.component';
import { CollapsibleWellComponent, TOASTR_TOKEN, Toastr, JQ_TOKEN, SimpleModalComponent,
   ModalTriggerDirective } from './events/common/index';
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


const toastr: Toastr = window['toastr'];
const jQuery = window['$'];
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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
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
    AuthService,
    {provide: JQ_TOKEN, useValue: jQuery}
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
