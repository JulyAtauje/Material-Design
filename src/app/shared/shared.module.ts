import {  NgModule } from '@angular/core';
import {  MatListModule, MatButtonModule,
          MatInputModule, MatGridListModule,
          MatMenuModule, MatDialogModule } from '@angular/material';

@NgModule({
    imports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatGridListModule,
      MatMenuModule,
      MatDialogModule
    ],
    exports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatGridListModule,
      MatMenuModule,
      MatDialogModule
    ],
})
export class SharedModule { }


