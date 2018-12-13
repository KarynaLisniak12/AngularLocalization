import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule
  ],
  declarations: [
    PagesComponent
  ]
})
export class PagesModule { }
