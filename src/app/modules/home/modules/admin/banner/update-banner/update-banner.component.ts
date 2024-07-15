import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { BannerService } from '../Providers/banner.service';

@Component({
  selector: 'app-update-banner',
  templateUrl: './update-banner.component.html',
  styleUrls: ['./update-banner.component.scss']
})
export class UpdateBannerComponent {

  form: FormGroup = new FormGroup({
    text: new FormControl('', Validators.required),
    link: new FormControl('')
  })
file:any;
showLoader: boolean = false
base64Image: string | null = null;

constructor(  @Inject(MAT_DIALOG_DATA) public data: any
,private bannerService: BannerService, private fb: FormBuilder, private ngxService: NgxUiLoaderService,
) { 
 }

ngOnInit(): void {
}


onFileSelected(event: any): void {
console.log(event);
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





updateBanner(){

  this.ngxService.start();
  if (this.form.valid && this.base64Image) {
    const formData = {
      image: this.base64Image,
      text: this.form.get('text')?.value,
      link: this.form.get('link')?.value
    };

    this.bannerService.update(formData, this.data.bannerId)
    .subscribe(
      (res: any) => {
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
