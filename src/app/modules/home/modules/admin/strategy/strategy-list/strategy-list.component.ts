import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { StrategyService } from '../provider/strategy.service';

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
  selector: 'app-strategy-list',
  templateUrl: './strategy-list.component.html',
  styleUrls: ['./strategy-list.component.scss']
})


export class StrategyListComponent implements OnInit {
  displayedColumns: string[] = ['name','profit','signupDate', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource: any = [];
  showLoader = false
  parseData: any
  filter: any
  DateRangeEnum = DateRangeEnum;
  @Input() SelectedDateRange: DateRangeEnum = DateRangeEnum.Last7Days;
  selectedDefaultValue: any = DateRangeEnum.Last30Dayds;
  totalLength: any
  userId: any
  userName='Regaan Khan'

  range = new FormGroup({
    from: new FormControl(),
    to: new FormControl()
  })

  constructor(
    private router: ActivatedRoute,
    private ngxService: NgxUiLoaderService,
    private navigateRouter: Router,
    private strategyService: StrategyService
  ) {
    this.router.queryParams.subscribe(res => {
      if (res['userId']) {
        this.userId = res['userId']
      }
    });

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
        limit: Number.MAX_SAFE_INTEGER
      },
      dateRange: {
        from: start.toISOString(),
        to: end.toISOString()
      },
      filter: {
        text: ''
      },
      userId: this.userId
    }
    this.filter = obj;
  }

  // GET DEFAULT DATA OF LAST 30 DAYS
  getDefaultData() {
    var obj = {
      value: this.selectedDefaultValue,
    }
    this.selectionChange(obj);
  }


  strategyLists() {
    this.strategyService.activeBots(this.filter).subscribe((res) => {
      console.log("goToActiveStrategy 2222222222", res)
      this.dataSource =res.results
      this.totalLength = res.count;
    })
  }

  // BACK NAVIGATE TO USER LISTS
  backToUser() {
    this.navigateRouter.navigate(['/admin/client'])
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
      this.strategyLists()
    } else if (selectedValue === DateRangeEnum.Last7Days) {
      var start = new Date();

      var today = new Date();
      var last7Days = new Date(today.getTime() - (7 * 24 * 3600000));
      last7Days.setUTCHours(23, 59, 59, 999);
      this.filter.dateRange = {
        from: last7Days.toISOString(),
        to: start.toISOString()
      }
      this.strategyLists();
    } else if (selectedValue === DateRangeEnum.Today) {
      var start = new Date();
      start.setUTCHours(0, 0, 0, 0);
      var end = new Date();
      end.setUTCHours(23, 59, 59, 999);
      this.filter.dateRange = {
        from: start.toISOString(),
        to: end.toISOString()
      }
      this.strategyLists();
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
      this.strategyLists();
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

  pageChange(event: PageEvent) {
    this.filter.pageCount.page = event.pageIndex + 1;
    this.filter.pageCount.limit = event.pageSize;
    this.strategyLists();
  }

}
