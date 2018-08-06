import {  NgModule } from '@angular/core';
import {  MatListModule, MatButtonModule,
          MatInputModule, MatGridListModule,
          MatMenuModule, MatDialogModule,
          MatStepperModule } from '@angular/material';

@NgModule({
    imports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatGridListModule,
      MatMenuModule,
      MatDialogModule,
      MatStepperModule
    ],
    exports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatGridListModule,
      MatMenuModule,
      MatDialogModule,
      MatStepperModule
    ],
})
export class SharedModule { }


