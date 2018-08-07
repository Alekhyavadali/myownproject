// Chapter 7 video 9
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from './shared/index';
@Component({
    templateUrl: './create-event.component.html',
    styles : [`em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background-color: #E3C3C5}`]
})
export class CreateEVentComponent {
    isDirty: Boolean = true;
    newEvent;
constructor(private router: Router, private eventService: EventService) {

}
    cancel() {
        this.router.navigateByUrl('events');
    }
saveEvent(formvalues) {
 this.eventService.saveEvent(formvalues);
 this.isDirty = false;
 this.router.navigateByUrl('events');
    }
}
