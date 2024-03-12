import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { WithdrawalService } from '../provider/withdrawal.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/_shared/modules/alert/alert.component';


@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})


export class RequestsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'amount', 'status', 'time', 'action'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource: any = [];
  showLoader = false;
  parseData: any
  filter: any

  constructor(
    private withdrawalService: WithdrawalService,
    private ngxService: NgxUiLoaderService,
    private matDialog: MatDialog,

  ) {
    let data = localStorage.getItem('userinfo');
    if (data) {
      this.parseData = JSON.parse(data);
    }
  }


  ngOnInit(): void {
    this.initializeFilter();
    this.getWithdrawalRequests();
  }

  // INITIALIZER FOR WITHDRAWAL REQUESTS
  initializeFilter() {
    const obj: any = {
      token: this.parseData.token,
      page: 1,
      limit: 5
    }
    this.filter = obj;
  }

  // GET ALL WITHDRAWAL REQUESTS
  getWithdrawalRequests() {
    this.showLoader = true;
    this.ngxService.start();
    this.withdrawalService.getWithdrawalRequests(this.filter).subscribe((res) => {
      this.dataSource = res.results
      this.paginator.length = res.count
      this.showLoader = false;
    }, error => {
      this.showLoader = false;
    })
  }

  // APPROVE USER REQUESTS
  approveRequest(data: any) {
    this.matDialog.open(AlertComponent, {
      width: "300px"
    }).afterClosed().subscribe((res) => {
      if (res == true) {
        this._approveRequest(data);
      }
    })
  }

  _approveRequest(data: any) {
    alert("Done")
  }


  pageChange(event: PageEvent) {
    this.filter.page = event.pageIndex + 1;
    this.filter.limit = event.pageSize;
    this.getWithdrawalRequests();
  }




}
