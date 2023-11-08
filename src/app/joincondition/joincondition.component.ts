import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-joincondition',
  templateUrl: './joincondition.component.html',
  styleUrls: ['./joincondition.component.scss']
})
export class JoinconditionComponent {
  data= {                                        // Replace with your actual data
    'table_name1' : ['col1','col2','col3'],
    'table_name2' : ['col4','col5','col6'],
    'table_name3' : ['col1','col2','col3'],
    'table_name4' : ['col1','col2','col3'],
  }
  tableNames: string[] = Object.keys(this.data); // Extract table names from the data object
  selectedTable1: string = 'table_name1';
  selectedTable2: string = 'table_name2';
  selectedOption: string = 'Left Join';
  selectedColumn1: string = '';
  selectedColumn2: string = '';
  tableData: { [key: string]: string[] } = this.data;

  onColumnSelect() {
    // Add your logic here
  }
}