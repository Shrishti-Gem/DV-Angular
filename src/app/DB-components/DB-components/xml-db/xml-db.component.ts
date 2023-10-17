import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xml-db',
  templateUrl: './xml-db.component.html',
  styleUrls: ['./xml-db.component.scss']
})
export class XmlDBComponent implements OnInit{

  dbForm: any;
  ngOnInit(): void {
  
  }
  onSubmit(){
    if (this.dbForm.valid){
      const dbName =this.dbForm.get('dbName').value;
    }
  }
}