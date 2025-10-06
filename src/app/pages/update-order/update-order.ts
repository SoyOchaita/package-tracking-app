import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../../services/order';

// Tipado fuerte para los estados
type OrderState = 'Creado' | 'En preparación' | 'En tránsito' | 'Entregado' | 'No entregado';

@Component({
  selector: 'app-update-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-order.html',
  styleUrl: './update-order.css'
})
export class UpdateOrder {
  orderFound: any = null;
  searchForm!: FormGroup;
  updateForm!: FormGroup;

  // Flujo de estados permitido (según el diagrama)
  stateFlow: Record<OrderState, OrderState[]> = {
    Creado: ['En preparación'],
    'En preparación': ['En tránsito', 'No entregado'],
    'En tránsito': ['Entregado', 'No entregado'],
    Entregado: [],
    'No entregado': []
  };

  constructor(private fb: FormBuilder, private orderService: OrderService) {
    // Formulario de búsqueda
    this.searchForm = this.fb.group({
      trackingCode: ['', Validators.required]
    });

    // Formulario de actualización
    this.updateForm = this.fb.group({
      status: ['', Validators.required],
      comment: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(40)]],
      responsible: ['', [Validators.required, Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/)]]
    });
  }

  // Buscar orden por código
  searchOrder() {
    const code = this.searchForm.value.trackingCode;
    const result = this.orderService.findOrderByCode(code);

    if (result) {
      this.orderFound = result;
      alert(`✅ Order found for ${result.name}. Current status: ${result.status}`);
    } else {
      this.orderFound = null;
      alert('❌ Order not found');
    }
  }

  // Obtener los estados válidos según el flujo
  getAvailableStates(): OrderState[] {
    if (!this.orderFound) return [];
    const currentState = this.orderFound.status as OrderState;
    return this.stateFlow[currentState] || [];
  }

  // Actualizar el estado
  submitUpdate() {
    if (!this.orderFound) {
      alert('Please search for an order first.');
      return;
    }

    if (this.updateForm.invalid) {
      alert('Please fill out all fields correctly.');
      return;
    }

    const newUpdate = {
      date: new Date().toLocaleString(),
      ...this.updateForm.value
    };

    this.orderService.updateOrder(this.orderFound.trackingCode, newUpdate);
    alert('✅ Order updated successfully!');
    this.updateForm.reset();
  }
}
