import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../event.service';

@Component({
    selector: 'app-event-tag-report',
    templateUrl: './event-tag-report.component.html',
    styleUrls: ['./event-tag-report.component.css']
})
export class EventTagReportComponent implements OnInit {
    tags = [];

    constructor(private router: Router, private eventService: EventService) {
        this.eventService.events.subscribe(events => {
            const tagReduction = events.reduce((p, c) => {
                c.tags.forEach(cTag => {
                    const levels = cTag.split('-');
                    const parent = levels.shift();
                    const element = levels.join(' ');
                    const parentLevel = p[parent] || Object.assign({}, {
                        tag: '',
                        count: 0,
                        children: { }
                    }, {tag: parent});
                    parentLevel.count++;
                    if (element !== '') {
                        const elementCount = parentLevel.children[element] || {
                            tag: element,
                            count: 0
                        };
                        elementCount.count++
                        parentLevel.children[element] = elementCount;
                    }

                    p[parent] = parentLevel;
                });

                return p;
            }, {});

            this.tags = Object.values(tagReduction).sort((a, b) => b['count'] - a['count']);
            this.tags.forEach(t => t.children = Object.values(t.children).sort((a, b) => b['count'] - a['count']));
        });
    }

    ngOnInit() {
    }
}
