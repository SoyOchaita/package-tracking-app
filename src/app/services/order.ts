import { Injectable } from '@angular/core';

interface Order {
  name: string;
  address: string;
  email: string;
  description: string;
  status: string;
  trackingCode: string;
  updates: {
    date: string;
    status: string;
    comment: string;
    responsible: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders: Order[] = [];

  addOrder(order: Order) {
    this.orders.push(order);
  }

  findOrderByCode(code: string): Order | undefined {
    return this.orders.find(o => o.trackingCode === code);
  }

  updateOrder(code: string, newUpdate: Order['updates'][0]) {
    const order = this.findOrderByCode(code);
    if (order) {
      order.status = newUpdate.status;
      order.updates.push(newUpdate);
    }
  }

  getAll() {
    return this.orders;
  }
}
