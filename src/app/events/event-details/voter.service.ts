import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import {ISession} from '../shared/event.model';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export  class VoterService {
    constructor(private http: HttpClient) {}
userHasVoted(session: ISession , voterName: string) {
return session.voters.some(voter => voter === voterName);
}
deleteVoter(session: ISession , voterName: string, eventId: number) {
session.voters = session.voters.filter(voter =>  voter !== voterName);
const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
this.http.delete(url).pipe(catchError(this.handleError('addVoter'))).subscribe();
}
addVoter(session: ISession , voterName: string, eventId: number) {
session.voters.push(voterName);
const options = {
    headers: new HttpHeaders({'content-type': '/application/json'})
};
const url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
this.http.post(url, {}, options).pipe(catchError(this.handleError('addVoter'))).subscribe();
}
private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
