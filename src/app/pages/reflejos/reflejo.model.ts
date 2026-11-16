export interface PasoManiobra {
  numero: number;
  titulo: string;
  descripcion: string;
}

export interface EtapaFisiologia {
  titulo: string;
  descripcion: string;
}

export interface FichaClinicaReflejo {
  id: string;
  nombre: string;
  sinonimos: string;
  queEs: string;
  definicion: string;
  queEvalua: string;
  fundamentoAnatomico: string;
  fisiologia: string;
  fisiologiaSecuencia?: EtapaFisiologia[];
  tecnica: PasoManiobra[];
  tecnicaExploracion: PasoManiobra[];
  respuestaNormal: string;
  respuestaAnormal: string;
  interpretacion: string;
  interpretacionSecuencia?: EtapaFisiologia[];
  importanciaClinica: string;
  patologiasAsociadas?: string[];
  datoClave: string;
  videoPrefix?: string;
  videoPositivoUrl?: string;
  videoNegativoUrl?: string;
  tipoMedia?: 'video' | 'imagen';
  mediaOpcion1?: string;
  mediaOpcion2?: string;
  labelOpcion1?: string;
  labelOpcion2?: string;
  descripcionOpcion1?: string;
  descripcionOpcion2?: string;
}

export interface ReflejoItem {
  id: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  icono: string;
  estadoPlaceholder: string;
}

export interface ReflejoSubItem {
  slug: string;
  categoriaId: string;
  numero: number;
  codigo: string;
  titulo: string;
  nombreCorto: string;
  subtitulo: string;
  zonaEstimulo: string;
  icono: string;
  estadoPlaceholder: string;
}

export type BabinskiSubItem = ReflejoSubItem;

export interface CategoriaAgrupadaReflejo {
  id: string;
  numero: number;
  etiquetaDominio: string;
  titulo: string;
  descripcion: string;
  icono: string;
  opciones: ReflejoSubItem[];
}

export const CATEGORIAS_AGRUPADAS_DATA: Record<string, CategoriaAgrupadaReflejo> = {
  'babinski-y-sucedaneos': {
    id: 'babinski-y-sucedaneos',
    numero: 1,
    etiquetaDominio: '#1 · VÍA PIRAMIDAL',
    titulo: 'Babinski y sucedáneos',
    descripcion:
      'Selecciona la maniobra específica para explorar su técnica, respuesta normal, hallazgo patológico y demostración en video.',
    icono: 'M13 10V3L4 14h7v7l9-11h-7z',
    opciones: [
      {
        slug: 'babinski',
        categoriaId: 'babinski-y-sucedaneos',
        numero: 1,
        codigo: '1.1',
        titulo: 'Signo de Babinski',
        nombreCorto: 'Babinski',
        subtitulo: 'Estimulación del borde lateral de la planta del pie.',
        zonaEstimulo: 'Borde lateral de la planta del pie (talón hacia cabezas metatarsianas)',
        icono: 'M13 10V3L4 14h7v7l9-11h-7z',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      },
      {
        slug: 'chaddock',
        categoriaId: 'babinski-y-sucedaneos',
        numero: 2,
        codigo: '1.2',
        titulo: 'Signo de Chaddock',
        nombreCorto: 'Chaddock',
        subtitulo: 'Estimulación del borde lateral del pie por debajo del maléolo externo.',
        zonaEstimulo: 'Región inframaleolar lateral hacia el quinto metatarsiano',
        icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      },
      {
        slug: 'gordon',
        categoriaId: 'babinski-y-sucedaneos',
        numero: 3,
        codigo: '1.3',
        titulo: 'Signo de Gordon',
        nombreCorto: 'Gordon',
        subtitulo: 'Compresión firme de la masa muscular de los gemelos.',
        zonaEstimulo: 'Masa muscular gastrocnemia (pantorrilla)',
        icono: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      },
      {
        slug: 'oppenheim',
        categoriaId: 'babinski-y-sucedaneos',
        numero: 4,
        codigo: '1.4',
        titulo: 'Signo de Oppenheim',
        nombreCorto: 'Oppenheim',
        subtitulo: 'Deslizamiento con presión firme a lo largo de la cresta anterior de la tibia.',
        zonaEstimulo: 'Cara anteromedial / cresta tibial (de proximal a distal)',
        icono: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      }
    ]
  },

  'signos-cerebelosos': {
    id: 'signos-cerebelosos',
    numero: 5,
    etiquetaDominio: '#5 · COORDINACIÓN Y EQUILIBRIO',
    titulo: 'Signos cerebelosos',
    descripcion:
      'Selecciona la maniobra específica para explorar el control de frenado motor, el tono muscular cerebeloso y el equilibrio estático.',
    icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    opciones: [
      {
        slug: 'holmes',
        categoriaId: 'signos-cerebelosos',
        numero: 1,
        codigo: '5.1',
        titulo: 'Signo de Holmes',
        nombreCorto: 'Holmes',
        subtitulo: 'Evaluación del fenómeno del rebote y control de frenado cerebeloso.',
        zonaEstimulo: 'Flexión contra resistencia del antebrazo con liberación súbita',
        icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      },
      {
        slug: 'pendulare',
        categoriaId: 'signos-cerebelosos',
        numero: 2,
        codigo: '5.2',
        titulo: 'Reflejos pendulares',
        nombreCorto: 'Pendulares',
        subtitulo: 'Oscilación rítmica prolongada tras percusión osteotendinosa por hipotonía cerebelosa.',
        zonaEstimulo: 'Tendón rotuliano con piernas colgando libremente en el borde de la camilla',
        icono: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      },
      {
        slug: 'romberg',
        categoriaId: 'signos-cerebelosos',
        numero: 3,
        codigo: '5.3',
        titulo: 'Signo de Romberg',
        nombreCorto: 'Romberg',
        subtitulo: 'Valoración del equilibrio estático y la integridad propioceptiva y vestibular.',
        zonaEstimulo: 'Bipedestación con pies juntos: comparativa con ojos abiertos y cerrados',
        icono: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      }
    ]
  },

  'signos-de-desinhibicion-frontal': {
    id: 'signos-de-desinhibicion-frontal',
    numero: 6,
    etiquetaDominio: '#6 · LIBERACIÓN FRONTAL',
    titulo: 'Signos de desinhibición frontal',
    descripcion:
      'Selecciona el reflejo primitivo o arcaico para explorar su técnica de provocación, inhibición cortical frontal e interpretación clínica.',
    icono: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    opciones: [
      {
        slug: 'palmomentoniano',
        categoriaId: 'signos-de-desinhibicion-frontal',
        numero: 1,
        codigo: '6.1',
        titulo: 'Signo de Marinesco-Radovici (Reflejo palmomentoniano)',
        nombreCorto: 'Palmomentoniano',
        subtitulo: 'Contracción involuntaria ipsilateral del músculo mentoniano al estimular la eminencia tenar.',
        zonaEstimulo: 'Eminencia tenar de la palma de la mano (estímulo cutáneo firme)',
        icono: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      },
      {
        slug: 'myerson',
        categoriaId: 'signos-de-desinhibicion-frontal',
        numero: 2,
        codigo: '6.2',
        titulo: 'Signo de Myerson (Reflejo glabelar)',
        nombreCorto: 'Myerson',
        subtitulo: 'Parpadeo persistente e inagotable ante la percusión repetida sobre la glabela.',
        zonaEstimulo: 'Región glabelar (entrecejo) mediante percusión suave y rítmica',
        icono: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      }
    ]
  },

  'signos-de-hipocalcemia': {
    id: 'signos-de-hipocalcemia',
    numero: 8,
    etiquetaDominio: '#8 · HIPEREXCITABILIDAD NEUROMUSCULAR',
    titulo: 'Signos de hipocalcemia',
    descripcion:
      'Selecciona la maniobra clínica para evaluar tetania latente e hiperexcitabilidad de nervios periféricos por hipocalcemia.',
    icono: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    opciones: [
      {
        slug: 'chvostek',
        categoriaId: 'signos-de-hipocalcemia',
        numero: 1,
        codigo: '8.1',
        titulo: 'Signo de Chvostek',
        nombreCorto: 'Chvostek',
        subtitulo: 'Contracción de la musculatura facial ipsilateral al percutir el trayecto del nervio facial.',
        zonaEstimulo: 'Tronco del nervio facial por delante del conducto auditivo externo / arco cigomático',
        icono: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      },
      {
        slug: 'trousseau',
        categoriaId: 'signos-de-hipocalcemia',
        numero: 2,
        codigo: '8.2',
        titulo: 'Signo de Trousseau',
        nombreCorto: 'Trousseau',
        subtitulo: 'Espasmo carpopedal inducido por isquemia transitoria con manguito de presión arterial.',
        zonaEstimulo: 'Brazo (insuflación de esfigmomanómetro 20 mmHg sobre presión sistólica por 3 min)',
        icono: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      }
    ]
  },

  'signos-de-tunel-carpal': {
    id: 'signos-de-tunel-carpal',
    numero: 9,
    etiquetaDominio: '#9 · NEUROPATÍA POR ATRAPAMIENTO',
    titulo: 'Signos de túnel carpal',
    descripcion:
      'Selecciona la maniobra de provocación para explorar el atrapamiento compresivo del nervio mediano a nivel del retináculo flexor.',
    icono: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
    opciones: [
      {
        slug: 'tinel',
        categoriaId: 'signos-de-tunel-carpal',
        numero: 1,
        codigo: '9.1',
        titulo: 'Signo de Tinel',
        nombreCorto: 'Tinel',
        subtitulo: 'Sensación de parestesias o descarga eléctrica al percutir el nervio mediano en el carpo.',
        zonaEstimulo: 'Cara palmar de la muñeca sobre el túnel del carpo (trayecto del nervio mediano)',
        icono: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
        estadoPlaceholder: 'Ficha clínica completa y videos integrados'
      },
      {
        slug: 'phalen',
        categoriaId: 'signos-de-tunel-carpal',
        numero: 2,
        codigo: '9.2',
        titulo: 'Pruebas de Phalen 1 y Phalen 2',
        nombreCorto: 'Phalen 1 y 2',
        subtitulo: 'Reproducción de parestesias en territorio mediano mediante flexión (Phalen 1) o extensión (Phalen 2) sostenida de muñecas.',
        zonaEstimulo: 'Flexión máxima (dorsos juntos) o extensión en oración (palmas juntas) durante 60 s',
        icono: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11',
        estadoPlaceholder: 'Ficha clínica completa e imágenes integradas'
      }
    ]
  }
};

export const CATEGORIAS_AGRUPADAS_IDS: string[] = Object.keys(CATEGORIAS_AGRUPADAS_DATA);

export const BABINSKI_SUCEDANEOS_DATA: ReflejoSubItem[] =
  CATEGORIAS_AGRUPADAS_DATA['babinski-y-sucedaneos'].opciones;

export const TODOS_SUBITEMS_DATA: ReflejoSubItem[] = Object.values(CATEGORIAS_AGRUPADAS_DATA).flatMap(
  categoria => categoria.opciones
);

export const REFLEJOS_DATA: ReflejoItem[] = [
  {
    id: 'babinski-y-sucedaneos',
    numero: 1,
    titulo: 'Babinski y sucedáneos',
    subtitulo: 'Reflejo cutáneo plantar y variantes (Babinski, Chaddock, Gordon, Oppenheim)',
    icono: 'M13 10V3L4 14h7v7l9-11h-7z',
    estadoPlaceholder: '4 maniobras piramidales con fichas clínicas y videos integrados'
  },
  {
    id: 'signo-de-hoffmann',
    numero: 2,
    titulo: 'Signo de Hoffmann',
    subtitulo: 'Reflejo piramidal de la extremidad superior mediante percusión distal del dedo medio',
    icono: 'M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11',
    estadoPlaceholder: 'Demostración en video disponible (Normal y Patológico)'
  },
  {
    id: 'signo-de-tromner',
    numero: 3,
    titulo: 'Signo de Trömner',
    subtitulo: 'Alternativa neurológica al signo de Hoffmann para respuesta piramidal en extremidad superior',
    icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    estadoPlaceholder: 'Demostración en video disponible (Normal y Patológico)'
  },
  {
    id: 'signos-de-irritacion-meningea',
    numero: 4,
    titulo: 'Signos de irritación meníngea',
    subtitulo: 'Maniobra y Signo de Kernig · Rigidez de nuca y maniobra de Brudzinski',
    icono: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    estadoPlaceholder: 'Demostración en video disponible (Normal y Patológico)'
  },
  {
    id: 'signos-cerebelosos',
    numero: 5,
    titulo: 'Signos cerebelosos',
    subtitulo: 'Signo de Holmes, reflejos pendulares y signo de Romberg',
    icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    estadoPlaceholder: '3 maniobras cerebelosas con fichas clínicas y videos integrados'
  },
  {
    id: 'signos-de-desinhibicion-frontal',
    numero: 6,
    titulo: 'Signos de desinhibición frontal',
    subtitulo: 'Reflejos primitivos: signo de Marinesco-Radovici (palmomentoniano) y signo de Myerson (glabelar)',
    icono: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    estadoPlaceholder: '2 signos de liberación frontal con fichas clínicas y videos integrados'
  },
  {
    id: 'signo-de-gowers',
    numero: 7,
    titulo: 'Signo de Gowers',
    subtitulo: 'Maniobra de trepado sobre las propias extremidades por debilidad muscular proximal',
    icono: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    estadoPlaceholder: 'Demostración en video disponible (Normal y Patológico)'
  },
  {
    id: 'signos-de-hipocalcemia',
    numero: 8,
    titulo: 'Signos de hipocalcemia',
    subtitulo: 'Hiperexcitabilidad neuromuscular: signos clínicos de Chvostek y de Trousseau',
    icono: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    estadoPlaceholder: '2 signos de tetania latente con fichas clínicas y videos integrados'
  },
  {
    id: 'signos-de-tunel-carpal',
    numero: 9,
    titulo: 'Signos de túnel carpal',
    subtitulo: 'Compresión del nervio mediano: signo de Tinel y pruebas de Phalen 1 y Phalen 2',
    icono: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122',
    estadoPlaceholder: '2 maniobras con fichas clínicas y multimedia integrados'
  },
  {
    id: 'signos-de-trastornos-psicogenos',
    numero: 10,
    titulo: 'Signos de trastornos psicógenos',
    subtitulo: 'Signo de Hoover: extensión sinérgica involuntaria de cadera en debilidad funcional de extremidad inferior',
    icono: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
    estadoPlaceholder: 'Demostración en video disponible (Normal y Patológico)'
  }
];

