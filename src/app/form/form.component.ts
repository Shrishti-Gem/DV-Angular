import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControlName,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  columnForm: FormGroup ;

  constructor(private formbuilder:FormBuilder,private http:HttpClient) {
   this.columnForm = this.formbuilder.group({
    firstname:"",
    lastname:"",
    id:"",

   });
      
    }
 
 submitForm() {
    const formData = this.columnForm.value;
    console.log(formData);
  }
  

}
  