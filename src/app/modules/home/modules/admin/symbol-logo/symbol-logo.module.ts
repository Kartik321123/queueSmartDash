import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymbolLogoRoutingModule } from './symbol-logo-routing.module';
import { SymbolLogoComponent } from './symbol-logo/symbol-logo.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    SymbolLogoComponent
  ],
  imports: [
    CommonModule,
    SymbolLogoRoutingModule,
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
    MatTooltipModule
  ]
})
export class SymbolLogoModule { }
