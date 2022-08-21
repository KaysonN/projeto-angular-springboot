import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    category: [''],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: OrdersService,
    private snackBar: MatSnackBar,
    private location: Location) {

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(data => this.sucess(), error => this.err());
  }

  onCancel(){
    this.location.back();
  }

  private err(){
    this.snackBar.open("Erro ao salvar Pedido.", "", {duration: 3000});
  }

  private sucess(){
    this.snackBar.open("Sucesso ao lançar Pedido!", "", {duration: 3000});
    this.onCancel();
  }
}
