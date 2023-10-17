import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { TableComponent } from './table/table.component';
import { SelectDbComponent } from './select-db/select-db.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(TableComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  opendialog() {
    const dialogRef = this.dialog.open(SelectDbComponent);

    dialogRef.afterClosed().subscribe(result => {
      
      console.log(`Dialog result: ${result}`);
      
    });
  }
  title = 'DV';
  opened=false;
    
  
  log(state: any){
    console.log(state)
  }

}
