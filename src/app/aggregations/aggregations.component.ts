import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-aggregations',
  templateUrl: './aggregations.component.html',
  styleUrls: ['./aggregations.component.scss']
})
export class AggregationsComponent {
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