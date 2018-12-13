import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    TranslateModule
  ],
  declarations: [
    ProfileComponent, 
    DashboardComponent
  ]
})
export class DashboardModule { }
