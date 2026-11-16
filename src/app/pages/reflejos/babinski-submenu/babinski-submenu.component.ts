import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  CategoriaAgrupadaReflejo,
  CATEGORIAS_AGRUPADAS_DATA,
  ReflejoItem,
  REFLEJOS_DATA,
  ReflejoSubItem
} from '../reflejo.model';

@Component({
  selector: 'app-reflejo-submenu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './babinski-submenu.component.html'
})
export class ReflejoSubmenuComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly paramMap = toSignal(this.route.paramMap);

  /** ID de la categoría agrupada leído desde :categoriaId o :id en la URL */
  readonly categoriaId = computed<string>(() => {
    return (
      this.paramMap()?.get('categoriaId') ??
      this.paramMap()?.get('id') ??
      'babinski-y-sucedaneos'
    ).toLowerCase();
  });

  /** Configuración activa de la categoría agrupada (#1, #5, #6, #8, #9 o #10) */
  readonly categoriaActiva = computed<CategoriaAgrupadaReflejo | undefined>(() => {
    return CATEGORIAS_AGRUPADAS_DATA[this.categoriaId()];
  });

  /** Sub-ítems / maniobras pertenecientes a la categoría activa */
  readonly opciones = computed<ReflejoSubItem[]>(() => {
    return this.categoriaActiva()?.opciones ?? [];
  });

  /** Navegación secuencial hacia la categoría anterior o siguiente del catálogo general (1 al 10) */
  readonly categoriaAnterior = computed<ReflejoItem | undefined>(() => {
    const actual = this.categoriaActiva();
    if (!actual) return undefined;
    return REFLEJOS_DATA.find(item => item.numero === actual.numero - 1);
  });

  readonly categoriaSiguiente = computed<ReflejoItem | undefined>(() => {
    const actual = this.categoriaActiva();
    if (!actual) return undefined;
    return REFLEJOS_DATA.find(item => item.numero === actual.numero + 1);
  });
}

export { ReflejoSubmenuComponent as BabinskiSubmenuComponent };
