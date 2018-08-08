import { IEvent, ISession } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
    templateUrl : './event-details.component.html',
    styles: [`.container {padding-left:20px; padding-right:20px;}
        .events-image {height:100px;}
        a {cursor: pointer}`]
})

export class EventDetailsComponent {
constructor(private eventService: EventService, private route: ActivatedRoute) {}
event: IEvent;
addMode: boolean;
// tslint:disable-next-line:use-life-cycle-interface
ngOnInit() {
this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
}
addSession() {
    this.addMode = true;
}
saveNewSession(session: ISession) {
const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
session.id = nextId + 1 ;
this.event.sessions.push(session);
this.eventService.updateEvent(this.event);
this.addMode = false;
}
cancelSession() {
    this.addMode = false;
}
}
