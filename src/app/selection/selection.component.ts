import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

//Food principal
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
        data: {where: this.where, kindFood: this.kindFood}});
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.kindFood = result; });
    }
  }
  
//Food pop-up
  @Component({
    selector: 'app-selection-dialog',
    templateUrl: './selection-dialog.component.html',
  })
  export class SelectionDialogComponent {
    constructor(
      public dialogRef: MatDialogRef<SelectionDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {this.dialogRef.close(); }
  }

//Drinks
  @Component({
    selector: 'app-selection-drinks',
    templateUrl: './selection-drinks.component.html',
  })
  export class SelectionDrinksComponent {
    firstFormGroup: FormGroup; secondFormGroup: FormGroup; whom: string;
  
    constructor(private _formBuilder: FormBuilder) {}
    ngOnInit () {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required] });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required] });
    }
  }

  //Museums
  @Component({
    selector: 'app-selection-museums',
    templateUrl: './selection-museums.component.html',
  })
  export class SelectionMuseumsComponent {
    constructor (){}
    checked = false;
    checked2 = false;
    checked3 = false;
    checked4 = false;
  }
