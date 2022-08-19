import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, first, delay } from 'rxjs';
import { Order } from '../model/order';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private readonly API = 'http://localhost:8080/api/courses';

  constructor(public httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Order[]>(this.API)
    .pipe(
      first(),
      delay(5000),
      tap(orders => console.log(orders)),
    );
  }

  save(record: Order){
    return this.httpClient.post<Order>(this.API, record);
  }
}