export const FICHAS_CLINICAS_DATA: Record<string, FichaClinicaReflejo> = {
  // Categoría #1: Babinski y sucedáneos
  babinski: {
    id: 'babinski',
    nombre: 'Signo de Babinski',
    sinonimos: 'Reflejo cutáneo plantar extensor',
    queEs:
      'Dorsiflexión del primer dedo del pie, con extensión y separación en abanico de los demás dedos, provocada por la estimulación firme de la parte lateral de la planta del pie. Es un reflejo normal en recién nacidos y patológico en niños mayores y adultos, indicando una lesión de la vía piramidal.',
    definicion:
      'Dorsiflexión del primer dedo del pie, con extensión y separación en abanico de los demás dedos, provocada por la estimulación firme de la parte lateral de la planta del pie. Es un reflejo normal en recién nacidos y patológico en niños mayores y adultos, indicando una lesión de la vía piramidal.',
    queEvalua:
      'Evalúa la integridad del tracto corticoespinal (TCE) a lo largo de todo su trayecto desde la corteza cerebral y tronco encefálico hasta la médula espinal, permitiendo detectar patologías del Sistema Nervioso Central (SNC).',
    fundamentoAnatomico:
      'Evalúa la integridad del tracto corticoespinal (TCE) a lo largo de todo su trayecto desde la corteza cerebral y tronco encefálico hasta la médula espinal, permitiendo detectar patologías del Sistema Nervioso Central (SNC).',
    fisiologia:
      'En condiciones normales, el tracto corticoespinal (TCE) inhibe la propagación del estímulo nociceptivo plantar (dermatoma S1) hacia otras raíces medulares, manteniendo una flexión plantar fisiológica. Cuando el TCE está lesionado, la señal nociceptiva se extiende hacia las astas anteriores de L4-L5, activando los músculos extensores de los dedos.',
    fisiologiaSecuencia: [
      {
        titulo: 'Origen y vía',
        descripcion:
          'El tracto corticoespinal (motoneurona superior) se origina en un 60% en la corteza motora primaria, áreas premotoras y motoras suplementarias (y el 40% restante en áreas sensoriales, parietal y opérculo), haciendo sinapsis con la motoneurona alfa (motoneurona inferior) en el asta anterior medular.'
      },
      {
        titulo: 'Arco reflejo normal',
        descripcion:
          'La estimulación de la cara plantar lateral (dermatoma S1) activa fibras nociceptivas que viajan por los nervios tibial y ciático hasta el segmento S1, produciendo flexión plantar normal (dedos hacia abajo y hacia adentro).'
      },
      {
        titulo: 'Mecanismo patológico',
        descripcion:
          'En condiciones normales, el TCE inhibe la propagación del estímulo a otras raíces. Cuando el TCE está dañado, la señal nociceptiva se extiende hacia las astas anteriores de L4-L5, activando los músculos extensores de los dedos.'
      }
    ],
    tecnica: [
      {
        numero: 1,
        titulo: 'Posición y preparación',
        descripcion:
          'Colocar al paciente en decúbito supino con los pies descubiertos y relajados.'
      },
      {
        numero: 2,
        titulo: 'Estimulación plantar',
        descripcion:
          'Con un objeto romo (mango del martillo de reflejos), deslizar con firmeza a lo largo del borde lateral de la planta del pie, comenzando desde el talón y avanzando hacia los dedos con un movimiento suave y continuo (curvándose medialmente hacia la base de los metatarsianos).'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion:
          'Evaluar el movimiento inicial del dedo gordo (hallux) y de los demás dedos del pie.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posición y preparación',
        descripcion:
          'Colocar al paciente en decúbito supino con los pies descubiertos y relajados.'
      },
      {
        numero: 2,
        titulo: 'Estimulación plantar',
        descripcion:
          'Con un objeto romo (mango del martillo de reflejos), deslizar con firmeza a lo largo del borde lateral de la planta del pie, comenzando desde el talón y avanzando hacia los dedos con un movimiento suave y continuo (curvándose medialmente hacia la base de los metatarsianos).'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion:
          'Evaluar el movimiento inicial del dedo gordo (hallux) y de los demás dedos del pie.'
      }
    ],
    respuestaNormal:
      'En adultos y niños mayores se observa la flexión plantar (curvatura hacia abajo y hacia adentro) de los dedos del pie. (Nota: En recién nacidos y lactantes menores, la dorsiflexión del dedo gordo es fisiológica).',
    respuestaAnormal:
      'Dorsiflexión (movimiento hacia arriba) del dedo gordo del pie, acompañada o no de extensión y separación en abanico de los demás dedos y retracción de la pierna.',
    interpretacion:
      'La lectura semiológica del reflejo cutáneo plantar requiere diferenciar la respuesta extensora verdadera de movimientos voluntarios de retirada.',
    interpretacionSecuencia: [
      {
        titulo: 'Significado',
        descripcion:
          'Indicativo de disfunción del tracto corticoespinal (neurona motora superior). Suele ser el primer indicio clínico de lesión medular tras un traumatismo agudo.'
      },
      {
        titulo: 'Criterios de lectura',
        descripcion:
          'Si los dedos flexionan hacia abajo, el reflejo es normal/negativo; si no hay movimiento, se considera una respuesta neutra sin valor clínico.'
      },
      {
        titulo: 'Precaución diagnóstica',
        descripcion:
          'Interpretar con cuidado para evitar falsos positivos por respuestas de retirada voluntaria o hipersensibilidad plantar.'
      }
    ],
    importanciaClinica:
      'Indicativo de disfunción del tracto corticoespinal (neurona motora superior). Suele ser el primer indicio clínico de lesión medular tras un traumatismo agudo. Debe interpretarse con cuidado para evitar falsos positivos por retirada voluntaria o hipersensibilidad plantar.',
    patologiasAsociadas: [
      'Lesión del tracto corticoespinal (NMS)',
      'Traumatismo medular agudo',
      'Evento vascular cerebral (EVC)',
      'Esclerosis múltiple'
    ],
    datoClave:
      'Indicativo de disfunción del tracto corticoespinal (neurona motora superior); suele ser el primer indicio clínico de lesión medular tras un traumatismo agudo. Evita falsos positivos diferenciándolo de la retirada voluntaria por hipersensibilidad plantar.',
    videoPrefix: 'babinski'
  },
  chaddock: {
    id: 'chaddock',
    nombre: 'Signo de Chaddock',
    sinonimos: 'Sucedáneo de Babinski — Estímulo dorsolateral del pie',
    queEs:
      'Maniobra de exploración neurológica descrita como alternativa al signo de Babinski. Consiste en estimular la región dorsolateral externa del pie, cerca del maléolo lateral, para observar si aparece una respuesta plantar flexora normal o una respuesta extensora patológica del dedo gordo.',
    definicion:
      'Maniobra de exploración neurológica descrita como alternativa al signo de Babinski. Consiste en estimular la región dorsolateral externa del pie, cerca del maléolo lateral, para observar si aparece una respuesta plantar flexora normal o una respuesta extensora patológica del dedo gordo.',
    queEvalua:
      'Evalúa la respuesta plantar y, de manera indirecta, la integridad funcional de la vía corticoespinal (neurona motora superior), aunque no mide la fuerza muscular de forma aislada ni identifica por sí solo el sitio exacto de la lesión. Es especialmente útil cuando la estimulación directa de la planta provoca mucha retirada, cosquilleo, resulta difícil de interpretar o existe una lesión local en la planta del pie.',
    fundamentoAnatomico:
      'Evalúa la respuesta plantar y, de manera indirecta, la integridad funcional de la vía corticoespinal (neurona motora superior), aunque no mide la fuerza muscular de forma aislada ni identifica por sí solo el sitio exacto de la lesión. Es especialmente útil cuando la estimulación directa de la planta provoca mucha retirada, cosquilleo, resulta difícil de interpretar o existe una lesión local en la planta del pie.',
    fisiologia:
      'El roce sobre la región lateral del pie activa aferencias sensitivas hacia circuitos segmentarios medulares. En condiciones normales, la modulación descendente corticoespinal limita la propagación de la respuesta y predomina la flexión plantar; ante lesión de neurona motora superior, se pierde esta inhibición y se libera la respuesta extensora del hallux con apertura de los demás dedos.',
    fisiologiaSecuencia: [
      {
        titulo: 'Aferencia sensitiva',
        descripcion:
          'El roce activa aferencias sensitivas de la región lateral del pie que llegan a circuitos segmentarios de la médula espinal.'
      },
      {
        titulo: 'Modulación normal',
        descripcion:
          'En condiciones habituales, la modulación descendente de la vía corticoespinal limita la propagación de la respuesta y predomina la flexión plantar de los dedos.'
      },
      {
        titulo: 'Pérdida de inhibición',
        descripcion:
          'Si esta modulación se pierde por una lesión de neurona motora superior, se libera la respuesta extensora con elevación del hallux y apertura de los otros dedos.'
      }
    ],
    tecnica: [
      {
        numero: 1,
        titulo: 'Posición del paciente',
        descripcion:
          'Colocar al paciente relajado, preferentemente acostado, con el pie accesible.'
      },
      {
        numero: 2,
        titulo: 'Estimulación dorsolateral',
        descripcion:
          'Con un objeto romo (por ejemplo, el extremo de un martillo de reflejos), deslizar un estímulo firme y controlado —sin lesionar la piel— por la región dorsolateral del pie: desde la zona situada por debajo y detrás del maléolo lateral, hacia delante siguiendo el borde externo del pie.'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion:
          'Evaluar atentamente el movimiento del dedo gordo y de los demás dedos.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posición del paciente',
        descripcion:
          'Colocar al paciente relajado, preferentemente acostado, con el pie accesible.'
      },
      {
        numero: 2,
        titulo: 'Estimulación dorsolateral',
        descripcion:
          'Con un objeto romo (por ejemplo, el extremo de un martillo de reflejos), deslizar un estímulo firme y controlado —sin lesionar la piel— por la región dorsolateral del pie: desde la zona situada por debajo y detrás del maléolo lateral, hacia delante siguiendo el borde externo del pie.'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion:
          'Evaluar atentamente el movimiento del dedo gordo y de los demás dedos.'
      }
    ],
    respuestaNormal:
      'No aparece extensión del dedo gordo. Puede observarse flexión plantar de los dedos o no producirse un movimiento claro (respuesta neutra).',
    respuestaAnormal:
      'El dedo gordo se extiende o se eleva lentamente; puede acompañarse de separación en abanico de los otros dedos (equivalente extensor del patrón de Babinski).',
    interpretacion:
      'Equivalente extensor del patrón de Babinski útil cuando la planta del pie presenta hipersensibilidad, retirada defensiva excesiva o lesiones cutáneas locales.',
    interpretacionSecuencia: [
      {
        titulo: 'Orientación diagnóstica',
        descripcion:
          'Un resultado positivo en adultos orienta a alteración de las vías motoras centrales y justifica completar la exploración neurológica y estudios indicados (relevante ante sospecha de evento vascular cerebral, lesión de médula espinal o enfermedad desmielinizante), sin confirmar por sí solo ninguna condición.'
      },
      {
        titulo: 'Precauciones de interpretación',
        descripcion:
          'Una retirada brusca de toda la extremidad puede dificultar la lectura. En lactantes pequeños, la respuesta extensora puede ser fisiológica por maduración incompleta de las vías descendentes y persistir hasta alrededor de los 2 años.'
      }
    ],
    importanciaClinica:
      'Un resultado positivo en adultos orienta a alteración de las vías motoras centrales (evento vascular cerebral, lesión de médula espinal o enfermedad desmielinizante) y justifica completar la exploración neurológica. En lactantes pequeños la respuesta extensora puede ser fisiológica hasta alrededor de los 2 años.',
    patologiasAsociadas: [
      'Evento vascular cerebral (EVC)',
      'Lesión de médula espinal',
      'Enfermedad desmielinizante',
      'Disfunción de vía corticoespinal (NMS)'
    ],
    datoClave:
      'Alternativa de elección cuando la estimulación directa de la planta provoca retirada excesiva, cosquilleo o existe una lesión local plantar; su positividad en adultos orienta a compromiso de neurona motora superior.',
    videoPrefix: 'chaddock'
  },
  gordon: {
    id: 'gordon',
    nombre: 'Signo de Gordon',
    sinonimos: 'Sucedáneo de Babinski — Compresión firme de los músculos de la pantorrilla',
    queEs:
      'Reflejo plantar patológico que se explora comprimiendo los músculos de la pantorrilla (especialmente el grupo de los gemelos y el sóleo) y observando el movimiento de los dedos del pie.',
    definicion:
      'Reflejo plantar patológico que se explora comprimiendo los músculos de la pantorrilla (especialmente el grupo de los gemelos y el sóleo) y observando el movimiento de los dedos del pie.',
    queEvalua:
      'Explora indirectamente la regulación descendente de los circuitos reflejos espinales y la integridad funcional de la vía corticoespinal (neurona motora superior); no es una prueba de fuerza de los músculos de la pantorrilla. Se utiliza como maniobra alternativa para buscar una respuesta plantar extensora cuando la estimulación directa de la planta del pie no se tolera o produce una respuesta ambigua.',
    fundamentoAnatomico:
      'Explora indirectamente la regulación descendente de los circuitos reflejos espinales y la integridad funcional de la vía corticoespinal (neurona motora superior); no es una prueba de fuerza de los músculos de la pantorrilla. Se utiliza como maniobra alternativa para buscar una respuesta plantar extensora cuando la estimulación directa de la planta del pie no se tolera o produce una respuesta ambigua.',
    fisiologia:
      'La compresión de la pantorrilla activa aferencias sensitivas profundas y cutáneas integradas en circuitos medulares de la extremidad inferior. En condiciones normales, la modulación descendente corticoespinal inhibe la extensión patológica del hallux; ante daño de la vía corticoespinal, se facilita la respuesta extensora plantar con elevación del dedo gordo y posible apertura en abanico.',
    fisiologiaSecuencia: [
      {
        titulo: 'Aferencia sensitiva',
        descripcion:
          'La compresión de los tejidos de la pantorrilla activa aferencias sensitivas profundas y cutáneas que se integran en circuitos de la médula espinal encargados de las respuestas motoras de la extremidad inferior.'
      },
      {
        titulo: 'Modulación normal',
        descripcion:
          'En un sistema nervioso adulto con modulación descendente conservada, esta compresión no desencadena la extensión patológica del hallux.'
      },
      {
        titulo: 'Alteración corticoespinal',
        descripcion:
          'Si la vía corticoespinal está dañada, se facilita la expresión de la respuesta extensora plantar, con elevación del dedo gordo y posible apertura en abanico de los otros dedos.'
      }
    ],
    tecnica: [
      {
        numero: 1,
        titulo: 'Posición y estabilización',
        descripcion:
          'El paciente permanece relajado; el examinador sostiene la pierna y el tobillo para evitar movimientos innecesarios.'
      },
      {
        numero: 2,
        titulo: 'Estímulo por compresión',
        descripcion:
          'Se comprime firmemente la masa muscular de la pantorrilla con la mano, sin provocar daño ni dolor excesivo.'
      },
      {
        numero: 3,
        titulo: 'Observación y confirmación',
        descripcion:
          'Durante la compresión se observa el dedo gordo y la separación de los demás dedos. La maniobra puede repetirse para confirmar que la respuesta sea reproducible.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posición y estabilización',
        descripcion:
          'El paciente permanece relajado; el examinador sostiene la pierna y el tobillo para evitar movimientos innecesarios.'
      },
      {
        numero: 2,
        titulo: 'Estímulo por compresión',
        descripcion:
          'Se comprime firmemente la masa muscular de la pantorrilla con la mano, sin provocar daño ni dolor excesivo.'
      },
      {
        numero: 3,
        titulo: 'Observación y confirmación',
        descripcion:
          'Durante la compresión se observa el dedo gordo y la separación de los demás dedos. La maniobra puede repetirse para confirmar que la respuesta sea reproducible.'
      }
    ],
    respuestaNormal:
      'No aparece extensión del dedo gordo ni apertura en abanico. Es frecuente que no se observe movimiento alguno de los dedos durante la compresión.',
    respuestaAnormal:
      'El dedo gordo se extiende o se eleva, con o sin separación en abanico de los demás dedos (equivalente a una respuesta plantar extensora).',
    interpretacion:
      'Sucedáneo de Babinski que busca la respuesta extensora del hallux mediante aferencias profundas de la pantorrilla cuando el estímulo plantar directo es ambiguo o mal tolerado.',
    interpretacionSecuencia: [
      {
        titulo: 'Relevancia diagnóstica',
        descripcion:
          'Apoya la sospecha de lesión de neurona motora superior en cuadros como accidente cerebrovascular, traumatismo o lesión medular, esclerosis múltiple y otras enfermedades del sistema nervioso central (es un hallazgo complementario, no diagnóstico por sí solo).'
      },
      {
        titulo: 'Precaución técnica',
        descripcion:
          'Una compresión excesiva puede causar dolor o molestia y dificultar la interpretación.'
      },
      {
        titulo: 'Diferencia esencial',
        descripcion:
          'Se provoca comprimiendo la pantorrilla (no se desliza ningún instrumento por la planta del pie ni por la tibia), buscando igualmente la extensión del hallux.'
      }
    ],
    importanciaClinica:
      'Apoya la sospecha de lesión de neurona motora superior (accidente cerebrovascular, lesión medular, esclerosis múltiple u otras patologías del SNC). Se distingue por provocarse mediante compresión de la pantorrilla sin deslizar instrumentos por la planta del pie ni por la tibia.',
    patologiasAsociadas: [
      'Accidente cerebrovascular (EVC)',
      'Traumatismo o lesión medular',
      'Esclerosis múltiple',
      'Lesión de neurona motora superior (SNC)'
    ],
    datoClave:
      'Diferencia esencial: se provoca comprimiendo firmemente la masa muscular de la pantorrilla (sin deslizar instrumentos por la planta ni la tibia), buscando igualmente la extensión patológica del hallux.',
    videoPrefix: 'gordon'
  },
  oppenheim: {
    id: 'oppenheim',
    nombre: 'Signo de Oppenheim',
    sinonimos: 'Sucedáneo de Babinski — Presión y deslizamiento sobre la cara anterior o anteromedial de la tibia',
    queEs:
      'Maniobra para provocar una respuesta plantar extensora mediante presión aplicada a lo largo de la superficie anterior de la tibia. Se considera otra alternativa al estímulo plantar clásico de Babinski.',
    definicion:
      'Maniobra para provocar una respuesta plantar extensora mediante presión aplicada a lo largo de la superficie anterior de la tibia. Se considera otra alternativa al estímulo plantar clásico de Babinski.',
    queEvalua:
      'Evalúa la presencia de una respuesta plantar extensora y aporta información sobre la modulación de los reflejos espinales por las vías motoras descendentes, en especial la corticoespinal (neurona motora superior). Resulta muy útil cuando la respuesta obtenida al estimular directamente la planta del pie se confunde con una retirada voluntaria o refleja.',
    fundamentoAnatomico:
      'Evalúa la presencia de una respuesta plantar extensora y aporta información sobre la modulación de los reflejos espinales por las vías motoras descendentes, en especial la corticoespinal (neurona motora superior). Resulta muy útil cuando la respuesta obtenida al estimular directamente la planta del pie se confunde con una retirada voluntaria o refleja.',
    fisiologia:
      'La presión y el desplazamiento sobre la región tibial activan aferencias sensitivas cutáneas y profundas que ingresan a circuitos espinales participantes en la respuesta motora del pie. En condiciones fisiológicas, el control descendente corticoespinal inhibe el patrón extensor; ante disfunción de la neurona motora superior, los circuitos medulares responden con extensión del hallux y apertura en abanico de los otros dedos.',
    fisiologiaSecuencia: [
      {
        titulo: 'Aferencia sensitiva',
        descripcion:
          'La presión y el desplazamiento sobre la región tibial activan aferencias sensitivas cutáneas y profundas que ingresan a circuitos espinales participantes en la respuesta motora del pie.'
      },
      {
        titulo: 'Modulación normal',
        descripcion:
          'En condiciones fisiológicas, el control descendente corticoespinal inhibe la aparición del patrón extensor.'
      },
      {
        titulo: 'Alteración corticoespinal',
        descripcion:
          'Cuando existe disfunción de la neurona motora superior, los circuitos medulares responden con extensión del hallux y apertura en abanico de los otros dedos (la misma respuesta final que se busca con Babinski).'
      }
    ],
    tecnica: [
      {
        numero: 1,
        titulo: 'Posición y contacto',
        descripcion:
          'Con el paciente relajado, el examinador aplica presión firme con los nudillos, el pulgar y el índice, o los dedos, sobre la cara anterior o anteromedial de la tibia.'
      },
      {
        numero: 2,
        titulo: 'Deslizamiento distal',
        descripcion:
          'Se desliza el estímulo de forma controlada (sin causar lesión) desde justo debajo de la rodilla en dirección distal, hacia el tobillo.'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion:
          'Se evalúa la respuesta del dedo gordo y de los demás dedos del mismo pie.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posición y contacto',
        descripcion:
          'Con el paciente relajado, el examinador aplica presión firme con los nudillos, el pulgar y el índice, o los dedos, sobre la cara anterior o anteromedial de la tibia.'
      },
      {
        numero: 2,
        titulo: 'Deslizamiento distal',
        descripcion:
          'Se desliza el estímulo de forma controlada (sin causar lesión) desde justo debajo de la rodilla en dirección distal, hacia el tobillo.'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion:
          'Se evalúa la respuesta del dedo gordo y de los demás dedos del mismo pie.'
      }
    ],
    respuestaNormal:
      'No aparece extensión del dedo gordo. Puede observarse flexión plantar de los dedos o ausencia de una respuesta visible.',
    respuestaAnormal:
      'Extensión lenta o elevación del dedo gordo, con posible separación en abanico de los otros dedos. (Precaución: una flexión brusca de cadera y rodilla o la retirada global por dolor no debe confundirse automáticamente con un positivo).',
    interpretacion:
      'Alternativa al estímulo plantar clásico de Babinski especialmente útil cuando la estimulación directa de la planta del pie se confunde con retirada voluntaria o refleja.',
    interpretacionSecuencia: [
      {
        titulo: 'Relevancia diagnóstica',
        descripcion:
          'Un Oppenheim positivo en un adulto puede ser un dato de lesión de la vía piramidal, como ocurre en accidentes cerebrovasculares, lesiones medulares, tumores o enfermedades desmielinizantes. Su valor es complementario: no determina la causa ni reemplaza la valoración neurológica integral.'
      },
      {
        titulo: 'Punto clave de diferenciación',
        descripcion:
          'En Oppenheim el estímulo se aplica sobre la tibia, mientras que en Chaddock se aplica alrededor del maléolo lateral y el borde externo del pie; aunque la técnica cambia, la respuesta anormal buscada es la misma.'
      }
    ],
    importanciaClinica:
      'Un Oppenheim positivo en un adulto puede ser un dato de lesión de la vía piramidal (accidentes cerebrovasculares, lesiones medulares, tumores o enfermedades desmielinizantes). Su valor es complementario y no reemplaza la valoración neurológica integral.',
    patologiasAsociadas: [
      'Accidente cerebrovascular (EVC)',
      'Lesiones medulares',
      'Tumores del SNC',
      'Enfermedades desmielinizantes'
    ],
    datoClave:
      'Punto clave de diferenciación: en Oppenheim el estímulo se aplica deslizando sobre la cara anterior/anteromedial de la tibia (en Chaddock es alrededor del maléolo lateral), pero la respuesta anormal buscada es la misma.',
    videoPrefix: 'oppenheim'
  },

  // Categoría #5: Signos cerebelosos
  holmes: {
    id: 'holmes',
    nombre: 'Signo de Holmes',
    sinonimos: 'Fenómeno de rebote · Rebote de Stewart-Holmes',
    queEs:
      'Es un signo de rebote observado en patología cerebelosa. Evalúa la capacidad del paciente para controlar y detener una flexión inesperada cuando se libera súbitamente la resistencia.',
    definicion:
      'Es un signo de rebote observado en patología cerebelosa. Evalúa la capacidad del paciente para controlar y detener una flexión inesperada cuando se libera súbitamente la resistencia.',
    queEvalua:
      'Relaciona el signo directamente con el cerebelo y con el llamado "reflejo de verificación" (mecanismo de frenado agonista-antagonista), cuyo fallo en la enfermedad cerebelosa impide detener adecuadamente el movimiento.',
    fundamentoAnatomico:
      'Relaciona el signo directamente con el cerebelo y con el llamado "reflejo de verificación" (mecanismo de frenado agonista-antagonista), cuyo fallo en la enfermedad cerebelosa impide detener adecuadamente el movimiento.',
    fisiologia:
      'En condiciones normales, el paciente puede controlar la flexión inesperada del codo inmediatamente después de que se libera la resistencia, gracias a que la coordinación cerebelosa permite verificar el desplazamiento y activar los músculos antagonistas para frenar el movimiento.',
    tecnica: [
      {
        numero: 1,
        titulo: 'Flexión contra resistencia',
        descripcion:
          'El paciente flexiona el brazo (codo) contra la resistencia aplicada por el examinador.'
      },
      {
        numero: 2,
        titulo: 'Mantenimiento',
        descripcion:
          'El examinador sostiene firmemente la resistencia (colocando su otro brazo o mano como barrera protectora frente al rostro/hombro del paciente).'
      },
      {
        numero: 3,
        titulo: 'Liberación súbita',
        descripcion: 'Se suelta de manera repentina e inesperada la muñeca del paciente.'
      },
      {
        numero: 4,
        titulo: 'Observación',
        descripcion:
          'Se evalúa si el paciente consigue detener rápidamente la flexión del antebrazo.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Flexión contra resistencia',
        descripcion:
          'El paciente flexiona el brazo (codo) contra la resistencia aplicada por el examinador.'
      },
      {
        numero: 2,
        titulo: 'Mantenimiento',
        descripcion:
          'El examinador sostiene firmemente la resistencia (colocando su otro brazo o mano como barrera protectora frente al rostro/hombro del paciente).'
      },
      {
        numero: 3,
        titulo: 'Liberación súbita',
        descripcion: 'Se suelta de manera repentina e inesperada la muñeca del paciente.'
      },
      {
        numero: 4,
        titulo: 'Observación',
        descripcion:
          'Se evalúa si el paciente consigue detener rápidamente la flexión del antebrazo.'
      }
    ],
    respuestaNormal:
      'El paciente controla y frena de inmediato la flexión inesperada del codo cuando se libera la resistencia.',
    respuestaAnormal:
      'El paciente es incapaz de detener la flexión; el brazo rebota y el puño puede dirigirse hacia su propio hombro o cara con considerable fuerza.',
    interpretacion:
      'La incapacidad para frenar el movimiento traduce un fallo del reflejo de verificación por disfunción cerebelosa ipsilateral.',
    importanciaClinica:
      'Es un signo clásico de patología cerebelosa y forma parte esencial de la valoración de la coordinación y el control motor ante cambios súbitos de resistencia.',
    patologiasAsociadas: [
      'Síndrome cerebeloso ipsilateral',
      'Lesión hemisférica cerebelosa',
      'Alteración del reflejo de verificación'
    ],
    datoClave:
      'Holmes = rebote. Si se libera la resistencia y el paciente no puede frenar el movimiento, existe una respuesta anormal relacionada con patología cerebelosa (recuerda siempre proteger el rostro del paciente con tu otra mano al realizar la maniobra).',
    videoPrefix: 'holmes'
  },
  pendulare: {
    id: 'pendulare',
    nombre: 'Reflejos de estiramiento muscular pendulares',
    sinonimos: 'Respuestas oscilatorias o pendulares',
    queEs:
      'Al evocar los reflejos de estiramiento muscular con el martillo (como el reflejo rotuliano), la respuesta fisiológica normal consta de una sola fase de extensión del complejo músculo-tendón. En las lesiones cerebelosas o pancerebelosas, esta respuesta pierde su frenado y se vuelve oscilatoria o pendular (la extremidad balancea varias veces como un péndulo antes de detenerse).',
    definicion:
      'Al evocar los reflejos de estiramiento muscular con el martillo (como el reflejo rotuliano), la respuesta fisiológica normal consta de una sola fase de extensión del complejo músculo-tendón. En las lesiones cerebelosas o pancerebelosas, esta respuesta pierde su frenado y se vuelve oscilatoria o pendular (la extremidad balancea varias veces como un péndulo antes de detenerse).',
    queEvalua:
      'Evalúa el control inhibitorio y regulador del cerebelo sobre el tono muscular y los arcos reflejos osteotendinosos segmentarios.',
    fundamentoAnatomico:
      'Evalúa el control inhibitorio y regulador del cerebelo sobre el tono muscular y los arcos reflejos osteotendinosos segmentarios.',
    fisiologia:
      'En condiciones normales, la respuesta al estímulo con el martillo consiste en una única fase de extensión del músculo-tendón seguida de una detención controlada. En la lesión cerebelosa, la hipotonía/atonía y la disminución de la coordinación controlada por el cerebelo favorecen la aparición de oscilaciones libres de la extremidad tras el estímulo inicial.',
    tecnica: [
      {
        numero: 1,
        titulo: 'Posición del paciente',
        descripcion:
          'Colocar al paciente sentado con las piernas colgando libremente al borde de la camilla (sin apoyo plantar) y musculatura relajada.'
      },
      {
        numero: 2,
        titulo: 'Estímulo osteotendinoso',
        descripcion:
          'Evocar un reflejo de estiramiento muscular (habitualmente el rotuliano) percutiendo el tendón con el martillo de reflejos.'
      },
      {
        numero: 3,
        titulo: 'Observación prolongada',
        descripcion:
          'Observar cuidadosamente toda la trayectoria de retorno del complejo músculo-tendón tras la sacudida, no únicamente el primer movimiento de extensión.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posición del paciente',
        descripcion:
          'Colocar al paciente sentado con las piernas colgando libremente al borde de la camilla (sin apoyo plantar) y musculatura relajada.'
      },
      {
        numero: 2,
        titulo: 'Estímulo osteotendinoso',
        descripcion:
          'Evocar un reflejo de estiramiento muscular (habitualmente el rotuliano) percutiendo el tendón con el martillo de reflejos.'
      },
      {
        numero: 3,
        titulo: 'Observación prolongada',
        descripcion:
          'Observar cuidadosamente toda la trayectoria de retorno del complejo músculo-tendón tras la sacudida, no únicamente el primer movimiento de extensión.'
      }
    ],
    respuestaNormal:
      'Respuesta de una sola fase de extensión del músculo-tendón con retorno controlado a la posición de reposo.',
    respuestaAnormal:
      'Respuesta oscilatoria o pendular con múltiples balanceos sucesivos de la extremidad, característica de lesiones cerebelosas o pancerebelosas.',
    interpretacion:
      'La respuesta pendular es un hallazgo semiológico que orienta hacia alteración cerebelosa (e hipotonía asociada) dentro del contexto global de la exploración neurológica.',
    importanciaClinica:
      'Complementa la exploración de la función cerebelosa y permite diferenciar el patrón oscilatorio patológico de la respuesta normal monofásica.',
    patologiasAsociadas: [
      'Lesión cerebelosa o pancerebelosa',
      'Hipotonía cerebelosa',
      'Síndrome cerebeloso'
    ],
    datoClave:
      'Normal: una fase. Cerebeloso: oscilatorio o pendular (asegúrate de que las piernas cuelguen libremente sin rozar la camilla para no frenar artificialmente la oscilación).',
    videoPrefix: 'pendulares'
  },
  romberg: {
    id: 'romberg',
    nombre: 'Signo de Romberg',
    sinonimos: 'Prueba de Romberg · Evaluación estática de la propiocepción y el equilibrio',
    queEs:
      'Prueba que explora la pérdida de la propiocepción y cuya esencia radica en evidenciar la pérdida de la fluctuación fisiológica o el equilibrio al comparar la postura con los ojos abiertos frente a los ojos cerrados.',
    definicion:
      'Prueba que explora la pérdida de la propiocepción y cuya esencia radica en evidenciar la pérdida de la fluctuación fisiológica o el equilibrio al comparar la postura con los ojos abiertos frente a los ojos cerrados.',
    queEvalua:
      'Lograr una posición estable con los ojos cerrados requiere una adecuada función laberíntica, sentido de la posición (propiocepción), función cerebelosa y fuerza muscular. Al cerrar los ojos, la responsabilidad aferente recae principalmente en el sistema propioceptivo de la columna dorsal.',
    fundamentoAnatomico:
      'Lograr una posición estable con los ojos cerrados requiere una adecuada función laberíntica, sentido de la posición (propiocepción), función cerebelosa y fuerza muscular. Al cerrar los ojos, la responsabilidad aferente recae principalmente en el sistema propioceptivo de la columna dorsal.',
    fisiologia:
      'Con los ojos abiertos, la información visual contribuye en gran medida al mantenimiento de la postura. Al cerrar los ojos, se eliminan las señales visuales y se pone a prueba la capacidad del organismo para mantener el equilibrio utilizando únicamente la información propioceptiva y vestibular, integradas por la función cerebelosa y motora.',
    tecnica: [
      {
        numero: 1,
        titulo: 'Preparación y seguridad',
        descripcion:
          'El paciente debe poder mantenerse de pie inicialmente. El explorador debe colocarse siempre muy cerca y en una posición que le permita sostener al paciente si pierde el equilibrio y cae.'
      },
      {
        numero: 2,
        titulo: 'Posición inicial',
        descripcion:
          'Pedir al paciente que permanezca de pie con las manos a los lados.'
      },
      {
        numero: 3,
        titulo: 'Observación basal',
        descripcion:
          'Observar la separación de los pies (normalmente separados solo unos centímetros; una separación amplia sugiere una adaptación previa a la inestabilidad).'
      },
      {
        numero: 4,
        titulo: 'Cierre ocular',
        descripcion:
          'Una vez establecida la estabilidad con los ojos abiertos, pedir al paciente que cierre los ojos y observar el grado de fluctuación.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Preparación y seguridad',
        descripcion:
          'El paciente debe poder mantenerse de pie inicialmente. El explorador debe colocarse siempre muy cerca y en una posición que le permita sostener al paciente si pierde el equilibrio y cae.'
      },
      {
        numero: 2,
        titulo: 'Posición inicial',
        descripcion:
          'Pedir al paciente que permanezca de pie con las manos a los lados.'
      },
      {
        numero: 3,
        titulo: 'Observación basal',
        descripcion:
          'Observar la separación de los pies (normalmente separados solo unos centímetros; una separación amplia sugiere una adaptación previa a la inestabilidad).'
      },
      {
        numero: 4,
        titulo: 'Cierre ocular',
        descripcion:
          'Una vez establecida la estabilidad con los ojos abiertos, pedir al paciente que cierre los ojos y observar el grado de fluctuación.'
      }
    ],
    respuestaNormal:
      'El paciente logra una estabilidad previa con los ojos abiertos y mantiene el equilibrio sin una pérdida marcada ni oscilaciones severas al cerrar los ojos.',
    respuestaAnormal:
      'Pérdida del equilibrio manifestada como una caída inminente, dar un paso hacia adelante para compensar, inestabilidad marcada o elevación de los brazos para balancearse al cerrar los ojos.',
    interpretacion:
      'El hallazgo debe interpretarse comparando ambas condiciones. La aparición de inestabilidad al cerrar los ojos se relaciona clásicamente con la pérdida del sentido de posición (daño en cordones posteriores) o una estimulación laberíntica persistente.',
    importanciaClinica:
      'Permite valorar el equilibrio y la integración de la información visual, propioceptiva y vestibular en la exploración neurológica.',
    patologiasAsociadas: [
      'Ataxia sensitiva (daño en cordones posteriores)',
      'Pérdida de propiocepción',
      'Disfunción laberíntica / vestibular',
      'Trastornos del equilibrio estático'
    ],
    datoClave:
      'Romberg positivo = pérdida del equilibrio al cerrar los ojos, DESPUÉS de haber demostrado estabilidad previa con los ojos abiertos.',
    videoPrefix: 'Romberg'
  },

  // Categoría #6: Signos de desinhibición frontal
  palmomentoniano: {
    id: 'palmomentoniano',
    nombre: 'Signo de Marinesco-Radovici',
    sinonimos: 'Reflejo palmomentoniano',
    queEs:
      'Contracción involuntaria de los músculos de la barbilla y alrededor de la boca al estimular la eminencia tenar.',
    definicion:
      'Contracción involuntaria de los músculos de la barbilla y alrededor de la boca al estimular la eminencia tenar.',
    queEvalua:
      'Participan los receptores sensitivos de la palma, las vías sensitivas periféricas y centrales, y los músculos mentoniano y orbicular de la boca.',
    fundamentoAnatomico:
      'Participan los receptores sensitivos de la palma, las vías sensitivas periféricas y centrales, y los músculos mentoniano y orbicular de la boca.',
    fisiologia:
      'La estimulación puede producir una respuesta discreta; los mecanismos de control cerebral limitan la expresión exagerada de reflejos primitivos.',
    tecnica: [
      {
        numero: 1,
        titulo: 'Posición de la mano',
        descripcion: 'Mantener la mano del paciente relajada y con la palma expuesta.'
      },
      {
        numero: 2,
        titulo: 'Estimulación tenar',
        descripcion:
          'Con la mano relajada, se raspa vigorosamente la eminencia tenar con una llave o la uña del explorador, desde la muñeca hacia el pulgar o en sentido contrario.'
      },
      {
        numero: 3,
        titulo: 'Observación facial',
        descripcion:
          'Observar simultáneamente la barbilla y la comisura labial ipsilateral en busca de contracción del mentoniano y orbicular de la boca.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posición de la mano',
        descripcion: 'Mantener la mano del paciente relajada y con la palma expuesta.'
      },
      {
        numero: 2,
        titulo: 'Estimulación tenar',
        descripcion:
          'Con la mano relajada, se raspa vigorosamente la eminencia tenar con una llave o la uña del explorador, desde la muñeca hacia el pulgar o en sentido contrario.'
      },
      {
        numero: 3,
        titulo: 'Observación facial',
        descripcion:
          'Observar simultáneamente la barbilla y la comisura labial ipsilateral en busca de contracción del mentoniano y orbicular de la boca.'
      }
    ],
    respuestaNormal: 'Puede existir una respuesta ligera o estar ausente.',
    respuestaAnormal:
      'Contracción marcada ipsilateral del mentoniano y orbicular de la boca, con arrugamiento de la barbilla y movimiento de la comisura labial.',
    interpretacion:
      'Una respuesta muy exagerada o asimétrica puede orientar a alteración neurológica.',
    importanciaClinica:
      'Una respuesta muy exagerada o asimétrica puede orientar a alteración neurológica. Se relaciona con lesiones de la vía piramidal, aumento de presión intracraneal y tetania latente.',
    patologiasAsociadas: [
      'Lesiones de la vía piramidal',
      'Aumento de presión intracraneal',
      'Tetania latente',
      'Desinhibición cortical frontal'
    ],
    datoClave: 'No es patológico por sí solo: importan la intensidad y la asimetría.',
    videoPositivoUrl: 'assets/videos/palmomentoniano positivo.mp4',
    videoNegativoUrl: 'assets/videos/palmomentoniano negativo.mp4'
  },
  myerson: {
    id: 'myerson',
    nombre: 'Signo de Myerson',
    sinonimos: 'Reflejo glabelar',
    queEs:
      'Reflejo de parpadeo obtenido al percutir repetidamente la región glabelar, entre las cejas.',
    definicion:
      'Reflejo de parpadeo obtenido al percutir repetidamente la región glabelar, entre las cejas.',
    queEvalua:
      'Participan la vía sensitiva del nervio trigémino (V) y la respuesta motora del nervio facial (VII), que activa el orbicular de los ojos.',
    fundamentoAnatomico:
      'Participan la vía sensitiva del nervio trigémino (V) y la respuesta motora del nervio facial (VII), que activa el orbicular de los ojos.',
    fisiologia:
      'La estimulación produce parpadeos que normalmente disminuyen tras dos o tres respuestas por habituación.',
    tecnica: [
      {
        numero: 1,
        titulo: 'Preparación del paciente',
        descripcion: 'Colocar al paciente relajado, mirando al frente y con los ojos abiertos.'
      },
      {
        numero: 2,
        titulo: 'Percusión glabelar repetida',
        descripcion:
          'Con el paciente relajado y los ojos abiertos, se percute repetidamente la línea media entre las cejas con un dedo o martillo de reflejos.'
      },
      {
        numero: 3,
        titulo: 'Evaluación de la habituación',
        descripcion:
          'Valorar si el reflejo de parpadeo se extingue tras los primeros dos o tres estímulos o si continúa de manera inagotable.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Preparación del paciente',
        descripcion: 'Colocar al paciente relajado, mirando al frente y con los ojos abiertos.'
      },
      {
        numero: 2,
        titulo: 'Percusión glabelar repetida',
        descripcion:
          'Con el paciente relajado y los ojos abiertos, se percute repetidamente la línea media entre las cejas con un dedo o martillo de reflejos.'
      },
      {
        numero: 3,
        titulo: 'Evaluación de la habituación',
        descripcion:
          'Valorar si el reflejo de parpadeo se extingue tras los primeros dos o tres estímulos o si continúa de manera inagotable.'
      }
    ],
    respuestaNormal: 'Aproximadamente dos o tres parpadeos y después desaparición por habituación.',
    respuestaAnormal: 'Parpadeo persistente ante múltiples estímulos, sin habituación.',
    interpretacion:
      'Sugiere pérdida de habituación de una respuesta primitiva.',
    importanciaClinica:
      'Sugiere pérdida de habituación de una respuesta primitiva. Puede observarse en enfermedad de Parkinson y en adultos mayores sanos (aunque en estos últimos suele fatigarse).',
    patologiasAsociadas: [
      'Enfermedad de Parkinson',
      'Síndromes extrapiramidales',
      'Desinhibición frontal'
    ],
    datoClave: 'Lo importante no es el parpadeo inicial, sino que persista sin habituación.',
    videoPositivoUrl: 'assets/videos/myerson positivo.mp4',
    videoNegativoUrl: 'assets/videos/myerson negativo.mp4'
  },

  // Categoría #8: Signos de hipocalcemia
  chvostek: {
    id: 'chvostek',
    nombre: 'Signo de Chvostek',
    sinonimos:
      'Signo de Chvostek facial · Signo clínico de hiperexcitabilidad neuromuscular por estimulación mecánica del nervio facial (VII par craneal)',
    queEs:
      'Contracción involuntaria de los músculos faciales ipsilaterales tras realizar una percusión suave sobre el trayecto del nervio facial, por delante del oído y por debajo del arco cigomático. Un resultado positivo no confirma por sí solo hipocalcemia, ya que puede aparecer en personas con niveles normales de calcio u otros estados de hiperexcitabilidad neuromuscular.',
    definicion:
      'Contracción involuntaria de los músculos faciales ipsilaterales tras realizar una percusión suave sobre el trayecto del nervio facial, por delante del oído y por debajo del arco cigomático. Un resultado positivo no confirma por sí solo hipocalcemia, ya que puede aparecer en personas con niveles normales de calcio u otros estados de hiperexcitabilidad neuromuscular.',
    queEvalua:
      'El nervio facial (VII par craneal) origina sus fibras motoras en el puente del tronco encefálico, sale del cráneo por el foramen estilomastoideo y atraviesa la glándula parótida dividiéndose en ramas terminales para los músculos de la expresión facial. La maniobra estimula mecánicamente una zona superficial de su trayecto (por delante del conducto auditivo externo y debajo del arco cigomático).',
    fundamentoAnatomico:
      'El nervio facial (VII par craneal) origina sus fibras motoras en el puente del tronco encefálico, sale del cráneo por el foramen estilomastoideo y atraviesa la glándula parótida dividiéndose en ramas terminales para los músculos de la expresión facial. La maniobra estimula mecánicamente una zona superficial de su trayecto (por delante del conducto auditivo externo y debajo del arco cigomático).',
    fisiologia:
      'El calcio ionizado extracelular regula la excitabilidad de las membranas celulares y la transmisión neuromuscular. Al disminuir el calcio ionizado, aumenta la excitabilidad de los nervios periféricos, permitiendo que estímulos mecánicos pequeños desencadenen descargas nerviosas y contracciones musculares (manifestadas clínicamente como parestesias, calambres, espasmo carpopedal o tetania).',
    tecnica: [
      {
        numero: 1,
        titulo: 'Posición del paciente',
        descripcion:
          'Paciente relajado, preferentemente sentado o en una posición que permita observar con claridad toda la cara.'
      },
      {
        numero: 2,
        titulo: 'Localización y estímulo',
        descripcion:
          'Identificar la región inmediatamente por delante del conducto auditivo externo (bajo el arco cigomático) y realizar una percusión suave y breve con el dedo o un martillo de reflejos.'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion:
          'Evaluar cuidadosamente la hemicara estimulada en busca de contracciones musculares involuntarias, evitando percusiones bruscas que provoquen respuesta mecánica excesiva.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posición del paciente',
        descripcion:
          'Paciente relajado, preferentemente sentado o en una posición que permita observar con claridad toda la cara.'
      },
      {
        numero: 2,
        titulo: 'Localización y estímulo',
        descripcion:
          'Identificar la región inmediatamente por delante del conducto auditivo externo (bajo el arco cigomático) y realizar una percusión suave y breve con el dedo o un martillo de reflejos.'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion:
          'Evaluar cuidadosamente la hemicara estimulada en busca de contracciones musculares involuntarias, evitando percusiones bruscas que provoquen respuesta mecánica excesiva.'
      }
    ],
    respuestaNormal:
      'Ausencia de contracción facial significativa tras la percusión. (Nota: Puede observarse una respuesta muy discreta en algunas personas sanas, por lo que una respuesta positiva aislada no equivale automáticamente a hipocalcemia).',
    respuestaAnormal:
      'Contracción involuntaria de los músculos faciales ipsilaterales, manifestada como elevación de la comisura labial, contracción de la región perioral, movimiento del ala nasal o cierre del ojo según la intensidad de la respuesta.',
    interpretacion:
      'Sugiere hiperexcitabilidad neuromuscular y orienta hacia hipocalcemia, hipoparatiroidismo o tetania en el contexto adecuado. Su sensibilidad y especificidad aisladas son limitadas (puede haber falsos positivos y falsos negativos), por lo que debe correlacionarse con síntomas y bioquímica (calcio total, calcio ionizado, magnesio, fósforo y PTH).',
    importanciaClinica:
      'Útil en la valoración de pacientes con sospecha de hipocalcemia por hipoparatiroidismo (especialmente posquirúrgico tras cirugía de tiroides o paratiroides), déficit de vitamina D, enfermedad renal crónica o alteraciones del magnesio. La hipocalcemia grave conlleva riesgo de convulsiones, laringoespasmo y alteraciones cardíacas.',
    patologiasAsociadas: [
      'Hipocalcemia e hipoparatiroidismo posquirúrgico',
      'Déficit de vitamina D',
      'Enfermedad renal crónica',
      'Alteraciones del magnesio y tetania'
    ],
    datoClave:
      'Percusión sobre el trayecto del nervio facial → contracción facial ipsilateral. Indica hiperexcitabilidad neuromuscular relacionada clásicamente con hipocalcemia, pero no la diagnostica por sí solo.',
    videoPositivoUrl: 'assets/videos/chvostek positivo.mp4',
    videoNegativoUrl: 'assets/videos/chvostek negativo.mp4'
  },
  trousseau: {
    id: 'trousseau',
    nombre: 'Signo de Trousseau',
    sinonimos:
      'Signo de Trousseau de tetania latente (no confundir con el síndrome de Trousseau trombótico asociado a neoplasias)',
    queEs:
      'Aparición de un espasmo carpopedal tras mantener inflado un manguito de presión arterial alrededor del brazo aproximadamente 20 mmHg por encima de la presión arterial sistólica durante 2 a 3 minutos. Evidencia hiperexcitabilidad neuromuscular y tetania latente, aunque puede estar ausente en hipocalcemia confirmada o presentarse en otros trastornos metabólicos.',
    definicion:
      'Aparición de un espasmo carpopedal tras mantener inflado un manguito de presión arterial alrededor del brazo aproximadamente 20 mmHg por encima de la presión arterial sistólica durante 2 a 3 minutos. Evidencia hiperexcitabilidad neuromuscular y tetania latente, aunque puede estar ausente en hipocalcemia confirmada o presentarse en otros trastornos metabólicos.',
    queEvalua:
      'Involucra la arteria braquial y los nervios periféricos del miembro superior. El manguito comprime temporalmente la arteria braquial reduciendo el flujo sanguíneo distal, expresándose la respuesta motora en los músculos del antebrazo y la mano (muñeca, articulaciones metacarpofalángicas, interfalángicas y pulgar).',
    fundamentoAnatomico:
      'Involucra la arteria braquial y los nervios periféricos del miembro superior. El manguito comprime temporalmente la arteria braquial reduciendo el flujo sanguíneo distal, expresándose la respuesta motora en los músculos del antebrazo y la mano (muñeca, articulaciones metacarpofalángicas, interfalángicas y pulgar).',
    fisiologia:
      'La disminución del calcio ionizado extracelular reduce el umbral de despolarización neuronal. Al inflar el manguito por encima de la presión sistólica, la isquemia temporal distal disminuye aún más dicho umbral; la suma de hipocalcemia e isquemia desencadena descargas nerviosas repetitivas que culminan en el espasmo carpopedal.',
    tecnica: [
      {
        numero: 1,
        titulo: 'Preparación y medición basal',
        descripcion:
          'Colocar al paciente relajado (sentado o acostado), situar el manguito en la parte superior del brazo y determinar su presión arterial sistólica.'
      },
      {
        numero: 2,
        titulo: 'Oclusión controlada',
        descripcion:
          'Inflar el manguito aproximadamente 20 mmHg por encima de la presión sistólica y mantenerlo de 2 a 3 minutos (algunas referencias indican 3 a 5 minutos).'
      },
      {
        numero: 3,
        titulo: 'Observación continua',
        descripcion:
          'Vigilar constantemente la mano en busca de espasmo carpopedal.'
      },
      {
        numero: 4,
        titulo: 'Desinflado inmediato',
        descripcion:
          'Si aparece el espasmo o el paciente refiere dolor importante, desinflar el manguito de inmediato sin prolongar la oclusión innecesariamente.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Preparación y medición basal',
        descripcion:
          'Colocar al paciente relajado (sentado o acostado), situar el manguito en la parte superior del brazo y determinar su presión arterial sistólica.'
      },
      {
        numero: 2,
        titulo: 'Oclusión controlada',
        descripcion:
          'Inflar el manguito aproximadamente 20 mmHg por encima de la presión sistólica y mantenerlo de 2 a 3 minutos (algunas referencias indican 3 a 5 minutos).'
      },
      {
        numero: 3,
        titulo: 'Observación continua',
        descripcion:
          'Vigilar constantemente la mano en busca de espasmo carpopedal.'
      },
      {
        numero: 4,
        titulo: 'Desinflado inmediato',
        descripcion:
          'Si aparece el espasmo o el paciente refiere dolor importante, desinflar el manguito de inmediato sin prolongar la oclusión innecesariamente.'
      }
    ],
    respuestaNormal:
      'Ausencia de espasmo carpopedal; la mano permanece relajada durante todo el tiempo de inflación del manguito. (Un resultado negativo no descarta por completo la hipocalcemia).',
    respuestaAnormal:
      'Aparición de espasmo carpopedal caracterizado por flexión de la muñeca, flexión de las articulaciones metacarpofalángicas, extensión de las articulaciones interfalángicas y aducción u oposición del pulgar. Esta postura se conoce clásicamente como "mano de partero" (main d\'accoucheur).',
    interpretacion:
      'Indica aumento de la excitabilidad neuromuscular sugestivo de tetania latente. Su causa clásica es la hipocalcemia, aunque también puede observarse en hipomagnesemia, hipofosfatemia, hipopotasemia y alcalosis metabólica. Requiere correlación clínica y de laboratorio (calcio total/ionizado, magnesio, fósforo, vitamina D y PTH).',
    importanciaClinica:
      'Herramienta clave ante sospecha de hipocalcemia y tetania (hipoparatiroidismo posquirúrgico tiroideo/paratiroideo, déficit de vitamina D, enfermedad renal crónica, hipomagnesemia). Ayuda a identificar riesgo de complicaciones graves de hipocalcemia como convulsiones, laringoespasmo, broncoespasmo, prolongación del intervalo QT y arritmias.',
    patologiasAsociadas: [
      'Hipocalcemia y tetania latente',
      'Hipoparatiroidismo posquirúrgico',
      'Hipomagnesemia y alcalosis metabólica',
      'Déficit de vitamina D / Enfermedad renal crónica'
    ],
    datoClave:
      "Trousseau = manguito de presión → isquemia temporal → espasmo carpopedal ('mano de partero': muñeca y metacarpofalángicas en flexión, interfalángicas en extensión y pulgar en aducción/oposición). Comparación: Chvostek percute el facial; Trousseau isquemia el brazo.",
    videoPositivoUrl: 'assets/videos/trousseau positivo.mp4',
    videoNegativoUrl: 'assets/videos/trousseau negativo.mp4'
  },

  // Categoría #9: Signos de túnel carpal
  tinel: {
    id: 'tinel',
    nombre: 'Signo de Tinel',
    sinonimos:
      'Signo de Hoffmann-Tinel (descrito independientemente por Paul Hoffmann y Jules Tinel en 1915)',
    queEs:
      'Maniobra de exploración neurológica utilizada para valorar la irritación, compresión o lesión de un nervio periférico. Es positivo cuando la percusión suave y repetida sobre el trayecto nervioso provoca hormigueo, "piquetes", corriente eléctrica o parestesias que se irradian hacia su territorio sensitivo distal (especialmente el nervio mediano a nivel del túnel carpiano).',
    definicion:
      'Maniobra de exploración neurológica utilizada para valorar la irritación, compresión o lesión de un nervio periférico. Es positivo cuando la percusión suave y repetida sobre el trayecto nervioso provoca hormigueo, "piquetes", corriente eléctrica o parestesias que se irradian hacia su territorio sensitivo distal (especialmente el nervio mediano a nivel del túnel carpiano).',
    queEvalua:
      'En el síndrome del túnel carpiano evalúa el nervio mediano, que atraviesa dicho túnel junto con nueve tendones flexores, delimitado por los huesos del carpo y el retináculo flexor (ligamento transverso del carpo). También puede explorarse en otros nervios periféricos (nervio cubital en el codo, tibial en el túnel tarsiano o peroneo en el cuello de la fíbula), siguiendo siempre su territorio sensitivo específico.',
    fundamentoAnatomico:
      'En el síndrome del túnel carpiano evalúa el nervio mediano, que atraviesa dicho túnel junto con nueve tendones flexores, delimitado por los huesos del carpo y el retináculo flexor (ligamento transverso del carpo). También puede explorarse en otros nervios periféricos (nervio cubital en el codo, tibial en el túnel tarsiano o peroneo en el cuello de la fíbula), siguiendo siempre su territorio sensitivo específico.',
    fisiologia:
      'Cuando un nervio periférico está irritado, comprimido o lesionado, sus fibras se vuelven hipersensibles a estímulos mecánicos. La percusión desencadena descargas ectópicas que se perciben como parestesias distales. En lesiones nerviosas en proceso de regeneración, el punto donde se evoca el signo avanza progresivamente hacia distal conforme ocurre la regeneración axonal. (Esquema: percusión del nervio → estimulación mecánica de fibras → descarga nerviosa → sensación eléctrica/parestesia en territorio distal).',
    tecnica: [
      {
        numero: 1,
        titulo: 'Posición y localización',
        descripcion:
          'Con el paciente relajado y la extremidad expuesta, localizar anatómicamente el trayecto superficial del nervio (en la muñeca, la cara volar sobre el túnel carpiano para el nervio mediano).'
      },
      {
        numero: 2,
        titulo: 'Percusión',
        descripcion:
          'Realizar una percusión ligera y repetida sobre el nervio utilizando la punta del dedo o un martillo de reflejos.'
      },
      {
        numero: 3,
        titulo: 'Interrogatorio dirigido',
        descripcion:
          'Preguntar al paciente si percibe hormigueo, sensación eléctrica, "piquetes" o dolor irradiado, verificando si sigue la distribución anatómica del nervio.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posición y localización',
        descripcion:
          'Con el paciente relajado y la extremidad expuesta, localizar anatómicamente el trayecto superficial del nervio (en la muñeca, la cara volar sobre el túnel carpiano para el nervio mediano).'
      },
      {
        numero: 2,
        titulo: 'Percusión',
        descripcion:
          'Realizar una percusión ligera y repetida sobre el nervio utilizando la punta del dedo o un martillo de reflejos.'
      },
      {
        numero: 3,
        titulo: 'Interrogatorio dirigido',
        descripcion:
          'Preguntar al paciente si percibe hormigueo, sensación eléctrica, "piquetes" o dolor irradiado, verificando si sigue la distribución anatómica del nervio.'
      }
    ],
    respuestaNormal:
      'Ausencia de parestesias irradiadas por el territorio del nervio tras la percusión (percibir únicamente el contacto físico o molestia local leve en el sitio golpeado no constituye un signo positivo).',
    respuestaAnormal:
      'Aparición de parestesias, hormigueo, corriente eléctrica o "piquetes" irradiados hacia el territorio distal del nervio explorado (en el nervio mediano: hacia el pulgar, índice, dedo medio y mitad radial del dedo anular).',
    interpretacion:
      'Sugiere irritación, compresión, atrapamiento o lesión de un nervio periférico, o bien regeneración axonal en curso tras una lesión previa. No es diagnóstico definitivo por sí solo; su sensibilidad y especificidad varían según el nervio, por lo que debe integrarse con la historia clínica, el resto de la exploración y, cuando exista duda diagnóstica o déficit motor/sensitivo significativo, con estudios de conducción nerviosa y electromiografía.',
    importanciaClinica:
      'Fundamental en la valoración de neuropatías por atrapamiento (síndrome del túnel carpiano, túnel cubital, túnel tarsiano, canal de Guyon) y lesiones traumáticas de nervios periféricos. En el túnel carpiano ayuda a reproducir síntomas sensitivos antes de que aparezca debilidad o atrofia de la eminencia tenar, y sirve para seguir la recuperación axonal.',
    patologiasAsociadas: [
      'Síndrome del túnel carpiano',
      'Neuropatías por atrapamiento (cubital, tarsiano, Guyon)',
      'Lesiones traumáticas de nervios periféricos',
      'Regeneración axonal en curso'
    ],
    datoClave:
      "Tinel = 'toco o percuto el nervio y el paciente siente corriente' hacia su territorio sensitivo distal (en el túnel carpiano: pulgar, índice, medio y mitad radial del anular).",
    tipoMedia: 'video',
    videoPositivoUrl: 'assets/videos/tinel positivo.mp4',
    videoNegativoUrl: 'assets/videos/tinel negativo.mp4'
  },
  phalen: {
    id: 'phalen',
    nombre: 'Pruebas de Phalen 1 y Phalen 2',
    sinonimos:
      'Maniobra de Phalen clásica (flexión de la muñeca) y Phalen inversa (reverse Phalen o prueba de la oración)',
    queEs:
      'Maniobras provocativas de exploración física destinadas a valorar el síndrome del túnel carpiano (neuropatía por compresión del nervio mediano en la muñeca). Consisten en mantener las muñecas en posiciones extremas para modificar la presión intracarpiana y observar si reproducen hormigueo, adormecimiento, parestesias o dolor en el territorio sensitivo del nervio mediano.',
    definicion:
      'Maniobras provocativas de exploración física destinadas a valorar el síndrome del túnel carpiano (neuropatía por compresión del nervio mediano en la muñeca). Consisten en mantener las muñecas en posiciones extremas para modificar la presión intracarpiana y observar si reproducen hormigueo, adormecimiento, parestesias o dolor en el territorio sensitivo del nervio mediano.',
    queEvalua:
      'Evalúa el nervio mediano dentro del túnel carpiano (formado por los huesos del carpo y cerrado anteriormente por el retináculo flexor o ligamento transverso del carpo), por donde transcurre junto a nueve tendones flexores (flexor largo del pulgar, cuatro del flexor superficial y cuatro del flexor profundo de los dedos). Su territorio sensitivo abarca la cara palmar del pulgar, índice, dedo medio y mitad radial del anular (respetando la eminencia tenar, inervada por la rama cutánea palmar superficial al retináculo).',
    fundamentoAnatomico:
      'Evalúa el nervio mediano dentro del túnel carpiano (formado por los huesos del carpo y cerrado anteriormente por el retináculo flexor o ligamento transverso del carpo), por donde transcurre junto a nueve tendones flexores (flexor largo del pulgar, cuatro del flexor superficial y cuatro del flexor profundo de los dedos). Su territorio sensitivo abarca la cara palmar del pulgar, índice, dedo medio y mitad radial del anular (respetando la eminencia tenar, inervada por la rama cutánea palmar superficial al retináculo).',
    fisiologia:
      'Tanto la flexión máxima (Phalen 1, dorsos enfrentados) como la extensión sostenida (Phalen 2, palmas enfrentadas en oración) modifican la geometría y elevan la presión dentro del túnel carpiano, incrementando la compresión mecánica e isquemia transitoria sobre el nervio mediano y reproduciendo las parestesias características en pacientes con atrapamiento nervioso.',
    tecnica: [
      {
        numero: 1,
        titulo: 'Phalen 1 (Clásico — Flexión)',
        descripcion:
          'Con el paciente sentado y relajado, colocar los dorsos de ambas manos enfrentados entre sí, permitiendo que las muñecas adopten una flexión máxima (o a ~90°). Mantener esta postura durante 60 segundos.'
      },
      {
        numero: 2,
        titulo: 'Phalen 2 (Inverso — Extensión)',
        descripcion:
          'Colocar las palmas de ambas manos juntas frente al pecho (en posición de oración), manteniendo las muñecas en extensión sostenida durante 60 segundos.'
      },
      {
        numero: 3,
        titulo: 'Evaluación clínica',
        descripcion:
          'Durante los 60 segundos de cada maniobra, interrogar al paciente sobre la aparición de hormigueo, adormecimiento, dolor o sensación eléctrica, verificando su distribución exacta y si reproduce sus síntomas habituales.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Phalen 1 (Clásico — Flexión)',
        descripcion:
          'Con el paciente sentado y relajado, colocar los dorsos de ambas manos enfrentados entre sí, permitiendo que las muñecas adopten una flexión máxima (o a ~90°). Mantener esta postura durante 60 segundos.'
      },
      {
        numero: 2,
        titulo: 'Phalen 2 (Inverso — Extensión)',
        descripcion:
          'Colocar las palmas de ambas manos juntas frente al pecho (en posición de oración), manteniendo las muñecas en extensión sostenida durante 60 segundos.'
      },
      {
        numero: 3,
        titulo: 'Evaluación clínica',
        descripcion:
          'Durante los 60 segundos de cada maniobra, interrogar al paciente sobre la aparición de hormigueo, adormecimiento, dolor o sensación eléctrica, verificando su distribución exacta y si reproduce sus síntomas habituales.'
      }
    ],
    respuestaNormal:
      'Ausencia de parestesias, hormigueo, adormecimiento o dolor en el territorio del nervio mediano durante los 60 segundos de la maniobra (sentir únicamente tensión mecánica articular por la postura no se considera positivo).',
    respuestaAnormal:
      'Reproducción de parestesias, adormecimiento o dolor característico del síndrome del túnel carpiano localizados en el territorio del nervio mediano (pulgar, índice, dedo medio y mitad radial del anular). Las molestias inespecíficas fuera de este territorio no deben tomarse como positivas.',
    interpretacion:
      'Aumenta la sospecha clínica de síndrome del túnel carpiano, pero debe interpretarse junto con la clínica y otras pruebas debido a su precisión diagnóstica variable (metaanálisis recientes reportan sensibilidad agrupada cercana a 0.57–0.70 y especificidad de ~0.67). Ante síntomas persistentes, duda diagnóstica o déficit motor, se complementa con estudios de conducción nerviosa y electromiografía.',
    importanciaClinica:
      'Permite detectar clínicamente la compresión del nervio mediano en la muñeca (que típicamente causa parestesias de predominio nocturno y, en fases avanzadas, debilidad para la oposición del pulgar y atrofia de la eminencia tenar). Ninguna maniobra provocativa individual establece por sí sola el diagnóstico definitivo.',
    patologiasAsociadas: [
      'Síndrome del túnel carpiano',
      'Neuropatía compresiva del nervio mediano',
      'Atrofia de la eminencia tenar (fases avanzadas)'
    ],
    datoClave:
      "Phalen 1 = FLEXIÓN (dorsos juntos). Phalen 2 = EXTENSIÓN (palmas juntas en oración). Frase clave: 'Phalen 1 flexiona; Phalen 2 extiende' durante 60 segundos para reproducir parestesias en el territorio del nervio mediano.",
    tipoMedia: 'imagen',
    mediaOpcion1: 'assets/images/Phalen 1.jpg',
    mediaOpcion2: 'assets/images/Phalen 2.jpg',
    labelOpcion1: 'Phalen 1 (Clásico · Flexión)',
    labelOpcion2: 'Phalen 2 (Inverso · Extensión)',
    descripcionOpcion1:
      'Dorsos de ambas manos enfrentados entre sí con flexión máxima (~90°) de las muñecas mantenida durante 60 segundos.',
    descripcionOpcion2:
      'Palmas de ambas manos juntas frente al pecho (posición de oración) con extensión sostenida de las muñecas durante 60 segundos.'
  },

  // Categoría #10: Signos de trastornos psicógenos (Acceso directo al Signo de Hoover)
  'signos-de-trastornos-psicogenos': {
    id: 'signos-de-trastornos-psicogenos',
    nombre: 'Signo de Hoover',
    sinonimos:
      "Fenómeno de Hoover (Hoover's sign) · Maniobra para identificar debilidad funcional de extremidad inferior mediante comparación entre movimiento voluntario y respuesta automática sinérgica",
    queEs:
      'Consiste en valorar la extensión voluntaria de la cadera de una extremidad aparentemente débil y observar la respuesta involuntaria de esa misma extremidad cuando se solicita la flexión de la cadera contralateral contra resistencia. Se describe clásicamente como debilidad en la extensión voluntaria de la cadera acompañada de una extensión involuntaria o sinérgica normal al flexionar la cadera opuesta contra resistencia. Apoya la sospecha de debilidad funcional, pero no constituye por sí solo una prueba diagnóstica definitiva.',
    definicion:
      'Consiste en valorar la extensión voluntaria de la cadera de una extremidad aparentemente débil y observar la respuesta involuntaria de esa misma extremidad cuando se solicita la flexión de la cadera contralateral contra resistencia. Se describe clásicamente como debilidad en la extensión voluntaria de la cadera acompañada de una extensión involuntaria o sinérgica normal al flexionar la cadera opuesta contra resistencia. Apoya la sospecha de debilidad funcional, pero no constituye por sí solo una prueba diagnóstica definitiva.',
    queEvalua:
      'Involucra las articulaciones de la cadera, los músculos extensores (glúteo mayor e isquiotibiales), los músculos flexores (iliopsoas y recto femoral) y la coordinación de las vías motoras responsables de los patrones sinérgicos entre ambas extremidades inferiores. El examinador coloca sus manos debajo de ambos talones o tobillos para percibir la fuerza descendente generada.',
    fundamentoAnatomico:
      'Involucra las articulaciones de la cadera, los músculos extensores (glúteo mayor e isquiotibiales), los músculos flexores (iliopsoas y recto femoral) y la coordinación de las vías motoras responsables de los patrones sinérgicos entre ambas extremidades inferiores. El examinador coloca sus manos debajo de ambos talones o tobillos para percibir la fuerza descendente generada.',
    fisiologia:
      'Se basa en el principio de oposición complementaria o contracción sinérgica entre ambas extremidades inferiores: al realizar una flexión de cadera contra resistencia con una pierna, se genera de forma automática una fuerza extensora complementaria en la pierna contralateral (presión del talón hacia abajo). En la debilidad funcional, la fuerza voluntaria disminuye ante una orden directa, mientras que la fuerza automática sinérgica se conserva al activar la extremidad contraria.',
    tecnica: [
      {
        numero: 1,
        titulo: 'Preparación',
        descripcion:
          'Colocar al paciente en decúbito supino con ambas rodillas extendidas. El examinador se sitúa a los pies de la camilla colocando una mano debajo de cada talón o tobillo.'
      },
      {
        numero: 2,
        titulo: 'Valoración basal',
        descripcion:
          'Evaluar inicialmente la fuerza de extensión voluntaria de ambas caderas.'
      },
      {
        numero: 3,
        titulo: 'Primera prueba',
        descripcion:
          'Solicitar al paciente que extienda o presione hacia abajo la pierna aparentemente débil para medir su fuerza voluntaria; acto seguido, pedirle que flexione la cadera de la pierna sana contra la resistencia del examinador mientras se palpa la presión descendente generada por el talón de la pierna aparentemente débil.'
      },
      {
        numero: 4,
        titulo: 'Segunda prueba',
        descripcion:
          'Realizar el procedimiento inverso para comprobar y comparar la respuesta contralateral.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Preparación',
        descripcion:
          'Colocar al paciente en decúbito supino con ambas rodillas extendidas. El examinador se sitúa a los pies de la camilla colocando una mano debajo de cada talón o tobillo.'
      },
      {
        numero: 2,
        titulo: 'Valoración basal',
        descripcion:
          'Evaluar inicialmente la fuerza de extensión voluntaria de ambas caderas.'
      },
      {
        numero: 3,
        titulo: 'Primera prueba',
        descripcion:
          'Solicitar al paciente que extienda o presione hacia abajo la pierna aparentemente débil para medir su fuerza voluntaria; acto seguido, pedirle que flexione la cadera de la pierna sana contra la resistencia del examinador mientras se palpa la presión descendente generada por el talón de la pierna aparentemente débil.'
      },
      {
        numero: 4,
        titulo: 'Segunda prueba',
        descripcion:
          'Realizar el procedimiento inverso para comprobar y comparar la respuesta contralateral.'
      }
    ],
    respuestaNormal:
      'Al flexionar una cadera contra resistencia, se percibe una presión extensora complementaria hacia abajo en el talón contralateral congruente con la fuerza basal evaluada previamente.',
    respuestaAnormal:
      'Existe debilidad o ausencia de fuerza durante la extensión voluntaria de la cadera afectada, pero durante la flexión de la cadera contralateral contra resistencia aparece o aumenta claramente la extensión involuntaria (presión del talón) en la extremidad que parecía débil.',
    interpretacion:
      'Un resultado positivo apoya la presencia de debilidad funcional de la extremidad inferior al demostrar discrepancia entre la fuerza voluntaria y la automática, pero debe interpretarse siempre dentro de una exploración neurológica integral (el dolor limitante o la heminegligencia pueden alterar el hallazgo). En estudios prospectivos en pacientes con sospecha de evento cerebrovascular, ha mostrado una sensibilidad del 63 % y una especificidad del 100 % para debilidad funcional.',
    importanciaClinica:
      'Muy útil en la evaluación de trastornos neurológicos funcionales y cuadros que simulan un accidente cerebrovascular cuando existe duda sobre la naturaleza de la debilidad de una extremidad inferior. Aclaración clínica fundamental: un signo de Hoover positivo no demuestra que el paciente esté fingiendo ni constituye un diagnóstico de simulación (malingering), y también puede observarse en contextos de dolor u otros trastornos funcionales.',
    patologiasAsociadas: [
      'Trastorno neurológico funcional (debilidad funcional)',
      'Diagnóstico diferencial de pseudoparesia / imitación de EVC',
      'Discrepancia entre fuerza voluntaria y sinérgica automática'
    ],
    datoClave:
      'Una pierna realiza la acción solicitada y la otra responde de manera sinérgica. El signo de Hoover demuestra la discrepancia entre una fuerza voluntaria reducida y una respuesta motora automática conservada.',
    tipoMedia: 'video',
    videoPositivoUrl: 'assets/videos/hoover positivo.mp4',
    videoNegativoUrl: 'assets/videos/hoover negativo.mp4'
  },

  // Signos individuales con contenido clínico completo
  'signo-de-hoffmann': {
    id: 'signo-de-hoffmann',
    nombre: 'Signo de Hoffmann',
    sinonimos: 'Reflejo piramidal de la extremidad superior',
    queEs:
      'Reflejo que se incluye de forma rutinaria en exámenes neurológicos estándar. Un signo de Hoffmann positivo (anormal) sugiere patología de la neurona motora superior en la médula espinal cervical (Especificidad: 78%, Sensibilidad: 58%, VPP: 62%, VPN: 75% para lesión de la médula espinal).',
    definicion:
      'Reflejo que se incluye de forma rutinaria en exámenes neurológicos estándar. Un signo de Hoffmann positivo (anormal) sugiere patología de la neurona motora superior en la médula espinal cervical (Especificidad: 78%, Sensibilidad: 58%, VPP: 62%, VPN: 75% para lesión de la médula espinal).',
    queEvalua:
      'Evalúa la integridad de la vía piramidal por encima del segmento cervical explorado. Es un dato de alarma clásico en la mielopatía cervical por compresión medular, sobre todo cuando se presenta de forma unilateral o asimétrica.',
    fundamentoAnatomico:
      'Evalúa la integridad de la vía piramidal por encima del segmento cervical explorado. Es un dato de alarma clásico en la mielopatía cervical por compresión medular, sobre todo cuando se presenta de forma unilateral o asimétrica.',
    fisiologia:
      'La lesión de la vía motora superior disminuye el control inhibidor descendente sobre interneuronas y motoneuronas espinales, aumentando la excitabilidad segmentaria cervical y desencadenando una descarga refleja de flexión e inclinación involuntaria del pulgar e índice.',
    fisiologiaSecuencia: [
      {
        titulo: 'Lesión de la vía motora superior',
        descripcion:
          'Ocurre en cualquier nivel del SNC que afecte vías motoras descendentes (médula cervical, tronco encefálico, cerebro, tracto corticoespinal), siendo común la mielopatía cervical degenerativa con compresión medular.'
      },
      {
        titulo: 'Disminución del control inhibidor descendente',
        descripcion:
          'Se altera el equilibrio entre influencias excitadoras e inhibidoras sobre las interneuronas y motoneuronas espinales.'
      },
      {
        titulo: 'Aumento de la excitabilidad segmentaria',
        descripcion:
          'Las motoneuronas cervicales se vuelven hiperreactivas ante estímulos mecánicos de poca intensidad.'
      },
      {
        titulo: 'Desencadenamiento de flexión',
        descripcion:
          'La descarga refleja activa músculos flexores produciendo flexión e inclinación involuntaria del pulgar e índice.'
      }
    ],
    tecnica: [
      {
        numero: 1,
        titulo: 'Posición del paciente',
        descripcion:
          'Colocar la mano relajada asegurando dorsiflexión suave en la muñeca y flexión parcial de los dedos.'
      },
      {
        numero: 2,
        titulo: 'Estabilización',
        descripcion:
          'Sujetar el dedo medio parcialmente extendido entre el índice y medio del examinador, estabilizando la articulación interfalángica proximal.'
      },
      {
        numero: 3,
        titulo: 'Estímulo (Flick)',
        descripcion:
          'Realizar un movimiento rápido y enérgico con el pulgar del examinador haciendo contacto con la uña del dedo medio del paciente.'
      },
      {
        numero: 4,
        titulo: 'Reacción inmediata',
        descripcion: 'El dedo se flexiona rápidamente seguido de relajación.'
      },
      {
        numero: 5,
        titulo: 'Criterio de positividad',
        descripcion:
          'Presencia de flexión y aducción involuntaria del pulgar con flexión del dedo índice.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posición del paciente',
        descripcion:
          'Colocar la mano relajada asegurando dorsiflexión suave en la muñeca y flexión parcial de los dedos.'
      },
      {
        numero: 2,
        titulo: 'Estabilización',
        descripcion:
          'Sujetar el dedo medio parcialmente extendido entre el índice y medio del examinador, estabilizando la articulación interfalángica proximal.'
      },
      {
        numero: 3,
        titulo: 'Estímulo (Flick)',
        descripcion:
          'Realizar un movimiento rápido y enérgico con el pulgar del examinador haciendo contacto con la uña del dedo medio del paciente.'
      },
      {
        numero: 4,
        titulo: 'Reacción inmediata',
        descripcion: 'El dedo se flexiona rápidamente seguido de relajación.'
      },
      {
        numero: 5,
        titulo: 'Criterio de positividad',
        descripcion:
          'Presencia de flexión y aducción involuntaria del pulgar con flexión del dedo índice.'
      }
    ],
    respuestaNormal:
      'Sin movimiento involuntario de los dedos al percutir o dar el chasquido en la uña del dedo medio.',
    respuestaAnormal:
      'Flexión e inclinación involuntaria del pulgar e índice (y en ocasiones flexión de los demás dedos).',
    interpretacion:
      'La interpretación clínica depende de la lateralidad del hallazgo y su correlación con síntomas de neurona motora superior.',
    interpretacionSecuencia: [
      {
        titulo: 'Positivo unilateral',
        descripcion:
          'Sugiere lesión lateralizada en el hemisferio contralateral o en la médula espinal ipsilateral por encima de C8 (correlacionar con examen motor y sensitivo).'
      },
      {
        titulo: 'Positivo bilateral con síntomas',
        descripcion:
          'Indicación clara para resonancia magnética (RM) de columna cervical (sospecha de mielopatía cervical, esclerosis múltiple u otra patología difusa de NMS).'
      },
      {
        titulo: 'Positivo bilateral sin síntomas',
        descripcion:
          'Puede representar una hiperreflexia constitucional (requiere documentación y seguimiento sin derivación inmediata).'
      }
    ],
    importanciaClinica:
      'Ayuda decisiva en el cribado y diagnóstico de compresión medular cervical. El hallazgo bilateral sintomático es el mejor confirmador clínico en pacientes con mielopatía cervical.',
    patologiasAsociadas: [
      'Mielopatía cervical degenerativa',
      'Compresión medular cervical',
      'Esclerosis múltiple',
      'Lesión de vía piramidal supra-C8'
    ],
    datoClave:
      'Ayuda decisiva en el cribado y diagnóstico de compresión medular cervical. El hallazgo bilateral sintomático es el mejor confirmador clínico en pacientes con mielopatía cervical.',
    videoPrefix: 'hoffmann'
  },

  'signo-de-tromner': {
    id: 'signo-de-tromner',
    nombre: 'Signo de Trömner',
    sinonimos: 'Alternativa neurológica al signo de Hoffmann para respuesta piramidal en extremidad superior',
    queEs:
      'Flexión del pulgar y el índice en respuesta a un golpeteo o ligero movimiento de la superficie palmar de la falange distal del dedo medio, el cual se mantiene parcialmente flexionado entre el pulgar y el índice del examinador.',
    definicion:
      'Flexión del pulgar y el índice en respuesta a un golpeteo o ligero movimiento de la superficie palmar de la falange distal del dedo medio, el cual se mantiene parcialmente flexionado entre el pulgar y el índice del examinador.',
    queEvalua:
      'Integridad y excitabilidad de la vía corticoespinal (neurona motora superior), especialmente en lesiones que afectan la médula cervical (mielopatía cervical).',
    fundamentoAnatomico:
      'Integridad y excitabilidad de la vía corticoespinal (neurona motora superior), especialmente en lesiones que afectan la médula cervical (mielopatía cervical).',
    fisiologia:
      'El toque rápido hacia arriba (flick) en la superficie palmar distal del dedo medio extiende súbitamente los tendones flexores profundos, activando los husos neuromusculares (fibras Ia) por raíces C7-C8 con sinapsis monosináptica en el asta anterior; ante lesión corticoespinal se desencadena una respuesta hiperrefléxica de aducción y flexión involuntaria del pulgar e índice.',
    fisiologiaSecuencia: [
      {
        titulo: 'Estímulo',
        descripcion:
          'Toque rápido hacia arriba (flick) en la superficie palmar distal del dedo medio, generando extensión pasiva y súbita de tendones flexores profundos.'
      },
      {
        titulo: 'Huso Neuromuscular',
        descripcion: 'Activación de fibras aferentes primarias (Ia).'
      },
      {
        titulo: 'Vía Aferente',
        descripcion:
          'Ingreso por raíces C7-C8 hacia la médula espinal con sinapsis monosináptica en el asta anterior.'
      },
      {
        titulo: 'Vía Eferente y Respuesta',
        descripcion:
          'En lesión corticoespinal se desencadena una respuesta hiperrefléxica de aducción y flexión involuntaria del pulgar e índice.'
      }
    ],
    tecnica: [
      {
        numero: 1,
        titulo: 'Posicionamiento de la mano',
        descripcion:
          'Examinador sujeta la mano del paciente con los dedos semiflexionados; dedo medio estabilizado justo proximal a la articulación interfalángica distal (IFD).'
      },
      {
        numero: 2,
        titulo: 'Golpeteo',
        descripcion: 'Toque o percusión ligera en la superficie palmar distal del dedo medio.'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion: 'Aparición de flexión involuntaria del pulgar e índice.'
      },
      {
        numero: 4,
        titulo: 'Interpretación',
        descripcion: 'Lesión de neurona motora superior / parálisis espástica.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posicionamiento de la mano',
        descripcion:
          'Examinador sujeta la mano del paciente con los dedos semiflexionados; dedo medio estabilizado justo proximal a la articulación interfalángica distal (IFD).'
      },
      {
        numero: 2,
        titulo: 'Golpeteo',
        descripcion: 'Toque o percusión ligera en la superficie palmar distal del dedo medio.'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion: 'Aparición de flexión involuntaria del pulgar e índice.'
      },
      {
        numero: 4,
        titulo: 'Interpretación',
        descripcion: 'Lesión de neurona motora superior / parálisis espástica.'
      }
    ],
    respuestaNormal:
      'No se produce flexión involuntaria evidente del pulgar ni de los demás dedos al percutir la falange distal del dedo medio.',
    respuestaAnormal:
      'Flexión involuntaria del pulgar y, en ocasiones, de los demás dedos tras la percusión.',
    interpretacion:
      'Lesión de neurona motora superior / parálisis espástica con hiperexcitabilidad del arco reflejo miotático cervical (C7-C8).',
    importanciaClinica:
      'Sugiere lesión del tracto corticoespinal proximal a C5-C6 cuando se presenta asimétrico o exaltado. Debe integrarse siempre al resto del examen neurológico.',
    patologiasAsociadas: [
      'Mielopatía cervical',
      'Lesión de neurona motora superior',
      'Compresión medular proximal a C5-C6',
      'Parálisis espástica'
    ],
    datoClave:
      'Sugiere lesión del tracto corticoespinal proximal a C5-C6 cuando se presenta asimétrico o exaltado. Debe integrarse siempre al resto del examen neurológico.',
    videoPrefix: 'trömer'
  },

  'signos-de-irritacion-meningea': {
    id: 'signos-de-irritacion-meningea',
    nombre: 'Signos de irritación meníngea (Maniobra y Signo de Kernig)',
    sinonimos: 'Maniobra y Signo de Kernig · Exploración conjunta con rigidez de nuca y signo de Brudzinski',
    queEs:
      'Distinción semiológica entre la maniobra (el gesto exploratorio y secuencia de movimientos que ejecuta quien examina) y el signo de Kernig (el hallazgo positivo resultante que traduce irritación meníngea).',
    definicion:
      'Distinción semiológica entre la maniobra (el gesto exploratorio y secuencia de movimientos que ejecuta quien examina) y el signo de Kernig (el hallazgo positivo resultante que traduce irritación meníngea).',
    queEvalua:
      'Evalúa la irritación e inflamación de las meninges mediante la tracción mecánica sobre las raíces nerviosas lumbosacras y el trayecto nervioso posterior del muslo. Al extender la rodilla con la cadera flexionada, la tensión sobre meninges inflamadas provoca dolor y una contractura protectora involuntaria de la musculatura isquiotibial que frena el movimiento.',
    fundamentoAnatomico:
      'Evalúa la irritación e inflamación de las meninges mediante la tracción mecánica sobre las raíces nerviosas lumbosacras y el trayecto nervioso posterior del muslo. Al extender la rodilla con la cadera flexionada, la tensión sobre meninges inflamadas provoca dolor y una contractura protectora involuntaria de la musculatura isquiotibial que frena el movimiento.',
    fisiologia:
      'En condiciones normales, las meninges y raíces nerviosas poseen movilidad y elasticidad que permiten el estiramiento sin dolor. Cuando existe inflamación meníngea, las raíces lumbosacras se vuelven hipersensibles a la tracción generada al extender la rodilla con la cadera flexionada, desencadenando una contracción refleja protectora de los músculos isquiotibiales.',
    fisiologiaSecuencia: [
      {
        titulo: 'Condición basal',
        descripcion:
          'En estado normal, las meninges y raíces nerviosas poseen movilidad y elasticidad que permiten mover las extremidades inferiores sin dolor ni respuestas musculares anormales.'
      },
      {
        titulo: '1. Flexión de cadera',
        descripcion:
          'Modifica la posición de las estructuras nerviosas y meníngeas dentro del canal vertebral.'
      },
      {
        titulo: '2. Extensión de rodilla',
        descripcion:
          'Produce estiramiento de las estructuras nerviosas lumbosacras y meninges asociadas.'
      },
      {
        titulo: '3. Tolerancia normal',
        descripcion:
          'En ausencia de patología, el estiramiento es tolerado sin dolor importante.'
      },
      {
        titulo: '4. Sensibilización inflamatoria',
        descripcion:
          'Cuando existe inflamación meníngea, las meninges y raíces se vuelven hipersensibles al movimiento y la tracción.'
      },
      {
        titulo: '5. Respuesta refleja protectora',
        descripcion:
          'El dolor desencadena una contracción involuntaria de los músculos flexores de la extremidad inferior (isquiotibiales), generando resistencia o imposibilidad para completar la extensión de la rodilla.'
      }
    ],
    tecnica: [
      {
        numero: 1,
        titulo: 'Posición del paciente',
        descripcion: 'Colocar al paciente en decúbito supino (acostado boca arriba).'
      },
      {
        numero: 2,
        titulo: 'Flexión articular',
        descripcion: 'Flexionar la cadera y la rodilla aproximadamente a 90°.'
      },
      {
        numero: 3,
        titulo: 'Extensión gradual',
        descripcion:
          'Intentar extender lentamente la rodilla evaluando la aparición de dolor o freno muscular.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posición del paciente',
        descripcion: 'Colocar al paciente en decúbito supino (acostado boca arriba).'
      },
      {
        numero: 2,
        titulo: 'Flexión articular',
        descripcion: 'Flexionar la cadera y la rodilla aproximadamente a 90°.'
      },
      {
        numero: 3,
        titulo: 'Extensión gradual',
        descripcion:
          'Intentar extender lentamente la rodilla evaluando la aparición de dolor o freno muscular.'
      }
    ],
    respuestaNormal:
      'La rodilla puede extenderse por completo sin dolor ni resistencia significativa.',
    respuestaAnormal:
      'Aparece dolor, resistencia o espasmo muscular reflejo que impide completar la extensión de la rodilla, orientando a irritación meníngea.',
    interpretacion:
      'La maniobra es el gesto exploratorio; el resultado positivo (Signo de Kernig) traduce irritación meníngea con contractura antálgica involuntaria de los músculos isquiotibiales.',
    importanciaClinica:
      'Esta maniobra no debe interpretarse de forma aislada; se valora siempre junto con la rigidez de nuca y otras pruebas de irritación meníngea como el signo de Brudzinski. Ninguna es concluyente por separado: un resultado negativo no descarta el proceso meníngeo y uno positivo tampoco lo confirma en solitario; su verdadero valor diagnóstico aparece cuando los hallazgos se leen en conjunto.',
    patologiasAsociadas: [
      'Meningitis aguda',
      'Hemorragia subaracnoidea',
      'Síndrome de irritación meníngea',
      'Radiculopatía lumbosacra inflamatoria'
    ],
    datoClave:
      'No debe interpretarse de forma aislada: se valora siempre en conjunto con la rigidez de nuca y el signo de Brudzinski, ya que un resultado negativo no descarta proceso meníngeo ni uno positivo aislado lo confirma.',
    videoPrefix: 'kernig'
  },

  'signo-de-gowers': {
    id: 'signo-de-gowers',
    nombre: 'Signo de Gowers',
    sinonimos: 'Maniobra de Gowers · Signo de levantarse trepando',
    queEs:
      'Signo clínico que indica debilidad de los músculos proximales, manifestándose por la incapacidad o dificultad para levantarse del suelo o desde una posición baja sin utilizar las manos como apoyo sobre el propio cuerpo.',
    definicion:
      'Signo clínico que indica debilidad de los músculos proximales, manifestándose por la incapacidad o dificultad para levantarse del suelo o desde una posición baja sin utilizar las manos como apoyo sobre el propio cuerpo.',
    queEvalua:
      'Relacionado con la musculatura proximal de extremidades inferiores (extensores de rodillas y caderas) y músculos fijadores de la escápula al tórax (serrato anterior, trapecio inferior y romboides mayor, cuya debilidad puede producir escápula alada).',
    fundamentoAnatomico:
      'Relacionado con la musculatura proximal de extremidades inferiores (extensores de rodillas y caderas) y músculos fijadores de la escápula al tórax (serrato anterior, trapecio inferior y romboides mayor, cuya debilidad puede producir escápula alada).',
    fisiologia:
      'Requerimiento de fuerza en cadera y rodillas para elevar y estabilizar el tronco. Al haber debilidad muscular proximal, el paciente ejerce compensación física apoyando las manos sobre sus piernas para empujar el tronco hacia arriba.',
    tecnica: [
      {
        numero: 1,
        titulo: 'Posición inicial',
        descripcion: 'Paciente en el suelo, en decúbito o sentado.'
      },
      {
        numero: 2,
        titulo: 'Incorporación',
        descripcion: 'Solicitar que se levante del suelo sin ayuda externa.'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion: 'Evaluar si requiere apoyarse con las manos en el suelo, rodillas y muslos para erguirse.'
      },
      {
        numero: 4,
        titulo: 'Valoración complementaria',
        descripcion:
          'Observar dificultad para levantarse de sillas, subir escaleras, marcha de puntillas o presencia de escápula alada.'
      }
    ],
    tecnicaExploracion: [
      {
        numero: 1,
        titulo: 'Posición inicial',
        descripcion: 'Paciente en el suelo, en decúbito o sentado.'
      },
      {
        numero: 2,
        titulo: 'Incorporación',
        descripcion: 'Solicitar que se levante del suelo sin ayuda externa.'
      },
      {
        numero: 3,
        titulo: 'Observación',
        descripcion: 'Evaluar si requiere apoyarse con las manos en el suelo, rodillas y muslos para erguirse.'
      },
      {
        numero: 4,
        titulo: 'Valoración complementaria',
        descripcion:
          'Observar dificultad para levantarse de sillas, subir escaleras, marcha de puntillas o presencia de escápula alada.'
      }
    ],
    respuestaNormal:
      'Incorporación fluida desde el suelo sin necesidad de trepar sobre las piernas ni apoyarse excesivamente.',
    respuestaAnormal:
      'El paciente apoya las manos primero en el suelo y luego de manera alternada sobre piernas y muslos, empujando el tronco hasta ponerse de pie.',
    interpretacion:
      'Sugiere debilidad muscular proximal de extensores de cadera y rodilla (debe correlacionarse con la historia clínica).',
    importanciaClinica:
      'Signo clásico de la Distrofia Muscular de Duchenne (DMD). Presente también en miopatías inflamatorias, distrofias musculares y congénitas, miopatías por estatinas y miopatía por esteroides.',
    patologiasAsociadas: [
      'Distrofia Muscular de Duchenne (DMD)',
      'Miopatías inflamatorias',
      'Distrofias musculares y congénitas',
      'Miopatías por estatinas',
      'Miopatía por esteroides'
    ],
    datoClave:
      'Signo patognomónico clásico de la Distrofia Muscular de Duchenne (DMD) por debilidad de la cintura pélvica.',
    videoPrefix: 'gowers'
  }
};
