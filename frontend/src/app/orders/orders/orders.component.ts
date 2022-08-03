import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders: Order[] = [
    {_id:'1', name: 'Alfajor', category:'Doce'}
  ];
  displayedColumns = ['name', 'category']

  constructor() {

  }

  ngOnInit(): void {
  }

}
