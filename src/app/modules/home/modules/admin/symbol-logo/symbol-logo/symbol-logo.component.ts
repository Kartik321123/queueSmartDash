import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AlertComponent } from 'src/app/_shared/modules/alert/alert.component';
import { BannerService } from '../../banner/Providers/banner.service';
import { UpdateBannerComponent } from '../../banner/update-banner/update-banner.component';
import { SymbolLogoService } from '../Providers/symbol-logo.service';

@Component({
  selector: 'app-symbol-logo',
  templateUrl: './symbol-logo.component.html',
  styleUrls: ['./symbol-logo.component.scss']
})
export class SymbolLogoComponent {
  form: FormGroup = new FormGroup({
    symbol: new FormControl('', Validators.required),
  })
data: any[] = [];  
file:any;
showLoader: boolean = false
base64Image: string | null = null;
parseData:any
logos:any
constructor(private ngxService: NgxUiLoaderService, private symbolLogoService: SymbolLogoService) { 
  const data = localStorage.getItem('userinfo');
  if (data) {
    this.parseData = JSON.parse(data);
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
      this.form.reset();
      this.file = null;
      this.base64Image = null;
      this.getSymbolLogos(this.parseData.token);
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
