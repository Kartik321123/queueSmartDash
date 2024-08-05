import { Component, Inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AlertComponent } from 'src/app/_shared/modules/alert/alert.component';
import { SymbolLogoService } from '../Providers/symbol-logo.service';
import { UpdateLogoComponent } from '../update-logo/update-logo.component';

@Component({
  selector: 'app-symbol-logo',
  templateUrl: './symbol-logo.component.html',
  styleUrls: ['./symbol-logo.component.scss']
})
export class SymbolLogoComponent {
  data: any[] = [];  
  file: any;
  showLoader: boolean = false;
  base64Image: string | null = null;
  parseData: any;
  logos: any;

  constructor(
    private ngxService: NgxUiLoaderService, 
    private symbolLogoService: SymbolLogoService, 
    private matDialog: MatDialog,
    private matDialogRef: MatDialogRef<SymbolLogoComponent>,
    private _snackBar: MatSnackBar
    ) { 
    const data = localStorage.getItem('userinfo');
    if (data) {
      this.parseData = JSON.parse(data);
    }
  }


ngOnInit(): void {
  this.getSymbolLogos(this.parseData.token)
}


getSymbolLogos(token:any){
  this.showLoader = true;
  this.ngxService.start()
  this.symbolLogoService.getAllLogos(token).subscribe((res:any) =>{
    this.logos = res.data.results;
    this.showLoader = false;
    this.ngxService.stop();
  })
}



openUpload(){
  const dialogRef: MatDialogRef<UpdateLogoComponent> = this.matDialog.open(UpdateLogoComponent,{
    width: '500px',
    data: { mode: 'create' }
  });

  dialogRef.afterClosed().subscribe(() => {
      
    this.showLoader = true;
    this.ngxService.start();
    this.getSymbolLogos(this.parseData.token);
    this.ngxService.stop();
    this.showLoader = false;
  });
}



updateLogo(data:any){
   this.matDialog.open(UpdateLogoComponent,{
    width: '500px',
    data: {mode: 'update', updateLogo: data}
   })
   .afterClosed().subscribe((res:any)=>{
      this.showLoader = true;
      this.ngxService.start();
      this.getSymbolLogos(this.parseData.token);
      this.ngxService.stop();
      this.showLoader = false;
   })
}

// delete logo 
deleteLogo(data:any){
  this.matDialog.open(AlertComponent,{
    width: '400px'
  })
  .afterClosed()
  .subscribe((res: any) => {
    if(res){
    this._deleteLogo(data)
    }
  });

}

_deleteLogo(data:any){
  this.showLoader = true;
  this.ngxService.start();
  this.symbolLogoService.deleteLogo(data).subscribe((res:any)=>{
  if(res){
    this._snackBar.open(res.message, 'Close', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
    this.getSymbolLogos(this.parseData.token)
  }
  this.ngxService.stop();
  this.showLoader = false;
  }),
  (err: any) => {
    this.ngxService.stop();
    this.showLoader = false;
  }
}


close(){
  this.matDialogRef.close();
}



}
