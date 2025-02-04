import { END } from '@angular/cdk/keycodes';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ClintService } from '../Providers/clint.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

export enum DateRangeEnum {
  Last30Dayds = '30Days',
  Last7Days = '7Days',
  Today = 'today',
  Custom = 'custom',
  Next7Days = "Next7Days",
  Next30Days = "Next30Days",
  LastNext30Days = "LastNext30Days"
}

@Component({
  selector: 'app-clint',
  templateUrl: './clint.component.html',
  styleUrls: ['./clint.component.scss']
})


export class ClintComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource: any = [];
  showLoader = false;
  parseData: any
  filter: any
  DateRangeEnum = DateRangeEnum;
  @Input() SelectedDateRange: DateRangeEnum = DateRangeEnum.Last7Days;
  selectedDefaultValue: any = DateRangeEnum.Last30Dayds;
  totalLength: any

  range = new FormGroup({
    from: new FormControl(),
    to: new FormControl()
  })

  constructor(
    private clientService: ClintService,
    private ngxService: NgxUiLoaderService,
    private router: Router,
    private matDialog: MatDialog,
  ) {
    let data = localStorage.getItem('userinfo')
    if (data) {
      this.parseData = JSON.parse(data);
    }
  }


  ngOnInit(): void {

  }


  initializeFilter() {
    const obj: any = {
      token: this.parseData.token,
      pageCount: {
        page: 1,
        limit: 15
      },
      filter: {
        text: ''
      }
    }
    this.filter = obj;
  }



  pageChange(event: PageEvent) {
    this.filter.pageCount.page = event.pageIndex + 1;
    this.filter.pageCount.limit = event.pageSize;
    // this.getUserData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filter.filter = {
      text: filterValue,
    }
    if (this.filter.filter.text.length >= 2) {
    } else if (this.filter.filter.text.length <= 0) {
      this.filter.filter = {
        text: ''
      }
      this.filter.pageCount = {
        page: 1,
        limit: 15
      }
    }
  }







}

