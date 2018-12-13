import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
