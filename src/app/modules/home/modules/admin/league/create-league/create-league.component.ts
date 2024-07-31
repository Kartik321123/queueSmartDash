import { Component, Inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LeagueService } from '../provider/league.service';

@Component({
  selector: 'app-create-league',
  templateUrl: './create-league.component.html',
  styleUrls: ['./create-league.component.scss']
})
export class CreateLeagueComponent {
  form: FormGroup;
  mode: string = this.data.mode;
  now = new Date();

  constructor(private leagueService: LeagueService,
     private matdialogRef: MatDialogRef<CreateLeagueComponent>,
     private snackBar: MatSnackBar,
     @Inject(MAT_DIALOG_DATA) public data:any) {
      console.log(this.now);
      
     this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      prizing: new FormArray([]),
      startDate: new FormControl('', Validators.required),
      startTime: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      endTime: new FormControl('', Validators.required),
      investmentAmount: new FormControl('', Validators.required)
    });
    this.addField(); 
  }

  get fieldsArray(): FormArray {
    return this.form.get('prizing') as FormArray;
  }

  addField() {
    const fieldGroup = new FormGroup({
      price: new FormControl('')
    });

    this.fieldsArray.push(fieldGroup);
  }

  getPriceControl(index: number): FormControl {
    return this.fieldsArray.at(index).get('price') as FormControl;
  }

  removeField(index: number) {
    this.fieldsArray.removeAt(index);
  }

  // open watch 

  


  createLeague() {
    console.log(this.form.value);
    
    const startDate = this.form.value.startDate;
    const startTime = this.form.value.startTime;
    const endDate = this.form.value.endDate;
    const endTime = this.form.value.endTime;

    const startDateTime = new Date(`${startDate}T${startTime}:00Z`).toISOString();
    const endDateTime = new Date(`${endDate}T${endTime}:00Z`).toISOString();


    

      // Validate that startDate is before endDate
      if (startDateTime >= endDateTime) {
        this.snackBar.open('Start date must be before end date.', 'Close', {
          duration: 3000,
          panelClass: ['snackbar-error']
        });
        return;
      }
  
  

    const formattedPrizing = this.form.value.prizing.map((item:any, index:any) => ({
      rank: index + 1,
      prize: parseInt(item.price, 10)
    }));

    const leagueData = {
      name: this.form.value.name,
      prizing: formattedPrizing,
      startDate: startDateTime,
      endDate: endDateTime,
      investmentAmount: this.form.value.investmentAmount
    };

    // this.leagueService.createLeague(leagueData).subscribe((res:any) =>{
    //   this.matdialogRef.close();
      
    // });
  }

  // update league

  // updateLeague(){

  //   const startDate = this.form.value.startDate;
  //   const startTime = this.form.value.startTime;
  //   const endDate = this.form.value.endDate;
  //   const endTime = this.form.value.endTime;
  //   if(startDate && startTime && endDate && endTime){
  //   var startDateTime = new Date(`${startDate}T${startTime}:00Z`).toISOString();
  //   var endDateTime = new Date(`${endDate}T${endTime}:00Z`).toISOString();
  //   }

  //   const formattedPrizing = this.form.value.prizing.map((item:any, index:any) => ({
  //     rank: index + 1,
  //     prize: parseInt(item.price, 10)
  //   }));

  //   // const leagueData = {
  //   //   name: this.form.value.name,
  //   //   prizing: formattedPrizing,
  //   //   startDate: startDateTime,
  //   //   endDate: endDateTime,
  //   //   investmentAmount: this.form.value.investmentAmount,
  //   //   leagueId : this.data.leagueId

  //   // };


  //   // this.leagueService.updateLeague(leagueData).subscribe((res:any) =>{
  //   //   console.log(res);
      
  //   // });

  // const leagueData: any = {};

  // if (this.form.value.name) {
  //   leagueData.name = this.form.value.name;
  // }

  // if (formattedPrizing.length > 0) {
  //   leagueData.prizing = formattedPrizing;
  // }

  // if (this.form.value.investmentAmount) {
  //   leagueData.investmentAmount = this.form.value.investmentAmount;
  // }

  // if (this.data.leagueId) {
  //   leagueData.leagueId = this.data.leagueId;
  // }  

  // if (startDateTime) {
  //   leagueData.startDate = startDateTime;
  // }

  // if (endDateTime) {
  //   leagueData.endDate = endDateTime;
  // }

  // this.leagueService.updateLeague(leagueData).subscribe((res: any) => {
  //   console.log(res);
  // });
    
  // }

  updateLeague() {
   
    
    const { startDate, startTime, endDate, endTime, name, prizing, investmentAmount } = this.form.value;
  
    let startDateTime: string | undefined;
    let endDateTime: string | undefined;
  
    // Validate and format date and time
    if (startDate && startTime) {
      startDateTime = new Date(`${startDate.split(' ')[0]}T${startTime}:00Z`).toISOString();
    }
  
    if (endDate && endTime) {
      endDateTime = new Date(`${endDate.split(' ')[0]}T${endTime}:00Z`).toISOString();
    }

    console.log("start date",this.form.value.startDate)
    

    console.log('startDate', startDateTime);
    console.log('endDate', endDateTime);
  
    // Format prizing
    const formattedPrizing = prizing.map((item: any, index: number) => ({
      rank: index + 1,
      prize: parseInt(item.price, 10),
    }));
  
    // Prepare league data
    const leagueData: any = {};
  
    if (name) {
      leagueData.name = name;
    }
  
    if (formattedPrizing.length > 0 && !isNaN(formattedPrizing.prize)) {
      leagueData.prizing = formattedPrizing;
    }
  
    if (investmentAmount) {
      leagueData.investmentAmount = investmentAmount;
    }
  
    if (this.data.leagueId) {
      leagueData.leagueId = this.data.leagueId;
    }
  
    if (startDateTime) {
      leagueData.startDate = startDateTime;
    }
  
    if (endDateTime) {
      leagueData.endDate = endDateTime;
    }
    
  
    // Update league
    // this.leagueService.updateLeague(leagueData).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //   },
    //   (error: any) => {
    //     console.error(error);
    //   }
    // );
  }
  

  close(){
    this.matdialogRef.close();
  }


}
