import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IEvent} from './event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  saveEvent(event: IEvent): Observable<IEvent> {
    if (event.id) {
      return this.http.put<IEvent>(`http://localhost:3000/events`, event);
    } else {
      return this.http.post<IEvent>(`http://localhost:3000/events`, event);
    }
  }

  getById(id: number): Observable<IEvent>{
    return this.http.get<IEvent>(`http://localhost:3000/events/${id}`);
  }

  get(text: string, isAdmin: boolean): Observable<IEvent[]> {
    if (isAdmin) {
      return this.http.get<IEvent[]>(
        `http://localhost:3000/events/admin?name=${text}`,
      );
    } else {
      return this.http.get<IEvent[]>(`http://localhost:3000/events?name=${text}`);
    }
  }
}
  // getById -> retrieve event from the event list by referencing by id
  // saveEvent -> save and store a new event
  //            > advanced: after we set up user can search and choose an event from the list which will route
  //            > the user to the add event info form - but instead of a blank form, the editable
  //            > form will already contain the text of the chosen
