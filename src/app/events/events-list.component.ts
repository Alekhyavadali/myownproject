import { IEvent } from './shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { Component, Output, EventEmitter, OnInit  } from '@angular/core';
import { EventService} from './shared/event.service';
import { ToastrService} from './common/toastr.service';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: IEvent[] ;
   constructor(private eventService: EventService , private toastr: ToastrService, private route: ActivatedRoute) {}

ngOnInit() {
this.events = this.route.snapshot.data['events'];
//  this.eventService.getEvents().subscribe(events=>{this.events = events});
}
handleEventClick(eventName) {
this.toastr.warning(eventName);


}
}

