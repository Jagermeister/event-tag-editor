import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../../event.service';

@Component({
    selector: 'app-event-year-report',
    templateUrl: './event-year-report.component.html'
})
export class EventYearReportComponent implements OnInit {
    private _isStarredOnly = false;
    private _events: MyEvent[] = [];
    eventsByDecade = [];
    eventsByCentury = {};
    centurys = [];
    eventCount = 0;

    @Input()
    set isStarredOnly(value) {
        this._isStarredOnly = value;
        this.reduceEventsAndTags();
    }

    constructor(private eventService: EventService) {
        this.eventService.events.subscribe(events => {
            this._events = events;
            this.reduceEventsAndTags();
        });
    }

    ngOnInit() {
    }

    reduceEventsAndTags() {
        const eventReduction = this._events.reduce((p, c) => {
            if (!this._isStarredOnly || c.isStarred === this._isStarredOnly) {
                const key = Math.floor(c.year / 10) * 10;
                const parent = p[key] || {
                    century: Math.floor(key / 100) * 100,
                    decade: key,
                    events: []
                };

                parent.events.push(c);
                p[key] = parent;
            }
            return p;
        }, {});
        this.eventsByDecade = Object.values(eventReduction).sort((a, b) => b['year'] - a['year']);
        this.eventsByCentury = this.eventsByDecade.reduce((p, c) => {
            p[c.century] = {
                colspan: this.eventsByDecade.filter(e => e.century === c.century).length,
                events: this._events.filter(e => Math.floor(e.year / 100) * 100 === c.century).length
            };
            return p;
        }, {});
        this.centurys = Object.keys(this.eventsByCentury);
        this.eventCount = this._events.filter(e => !this._isStarredOnly || e.isStarred === this._isStarredOnly).length;
    }
}
