import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventGridComponent } from './event-grid/event-grid.component';
import { EventFormComponent } from './event-form/event-form.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EventTagReportComponent } from './event-report/event-tag-report/event-tag-report.component';
import { EventYearReportComponent } from './event-report/event-year-report/event-year-report.component';
import { EventReportComponent } from './event-report/event-report.component';
import { EventGameComponent } from './event-game/event-game.component';

const eventRoutes: Routes = [
    {
        path: '',
        component: EventGridComponent
    },
    {
        path: 'report',
        component: EventReportComponent
    },
    {
        path: 'game',
        component: EventGameComponent
    },
    {
        path: ':id',
        component: EventFormComponent
    }
];

@NgModule({
    declarations: [
        EventFormComponent,
        EventGameComponent,
        EventGridComponent,
        EventReportComponent,
        EventTagReportComponent,
        EventYearReportComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        RouterModule.forChild(eventRoutes)
    ]
})
export class EventModule {}
