import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { OperatorsComponent } from './operators/operators.component';
import { MergemapComponent } from './mergemap/mergemap.component';
import { GoogleHomePageComponent } from './google-home-page/google-home-page.component';
import { UserComponent } from './user/user.component';
import { StoreModule } from '@ngrx/store';
import { userListReducer } from './store/user-list- reducer';

@NgModule({
  declarations: [
    AppComponent,
    EmpdetailsComponent,
    OperatorsComponent,
    MergemapComponent,
    GoogleHomePageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({users:userListReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
