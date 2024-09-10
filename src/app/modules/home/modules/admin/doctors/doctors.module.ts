import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    DoctorsListComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule,
    NgxUiLoaderModule,
    MatTableModule,


  ]
})
export class DoctorsModule { }
