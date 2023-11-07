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
interface Table1{
  value:string;
  viewValue:string;
}
interface Table2{
  value:string;
  viewValue:string;

}


@Component({
  selector: 'app-jointable',
  templateUrl: './jointable.component.html',
  styleUrls: ['./jointable.component.scss'],
  
})
export class JointableComponent {
  selectedValue: string='';
  selectedTable1:string='';
  selectedTable2:string='';



  joins: Join[] = [
    {value: 'full join', viewValue: 'Full Join'},
    {value: 'left join', viewValue: 'Left Join'},
    {value: 'right join', viewValue: 'Right Join'},
    {value: 'inner join', viewValue: 'Inner Join'},
  ];

  tables: Table1[] =[
    {value: 'sql', viewValue:'Sql'}
  ];
  tabless: Table2[] =[
    {value: 'sql', viewValue:'Sql'},
    {value:'Excel', viewValue:'Excel'}
  ]
}
