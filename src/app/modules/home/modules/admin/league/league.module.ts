import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { LeagueComponent } from './league/league.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LeagueInfoComponent } from './league-info/league-info.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CreateLeagueComponent } from './create-league/create-league.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';



@NgModule({
  declarations: [
    LeagueComponent,
    LeagueInfoComponent,
    CreateLeagueComponent
  ],
  imports: [
    CommonModule,
    LeagueRoutingModule,
    MatGridListModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatPaginatorModule,
    NgxUiLoaderModule,
    MatSnackBarModule,
    MatTooltipModule
  ]
})
export class LeagueModule { }
