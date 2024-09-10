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
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";
import { coerceStringArray } from '@angular/cdk/coercion';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  showLoader = false
  userData: any

  constructor(
    private dashService: DashboardService,
    private ngxService: NgxUiLoaderService,
    private clientService: ClintService,
  ) {
    const data: any = localStorage.getItem('userinfo')
    if (data) {
      this.userData = JSON.parse(data)
    }
  }

  ngOnInit() {
    
  }




}



