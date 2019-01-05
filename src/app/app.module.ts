import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing.module';
import { DisclosureComponent } from './disclosure/disclosure.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        DisclosureComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        RoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    entryComponents: [DisclosureComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
