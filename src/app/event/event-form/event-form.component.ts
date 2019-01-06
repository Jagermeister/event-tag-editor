import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { load } from '@angular/core/src/render3/instructions';

@Component({
    selector: 'app-event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
    eventGroup: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private eventService: EventService) {
        this.eventGroup = this.createForm();
    }

    ngOnInit() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (!isNaN(id)) {
            this.load(id);
        }
    }

    load(id: number) {
        const event = this.eventService.read(id);
        this.eventGroup.patchValue(Object.assign({}, event, {tags: event.tags.join(' ')}));
    }

    createForm(): FormGroup {
        return this.formBuilder.group({
            id: [''],
            year: [''],
            title: [''],
            isStarred: [false],
            description: [null],
            tags: ['']
        });
    }

    onSaveAndGrid() {
        this.onSave();
        this.router.navigate(['/event']);
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
            const isStarred: boolean = this.eventGroup.get('isStarred').value;
            const tagString: string = this.eventGroup.get('tags').value;
            const tags: string[] = (tagString && tagString.length) ? tagString.split(' ') : [];

            if (isNaN(id) || id === 0) {
                this.eventService.create(year, title, isStarred, description, tags);
            } else {
                this.eventService.update({
                    id: id,
                    year: year,
                    title: title,
                    description: description,
                    isStarred: isStarred,
                    tags: tags
                });
            }
        }
    }
}
