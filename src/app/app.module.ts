import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing.module';
import { DisclosureComponent } from './disclosure/disclosure.component';
import { HomeComponent } from './home/home.component';
import { EventFormComponent } from './event-form/event-form.component';

@NgModule({
    declarations: [
        AppComponent,
        DisclosureComponent,
        EventFormComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        RoutingModule,
        BrowserModule,
        MaterialModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent, DisclosureComponent]
})
export class AppModule { }
