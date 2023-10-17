import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-db',
  templateUrl: './json-db.component.html',
  styleUrls: ['./json-db.component.scss']
})
export class JsonDBComponent implements OnInit {
  dbForm: any;
  ngOnInit(): void {
  
  }
  onSubmit(){
    if (this.dbForm.valid){
      const dbName =this.dbForm.get('dbName').value;
    }
  }
}