import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    loadComponent: () => import('./pages/basic/basic').then((m) => m.Basic),
  },
  {
    path: 'numbers',
    loadComponent: () =>
      import('./pages/numbers/numbers').then((m) => m.Numbers),
  },
  {
    path: 'uncommon',
    loadComponent: () =>
      import('./pages/uncommon/uncommon').then((m) => m.Uncommon),
  },
  {
    path: 'custom',
    loadComponent: () => import('./pages/custom/custom').then((m) => m.Custom),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
