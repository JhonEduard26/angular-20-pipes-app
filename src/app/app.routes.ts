import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes basicos',
    loadComponent: () => import('./pages/basic/basic').then((m) => m.Basic),
  },
  {
    path: 'numbers',
    title: 'Pipes de números',
    loadComponent: () =>
      import('./pages/numbers/numbers').then((m) => m.Numbers),
  },
  {
    path: 'uncommon',
    title: 'Pipes poco comunes',
    loadComponent: () =>
      import('./pages/uncommon/uncommon').then((m) => m.Uncommon),
  },
  {
    path: 'custom',
    title: 'Pipes personalizados',
    loadComponent: () => import('./pages/custom/custom').then((m) => m.Custom),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
