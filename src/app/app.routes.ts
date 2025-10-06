import { Routes } from '@angular/router';

export const routes: Routes = [
  // Ruta raíz: redirige automáticamente a "create-order"
  { path: '', redirectTo: 'create-order', pathMatch: 'full' },

  // Página para crear orden
  {
    path: 'create-order',
    loadComponent: () =>
      import('./pages/create-order/create-order').then((m) => m.CreateOrder)
  },

  // Página para actualizar orden
  {
    path: 'update-order',
    loadComponent: () =>
      import('./pages/update-order/update-order').then((m) => m.UpdateOrder)
  },

  // Página para seguimiento de orden
  {
    path: 'track-order',
    loadComponent: () =>
      import('./pages/track-order/track-order').then((m) => m.TrackOrder)
  },

  // Redirección por defecto si la ruta no existe
  { path: '**', redirectTo: 'create-order' }
];
