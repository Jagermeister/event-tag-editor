import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    MatDialogModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule
  } from '@angular/material';

const matModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatTabsModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatGridListModule
];

@NgModule({
  imports: [HttpClientModule, ...matModules],
  exports: [HttpClientModule, ...matModules],
})
export class MaterialModule {}
