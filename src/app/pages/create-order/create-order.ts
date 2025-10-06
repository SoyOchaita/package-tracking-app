import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../../services/order';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-order.html',
  styleUrl: './create-order.css'
})
export class CreateOrder {
  orderStatus = 'Creado';
  orderForm!: FormGroup;
  lastOrder: any = null;
  copied = false;

  constructor(private fb: FormBuilder, private orderService: OrderService) {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/)]],
      street: ['', [Validators.required]],
      zone: ['', [Validators.required]],
      municipality: ['', [Validators.required]],
      department: ['', [Validators.required]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@(gmail|outlook)\.com$/)
      ]],
      description: ['', [Validators.required, Validators.minLength(40), Validators.maxLength(120)]]
    });
  }

  // Generar identificador de 12 letras (mayúsculas y minúsculas, sin números)
  generateTrackingCode(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    return Array.from({ length: 12 }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
  }

  // Copiar al portapapeles
  copyCode(code: string) {
    navigator.clipboard.writeText(code);
    this.copied = true;
    setTimeout(() => (this.copied = false), 1500);
  }

  onSubmit() {
    if (this.orderForm.invalid) {
      alert('Please complete all fields correctly.');
      return;
    }

    const trackingCode = this.generateTrackingCode();

    const newOrder = {
      name: this.orderForm.value.name,
      address: `${this.orderForm.value.street}, Zona ${this.orderForm.value.zone}, ${this.orderForm.value.municipality}, ${this.orderForm.value.department}`,
      email: this.orderForm.value.email,
      description: this.orderForm.value.description,
      status: this.orderStatus,
      trackingCode,
      updates: []
    };

    this.orderService.addOrder(newOrder);
    this.lastOrder = newOrder;
    this.orderForm.reset();
  }
}
