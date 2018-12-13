import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { 
        path: '', 
        loadChildren: '../dashboard/dashboard.module#DashboardModule' 
      }
    ]
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

export class PagesRoutingModule { }
