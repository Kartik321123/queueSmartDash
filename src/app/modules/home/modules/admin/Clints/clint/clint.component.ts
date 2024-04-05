import { END } from '@angular/cdk/keycodes';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ClintService } from '../Providers/clint.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
  displayedColumns: string[] = ['name', 'email', 'strategy', 'signupDate', 'action'];
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

  ) {
    let data = localStorage.getItem('userinfo')
    if (data) {
      this.parseData = JSON.parse(data);
    }
  }


  ngOnInit(): void {
    this.initializeFilter();
    this.getDefaultData();
  }


  initializeFilter() {
    var start = new Date();
    start.setUTCHours(0, 0, 0, 0);
    var end = new Date();
    end.setUTCHours(23, 59, 59, 999);

    const obj: any = {
      token: this.parseData.token,
      pageCount: {
        page: 1,
        limit: 15
      },
      dateRange: {
        from: start.toISOString(),
        to: end.toISOString()
      },
      filter: {
        text: ''
      }
    }
    this.filter = obj;
  }

  // GET ALL USER LIST
  getUserData() {
    this.showLoader = true;
    this.ngxService.start();
    this.clientService.getUsers(this.filter).subscribe((res: any) => {
      // console.log("getUserData getUserData",res)
      this.dataSource = res.data.results
      this.totalLength = res.data.totalCount;
      this.showLoader = false;
      this.ngxService.stop();
    }, error => {
      this.showLoader = false;
      this.ngxService.stop();
    })
  }

  // GET USER WALLET DETAIL
  walletDetails(data: any) {
    this.router.navigate(["admin/userWallet"], { queryParams: { userId: data.id } });
  }


  pageChange(event: PageEvent) {
    this.filter.pageCount.page = event.pageIndex + 1;
    this.filter.pageCount.limit = event.pageSize;
    this.getUserData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.filter.filter = {
      text: filterValue,
    }
    if (this.filter.filter.text.length >= 2) {
      this.getUserData();
    } else if (this.filter.filter.text.length <= 0) {
      this.filter.filter = {
        text: ''
      }
      this.filter.pageCount = {
        page: 1,
        limit:15
      }
      this.getUserData()
    }
  }

  // GET DEFAULT DATA OF LAST 7 DAYS
  getDefaultData() {
    var obj = {
      value: this.selectedDefaultValue,
    }
    this.selectionChange(obj);
  }

  // DATE FILTER FROM TO END DATE
  selectionChange(event: any) {
    const selectedValue = event.value;
    if (selectedValue === DateRangeEnum.Last30Dayds) {
      var start = new Date(); 

      var today = new Date();
      var last30Days = new Date(today.getTime() - (30 * 24 * 3600000));
      last30Days.setUTCHours(23, 59, 59, 999);
      this.filter.dateRange = {
        from: last30Days.toISOString(),
        to: start.toISOString()
      }
      this.getUserData()
    } else if (selectedValue === DateRangeEnum.Last7Days) {
      var start = new Date();

      var today = new Date();
      var last7Days = new Date(today.getTime() - (7 * 24 * 3600000));
      last7Days.setUTCHours(23, 59, 59, 999);
      this.filter.dateRange = {
        from: last7Days.toISOString(),
        to: start.toISOString()
      }
      this.getUserData();
    } else if (selectedValue === DateRangeEnum.Today) {
      var start = new Date();
      start.setUTCHours(0, 0, 0, 0);
      var end = new Date();
      end.setUTCHours(23, 59, 59, 999);
      this.filter.dateRange = {
        from: start.toISOString(),
        to: end.toISOString()
      }
      this.getUserData();
    }
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    if (this.range && this.range.value && this.range.value.to) {
      const to = this.range.value.to || new Date(dateRangeStart.value);
      const from = this.range.value.from || new Date(dateRangeEnd.value);
      from.setUTCHours(23, 59, 59, 999);
      this.filter.dateRange = {
        from: new Date(from).toISOString(),
        to: new Date(to).toISOString()
      }
      this.getUserData();
    }
  }


  getCustomOptiontext() {
    if (this.range && this.range.value && (this.range.value.to || this.range.value.from)) {
      let to = this.range.value.to || new Date();
      let from = this.range.value.from || new Date();
      to = new DatePipe('en-US').transform(to, 'longDate');
      from = new DatePipe('en-US').transform(from, 'longDate');
      return `${from} - ${to}`;
    }
    return 'Custom';
  }


  // ACTIVE STRATEGY
  goToActiveStrategy(data: any) {
    if (data.activeBot > 0) {
      const user = `${data.firstName} ${data.lastName}`.trim();
      const status = 'Active'
      this.router.navigate(["admin/strategy"], { queryParams: { userId: data.id, user: user, status: status } });
    } else {
      alert('Strategy Not Active')
    }
  }

  // ALL STRATEGY
  goToInActiveStrategy(data: any) {
    if (data.inActiveBot + data.activeBot > 0) {
      const status = 'All'
      const user = `${data.firstName} ${data.lastName}`.trim();
      this.router.navigate(["admin/strategy"], { queryParams: { userId: data.id, user: user, status: status } });
    } else {
      alert('Strategy Not Found')
    }
  }


}

