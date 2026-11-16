import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReflejoItem, REFLEJOS_DATA } from './reflejo.model';

export type { ReflejoItem };
export { REFLEJOS_DATA };

@Component({
  selector: 'app-reflejos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reflejos.component.html'
})
export class ReflejosComponent {
  readonly reflejos = signal<ReflejoItem[]>(REFLEJOS_DATA);
}
