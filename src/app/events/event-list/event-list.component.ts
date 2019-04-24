import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import {IEvent} from '../event';
import { AuthService } from '../../common/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})

export class EventListComponent implements OnInit {
  isAdmin = false;

  constructor(private eventService: EventService,
  private authService: AuthService,
    ) { }

  events: IEvent[];
  query = '';

  ngOnInit() {

   this.getEvents();
  }
  getEvents() {
    this.eventService.get(
      this.query,
      this.isAdmin,
   ).subscribe((events) => {
     console.log(events);
     this.events = events;
   });
  }

  /*
    getEvents method  - to retrieve event list when user searches

    */

}
