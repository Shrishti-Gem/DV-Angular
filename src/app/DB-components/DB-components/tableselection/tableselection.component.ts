
import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
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

export class TableselectionComponent implements OnInit {
  ngOnInit(): void {
    
  }
  dialog: any;
  openDialog() {
    const dialogRef = this.dialog.open(FormComponent);
  
    dialogRef.afterClosed().subscribe((result: any) =>{
  
      // console.log(`Dialog result: ${result}`);
  
    });
  }
  

  database: Database[] = [
    { value: 'id', viewValue: 'ID' },
    { value: 'name', viewValue: 'Name' },
    { value: '', viewValue: '' },
  ];
}
// openDialog() {
//   const dialogRef = this.dialog.open(TableselectionComponent);

//   dialogRef.afterClosed().subscribe(result => {
//     console.log(`Dialog result: ${result}`);
//   });
// }

// checked = false;


