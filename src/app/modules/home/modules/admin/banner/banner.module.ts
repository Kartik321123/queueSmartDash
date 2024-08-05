import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner/banner.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgxUiLoaderModule} from 'ngx-ui-loader';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { UpdateBannerComponent } from './update-banner/update-banner.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    BannerComponent,
    UpdateBannerComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    NgxUiLoaderModule,
    MatIconModule,
    MatGridListModule,
    NgxUiLoaderModule,
    MatDialogModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatSelectModule
  ]
})
export class BannerModule { }
