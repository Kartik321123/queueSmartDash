import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueInfoComponent } from './league-info/league-info.component';
import { LeagueComponent } from './league/league.component';

const routes: Routes = [
  {
    path: '',
    component: LeagueComponent
  },
  {
    path: 'league-info',
    component: LeagueInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueRoutingModule { }
