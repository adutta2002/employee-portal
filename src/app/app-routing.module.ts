import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

const routes: Routes = [
  { path: '', component: EmpdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
