import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

interface Join {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-jointable',
  templateUrl: './jointable.component.html',
  styleUrls: ['./jointable.component.scss'],
  
})
export class JointableComponent {
  selectedValue!: string;


  joins: Join[] = [
    {value: 'full ', viewValue: 'Full Join'},
    {value: 'left', viewValue: 'Left Join'},
    {value: 'right', viewValue: 'Right Join'},
    {value: 'inner', viewValue: 'Inner Join'},
  ];
}
