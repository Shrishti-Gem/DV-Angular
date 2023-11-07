import { Component } from '@angular/core';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {
  options = [
    { name: 'Sum', selected: false },
    { name: 'Count', selected: false },
    { name: 'Min', selected: false },
    { name: 'Max', selected: false },
    { name: 'Mean', selected: false },
    { name: 'Median', selected: false },
    { name: 'Variance', selected: false }
  ];

  onOptionChange() {
    // Add your desired logic here to handle changes when options are selected or deselected.
    // You can access the selected options using this.options array.
    const selectedOptions = this.options.filter(option => option.selected);
    console.log('Selected Options:', selectedOptions);
  }
}