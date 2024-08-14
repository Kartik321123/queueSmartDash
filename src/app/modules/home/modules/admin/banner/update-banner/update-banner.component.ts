import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
previousImageUrl:any

constructor( @Inject(MAT_DIALOG_DATA) public data: any
,private bannerService: BannerService, private fb: FormBuilder, private ngxService: NgxUiLoaderService, private dialogRef: MatDialogRef<UpdateBannerComponent>
,private _snackBar: MatSnackBar,
) { 
 }

ngOnInit(): void {
 this.setFormValue();
}


setFormValue(){
  if(this.data.mode== 'update'){
  this.form.patchValue({text: this.data.bannerData.text});
  this.form.patchValue({link: this.data.bannerData.link})
  this.previousImageUrl = this.data.bannerData.imageLink;
  }
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


upload(): void {
  this.showLoader = true;
  this.ngxService.start();
  if (this.form.valid && this.base64Image) {
    const formData = {
      image: this.base64Image,
      text: this.form.get('text')?.value,
      link: this.form.get('link')?.value
    };

    this.bannerService.upload(formData).subscribe(
      (res: any) => {
        if(res){
        console.log(res);
        this.form.reset();
        this.file = null;
        this.base64Image = null;
        this._snackBar.open("Banner Uploaded Successfully", 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
        this.dialogRef.close();
        // this.getBanner();
        // this.showLoader = false;
        // this.ngxService.stop();
        }
      },
      (error: any) => {
        console.error('Error uploading banner:', error);
      }
    );
  } else {
    console.error('Form is invalid or no file selected');
  }
}






updateBanner(){
  if (this.form.valid) {
    const formData: any = {
      text: this.form.get('text')?.value,
      link: this.form.get('link')?.value
    };
    if (this.base64Image) {
      formData.image = this.base64Image;
    }
    this.bannerService.update(formData, this.data.bannerData.id)
    .subscribe(
      (res: any) => {
        console.log(res);
        
        if(res){
        this.dialogRef.close();
        this.form.reset();
        this.file = null;
        this.base64Image = null;
        this._snackBar.open("Banner Updated Succesfully", 'Close', {
          duration: 5000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
        }
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
