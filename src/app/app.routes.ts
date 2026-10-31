import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'agregar-tarea',
    loadComponent: () => import('./agregar-tarea/agregar-tarea.page').then((m) => m.AgregarTareaPage),
  },
  {
    path: 'editar-tarea/:index',
    loadComponent: () => import('./agregar-tarea/agregar-tarea.page').then((m) => m.AgregarTareaPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
