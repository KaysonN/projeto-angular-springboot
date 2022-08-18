import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    OrdersComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    AppMaterialModule,
    SharedModule, 
    ReactiveFormsModule,
  ]
})
export class OrdersModule { }
