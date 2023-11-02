import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  columnForm!: FormGroup;
  // users: userDetails;

  ngOnInit(): void {
    this.columnForm = new FormGroup({
      firstname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
    
      id: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        
      ]),
      carmodel:new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      
    });
  }
  displayStyle = 'none';
  openPopup() {
    this.displayStyle = 'block';
  }
  
  }

