import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { HeaderMenuComponent } from 'src/app/shared/components/header-menu/header-menu.component';
import {RouterModule,Routes,ActivatedRoute} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SharedComponent,
    HeaderMenuComponent
  ],
  exports:[
    HeaderMenuComponent
  ]
})
export class SharedModule { }
