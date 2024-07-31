import { Component, Inject, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SymbolLogoService } from '../Providers/symbol-logo.service';

@Component({
  selector: 'app-symbol-logo',
  templateUrl: './symbol-logo.component.html',
  styleUrls: ['./symbol-logo.component.scss']
})
export class SymbolLogoComponent {
  @Input() isDialog: boolean = false;  
  form: FormGroup = new FormGroup({
    symbol: new FormControl('', Validators.required),
  });
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
    private _snackBar: MatSnackBar,
    private matDialogRef: MatDialogRef<SymbolLogoComponent>,
    @Inject(MAT_DIALOG_DATA) public matData: any = null , ) { 
    const data = localStorage.getItem('userinfo');
    if (data) {
      this.parseData = JSON.parse(data);
    }

    if (matData && matData.isDialog) {
      this.isDialog = matData.isDialog;
    }
  }


ngOnInit(): void {
  this.getSymbolLogos(this.parseData.token)
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

getSymbolLogos(token:any){
  this.showLoader = true;
  this.ngxService.start()
  this.symbolLogoService.getAllLogos(token).subscribe((res:any) =>{
    this.logos = res.data.results;
    this.showLoader = false;
    this.ngxService.stop();
  })
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


openUpload(){
  const dialogRef: MatDialogRef<SymbolLogoComponent> = this.matDialog.open(SymbolLogoComponent,{
    width: '500px',
    data: { isDialog: true }
  });

  dialogRef.afterClosed().subscribe(() => {
      
    this.showLoader = true;
    this.ngxService.start();
    this.getSymbolLogos(this.parseData.token);
    this.ngxService.stop();
    this.showLoader = false;
  });
}

close(){
  this.matDialogRef.close();
}







}
