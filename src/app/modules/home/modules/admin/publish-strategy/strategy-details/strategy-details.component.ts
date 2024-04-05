import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-strategy-details',
  templateUrl: './strategy-details.component.html',
  styleUrls: ['./strategy-details.component.scss']
})

export class StrategyDetailsComponent {
  displayedColumns: string[] = ['buyThreshold', 'initialInvestment', 'lotMultiplier', 'maxPositions', 'profitThreshold'];
  dataSource: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public values :any
  ){
    
    this.dataSource = [this.values];
  }
  

}
