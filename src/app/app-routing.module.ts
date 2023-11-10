import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SqlDbComponent } from './DB-components/DB-components/sql-db/sql-db.component';
import { ExcelDBComponent } from './DB-components/DB-components/excel-db/excel-db.component';
import { XmlDBComponent } from './DB-components/DB-components/xml-db/xml-db.component';
import { MongoDBComponent } from './DB-components/DB-components/mongo-db/mongo-db.component';
import { JsonDBComponent } from './DB-components/DB-components/json-db/json-db.component';
import { Page1Component } from './page1/page1.component';
import { TableselectionComponent } from './DB-components/DB-components/tableselection/tableselection.component';
import { FormComponent } from './form/form.component';
import { Page2Component } from './page2/page2.component';
import { AggregationsComponent } from './aggregations/aggregations.component';
import { JoinComponent } from './join/join.component';
import { JointableComponent } from './jointable/jointable.component';
import { JoinconditionComponent } from './joincondition/joincondition.component';
import { WhereComponent } from './where/where.component';
import { OrderbyComponent } from './orderby/orderby.component';
import { GroupbyComponent } from './groupby/groupby.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  
  {path: 'Page1', component:Page1Component},
  {path: 'SQL', component: SqlDbComponent },
  {path: 'Excel', component:ExcelDBComponent},
  {path: 'XML', component:XmlDBComponent},
  {path: 'MongoDB', component:MongoDBComponent},
  {path: 'Json', component:JsonDBComponent},
  {path: 'Tableselect',component:TableselectionComponent},
  {path: 'form',component:FormComponent},
  {path: 'Page2', component:Page2Component},
  {path: 'Aggregations', component:AggregationsComponent},
  {path: 'Join', component:JoinComponent},
  {path: 'Joincondition', component:JoinconditionComponent},
  {path: 'jointable', component:JointableComponent},
  {path: 'Where', component:WhereComponent},
  {path: 'OrderBy', component:OrderbyComponent},
  {path: 'GroupBy', component:GroupbyComponent},
  {path: 'Display', component:DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}