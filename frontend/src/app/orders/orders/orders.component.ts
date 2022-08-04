import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {



  orders: Order[] = [];
  displayedColumns = ['name', 'category']

  // ordersService: OrdersService;

  constructor(private ordersService: OrdersService) {
    // this.ordersService = new OrdersService();
    this.orders = this.ordersService.list();
  }

  ngOnInit(): void {
    
  }

}
