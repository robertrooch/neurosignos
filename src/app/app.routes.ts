import { Routes, UrlMatcher, UrlSegment } from '@angular/router';
import { CATEGORIAS_AGRUPADAS_IDS } from './pages/reflejos/reflejo.model';

/**
 * Matcher para las 5 categorías agrupadas (#1, #5, #6, #8 y #9) que muestran
 * la vista intermedia de selección (ReflejoSubmenuComponent) antes del detalle individual.
 * Las otras 5 categorías directas (#2, #3, #4, #7 y #10) continúan directo a ReflejoDetalleComponent.
 */
const categoriaAgrupadaMatcher: UrlMatcher = (segments: UrlSegment[]) => {
  if (
    segments.length === 2 &&
    segments[0].path === 'reflejos' &&
    CATEGORIAS_AGRUPADAS_IDS.includes(segments[1].path.toLowerCase())
  ) {
    return {
      consumed: segments,
      posParams: {
        categoriaId: segments[1]
      }
    };
  }
  return null;
};

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
    matcher: categoriaAgrupadaMatcher,
    title: 'Submenú de Reflejos | NEUROSIGNOS',
    loadComponent: () =>
      import('./pages/reflejos/babinski-submenu/babinski-submenu.component').then(m => m.ReflejoSubmenuComponent)
  },
  {
    path: 'reflejos/:categoriaId/:subId',
    title: 'Detalle de Maniobra | NEUROSIGNOS',
    loadComponent: () =>
      import('./pages/reflejos/reflejo-detalle/reflejo-detalle.component').then(m => m.ReflejoDetalleComponent)
  },
  {
    path: 'reflejos/:id',
    title: 'Detalle de Reflejo | NEUROSIGNOS',
    loadComponent: () => import('./pages/reflejos/reflejo-detalle/reflejo-detalle.component').then(m => m.ReflejoDetalleComponent)
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
