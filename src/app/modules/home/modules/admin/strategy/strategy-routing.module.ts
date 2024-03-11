import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StrategyListComponent } from './strategy-list/strategy-list.component';

const routes: Routes = [
  {path:'',component:StrategyListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategyRoutingModule { }
