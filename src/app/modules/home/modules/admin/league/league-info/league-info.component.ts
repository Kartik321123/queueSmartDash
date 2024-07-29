import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-league-info',
  templateUrl: './league-info.component.html',
  styleUrls: ['./league-info.component.scss']
})
export class LeagueInfoComponent {

  dataSource: any;
  displayedColumns: string[] = ['rank', 'winnings'];


  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params =>{
      if(params['league']){
        const league = JSON.parse(params['league'])
        console.log(league.prizing);
        this.dataSource = league.prizing
        
      }
    })
  }



}
