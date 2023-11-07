import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTreeModule } from '@angular/material/tree';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { XmlDBComponent } from './DB-components/DB-components/xml-db/xml-db.component';
import { ExcelDBComponent } from './DB-components/DB-components/excel-db/excel-db.component';
import { SqlDbComponent } from './DB-components/DB-components/sql-db/sql-db.component';
import { MongoDBComponent } from './DB-components/DB-components/mongo-db/mongo-db.component';
import { JsonDBComponent } from './DB-components/DB-components/json-db/json-db.component';
import { IconsModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms';

import { DropDownTreeModule } from '@syncfusion/ej2-angular-dropdowns';

import { SelectDbComponent } from './select-db/select-db.component';
import { Page1Component } from './page1/page1.component';
import { TableselectionComponent } from './DB-components/DB-components/tableselection/tableselection.component';
import { FormComponent } from './form/form.component';
import { OperationsComponent } from './operations/operations.component';
import { JoinComponent } from './join/join.component';
import { JointableComponent } from './jointable/jointable.component';



@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    XmlDBComponent,
    ExcelDBComponent,
    SqlDbComponent,
    MongoDBComponent,
    JsonDBComponent,
    SelectDbComponent,
    Page1Component,
    TableselectionComponent,
    FormComponent,
    OperationsComponent,
    JoinComponent,
    JointableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule,
    FormsModule,
    IconsModule,
    ReactiveFormsModule,
    MatMenuModule,
    DropDownTreeModule,
    MatTreeModule,
    
    

    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
