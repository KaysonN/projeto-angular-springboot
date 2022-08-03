import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    AppMaterialModule
  ]
})
export class OrdersModule { }
