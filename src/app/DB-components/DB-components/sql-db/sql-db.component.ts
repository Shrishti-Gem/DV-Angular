import { Component ,CUSTOM_ELEMENTS_SCHEMA,NgModule, OnInit} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-sql-db',
  templateUrl: './sql-db.component.html',
  styleUrls: ['./sql-db.component.scss']
  
})
export class SqlDbComponent  implements OnInit{

  dbForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { 
    this.dbForm = this.formBuilder.group({
      relational_type : '',
      username: '',
      password: '',
      hostname : '',
      portassigned : '',
      databasename : ''
    });
  }
  ngOnInit(): void {
    
  }
  public onSubmit(){
      const dbFormData = this.dbForm.value;
      console.log(dbFormData);
      const formData = new FormData();
      formData.append('relational_type', dbFormData.relational_type);
      formData.append('user_name',dbFormData.username);
      formData.append('password',dbFormData.password);
      formData.append('host_name',dbFormData.hostname);
      formData.append('port_assigned',dbFormData.portassigned);
      formData.append('db_name',dbFormData.data);

      this.http.post('http://127.0.0.1:8000/todataentryrelational', formData).subscribe( (response : any) => {
          console.log(response.data);
      });
  }
}
