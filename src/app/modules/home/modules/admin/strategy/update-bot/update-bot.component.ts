import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StrategyService } from '../provider/strategy.service';

@Component({
  selector: 'app-update-bot',
  templateUrl: './update-bot.component.html',
  styleUrls: ['./update-bot.component.scss']
})
export class UpdateBotComponent {
  showLoader: boolean = false;
  parseData:any

  updateBotForm: FormGroup = new FormGroup({
    roi: new FormControl('', Validators.required),
    followers: new FormControl('', Validators.required),
    totalProfit: new FormControl('', Validators.required),
  });

  constructor(
    private strategyService: StrategyService,
    @Inject(MAT_DIALOG_DATA) public data: any

    ) { 
      let userData = localStorage.getItem('userinfo')
      
      if (userData) {
        this.parseData = JSON.parse(userData);
      }
      
    
  }


  updateBot(){
    
    const data = {
      token: this.parseData.token,
      roi: this.updateBotForm.get('roi')?.value,
      followers: this.updateBotForm.get('followers')?.value,
      totalProfit: this.updateBotForm.get('totalProfit')?.value,
      botId: this.data
    }
    console.log(this.updateBotForm.valid);
    
   
    if(this.updateBotForm.valid){

    this.strategyService.updateBot(data).subscribe((res:any)=>{
      
    
      
    })
  }
    
   
  }

}
