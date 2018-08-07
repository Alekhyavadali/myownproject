import { EventService } from './../shared/event.service';
import { Injectable} from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()

export class EventRouteActivator implements CanActivate{
    constructor(private eventservice:EventService, private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot){
        let eventExists =  !!this.eventservice.getEvent(+route.params['id']);
       if(!eventExists){
           this.router.navigate(['404']);
       }
       return eventExists;
    }
}