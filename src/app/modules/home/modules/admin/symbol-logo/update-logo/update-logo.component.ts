import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SymbolLogoService } from '../Providers/symbol-logo.service';

@Component({
  selector: 'app-update-logo',
  templateUrl: './update-logo.component.html',
  styleUrls: ['./update-logo.component.scss']
})
export class UpdateLogoComponent {
  form: FormGroup = new FormGroup({
    symbol: new FormControl('', Validators.required),
  });
  file: any;
  showLoader: boolean = false;
  base64Image: string | null = null;
  parseData: any;
  previousImageUrl:any


  constructor(
    private ngxService: NgxUiLoaderService, 
    private _snackBar: MatSnackBar,
    private symbolLogoService: SymbolLogoService, 
    private matDialogRef: MatDialogRef<UpdateLogoComponent>,
    @Inject(MAT_DIALOG_DATA) public matData: any
  ){
    console.log(matData);
    
    const data = localStorage.getItem('userinfo');
    if (data) {
      this.parseData = JSON.parse(data);
    }
  }

  ngOnInit(){
    console.log(this.matData.updateLogo);
    if(this.matData.mode == 'update'){
      this.form.patchValue({symbol: this.matData.updateLogo.symbol})
    this.previousImageUrl = this.matData.updateLogo.url
    }
    
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.file = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.base64Image = reader.result as string;
      };
      reader.onerror = error => {
        console.error('Error: ', error);
      };
    }
    }

upload(): void {
this.showLoader = true;
this.ngxService.start();
if (this.form.valid && this.base64Image) {
  const formData = {
    image: this.base64Image,
    symbol: this.form.get('symbol')?.value
  };

  this.symbolLogoService.upload(formData, this.parseData.token)
  .subscribe(
    (res: any) => {

      if(res){
        this._snackBar.open(res.message, 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
        this.matDialogRef.close();
      }     
      this.form.reset();
      this.file = null;
      this.base64Image = null;
      // this.getSymbolLogos(this.parseData.token);
      this.showLoader = false;
      this.ngxService.stop();
    },
    (error: any) => {
      console.error('Error uploading banner:', error);
    }
  );
} else {
  console.error('Form is invalid or no file selected');
}
}

updateLogo(){
this.showLoader = true;
this.ngxService.start();
if (this.form.valid && this.base64Image) {
  const formData = {
    url: this.base64Image,
    // symbol: this.form.get('symbol')?.value,
    id: this.matData.updateLogo.id
  };

  this.symbolLogoService.update(formData)
  .subscribe(
    (res: any) => {
      console.log(res);
      
      if(res){
        this.showLoader = true;
        this.ngxService.start()
        this._snackBar.open(res.message, 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
        this.matDialogRef.close();
      }     
      this.form.reset();
      this.file = null;
      this.base64Image = null;
      this.showLoader = false;
      this.ngxService.stop();
    },
    (error: any) => {
      console.error('Error uploading banner:', error);
    }
  );
} else {
  console.error('Form is invalid or no file selected');
}
}
    


}
