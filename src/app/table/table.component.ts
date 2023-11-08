import { Component,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {table_name : string,columns_data: any,db_name: string, db_type: string},private http: HttpClient) {  
  }
  
  public seesampledata(table_name : string, db_name: string, db_type : string){
    const  formData = new FormData();
    formData.append('custom_name', table_name);
    formData.append('db_name',db_name);
    formData.append('db_type',db_type);

    this.http.post('http://127.0.0.1:8000/seesampledata',formData).subscribe( (response : any) => {
        
    });
  }
}