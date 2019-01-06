import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-event-report',
    templateUrl: './event-report.component.html'
})
export class EventReportComponent implements OnInit {
    isStarredOnly = true;

    constructor() { }

    ngOnInit() {
    }
}
