import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SymbolLogoComponent } from './symbol-logo/symbol-logo.component';

const routes: Routes = [
  {
  path: '',
  component: SymbolLogoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SymbolLogoRoutingModule { }
