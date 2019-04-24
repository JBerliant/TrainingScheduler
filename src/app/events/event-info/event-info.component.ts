import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventService } from '../event.service';
// import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
})
export class EventInfoComponent implements OnInit {

  constructor(
    private eventService: EventService,

  ) { }
  // userId

  eventForm = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl(),
    date: new FormControl(),
    cost: new FormControl(),
    description: new FormControl
  });

  event: any;

  ngOnInit() {
  }
    getEvent(id: number): void{
      this.eventService.getById(id).subscribe((event) => {
        console.log(event);
        this.event = event;
        this.eventForm.patchValue(event);
      },
    (error) => {
      console.log('failed getting event by id');
    },
  );
  };

    save(): void {
    this.eventService.saveEvent(this.eventForm.value).subscribe(
      (response) => {
        console.log('Event Saved!');
      },
      (error) => {
        console.log('failed saving Event');
      },
    );
  }
    /*
    //after setting up the retrieve of "To Do" from search form
    const this.event.id;
*/
}
