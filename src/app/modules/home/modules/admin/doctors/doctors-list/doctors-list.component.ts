import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent {
  displayedColumns: string[] = ['name', 'email'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource: any = [];
  showLoader = false;
  parseData: any;
  totalLength: any

  constructor(
  ) {
    let data = localStorage.getItem('userinfo')
    if (data) {
      this.parseData = JSON.parse(data);
    }
  }


  ngOnInit(): void {

    
  }

  pageChange(event: PageEvent) {

  }
}
