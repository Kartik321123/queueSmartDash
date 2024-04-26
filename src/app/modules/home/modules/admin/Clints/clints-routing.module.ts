import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyListComponent } from '../strategy/strategy-list/strategy-list.component';
import { ClintComponent } from './clint/clint.component';
import { LoggerComponent } from './logger/logger.component';

const routes: Routes = [
  {path:'',component:ClintComponent},
  {path:'logger', component: LoggerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClintsRoutingModule { }
