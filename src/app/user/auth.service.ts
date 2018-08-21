import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from './user.model';
import { Injectable } from '@angular/core';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: IUser;
  constructor(private http: HttpClient) { }
  loginUser(userName: string, password: string) {
    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstName: 'John',
    //   lastName: 'Papa'
    // };
    const loginInfo = {
      username: userName,
      password: password
    };
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.post('/api/login', loginInfo, options).pipe(tap(data => {
      this.currentUser = <IUser>data['user'];
    })).pipe(catchError(err => {
      return of(false);
    }));
  }
  isAuthenticated() {
    return !!this.currentUser;
  }
  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
   return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);

  }
  checkAuthenticationStatus(): Observable<Object> {
   return this.http.get('/api/currentIdentity').pipe(tap(data => {
      if (data instanceof Object) {
        this.currentUser = <IUser>data;
      }
    }));
  }
  logout() {
    this.currentUser = undefined;
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.post('/api/logout', {}, options);
  }
}
