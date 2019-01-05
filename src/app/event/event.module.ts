import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventGridComponent } from './event-grid/event-grid.component';
import { EventFormComponent } from './event-form/event-form.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';

const eventRoutes: Routes = [
    {
        path: '',
        component: EventGridComponent
    },
    {
        path: 'grid',
        component: EventGridComponent
    },
    {
        path: 'form',
        component: EventFormComponent
    },
];

@NgModule({
    declarations: [
        EventFormComponent,
        EventGridComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forChild(eventRoutes)
    ]
})
export class EventModule {}
