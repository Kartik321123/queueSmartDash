// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
// import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { from } from 'rxjs';
import { DashboardService } from '../Providers/dashboard.service';
import { DateRangeEnum } from '../../Clints/clint/clint.component';
import { DatePipe } from '@angular/common';
import { ClintService } from '../../Clints/Providers/clint.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  showLoader = false
  admin: any = 'amardeep kumar'
  filter: any
  DateRangeEnum = DateRangeEnum;
  @Input() SelectedDateRange: DateRangeEnum = DateRangeEnum.Last7Days;
  selectedDefaultValue: any = DateRangeEnum.Last30Dayds;
  userData: any
  clientsLength: any
  filterDays: any
  range = new FormGroup({
    from: new FormControl(),
    to: new FormControl()
  })

  chartOptions: Partial<any> = {
    series: [
      {
        name: 'Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }
    ],
    chart: {
      height: 350,
      type: 'line'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    }
  };

  constructor(
    private dashSrvice: DashboardService,
    private ngxService: NgxUiLoaderService,
    private clientService: ClintService,
  ) {
    const data: any = localStorage.getItem('userinfo')
    if (data) {
      this.userData = JSON.parse(data)
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
      token: this.userData.token,
      pageCount: {
        page: 1,
        limit: 5
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
      this.clientsLength = res.data.results.length
      this.showLoader = false;
      this.ngxService.stop();
    }, error => {
      this.showLoader = false;
      this.ngxService.stop();
    })
  }

  // GET DEFAULT DATA OF LAST 30 DAYS
  getDefaultData() {
    var obj = {
      value: this.selectedDefaultValue,
    }
    this.selectionChange(obj);
  }


  // DATE FILTER FROM TO END DATE
  selectionChange(event: any) {
    const selectedValue = event.value;
    switch (selectedValue) {
      case '30Days':
        this.filterDays = 'last 30 days';
        break;
      case '7Days':
        this.filterDays = 'last 7 days';
        break;
      case 'today':
        this.filterDays = 'today';
        break;
      default:
        this.filterDays = 'custom';
        break;
    }
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



}



