import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SymbolLogoRoutingModule } from './symbol-logo-routing.module';
import { SymbolLogoComponent } from './symbol-logo/symbol-logo.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppComponent } from 'src/app/app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateLogoComponent } from './update-logo/update-logo.component';


@NgModule({
  declarations: [
    SymbolLogoComponent,
    UpdateLogoComponent
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
    MatTooltipModule,
    MatToolbarModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class SymbolLogoModule { }
