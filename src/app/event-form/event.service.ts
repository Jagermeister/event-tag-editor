import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    private _events: BehaviorSubject<MyEvent[]> = new BehaviorSubject([]);
    private _dataEndpoint = '/data/events.json';
    private _dataStore: {
        events: MyEvent[]
    } = { events: [] };

    public readonly events: Observable<MyEvent[]> = this._events.asObservable();

    constructor(private http: HttpClient) {
        this.loadDataFromFile().subscribe(events => {
            this._dataStore.events = events;
            this._events.next(Object.assign({}, this._dataStore).events);
        }, err => this._dataStore.events = []);
    }

    loadDataFromFile(): Observable<MyEvent[]> {
        return this.http.get<MyEvent[]>(this._dataEndpoint);
    }

    create(year: number, title: string, description: string, tags: string[]) {
        const id = Math.max(...this._dataStore.events.map(e => e.id), 0) + 1;
        const event = {
            id: id,
            year: year,
            title: title,
            description: description,
            tags: tags
        };

        this._dataStore.events = [...this._dataStore.events, event];
        this._events.next(Object.assign({}, this._dataStore).events);
    }

    update(event: MyEvent) {
        this._dataStore.events = [...this._dataStore.events.filter(e => e.id !== event.id), event];
        this._events.next(Object.assign({}, this._dataStore).events);
    }

    delete(eventId: number) {
        this._dataStore.events = this._dataStore.events.filter(e => e.id !== eventId);
        this._events.next(Object.assign({}, this._dataStore).events);
    }
}
