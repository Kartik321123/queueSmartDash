import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClintService } from '../Providers/clint.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent {
  parseData:any
  otp!:number
  showLoader:boolean = false

  constructor(
    private matdialogRef: MatDialogRef<OtpComponent>,
    private clientsSerive: ClintService,
    private ngxService: NgxUiLoaderService,
    @Inject(MAT_DIALOG_DATA) public matData:any
  ){
    let data = localStorage.getItem('userinfo')
    if (data) {
      this.parseData = JSON.parse(data);
    }
  }

  ngOnInit(){
   this.generateOTP();
   
  }

  // genrate the otp
  generateOTP(){
    this.showLoader = true;
    this.ngxService.start()
    const payload = {
      email: this.matData,
    }
    this.clientsSerive.generateOTP(payload, this.parseData.token).subscribe((res:any)=>{
      this.otp = res.data.otp;
      // console.log(res);
      this.showLoader = false;
      this.ngxService.stop();
      
    })
  }
  // close the dialog box
  onClose(){
   this.matdialogRef.close();
  }

}
