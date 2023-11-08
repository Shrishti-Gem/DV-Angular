import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from '../table/table.component';
import { SelectDbComponent } from '../select-db/select-db.component';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})

export class Page1Component implements OnInit{
  
  public usertabledata : any;

  constructor(private http: HttpClient,public dialog: MatDialog) {}


  ngOnInit(): void {
    this.getUserTablesData();
  }

  public RefreshTable(custom_name: string, db_type : string, db_name: string, connection_uri: string ){
      // change the data here
      const formData = new FormData();
      formData.append('table_name_show', custom_name);
      formData.append('db_name', db_name);
      formData.append('db_type', db_type);
      formData.append('connection_uri', connection_uri);
      this.http.post('http://127.0.0.1:8000/refreshtable', formData).subscribe((responsedata : any) =>{
        
      });
  }


  public getUserTablesData(){
    this.http.get('http://127.0.0.1:8000/home').subscribe( (data : any) => {
        if(data && data.data){
            console.log(data.data);
            this.usertabledata = data.data;
        }else{
            console.log("No reponses from the API..")
        }
        
    });
  }
  
  
  
  openDialog(custom_name : string, db_type : string, db_name : string) {
    var formData = new FormData();

    formData.append('table_name_show', custom_name);
    formData.append('db_name',db_name);
    formData.append('db_type',db_type);

    this.http.post('http://127.0.0.1:8000/seetablecolumns',formData).subscribe((reponsedata : any) => {
      console.log(reponsedata);
      const dialogRef = this.dialog.open(TableComponent,{
        data : {table_name : reponsedata.tablename,columns_data : reponsedata.data,db_name: reponsedata.db_name,db_type: reponsedata.db_type}
      });
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
    });
    
  }
  
  title = 'DV';
  opened=false;
    
  
  log(state: any){
    console.log(state)
  }
}