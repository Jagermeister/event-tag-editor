import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    private events: Event[];

    constructor() {
        this.events = [];
    }

    save(event: Event) {
    }
}
