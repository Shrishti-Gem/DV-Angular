import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableselectionComponent } from './DB-components/DB-components/tableselection/tableselection.component';
// import { ViewComponent } from './view/view.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


console.log("users module loaded");
@NgModule({
  declarations: [
    
    // ViewComponent
  ],
  imports: [
    CommonModule,
    // UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }