

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AlertComponent } from 'src/app/_shared/modules/alert/alert.component';
import { BannerService } from '../Providers/banner.service';
import { UpdateBannerComponent } from '../update-banner/update-banner.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  form: FormGroup = new FormGroup({
        text: new FormControl('', Validators.required),
        link: new FormControl('')
      })
  data: any[] = [];  
  file:any;
  showLoader: boolean = false
  base64Image: string | null = null;

  constructor(private bannerService: BannerService, private fb: FormBuilder, private ngxService: NgxUiLoaderService,
    private matdailog: MatDialog) { }

  ngOnInit(): void {
    this.getBanner();
  }

  getBanner(): void {
    this.showLoader= true;
    this.ngxService.start();
    this.bannerService.getbanner().subscribe(
      (res: any) => {
        this.data = res.data.results; 
        this.showLoader = false;
        this.ngxService.stop();
      },
      (error: any) => {
        console.error('Error fetching banner:', error);
      }
    );
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
        text: this.form.get('text')?.value,
        link: this.form.get('link')?.value
      };

      this.bannerService.upload(formData).subscribe(
        (res: any) => {
          this.form.reset();
          this.file = null;
          this.base64Image = null;
          this.getBanner();
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

  deleteBanner(bannerId: string): void {
    const dialogRef = this.matdailog.open(AlertComponent,
      {
        width: '400px'
      });

    dialogRef.afterClosed().subscribe((res: any) => {
      if (res) {
        this._deleteBanner(bannerId);
      } else {
        console.log('Deletion was canceled.');
      }
    });
  }

  _deleteBanner(bannerId: string): void {
    this.showLoader = true;
    this.ngxService.start();
    this.bannerService.delete(bannerId).subscribe((res) => {
      this.getBanner();
      this.showLoader = false;
      this.ngxService.stop();
    });
  }

  updateBanner(bannerId: string): void {
    this.matdailog.open(UpdateBannerComponent, {
      data: {
        bannerId: bannerId
      }
    });
  }

}
