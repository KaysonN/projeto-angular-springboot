import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { Order } from '../model/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders$: Observable<Order[]>;
  displayedColumns = ['name', 'category']

  // ordersService: OrdersService;

  constructor(private ordersService: OrdersService, public dialog: MatDialog) {
    // this.ordersService = new OrdersService();
    this.orders$ = this.ordersService.list()
    .pipe(
      catchError(error => {
        this.error('Erro ao carregar os pedidos.');
        return of([]);
      })
    );
  }

  error(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

}
