import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { SupportComponent } from './support/support.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FormsModule } from '@angular/forms';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ReplyComponent } from './reply/reply.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    SupportComponent,
    ReplyComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    NgxUiLoaderModule,
    FormsModule,
    MatIconModule,
    MatInputModule
  ]
})
export class SupportModule { }
