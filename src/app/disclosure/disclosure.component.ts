import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-disclosure',
    template: `
    <h2>Disclosures</h2>
    <hr />
    <p>This site uses Google Analytics to measure usage and ensure the best experience for users.</p>
    <p>To improve your experience with the site we may place a file on your computer (a cookie).</p>
    <p>Learn how Google uses data when you use our partners' sites or apps, located at www.google.com/policies/privacy/partners/</p>
  `,
    styles: [``]
})
export class DisclosureComponent implements OnInit {
    constructor(dialogRef: MatDialogRef<DisclosureComponent>) { }

    ngOnInit() { }
}
