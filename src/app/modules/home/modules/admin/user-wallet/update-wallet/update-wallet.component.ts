import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClintService } from '../../Clints/Providers/clint.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-wallet',
  templateUrl: './update-wallet.component.html',
  styleUrls: ['./update-wallet.component.scss']
})
export class UpdateWalletComponent {
  showLoader:boolean = false
  walletTierForm!: FormGroup;
  parseData:any

  constructor(
    private fb: FormBuilder,
    private clientService: ClintService, // Replace with your actual service
    public dialogRef: MatDialogRef<UpdateWalletComponent>,
    private ngxService: NgxUiLoaderService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let userData = localStorage.getItem('userinfo');
    if (userData) {
      this.parseData = JSON.parse(userData);
    }
  }

  ngOnInit(): void {
    this.initializeForm()
    this.setFormValue()

  }

  // initialise form
   initializeForm(){
    this.walletTierForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      date: ['', [Validators.required]]
    });
   }


  // setFormValue
  setFormValue(){
    let formattedDate: string = '';
  
    if (this.data.createdAt) {
      const dateObj = new Date(this.data.createdAt);
      formattedDate = dateObj.toISOString().split('T')[0]; 
    }
  
    this.walletTierForm.patchValue({
      amount: this.data.usdtAmount || '',  
      date: formattedDate
    });
  }

  updateWalletHistory(): void {
    this.ngxService.start();
    this.showLoader = true;    
    if (this.walletTierForm.invalid) {
      return;
    }
    const payload = {
      id: this.data.id,
      usdtAmount: this.walletTierForm.value.amount,
      createdAt: new Date(this.walletTierForm.value.date).toISOString()

    }

    this.clientService.updateWalletTier(payload, this.parseData.token)
    .subscribe({
      next: (response:any) => {        
        this._snackBar.open(response.message, 'Close',{
          duration: 3000
        });
        this.showLoader = false;
        this.dialogRef.close(response);
      },
      error: (error:any) => {
        this.showLoader = false;
        console.error('Error updating wallet tier:', error);
      }
    });
  }

}
