import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { OperatorsComponent } from './operators/operators.component';

const routes: Routes = [
  { path: '', component: EmpdetailsComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: 'mergeMap', component: MergemapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
