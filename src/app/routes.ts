import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { EventListResolver } from './events/events-list-resolver.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { Error404Component } from './errors/404.component';
import { CreateEVentComponent } from './events/create-event.component';

import {Routes} from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
export const appRoutes: Routes = [
    {path: 'events/new' , component: CreateEVentComponent , canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
    {path: 'events/:id', component : EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path: '' , redirectTo: 'events', pathMatch: 'full'},
    {path: '404' , component: Error404Component},
    {path: 'user',  loadChildren: './user/user.module#UserModule'},
    {path: 'events/session/new' , component: CreateSessionComponent}
];
