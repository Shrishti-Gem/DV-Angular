import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from 'src/app/form/form.component';

interface Database {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tableselection',
  templateUrl: './tableselection.component.html',
  styleUrls: ['./tableselection.component.scss'],
})

export class TableselectionComponent {
  constructor(private dialogRef: MatDialog){}
  openDialog(){
    this.dialogRef.open(FormComponent);
  
  }
    database: Database[] = [
      {value: 'id', viewValue: 'ID'},
      {value: 'name', viewValue: 'Name'},
      {value: '', viewValue: ''},
    ];
  }

  // checked = false;