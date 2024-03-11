import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClintComponent } from './clint/clint.component';

const routes: Routes = [
  {path:'',component:ClintComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClintsRoutingModule { }
