import { ISession, restrictedWords } from '../../shared/index';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';
@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter();
newSessionForm: FormGroup;
name: FormControl;
presenter: FormControl;
duration: FormControl;
level: FormControl;
abstract: FormControl;
constructor() { }
  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWords(['foo', 'bar'])]);
    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    });
  }
saveSession(formValues) {
  const session: ISession = {
        id: undefined,
        voters: [],
         name: formValues.name,
         duration: +formValues.duration,
         presenter: formValues.presenter,
         level: formValues.level,
         abstract: formValues.abstract,

  };
}
}
