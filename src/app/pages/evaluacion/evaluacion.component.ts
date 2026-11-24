import { Component, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { EVALUACIONES, Evaluacion } from '../../data/evaluaciones.data';

@Component({
  selector: 'app-evaluacion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './evaluacion.component.html'
})
export class EvaluacionComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly queryParamMap = toSignal(this.route.queryParamMap);

  /** Catálogo de cuestionarios de autoevaluación disponibles */
  readonly evaluaciones = signal<Evaluacion[]>(EVALUACIONES);

  /** Cuestionario actualmente seleccionado */
  readonly evaluacionSeleccionada = signal<Evaluacion>(EVALUACIONES[0]);

  /** Registro reactivo de respuestas elegidas por el usuario: { [preguntaId]: inciso } */
  readonly respuestasUsuario = signal<Record<number, string>>({});

  /** Total de preguntas del cuestionario activo */
  readonly totalPreguntas = computed<number>(() => {
    return this.evaluacionSeleccionada().preguntas.length;
  });

  /** Cantidad de preguntas respondidas en el cuestionario activo */
  readonly totalRespondidas = computed<number>(() => {
    const respuestas = this.respuestasUsuario();
    return this.evaluacionSeleccionada().preguntas.filter(preg => Boolean(respuestas[preg.id])).length;
  });

  /** Cantidad de aciertos acumulados en el cuestionario activo */
  readonly totalAciertos = computed<number>(() => {
    const respuestas = this.respuestasUsuario();
    return this.evaluacionSeleccionada().preguntas.filter(
      preg => respuestas[preg.id] && respuestas[preg.id] === preg.respuestaCorrecta
    ).length;
  });

  /** Porcentaje de avance (0 a 100) para la barra visual de progreso */
  readonly porcentajeProgreso = computed<number>(() => {
    const total = this.totalPreguntas();
    if (total === 0) return 0;
    return Math.round((this.totalRespondidas() / total) * 100);
  });

  constructor() {
    effect(() => {
      const casoParam = this.queryParamMap()?.get('caso');
      if (!casoParam) {
        return;
      }
      const encontrada = this.evaluaciones().find(
        ev => ev.casoRelacionadoId === casoParam || ev.id === casoParam
      );
      if (encontrada && encontrada.id !== this.evaluacionSeleccionada().id) {
        this.evaluacionSeleccionada.set(encontrada);
        this.respuestasUsuario.set({});
      }
    });
  }

  /** Cambia el cuestionario activo y reinicia las respuestas */
  seleccionarEvaluacion(evaluacion: Evaluacion): void {
    this.evaluacionSeleccionada.set(evaluacion);
    this.respuestasUsuario.set({});
  }

  /** Registra la opción seleccionada por el usuario para una pregunta */
  responder(preguntaId: number, inciso: string): void {
    this.respuestasUsuario.update(prev => ({ ...prev, [preguntaId]: inciso }));
  }

  /** Limpia todas las respuestas del cuestionario actual */
  reiniciarCuestionario(): void {
    this.respuestasUsuario.set({});
  }
}
