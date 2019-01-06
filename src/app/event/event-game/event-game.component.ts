import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-event-game',
    templateUrl: './event-game.component.html',
    styles: ['mat-form-field { width: 100%; }']
})
export class EventGameComponent implements OnInit {
    gameGroup: FormGroup;
    events: MyEvent[] = [];

    constructor(private formBuilder: FormBuilder, private eventService: EventService) {
        this.eventService.events.subscribe(events => this.events = events);
        this.gameGroup = this.createForm();
    }

    ngOnInit() {
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            yearMin: [0],
            yearMax: [500],
            eventA: [''],
            eventB: ['']
        })
    }

    onPlay() {
        const yearMin: number = Number(this.gameGroup.get('yearMin').value);
        const yearMax: number = Number(this.gameGroup.get('yearMax').value);

        const eventOne = this.events[Math.floor(Math.random() * this.events.length)];
        const eventsChoose = this.events.filter(e => 
            Math.abs(e.year - eventOne.year) >= yearMin
            && Math.abs(e.year - eventOne.year) <= yearMax);
        const eventTwo = eventsChoose[Math.floor(Math.random() * eventsChoose.length)];

        this.gameGroup.patchValue({
            eventA: eventOne.year + ': ' + eventOne.title,
            eventB: eventTwo.year + ': ' + eventTwo.title
        })
    }
}
