import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StrategyService } from '../provider/strategy.service';

@Component({
  selector: 'app-update-bot',
  templateUrl: './update-bot.component.html',
  styleUrls: ['./update-bot.component.scss']
})
export class UpdateBotComponent {
  showLoader: boolean = false;
  parseData:any
  updateBotForm!: FormGroup

  constructor(
    private strategyService: StrategyService,
    private matDialogRef: MatDialogRef<UpdateBotComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any

    ) { 
      
      let userData = localStorage.getItem('userinfo')
      
      if (userData) {
        this.parseData = JSON.parse(userData);
      }
      
    
  }

  ngOnInit(){    
    const roi = parseFloat(this.data.botData.botConfiguration.roi.toFixed(2));
    const followers = parseFloat(this.data.followers);
    const totalProfit = parseFloat(this.data.botData.botConfiguration.totalProfit.toFixed(2));
    this.updateBotForm = new FormGroup({
      roi: new FormControl(roi, Validators.required),
      followers: new FormControl(followers, Validators.required),
      totalProfit: new FormControl(totalProfit, Validators.required),
    });
  }


  updateBot(){
    
    const data = {
      roi: this.updateBotForm.get('roi')?.value,
      followers: this.updateBotForm.get('followers')?.value,
      totalProfit: this.updateBotForm.get('totalProfit')?.value,
      botId: this.data.botData.botId
    }
    
   
    if(this.updateBotForm.valid){

    this.strategyService.updateBot(data, this.parseData.token).subscribe((res:any)=>{

      
      if(res){
        this._snackBar.open(res.message, 'Close', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
        this.matDialogRef.close();
      }       
      
    })
  }
    
   
  }

}
