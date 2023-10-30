import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  createUserForm!: FormGroup;
  // users: userDetails;

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      gender: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^(.+)@(.+)$'),
      ]),
      mobileNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('(0/91)?[6-9][0-9]{9}'),
        Validators.minLength(10),
      ]),
      
    });
  }
  displayStyle = 'none';

  
  }

