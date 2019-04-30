import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import {IEvent} from '../event';
import { AuthService, IUser } from '../../common/auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
})

export class EventListComponent implements OnInit {
  isAdmin = false;
  // isTrainer = false;
  searchForm = new FormGroup({
    query: new FormControl(''),
    phone: new FormControl(''),
    user: new FormControl(''),
  });

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  events: IEvent[];
  query = '';
  phone = '';
  users: IUser[];
  user: IUser;

  ngOnInit() {
    this.authService.getAll().subscribe((response)=> {
      this.users = response;
    });
    this.isAdmin = this.authService.isAdmin.getValue();
   // this.isTrainer = this.authService.isTrainer.getValue();

   this.getEvents();
   this.searchForm
   .get('query')
   .valueChanges.pipe(debounceTime(350))
   .subscribe((value) => {
     console.log(value);
     this.query = value;
     this.getEvents();
   });
   this.searchForm.get('phone').valueChanges.pipe(debounceTime(350))
   .subscribe((value) => {
     console.log(value);
     this.phone = value;
     this.getEvents();
   });
   this.searchForm.get('user').valueChanges.subscribe((value) => {
     console.log(value);
     this.user = value;
     this.getEvents();
  });
  }
  getEvents() {
    this.eventService.get(
      this.query,
   this.isAdmin,
    this.phone,
     this.user ? this.user.id : 0
   ).subscribe((events) => {
     console.log(events);
     this.events = events;
   });
  }

  goToEvent(event: IEvent): void {
    this.router.navigate([`./${event.id}`], { relativeTo: this.route });
  }
}

