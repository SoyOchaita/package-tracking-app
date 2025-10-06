import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-track-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './track-order.html',
  styleUrl: './track-order.css'
})
export class TrackOrder {
  searchForm!: FormGroup;
  foundOrder: any = null;

  constructor(private fb: FormBuilder, private orderService: OrderService) {
    this.searchForm = this.fb.group({
      trackingCode: ['', Validators.required]
    });
  }

  searchOrder() {
    const code = this.searchForm.value.trackingCode?.trim();
    const order = this.orderService.findOrderByCode(code);

    if (!order) {
      alert('❌ No order found with this tracking code.');
      this.foundOrder = null;
      return;
    }

    // Ordenar actualizaciones por fecha ascendente
    order.updates.sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime());
    this.foundOrder = order;
  }
}
