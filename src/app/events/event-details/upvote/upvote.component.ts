import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {


  constructor() { }
// Input
@Input() count: number;
@Input() set voted(val) {
  this.iconColor = val ? 'red' : 'white';
}
@Output() vote = new EventEmitter();
iconColor: any;
  ngOnInit() {
  }
onClick() {
  this.vote.emit({});
}
}
