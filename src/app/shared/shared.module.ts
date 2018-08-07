import {  NgModule } from '@angular/core';
import {  MatListModule, MatButtonModule,
          MatInputModule, MatGridListModule,
          MatMenuModule, MatDialogModule,
          MatStepperModule, MatCheckboxModule,
          MatCardModule } from '@angular/material';

@NgModule({
    imports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatGridListModule,
      MatMenuModule,
      MatDialogModule,
      MatStepperModule,
      MatCheckboxModule,
      MatCardModule
    ],
    exports: [
      MatListModule,
      MatButtonModule,
      MatInputModule,
      MatGridListModule,
      MatMenuModule,
      MatDialogModule,
      MatStepperModule,
      MatCheckboxModule,
      MatCardModule
    ],
})
export class SharedModule { }


