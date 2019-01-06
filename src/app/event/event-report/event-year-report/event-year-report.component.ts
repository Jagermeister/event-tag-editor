import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../event.service';

@Component({
    selector: 'app-event-year-report',
    templateUrl: './event-year-report.component.html'
})
export class EventYearReportComponent implements OnInit {
    eventsByDecade = [];
    eventsByCentury = {};
    centurys = [];

    constructor(private eventService: EventService) {
        this.eventService.events.subscribe(events => {
            const eventReduction = events.reduce((p, c) => {
                const key = Math.floor(c.year / 10) * 10;
                const parent = p[key] || {
                    century: Math.floor(key / 100) * 100,
                    decade: key,
                    events: []
                };

                parent.events.push(c);
                p[key] = parent;
                return p;
            }, {});
            this.eventsByDecade = Object.values(eventReduction).sort((a, b) => b['year'] - a['year']);
            this.eventsByCentury = this.eventsByDecade.reduce((p, c) => {
                p[c.century] = {
                    colspan: this.eventsByDecade.filter(e => e.century == c.century).length,
                    events: events.filter(e => Math.floor(e.year/100)*100 == c.century).length
                };
                return p;
            }, {});
            this.centurys = Object.keys(this.eventsByCentury);
        });
    }

    ngOnInit() {
    }
}
