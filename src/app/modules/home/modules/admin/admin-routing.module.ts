import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('../admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'client', loadChildren: () => import('../admin/Clints/clints.module').then(m => m.ClintsModule) },
  { path: 'doctor', loadChildren: () => import('../admin/doctors/doctors.module').then(m => m.DoctorsModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
