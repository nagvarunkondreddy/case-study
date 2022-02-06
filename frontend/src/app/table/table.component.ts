import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() tableHeadings: any;
  @Input() tableData: any;
  @Input() imageTable: any;
  @Input() tableIndex:any; 
  constructor() { }

  ngOnInit(): void {
  
  }

}
