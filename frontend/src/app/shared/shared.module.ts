import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { OrderPipe } from './pipes/order.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    OrderPipe,
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ErrorDialogComponent,
    OrderPipe,
  ]
})
export class SharedModule { }
