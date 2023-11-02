import { Injectable } from '@angular/core';
import { userDetails } from './userDetails';
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  data:userDetails[] = [];
  constructor() { }

  addData(details:userDetails){
    this.data.push(details);
  }

  sendData(){
    return this.data
  }
}
