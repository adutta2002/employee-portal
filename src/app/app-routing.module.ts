import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { GoogleHomePageComponent } from './google-home-page/google-home-page.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { MycounterComponent } from './mycounter/mycounter.component';
import { OperatorsComponent } from './operators/operators.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: EmpdetailsComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: 'mergeMap', component: MergemapComponent },
  {path: 'google-home', component: GoogleHomePageComponent},
  {path: 'user', component: UserComponent},
  {path: 'count',component: MycounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
