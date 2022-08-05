import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first } from 'rxjs';
import { Order } from '../model/order';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly API = '/assets/orders.json';

  constructor(public httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Order[]>(this.API)
    .pipe(
      first(),
      tap(orders => console.log(orders)),
    );
  }
}
