import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from './event.service';

@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
    eventGroup: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router, private eventService: EventService) {
        this.eventGroup = this.createForm();
    }

    ngOnInit() {
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            id: [''],
            year: [''],
            title: [''],
            description: [''],
            tags: ['']
        });
    }

    onSaveAndGrid() {
        this.onSave();
        this.router.navigate(['./grid']);
    }

    onSaveAndForm() {
        this.onSave();
        this.eventGroup.reset();
    }

    onSave() {
        if (this.eventGroup.valid) {
            const id: number = Number(this.eventGroup.get('id').value);
            const year: number = Number(this.eventGroup.get('year').value);
            const title: string = this.eventGroup.get('title').value;
            const description: string = this.eventGroup.get('description').value;
            const tagString: string = this.eventGroup.get('tags').value;
            const tags: string[] = tagString.length ? tagString.split(' ') : [];

            this.eventService.create(year, title, description, tags);
        }
    }
}
