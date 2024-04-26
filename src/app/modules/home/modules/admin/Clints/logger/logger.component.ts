import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoggerParamComponent } from '../logger-param/logger-param.component';
import { ClintService } from '../Providers/clint.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {
  displayedColumns: string[] = ['activity', 'time', 'type', 'param']
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  parseData: any
  dataSource: any = [];
  showLoader = false;
  filter:any;
  totalLength:any;
  userId: string | undefined;

  constructor(
    private ngxService: NgxUiLoaderService,
    private activatedRoute: ActivatedRoute,
    private clintService: ClintService,
    private matDialog: MatDialog,
    private navigateRouter: Router,
    ) {

 
  
      this.activatedRoute.queryParams.subscribe(params => {
        this.userId = params['userId'];
      });

      let data = localStorage.getItem('userinfo');
      if (data) {
        this.parseData = JSON.parse(data);
      }

    }
    

  ngOnInit(): void {
    this.initializeFilter();
    this.getLogger();
}


initializeFilter() {
  const obj: any = {
    token: this.parseData.token,
    userId: this.userId,
    page: 1,
    limit: 20
  }
  this.filter = obj;
}

getLogger() {
  this.showLoader = true;
  this.ngxService.start();
  this.clintService.getLogger(this.filter).subscribe((res) => {
    this.dataSource = res.results;
    this.totalLength = res.count;
    this.showLoader = false;
    this.ngxService.stop();
    })

}

getParams(element:any){
  this.matDialog.open(LoggerParamComponent,{
   width:'500px',
   maxHeight: '500px',
   data: {
     Data: element
   }
  })
}

//PAGINATION
pageChange(event: PageEvent) {
  this.filter.page = event.pageIndex + 1;
  this.filter.limit = event.pageSize;
  this.getLogger();
}

backToUser() {
  this.navigateRouter.navigate(['/admin/client'])
}
}
