import { IEvent, ISession } from './event.model';

import { Injectable, EventEmitter } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable()


export class EventService {
  constructor(private http: HttpClient) {
  }
  getEvents(): Observable<IEvent[]> {
    // tslint:disable-next-line:prefer-const
    // Previous code
    // let subject = new Subject<IEvent[]>();
    // setTimeout(() => { subject.next(events); subject.complete(); }, 100);
    // return subject;
    return this.http.get<IEvent[]>('/api/events').pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent> {
    // return events.find(event => event.id === id);
    return this.http.get<IEvent>('/api/events/' + id).pipe(catchError(this.handleError<IEvent>('getEvent')));
  }
  saveEvent(event): Observable<IEvent> {
    // event.id = 99;
    // event.session = [];
    // return events.push(event);
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    };
    return this.http.post<IEvent>('/api/events', event, options).pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }
  // updateEvent(event) {
  //   const index = events.findIndex(x => x.id === event.id);
  //   events[index] = event;
  // }
  searchSessions(searchTerm: string): Observable<ISession[]> {
    // OLD CODE FOR SEARCHING WITHOUT SERVER
    // const term = searchTerm.toLowerCase();
    // let result: ISession[] = [];
    // events.forEach(event => {
    //   event.sessions.forEach(session => {
    //     if (session.name.toLowerCase().includes(term)) {
    //       result.push(session);
    //       // tslint:disable-next-line:no-shadowed-variable
    //       result = result.map((session: any) => { session.eventId = event.id; return session; });
    //     }
    //   });
    // });
    // const emitter = new EventEmitter(true);
    // setTimeout(() => { emitter.emit(result); }, 100);
    // return emitter;
    // NEW CODE FOR SERVER
    return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm).
    pipe(catchError(this.handleError<ISession[]>('searchSessions', [])));

  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}

