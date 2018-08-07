// Intermediate level..
// Angular Fundamentals
// chapter-7
// Reactive FormControls ********
// goto angular.io to know more about validators


import { AuthService } from './auth.service';
import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  templateUrl: './profile.component.html' ,
  styles : [`em {float: right; color: #E05C65; padding-left: 10px;}
  .error input {background-color: #E3C3C5}`]
})
export class ProfileComponent implements OnInit {
  constructor(private auth: AuthService, private route: Router) {}
profileForm: FormGroup;
private firstName: FormControl;
private lastName: FormControl;

ngOnInit() {
  // Read about formcontrol or validator.pattern to implement validators for any input value.
 // tslint:disable-next-line:max-line-length
 this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*'), Validators.minLength(3)]);
this.lastName = new FormControl(this.auth.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
 this.profileForm = new FormGroup({
  firstName: this.firstName,
  lastName: this.lastName
});
}
saveProfile(formValue) {
  if (this.profileForm.valid) {
this.auth.updateCurrentUser(formValue.firstName, formValue.lastName);
this.route.navigate(['events']);
}
}
validateFirstName(form) {
  return this.firstName.valid || this.firstName.untouched;
}
validateLastName() {
  return this.lastName.valid || this.profileForm.controls.lastName.untouched;
}
}
