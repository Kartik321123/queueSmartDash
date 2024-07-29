import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { CreateLeagueComponent } from '../create-league/create-league.component';
import { LeagueService } from '../provider/league.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent {
  dataSource: any;
  showLeague:boolean = false;
  showLoader: boolean = false;
  totalLength: any
  filter: any


  constructor(
     private leagueService: LeagueService,
     private router : Router, 
     private matdialog: MatDialog,
     private ngxService: NgxUiLoaderService){}
  displayedColumns: string[] = ['name', 'start date', 'end date', 'investmentAmount', 'totalPrizing', 'update'];

  ngOnInit(){
    this.initializeFilter()
    this.getLeagues()
    console.log(this.showLeague)
  }

  initializeFilter() {
    const obj: any = {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3ZmFlZDA4Yi0wMTA3LTQwNWItYTRhOS04OTJhMTExY2NlNGMiLCJyb2xlIjoiQ09NUEFOWV9BRE1JTiIsImlhdCI6MTcxNjc4OTUyNywiaXNzIjoiY3J5cHRvY2FzZS5hcHAifQ.N0PF8G_YHq24hGHaixaWFtvi1bHCazedzhK5kyJj9i4',
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

  getLeagues(){
    this.showLoader = true;
    this.ngxService.start();
    // const obj = {
    //   token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3ZmFlZDA4Yi0wMTA3LTQwNWItYTRhOS04OTJhMTExY2NlNGMiLCJyb2xlIjoiQ09NUEFOWV9BRE1JTiIsImlhdCI6MTcxNjc4OTUyNywiaXNzIjoiY3J5cHRvY2FzZS5hcHAifQ.N0PF8G_YHq24hGHaixaWFtvi1bHCazedzhK5kyJj9i4',
    //   page: 1,
    //   limit: 10
    // }
    this.leagueService.getAllLeagues(this.filter).subscribe((res) =>{
      this.dataSource = res.data.results;  
      this.totalLength = res.data.count;    
      this.showLoader = false;
      this.ngxService.stop()
      
    })

  }

  gotoPrizing(league:any){
    this.showLeague = true;
    console.log(this.showLeague)
       this.router.navigate(['admin/league/league-info'], {queryParams: {league:JSON.stringify(league)}})
  }

  openCreateLeague(){
    const dialogRef = this.matdialog.open(CreateLeagueComponent, {
      width: '700px',
      maxHeight: '600px',
      data: { mode: 'create' }
    });
    
    dialogRef.afterClosed().subscribe(() => {
      this.showLoader = true;
      this.ngxService.start();
      this.getLeagues(); 
      this.showLoader = false;
      this.ngxService.stop();
    });
  }
  

  // update league
  openUpdateLeague(data:any){
    console.log(data.id);
    
      const dialogRef = this.matdialog.open(CreateLeagueComponent,{
        width: '700px',
        maxHeight: '600px',
        data: {mode: 'update', leagueId: data.id}
      })

      dialogRef.afterClosed().subscribe(() =>{
        this.showLoader = true;
        this.ngxService.start();
        this.getLeagues();
        this.showLoader = false;
        this.ngxService.stop();
      })
    
  }

  // page change 

  pageChange(event:any){
    this.filter.pageCount.page = event.pageIndex + 1;
    this.filter.pageCount.limit = event.pageSize;
    this.getLeagues();
    
  }
  

}
