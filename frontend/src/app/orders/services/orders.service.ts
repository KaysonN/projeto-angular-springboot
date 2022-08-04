
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(public httpClient: HttpClient) { }


  list(): Order[]{
    return [
      {_id:'1', name: 'Alfajor', category:'Doce'}
    ];
  }

}
