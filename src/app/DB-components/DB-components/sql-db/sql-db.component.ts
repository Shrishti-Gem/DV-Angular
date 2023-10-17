import { Component ,CUSTOM_ELEMENTS_SCHEMA,NgModule, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-sql-db',
  templateUrl: './sql-db.component.html',
  styleUrls: ['./sql-db.component.scss']
  
})
export class SqlDbComponent  implements OnInit{
  dbForm: any;
  ngOnInit(): void {
  
  }
  onSubmit(){
    if (this.dbForm.valid){
      const dbName =this.dbForm.get('dbName').value;
    }
  }
}
