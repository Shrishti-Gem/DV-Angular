import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TableComponent } from './table/table.component';
import { SelectDbComponent } from './select-db/select-db.component';
import { NestedTreeControl } from "@angular/cdk/tree";
import { MatTreeNestedDataSource } from "@angular/material/tree";

interface Database {
  parent_company: string;
  sub_brand?: Database[];
}

const TREE_DATA: Database[] = [
  {
    parent_company: "SQL",
    sub_brand: [
      {
        parent_company: "Table 1" },
      { parent_company: "Table 2" },
      { parent_company: "Table 3" },
    ],
  },
  {
    parent_company: "Mongodb",
    sub_brand: [
      {
        parent_company: "Table 1",
        sub_brand: [{ parent_company: "Column 1" }],
      },
      {
        parent_company: "Table 2",
        // sub_brand: [{ parent_company: "Column 1" },
        // { parent_company: "Column 2" }],
      },
    ],
  },
  {
    parent_company: "Json",
    sub_brand: [
      {
        parent_company: "Table 1",
        // sub_brand: [{ parent_company: 'Column 1' },
        //             { parent_company: "Column 2" }]
      },
      { parent_company: "Table 2" },
      { parent_company: "Table 3" },
    ],
  },
  {
    parent_company: "Excel",
    sub_brand: [
      {
        parent_company: "Table 1" },
      { parent_company: "Table 2" },
      { parent_company: "Table 3" },
    ],
  },
  {
    parent_company: "XML",
    sub_brand: [
      {
        parent_company: "Table 1" },
      { parent_company: "Table 2" },
      { parent_company: "Table 3" },
    ],
  },
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  treeControl = new NestedTreeControl<Database>((node) => node.sub_brand);
  dataSource = new MatTreeNestedDataSource<Database>();
  constructor(public dialog: MatDialog) {
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: Database) =>
    !!node.sub_brand && node.sub_brand.length > 0;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog() {
    const dialogRef = this.dialog.open(TableComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  opendialog() {
    const dialogRef = this.dialog.open(SelectDbComponent);

    dialogRef.afterClosed().subscribe(result => {
      
      console.log(`Dialog result: ${result}`);
      
    });
  }
  title = 'DV';
  opened=false;
    
  
  log(state: any){
    console.log(state)
  }
}