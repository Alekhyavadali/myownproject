import { IEvent } from './shared/event.model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
    // tslint:disable-next-line:component-selector
    selector : 'event-thumbnail',
    templateUrl : './events-thumbnail.component.html',
    styles: [`.thumbnail {min-height:210px;}
      .pad-left {margin-left: 10px;}
        .well dic {color:#bbb;}
        .green {color: green  }
        .bold {font-weight : bold ;}
          `]
})
export class EventsThumbnailComponent  {
  @Input() event: IEvent;
  constructor() {}

}
