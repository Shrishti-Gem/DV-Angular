import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-excel-db',
  templateUrl: './excel-db.component.html',
  styleUrls: ['./excel-db.component.scss']
})
export class ExcelDBComponent implements OnInit {
  dbForm: any;
  ngOnInit(): void {
  
  }
  onSubmit(){
    if (this.dbForm.valid){
      const dbName =this.dbForm.get('dbName').value;
    }
  }
}
 
 


