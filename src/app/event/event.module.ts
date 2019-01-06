import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventGridComponent } from './event-grid/event-grid.component';
import { EventFormComponent } from './event-form/event-form.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EventTagReportComponent } from './event-tag-report/event-tag-report.component';

const eventRoutes: Routes = [
    {
        path: '',
        component: EventGridComponent
    },
    {
        path: 'report',
        component: EventTagReportComponent
    },
    {
        path: ':id',
        component: EventFormComponent
    }
];

@NgModule({
    declarations: [
        EventFormComponent,
        EventGridComponent,
        EventTagReportComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forChild(eventRoutes)
    ]
})
export class EventModule {}
