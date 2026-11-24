import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CASOS_CLINICOS, CasoClinico } from '../../data/casos-clinicos.data';

@Component({
  selector: 'app-casos-clinicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './casos-clinicos.component.html'
})
export class CasosClinicosComponent {
  private readonly router = inject(Router);

  readonly casos = signal<CasoClinico[]>(CASOS_CLINICOS);
  readonly casoSeleccionado = signal<CasoClinico>(CASOS_CLINICOS[0]);

  seleccionarCaso(caso: CasoClinico): void {
    this.casoSeleccionado.set(caso);
  }

  irAEvaluarCaso(casoId: string): void {
    void this.router.navigate(['/evaluacion'], {
      queryParams: { caso: casoId }
    });
  }
}
