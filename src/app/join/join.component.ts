import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {
  data= {                                        // Replace with your actual data
    'table_name1' : ['col1','col2','col3'],
    'table_name2' : ['col1','col2','col3'],
    'table_name3' : ['col1','col2','col3'],
    'table_name4' : ['col1','col2','col3'],
  }
  tableNames: string[] = Object.keys(this.data); // Extract table names from the data object
  selectedTable1: string = '';
  selectedTable2: string = '';
  // columnNames: string[] = Object.keys(this.data.selectedTableName);
  selectedColumnName: string = '';
  tableData: { [key: string]: string[] } = this.data;

  // You can also add a function to perform actions when a table is selected
  onTableSelect() {
    // Add your logic here
  }
  selectedOption: string = '';
  options = [
    { name: 'Left Join', selected: false },
    { name: 'Right Join', selected: false },
    { name: 'Full Join', selected: false },
    { name: 'Inner Join', selected: false }
  ];
  getselectedOption() {
    return this.options.filter(option => option.selected).map(option => option.name).join(', ');
  }
  onOptionsSelect() {
    const selectedOption = this.options.filter(option => option.selected);
    console.log('Selected Options:', selectedOption);
  }
}