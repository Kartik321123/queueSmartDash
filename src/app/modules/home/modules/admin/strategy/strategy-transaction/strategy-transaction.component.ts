import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { StrategyService } from '../provider/strategy.service';

@Component({
  selector: 'app-strategy-transaction',
  templateUrl: './strategy-transaction.component.html',
  styleUrls: ['./strategy-transaction.component.scss']
})
export class StrategyTransactionComponent {
  displayedColumns: string[] = ['name', 'email'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  dataSource: any = [];
  showLoader = false;
  parseData: any
  filter: any
  totalLength: any
  userId: any
  routeResult:any


  constructor(
    private ngxService: NgxUiLoaderService,
    private activatedRoute: ActivatedRoute,
    private strategyService: StrategyService,
    private navigateRouter: Router,

  ) {
    this.activatedRoute.queryParams.subscribe((res) => {
      this.routeResult= res
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
    this.getTransactionDetails();
  }

  getTransactionDetails() {
    const obj: any = {
      token: this.parseData.token,
      userId: this.userId,
    }

    this.strategyService.strategyTransaction(obj).subscribe((res) => {
      console.log("getTransactionDetails getTransactionDetails", res)
    })

  }

  pageChange(event: PageEvent) {
    this.filter.pageCount.page = event.pageIndex + 1;
    this.filter.pageCount.limit = event.pageSize;
    // this.getUserData();
  }

  // BACK NAVIGATE TO USER STRATEGY LIST
  backToUser() {
    this.navigateRouter.navigate(["admin/strategy"], { queryParams: { userId: this.userId,user:this.routeResult.user,status:this.routeResult.status } });
  }




}
