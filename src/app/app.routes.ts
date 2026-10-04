import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    title: 'Inicio | NEUROSIGNOS',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'reflejos',
    title: 'Reflejos | NEUROSIGNOS',
    loadComponent: () => import('./pages/reflejos/reflejos.component').then(m => m.ReflejosComponent)
  },
  {
    path: 'simulador',
    title: 'Simulador Interactivo | NEUROSIGNOS',
    loadComponent: () => import('./pages/simulador/simulador.component').then(m => m.SimuladorComponent)
  },
  {
    path: 'casos-clinicos',
    title: 'Casos Clínicos | NEUROSIGNOS',
    loadComponent: () => import('./pages/casos-clinicos/casos-clinicos.component').then(m => m.CasosClinicosComponent)
  },
  {
    path: 'evaluacion',
    title: 'Evaluación | NEUROSIGNOS',
    loadComponent: () => import('./pages/evaluacion/evaluacion.component').then(m => m.EvaluacionComponent)
  },
  {
    path: 'recursos',
    title: 'Recursos | NEUROSIGNOS',
    loadComponent: () => import('./pages/recursos/recursos.component').then(m => m.RecursosComponent)
  },
  {
    path: 'perfil',
    title: 'Mi Perfil | NEUROSIGNOS',
    loadComponent: () => import('./pages/perfil/perfil.component').then(m => m.PerfilComponent)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'Página no encontrada | NEUROSIGNOS',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
