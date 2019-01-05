import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
    selector: 'app-event-grid',
    templateUrl: './event-grid.component.html',
    styleUrls: ['./event-grid.component.css']
})
export class EventGridComponent implements OnInit {
    events: MyEvent[];

    constructor(private router: Router, private eventService: EventService) {
        this.eventService.events.subscribe(events => this.events = events.sort((a, b) => b.year - a.year));
    }

    ngOnInit() {
    }

    onExport() {
        console.log(JSON.stringify(this.events));
    }
}
