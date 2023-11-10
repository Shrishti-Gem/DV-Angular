import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-groupby',
  templateUrl: './groupby.component.html',
  styleUrls: ['./groupby.component.scss']
})
export class GroupbyComponent {
//   data= {                                        // Replace with your actual data
//     'table_name1' : ['col1','col2','col3'],
//     'table_name2' : ['col4','col5','col6'],
//     'table_name3' : ['col1','col2','col3'],
//     'table_name4' : ['col1','col2','col3'],
//   }
//   tableNames: string[] = Object.keys(this.data); // Extract table names from the data object
//   selectedTableName: string = '';
//   // columnNames: string[] = Object.keys(this.data.selectedTableName);
//   selectedColumnName: string = '';
//   tableData: { [key: string]: string[] } = this.data;

//   // You can also add a function to perform actions when a table is selected
//   onTableSelect() {
//     // Add your logic here
//   }
//   options = [
//     { name: 'Ascending', selected: false },
//     { name: 'Descending', selected: false }
//   ];
//   operations = new FormControl('');
//   getselectedOptions() {
//     return this.options.filter(option => option.selected).map(option => option.name).join(', ');
//   }
//   onOptionsSelect() {
//     const selectedOption = this.options.filter(option => option.selected);
//     console.log('Selected Options:', selectedOption);
//   }
  
//   rowIndices: number[] = [0]; // Array to maintain row indices
//   selectedTableNames: string[] = ['']; // Array to store selected table names
//   selectedColumnNames: string[] = ['']; // Array to store selected column names
//   selectedOptions: string[] = ['']; // Array to store selected options

//   addRow() {
//     this.rowIndices.push(this.rowIndices.length);
//     this.selectedTableNames.push('');
//     this.selectedColumnNames.push('');
//     this.selectedOptions.push('');
//   }
//   removeRow(index: number) {
//     this.rowIndices.splice(index, 1);
//     this.selectedTableNames.splice(index, 1);
//     this.selectedColumnNames.splice(index, 1);
//     this.selectedOptions.splice(index, 1);
//   }
// }
  data= {                                        // Replace with your actual data
    'table_name1' : ['col1','col2','col3'],
    'table_name2' : ['col4','col5','col6'],
    'table_name3' : ['col1','col2','col3'],
    'table_name4' : ['col1','col2','col3'],
  }
  tableNames: string[] = Object.keys(this.data); // Extract table names from the data object
  selectedTableName: string = '';
  // columnNames: string[] = Object.keys(this.data.selectedTableName);
  selectedColumnName: string = '';
  tableData: { [key: string]: string[] } = this.data;

  // You can also add a function to perform actions when a table is selected
  onTableSelect() {
    // Add your logic here
  }
  selectedOptions: any[] = [];
  options = [
    { name: 'Sum', selected: false },
    // { name: 'Count', selected: false },
    { name: 'Min', selected: false },
    { name: 'Max', selected: false },
    { name: 'Mean', selected: false },
    { name: 'Median', selected: false },
    { name: 'Variance', selected: false }
  ];
  operations = new FormControl('');
  getSelectedOptions() {
    return this.options.filter(option => option.selected).map(option => option.name).join(', ');
  }
  onOptionsSelect() {
    const selectedOptions = this.options.filter(option => option.selected);
    console.log('Selected Options:', selectedOptions);
  }
}