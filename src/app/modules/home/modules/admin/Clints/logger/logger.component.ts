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
  options: any;
  counter:number=0
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
    limit: 15,
    filter:{
      type: ''
    }
  }
  this.filter = obj;
}

getLogger() {
  this.showLoader = true;
  this.ngxService.start();
  this.clintService.getLogger( this.filter).subscribe((res) => {
    const sortedResults = res.results.sort((a:any,b:any)=>{
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    this.dataSource = sortedResults
    const uniqueTypes = new Set(sortedResults.map((element: any) => element.type));
    if(this.counter===0){
      this.options = uniqueTypes;
      this.counter++;
    }
    this.showLoader = false;
    this.ngxService.stop();
    })

}

getParams(element:any){
  this.matDialog.open(LoggerParamComponent,{
   width:'500px',
   maxHeight: '500px',
   data: {
     Data: element,
     Params: true
   }
  })
}

//PAGINATION
pageChange(event: PageEvent) {
  this.filter.page = event.pageIndex + 1;
  this.filter.limit = event.pageSize;
  this.getLogger();
}


onSelectionChange(event: any) {
  
  const filterValue = (event as HTMLInputElement);
  
  this.filter.filter = {
    type: filterValue,
  }
  if (this.filter.filter.type.length >= 2) {
    this.getLogger();
  } else if (this.filter.filter.type.length <= 0) {
    this.filter.filter = {
      type: ''
    }
    this.filter = {
      page: 1,
      limit:15
    }
    this.getLogger();
  }
}

backToUser() {
  this.navigateRouter.navigate(['/admin/client'])
}

isObject(value: any): boolean {
  return typeof value === 'object' && value !== null;
}

// Stringify the object
stringifyActivity(activity: any): string {
  return JSON.stringify(activity);
}

activity(data:any){
  this.matDialog.open(LoggerParamComponent,{
    width:'500px',
    maxHeight: '500px',
    data: {
      Data: data
    }
  })
}
}
