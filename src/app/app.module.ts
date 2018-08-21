import { LocationValidator } from './events/location-validator.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './user/auth.service';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { Error404Component } from './errors/404.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './events/nav/navbar.component';
import { } from './events/common/toastr.service';
import { EventsAppComponent   } from './events-app.component';
import { CollapsibleWellComponent, TOASTR_TOKEN, Toastr, JQ_TOKEN, SimpleModalComponent,
   ModalTriggerDirective } from './events/common/index';
import {
  EventDetailsComponent,
  EventListResolver,
  // EventRouteActivator,
  CreateEVentComponent,
  EventsListComponent,
  EventsThumbnailComponent,
  EventService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpvoteComponent,
  EventResolver
} from './events/index';
import { VoterService } from './events/event-details/voter.service';




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
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
     ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CustomerDashboardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EventService, {provide: TOASTR_TOKEN, useValue: toastr},
    //  EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: dirtyEvent },
    EventListResolver,
    EventResolver,
    AuthService,
    {provide: JQ_TOKEN, useValue: jQuery},
    VoterService
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
