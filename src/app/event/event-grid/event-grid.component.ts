import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
    selector: 'app-event-grid',
    templateUrl: './event-grid.component.html',
    styleUrls: ['./event-grid.component.css']
})
export class EventGridComponent implements OnInit {
    _events: MyEvent[];
    isStarredOnly = true;

    events: MyEvent[];

    constructor(private router: Router, private eventService: EventService) {
        this.eventService.events.subscribe(events => {
            this._events = events;
            this.reduceEvents();
        });
    }

    ngOnInit() {
    }

    onStarredChange() {
        this.isStarredOnly = !this.isStarredOnly;
        this.reduceEvents();
    }

    reduceEvents() {
        this.events = this._events.filter(e => (!this.isStarredOnly || e.isStarred === this.isStarredOnly))
            .sort((a, b) => b.year - a.year);
    }

    onExport() {
        console.log(JSON.stringify(this.events));
    }
}
