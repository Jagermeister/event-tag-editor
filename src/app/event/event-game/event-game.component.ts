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
    isStarredOnly = true;

    eventOne = null;
    eventTwo = null;
    eventAYear = null;
    eventBYear = null;

    constructor(private formBuilder: FormBuilder, private eventService: EventService) {
        this.eventService.events.subscribe(events => this.events = events);
        this.gameGroup = this.createForm();
    }

    ngOnInit() {
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            yearMin: [0],
            yearMax: [60],
            eventA: [''],
            eventB: ['']
        });
    }

    onStarredChange() {
        this.isStarredOnly = !this.isStarredOnly;
    }

    onPlay() {
        this.eventAYear = null;
        this.eventBYear = null;
        const yearMin: number = Number(this.gameGroup.get('yearMin').value);
        const yearMax: number = Number(this.gameGroup.get('yearMax').value);

        const options = this.events.filter(e => (!this.isStarredOnly || e.isStarred === this.isStarredOnly));

        const eventOneKey = Math.floor(Math.random() * options.length);
        this.eventOne = options[eventOneKey];
        delete options[eventOneKey];

        const eventsChoose = options.filter(e =>
            Math.abs(e.year - this.eventOne.year) >= yearMin
            && Math.abs(e.year - this.eventOne.year) <= yearMax
            && e.year !== this.eventOne.year);
            this.eventTwo = eventsChoose[Math.floor(Math.random() * eventsChoose.length)];

        this.gameGroup.patchValue({
            eventA: this.eventOne.title,
            eventB: this.eventTwo.title
        });
    }

    onReveal() {
        this.eventAYear = this.eventOne.year + (this.eventOne.year < this.eventTwo.year ? ' <<<' : '');
        this.eventBYear = this.eventTwo.year + (this.eventTwo.year < this.eventOne.year ? ' <<<' : '');
    }
}
