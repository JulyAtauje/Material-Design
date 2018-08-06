import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
    kindFood: string;
    where: string;
  }
  
  @Component({
    selector: 'app-selection',
    templateUrl: './selection.component.html',
  })
  
  export class SelectionComponent {
    kindFood: string;
    where: string;
  
    constructor(public dialog: MatDialog) {}
  
    openDialog(): void {
      const dialogRef = this.dialog.open(SelectionDialogComponent, {
        width: '250px',
        data: {where: this.where, kindFood: this.kindFood}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.kindFood = result;
      });
    }
  
  }
  
  @Component({
    selector: 'app-selection-dialog',
    templateUrl: './selection-dialog.component.html',
  })
  export class SelectionDialogComponent {
  
    constructor(
      public dialogRef: MatDialogRef<SelectionDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
