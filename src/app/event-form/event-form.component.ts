import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
    eventGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.eventGroup = this.createForm();
    }

    ngOnInit() {
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            year: [''],
            title: [''],
            description: [''],
            tags: ['']
          });
    }

    onSave() {
        if (this.eventGroup.valid) {
            const year: number = Number(this.eventGroup.get('year').value);
            const title: string = this.eventGroup.get('title').value;
            const description: string = this.eventGroup.get('description').value;
            const tags: string[] = this.eventGroup.get('tags').value.split(' ');
        }
    }
}
