import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  // getById -> retrieve event from the event list by referencing by id
  // saveEvent -> save and store a new event
  //            > advanced: after we set up user can search and choose an event from the list which will route
  //            > the user to the add event info form - but instead of a blank form, the editable
  //            > form will already contain the text of the chosen
}
