import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-select-db',
  templateUrl: './select-db.component.html',
  styleUrls: ['./select-db.component.scss']
})
export class SelectDbComponent implements OnInit {
  selectedOption: string = 'SQL';
  navigateToSelectedPage(){
    if (this.selectedOption ==='SQL'){
    this.router.navigate(['/SQL']);
  }
  else if (this.selectedOption ==='Excel'){
    this.router.navigate(['/Excel']);
  }
  else if (this.selectedOption ==='XML'){
    this.router.navigate(['/XML']);
  }
  else if (this.selectedOption ==='MongoDB'){
    this.router.navigate(['/MongoDB']);
  }
  else if (this.selectedOption ==='Json'){
    this.router.navigate(['/Json']);
  }
}
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
 

  // @ViewChild('teams') teams!: ElementRef;
  // selectedTeam = '';
	// onSelected(value:string): void {
	// 	this.selectedTeam = value;
	// }
  

}
