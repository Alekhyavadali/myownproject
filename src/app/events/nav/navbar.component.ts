import { EventService } from './../shared/event.service';
import { ISession } from './../shared/event.model';
import { AuthService } from './../../user/auth.service';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector : 'nav-bar',
    templateUrl : './navbar.component.html',
    styles: [`.nav.navbar-nav {font-size : 15px; }
    #searchForm {margin-right:100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active{color:#F97924;}`]
})
export class NavBarComponent {
    // tslint:disable-next-line:no-inferrable-types
    searchTerm: string = '';
    foundSessions: ISession[];
constructor (private authService: AuthService, private route: Router, private eventService: EventService) {}
searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
        this.foundSessions = sessions;
        console.log(this.foundSessions);
    });
}
}
