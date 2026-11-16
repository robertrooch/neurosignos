import { Component, ElementRef, computed, effect, inject, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  BabinskiSubItem,
  BABINSKI_SUCEDANEOS_DATA,
  CategoriaAgrupadaReflejo,
  CATEGORIAS_AGRUPADAS_DATA,
  EtapaFisiologia,
  FichaClinicaReflejo,
  FICHAS_CLINICAS_DATA,
  PasoManiobra,
  ReflejoItem,
  REFLEJOS_DATA,
  ReflejoSubItem,
  TODOS_SUBITEMS_DATA
} from '../reflejo.model';

export type {
  BabinskiSubItem,
  CategoriaAgrupadaReflejo,
  EtapaFisiologia,
  FichaClinicaReflejo,
  PasoManiobra,
  ReflejoSubItem
};
export { BABINSKI_SUCEDANEOS_DATA, CATEGORIAS_AGRUPADAS_DATA, FICHAS_CLINICAS_DATA };

export type TipoRespuestaVideo = 'positivo' | 'negativo';
export type SeccionClinicaTab = 'anatomia' | 'interpretacion';

@Component({
  selector: 'app-reflejo-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reflejo-detalle.component.html'
})
export class ReflejoDetalleComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly paramMap = toSignal(this.route.paramMap);

  /** Referencia al elemento nativo <video> para recargar la fuente al alternar respuesta o signo */
  readonly videoPlayer = viewChild<ElementRef<HTMLVideoElement>>('videoPlayer');

  /** Estado reactivo con Signals para controlar el tipo de video activo */
  readonly tipoRespuesta = signal<TipoRespuestaVideo>('positivo');

  /** Pestaña/sección activa en el panel de fundamentos e interpretación clínica */
  readonly seccionActiva = signal<SeccionClinicaTab>('anatomia');

  /** Parámetro :categoriaId cuando se navega desde /reflejos/:categoriaId/:subId */
  readonly categoriaIdParam = computed<string | null>(() => this.paramMap()?.get('categoriaId') ?? null);

  /** Parámetro :subId cuando se navega desde /reflejos/:categoriaId/:subId */
  readonly subId = computed<string | null>(() => this.paramMap()?.get('subId') ?? null);

  /** Signal computado con el identificador activo extraído de :subId o :id en la URL */
  readonly activeId = computed<string>(() => {
    const sub = this.subId();
    if (sub) {
      return sub;
    }
    return this.paramMap()?.get('id') ?? 'signo-de-gowers';
  });

  /** Normaliza alias de slugs hacia el ID canónico del catálogo o submenú */
  readonly canonicalId = computed<string>(() => {
    const rawId = this.activeId().toLowerCase();
    // Sub-ítems #1 Babinski y sucedáneos
    if (rawId === 'babinski' || rawId === 'signo-de-babinski') return 'babinski';
    if (rawId === 'chaddock' || rawId === 'signo-de-chaddock') return 'chaddock';
    if (rawId === 'gordon' || rawId === 'signo-de-gordon') return 'gordon';
    if (rawId === 'oppenheim' || rawId === 'signo-de-oppenheim') return 'oppenheim';

    // Sub-ítems #5 Signos cerebelosos
    if (rawId === 'holmes' || rawId === 'signo-de-holmes' || rawId === 'maniobra-de-holmes' || rawId === 'stewart-holmes') return 'holmes';
    if (rawId === 'pendulare' || rawId === 'pendulares' || rawId === 'reflejos-pendulares') return 'pendulare';
    if (rawId === 'romberg' || rawId === 'signo-de-romberg' || rawId === 'prueba-de-romberg') return 'romberg';

    // Sub-ítems #6 Signos de desinhibición frontal
    if (
      rawId === 'palmomentoniano' ||
      rawId === 'reflejo-palmomentoniano' ||
      rawId === 'marinesco-radovici' ||
      rawId === 'signo-de-marinesco-radovici'
    ) {
      return 'palmomentoniano';
    }
    if (rawId === 'myerson' || rawId === 'signo-de-myerson' || rawId === 'glabelar' || rawId === 'reflejo-glabelar') {
      return 'myerson';
    }

    // Sub-ítems #8 Signos de hipocalcemia
    if (rawId === 'chvostek' || rawId === 'signo-de-chvostek') return 'chvostek';
    if (rawId === 'trousseau' || rawId === 'signo-de-trousseau') return 'trousseau';

    // Sub-ítems #9 Signos de túnel carpal
    if (rawId === 'tinel' || rawId === 'signo-de-tinel' || rawId === 'hoffmann-tinel') return 'tinel';
    if (rawId === 'phalen' || rawId === 'maniobra-de-phalen' || rawId === 'pruebas-de-phalen') return 'phalen';

    // Signos directos (#2, #3, #4, #7, #10)
    if (rawId === 'hoffmann' || rawId === 'signo-de-hoffmann') return 'signo-de-hoffmann';
    if (rawId === 'gowers' || rawId === 'signo-de-gowers') return 'signo-de-gowers';
    if (rawId === 'tromner' || rawId === 'trömner' || rawId === 'trömer' || rawId === 'signo-de-tromner') {
      return 'signo-de-tromner';
    }
    if (rawId === 'kernig' || rawId === 'irritacion-meningea' || rawId === 'signos-de-irritacion-meningea') {
      return 'signos-de-irritacion-meningea';
    }
    if (rawId === 'hoover' || rawId === 'signo-de-hoover' || rawId === 'signos-de-trastornos-psicogenos') {
      return 'signos-de-trastornos-psicogenos';
    }
    return rawId;
  });

  /** Sub-ítem activo si el usuario explora cualquiera de las opciones dentro de las 6 categorías agrupadas */
  readonly subItemActivo = computed<ReflejoSubItem | undefined>(() => {
    const id = this.canonicalId();
    return TODOS_SUBITEMS_DATA.find(item => item.slug === id);
  });

  /** Categoría padre activa cuando el usuario está dentro de una subcategoría (#1, #5, #6, #8, #9 o #10) */
  readonly categoriaPadre = computed<CategoriaAgrupadaReflejo | undefined>(() => {
    const subItem = this.subItemActivo();
    if (subItem) {
      return CATEGORIAS_AGRUPADAS_DATA[subItem.categoriaId];
    }
    const catParam = this.categoriaIdParam();
    if (catParam && CATEGORIAS_AGRUPADAS_DATA[catParam]) {
      return CATEGORIAS_AGRUPADAS_DATA[catParam];
    }
    return undefined;
  });

  /** Lista de sub-ítems hermanos de la categoría activa para las píldoras de salto rápido */
  readonly hermanosSubcategoria = computed<ReflejoSubItem[]>(() => {
    return this.categoriaPadre()?.opciones ?? [];
  });

  /** Indica si la vista actual pertenece a una de las 6 categorías agrupadas */
  readonly esSubcategoria = computed<boolean>(() => {
    return Boolean(this.categoriaPadre()) && Boolean(this.subItemActivo());
  });

  /** Signal computado con el reflejo activo según el ID o subId de la URL */
  readonly reflejoActivo = computed<ReflejoItem | undefined>(() => {
    const subItem = this.subItemActivo();
    const categoria = this.categoriaPadre();
    if (subItem && categoria) {
      return {
        id: subItem.slug,
        numero: categoria.numero,
        titulo: subItem.titulo,
        subtitulo: subItem.subtitulo,
        icono: subItem.icono,
        estadoPlaceholder: subItem.estadoPlaceholder
      };
    }

    const id = this.canonicalId();
    return REFLEJOS_DATA.find(item => item.id === id);
  });

  /** Ficha clínica completa del reflejo o sub-ítem activo */
  readonly fichaClinica = computed<FichaClinicaReflejo>(() => {
    const id = this.canonicalId();
    const fichaRegistrada = FICHAS_CLINICAS_DATA[id];
    if (fichaRegistrada) {
      return fichaRegistrada;
    }

    const actual = this.reflejoActivo();
    if (!actual) {
      return FICHAS_CLINICAS_DATA['signo-de-gowers'];
    }

    const nombre = actual.titulo;
    const pasosDefault: PasoManiobra[] = [
      {
        numero: 1,
        titulo: 'Posición inicial',
        descripcion: `Colocar al paciente en posición anatómica adecuada y relajada para explorar ${nombre.toLowerCase()}.`
      },
      {
        numero: 2,
        titulo: 'Localización del punto de estímulo',
        descripcion: 'Identificar la referencia anatómica exacta antes de aplicar el estímulo mecánico, táctil o postural.'
      },
      {
        numero: 3,
        titulo: 'Ejecución de la maniobra',
        descripcion: 'Realizar el estímulo con la técnica, dirección e intensidad estandarizadas evitando contracciones voluntarias.'
      },
      {
        numero: 4,
        titulo: 'Observación y comparación',
        descripcion: 'Evaluar la respuesta obtenida y compararla de forma bilateral con el hemicuerpo contralateral.'
      }
    ];

    return {
      id: actual.id,
      nombre,
      sinonimos: actual.subtitulo,
      queEs: `Exploración semiológica sistematizada para evaluar ${nombre.toLowerCase()} dentro del examen neurológico integral.`,
      definicion: `Exploración semiológica sistematizada para evaluar ${nombre.toLowerCase()} dentro del examen neurológico integral.`,
      queEvalua: 'Integración de vías aferentes, centro integrador segmentario o suprasegmentario y vía eferente motora correspondiente.',
      fundamentoAnatomico: 'Integración de vías aferentes, centro integrador segmentario o suprasegmentario y vía eferente motora correspondiente.',
      fisiologia: 'La aplicación del estímulo específico desencadena una respuesta refleja o motora cuya integridad depende de los tractos neurológicos evaluados.',
      tecnica: pasosDefault,
      tecnicaExploracion: pasosDefault,
      respuestaNormal: `Respuesta fisiológica esperada durante la exploración de ${nombre.toLowerCase()}.`,
      respuestaAnormal: `Presencia del hallazgo patológico durante la exploración de ${nombre.toLowerCase()}, orientando a compromiso de la vía evaluada.`,
      interpretacion: 'Debe correlacionarse con el resto de la exploración neurológica y la historia clínica del paciente.',
      importanciaClinica: 'Permite localizar topográficamente la lesión dentro del sistema nervioso central o periférico.',
      patologiasAsociadas: ['Correlación clínica en integración'],
      datoClave: `Asegúrate de que el paciente mantenga la musculatura relajada al explorar ${nombre} y compara siempre la simetría bilateral.`
    };
  });

  /** Estado reactivo para alternar entre Opción 1 y Opción 2 cuando el signo utiliza fotografías (ej. Phalen 1 y Phalen 2) */
  readonly opcionImagen = signal<1 | 2>(1);

  /** Estado de error si el navegador no logra decodificar nativamente un contenedor de video (ej. .MOV/HEVC) */
  readonly errorDecodificacionVideo = signal<boolean>(false);

  /** Indica si el signo activo utiliza galería comparativa de imágenes (.jpg) en lugar de video */
  readonly esModoImagen = computed<boolean>(() => {
    const ficha = this.fichaClinica();
    return ficha.tipoMedia === 'imagen' && Boolean(ficha.mediaOpcion1 && ficha.mediaOpcion2);
  });

  /** Ruta codificada de la imagen activa cuando tipoMedia === 'imagen' */
  readonly imagenUrl = computed<string>(() => {
    const ficha = this.fichaClinica();
    const rawPath = this.opcionImagen() === 1 ? (ficha.mediaOpcion1 ?? '') : (ficha.mediaOpcion2 ?? '');
    return encodeURI(rawPath);
  });

  /** Etiqueta activa de la variante fotográfica seleccionada (ej. Phalen 1 o Phalen 2) */
  readonly labelImagenActiva = computed<string>(() => {
    const ficha = this.fichaClinica();
    return this.opcionImagen() === 1
      ? (ficha.labelOpcion1 ?? 'Opción 1')
      : (ficha.labelOpcion2 ?? 'Opción 2');
  });

  /** Indica si el signo activo cuenta con archivo de video MP4 o MOV configurado */
  readonly tieneVideo = computed<boolean>(() => {
    const ficha = this.fichaClinica();
    if (ficha.tipoMedia === 'imagen') {
      return false;
    }
    return Boolean(ficha.videoPrefix || (ficha.videoPositivoUrl && ficha.videoNegativoUrl));
  });

  /** Propiedad computada que retorna la ruta del video desde public/assets/videos/ codificada para nombres con espacios */
  readonly videoUrl = computed<string>(() => {
    const ficha = this.fichaClinica();
    const respuesta = this.tipoRespuesta();
    if (respuesta === 'positivo' && ficha.videoPositivoUrl) {
      return encodeURI(ficha.videoPositivoUrl);
    }
    if (respuesta === 'negativo' && ficha.videoNegativoUrl) {
      return encodeURI(ficha.videoNegativoUrl);
    }
    const prefix = ficha.videoPrefix ?? 'gowers';
    return encodeURI(`assets/videos/${prefix}-${respuesta}.mp4`);
  });

  /** Indica si el archivo de video activo utiliza contenedor QuickTime (.MOV) */
  readonly esFormatoMov = computed<boolean>(() => {
    return this.videoUrl().toLowerCase().endsWith('.mov');
  });

  /** Texto descriptivo de la respuesta actualmente seleccionada */
  readonly descripcionRespuestaActiva = computed<string>(() => {
    const ficha = this.fichaClinica();
    return this.tipoRespuesta() === 'positivo' ? ficha.respuestaAnormal : ficha.respuestaNormal;
  });

  /** Navegación secuencial entre los 10 signos del catálogo general */
  readonly reflejoAnterior = computed<ReflejoItem | undefined>(() => {
    if (this.esSubcategoria()) return undefined;
    const actual = this.reflejoActivo();
    if (!actual) return undefined;
    return REFLEJOS_DATA.find(item => item.numero === actual.numero - 1);
  });

  readonly reflejoSiguiente = computed<ReflejoItem | undefined>(() => {
    if (this.esSubcategoria()) return undefined;
    const actual = this.reflejoActivo();
    if (!actual) return undefined;
    return REFLEJOS_DATA.find(item => item.numero === actual.numero + 1);
  });

  constructor() {
    effect(() => {
      const url = this.videoUrl();
      const tieneVideoActivo = this.tieneVideo();
      this.errorDecodificacionVideo.set(false);
      const playerEl = this.videoPlayer()?.nativeElement;
      if (playerEl && tieneVideoActivo) {
        playerEl.src = url;
        playerEl.load();
      }
    });
  }

  /** Cambia el tipo de respuesta activa y fuerza la recarga del reproductor HTML5 */
  seleccionarRespuesta(tipo: TipoRespuestaVideo): void {
    if (this.tipoRespuesta() === tipo) {
      return;
    }
    this.errorDecodificacionVideo.set(false);
    this.tipoRespuesta.set(tipo);

    const playerEl = this.videoPlayer()?.nativeElement;
    if (playerEl && this.tieneVideo()) {
      playerEl.src = this.videoUrl();
      playerEl.load();
    }
  }

  /** Cambia la opción fotográfica activa (1 o 2) en signos con tipoMedia === 'imagen' */
  seleccionarOpcionImagen(opcion: 1 | 2): void {
    this.opcionImagen.set(opcion);
  }

  /** Registra error de decodificación si el navegador presenta conflicto con el contenedor/códec del video */
  onVideoError(): void {
    this.errorDecodificacionVideo.set(true);
  }

  /** Cambia la pestaña activa en los paneles de información clínica */
  seleccionarSeccion(seccion: SeccionClinicaTab): void {
    this.seccionActiva.set(seccion);
  }
}

export { ReflejoDetalleComponent as ReflejoDetailComponent };
