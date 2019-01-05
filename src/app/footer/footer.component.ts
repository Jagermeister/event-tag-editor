import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DisclosureComponent } from '../disclosure/disclosure.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    onDisclosures() {
        const dialogRef = this.dialog.open(DisclosureComponent);
    }
}
