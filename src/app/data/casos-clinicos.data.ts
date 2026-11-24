export interface HallazgoClinico {
  dato: string;
  hallazgo: string;
  referencia?: string;
}

export interface CasoClinico {
  id: string;
  titulo: string;
  subtitulo: string;
  signoRelacionado: string;
  videoRelacionado?: string;
  columnasTabla?: string[];
  historiaClinica: string[];
  tablaHallazgos?: HallazgoClinico[];
}

export const CASOS_CLINICOS: CasoClinico[] = [
  {
    id: 'chvostek-hipocalcemia',
    titulo: 'Caso Clínico: Signo de Chvostek',
    subtitulo: 'Hipocalcemia aguda posterior a tiroidectomía total',
    signoRelacionado: 'Signo de Chvostek',
    videoRelacionado: 'assets/videos/chvostek positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Mujer de 43 años que acude al servicio de urgencias por presentar parestesias (sensación de hormigueo) en las extremidades, temblores y calambres musculares de aproximadamente dos días de evolución. Como antecedente relevante, fue sometida a una tiroidectomía total cuatro días antes.',
      'Durante la exploración física, se percute suavemente sobre el trayecto del nervio facial, por delante del oído y a nivel de la región del músculo masetero, provocando una contracción involuntaria de los músculos faciales ipsilaterales (signo de Chvostek positivo).',
      'Se solicita medición de calcio ionizado con resultado de 0.72 mmol/L (marcadamente disminuido), compatible con hipocalcemia aguda secundaria a probable hipoparatiroidismo posquirúrgico. Se indica manejo con calcitriol (vitamina D activa) y carbonato de calcio por vía oral (considerando gluconato de calcio intravenoso y monitoreo electrocardiográfico según la gravedad).'
    ],
    tablaHallazgos: [
      { dato: 'Antecedente quirúrgico', hallazgo: 'Tiroidectomía total cuatro días antes' },
      { dato: 'Manifestaciones', hallazgo: 'Parestesias, temblores y calambres musculares' },
      { dato: 'Exploración neurológica', hallazgo: 'Signo de Chvostek positivo' },
      { dato: 'Calcio ionizado', hallazgo: '0.72 mmol/L (disminuido)' }
    ]
  },
  {
    id: 'trousseau-hipocalcemia',
    titulo: 'Caso Clínico: Signo de Trousseau',
    subtitulo: 'Hipocalcemia sintomática grave asociada con hipoparatiroidismo posquirúrgico',
    signoRelacionado: 'Signo de Trousseau',
    videoRelacionado: 'assets/videos/trousseau positivo.mp4',
    columnasTabla: ['Parámetro', 'Resultado', 'Referencia reportada'],
    historiaClinica: [
      'Mujer de 21 años con antecedente de enfermedad de Graves e hipoparatiroidismo, sometida a tiroidectomía total cuatro meses antes. Acude al hospital por náuseas, vómitos y sensación de adormecimiento u hormigueo en manos y pies. Este episodio representa su octava hospitalización desde la cirugía.',
      'Durante la valoración, al intentar medir la presión arterial con un esfigmomanómetro, se infla el manguito por encima de la presión sistólica y se mantiene durante dos minutos. Se desencadena espasmo carpopedal: flexión involuntaria de la muñeca y las articulaciones metacarpofalángicas, extensión de las articulaciones interfalángicas y aproximación/aducción del pulgar ("mano de partero"). Este hallazgo corresponde al signo de Trousseau positivo.',
      'Los estudios de laboratorio confirman hipocalcemia sintomática grave asociada con hipoparatiroidismo posquirúrgico (PTH marcadamente disminuida), acompañada de déficit de vitamina D e hipomagnesemia. La paciente recibió gluconato de calcio por vía intravenosa, logrando que las parestesias cedieran durante las primeras 24 horas.'
    ],
    tablaHallazgos: [
      { dato: 'Calcio total', hallazgo: '5.7 mg/dL (disminuido)', referencia: '8.5 – 10.2 mg/dL' },
      { dato: 'Calcio ionizado', hallazgo: '0.93 mg/dL (marcadamente disminuido)', referencia: '4.5 – 5.3 mg/dL' },
      { dato: 'Albúmina', hallazgo: '4.2 g/dL (normal)', referencia: '3.6 – 5.0 g/dL' },
      { dato: 'PTH (Paratohormona)', hallazgo: 'Marcadamente disminuida', referencia: '10 – 60 pg/mL' },
      { dato: '25-OH vitamina D', hallazgo: 'Disminuida', referencia: '30 – 40 ng/mL' },
      { dato: 'Magnesio', hallazgo: 'Disminuido (hipomagnesemia)', referencia: '1.5 – 2.0 mEq/L' }
    ]
  },
  {
    id: 'hoover-funcional',
    titulo: 'Caso Clínico: Signo de Hoover',
    subtitulo: 'Debilidad motora funcional de extremidad inferior izquierda',
    signoRelacionado: 'Signo de Hoover',
    videoRelacionado: 'assets/videos/hoover positivo.mp4',
    historiaClinica: [
      'Paciente adulta que acude al hospital por episodios de debilidad en la extremidad inferior izquierda, con dificultad para movilizarla voluntariamente. Durante la exploración física se documenta fuerza disminuida y variable entre maniobras, observándose además debilidad de tipo "give-way" (cede bruscamente ante la resistencia).',
      'Al realizar la maniobra del signo de Hoover, el examinador coloca una mano debajo del talón afectado y solicita la elevación contra resistencia (flexión de la cadera contralateral). Aunque la paciente refiere no poder extender voluntariamente la pierna izquierda, se percibe una clara presión descendente involuntaria en el talón afectado, lo cual corresponde a un signo de Hoover positivo.',
      'Este hallazgo, junto con la variabilidad de la fuerza y la presencia de temblor distraíble, apoya el diagnóstico de trastorno neurológico funcional (debilidad motora funcional) por incongruencia clínica. Se recomienda una valoración neurológica integral para identificar y descartar enfermedades coexistentes.'
    ]
  },
  {
    id: 'phalen-tunel-carpiano',
    titulo: 'Caso Clínico: Pruebas de Phalen I y II',
    subtitulo: 'Síndrome del túnel carpiano bilateral por neuropatía del nervio mediano',
    signoRelacionado: 'Signo de Phalen',
    historiaClinica: [
      'Mujer de 52 años que acude a consulta por presentar rigidez, adormecimiento y hormigueo en ambas manos desde hace aproximadamente un año. Las molestias afectan principalmente el pulgar, el dedo índice, el dedo medio y parte del dedo anular.',
      'Al inicio, los síntomas aparecían sobre todo durante la noche, pero progresivamente comenzaron a presentarse también durante el día y al realizar actividades manuales. La paciente refiere que las molestias disminuyen cuando sacude las manos (signo de Flick) y las deja descansar, y señala dificultad para sostener objetos o cargar una bolsa de mandado.',
      'En la exploración física se observa discreta disminución del volumen y del tono de la eminencia tenar. Las pruebas de Phalen I (flexión), Phalen II (invertida/extensión), Tinel y compresión de Durkan resultan positivas de forma bilateral. Los hallazgos son compatibles con síndrome del túnel carpiano bilateral por neuropatía del nervio mediano a nivel de la muñeca, por lo que se recomienda complementar con estudios de conducción nerviosa para evaluar la función motora y estadificar la gravedad.'
    ]
  },
  {
    id: 'tinel-tunel-carpiano',
    titulo: 'Caso Clínico: Signo de Tinel',
    subtitulo: 'Compresión del nervio mediano dentro del túnel carpiano',
    signoRelacionado: 'Signo de Tinel',
    videoRelacionado: 'assets/videos/tinel positivo.mp4',
    historiaClinica: [
      'Mujer de 34 años que acude al servicio de urgencias por presentar dos meses de parestesias dolorosas y progresivas en la región tenar de la mano derecha. Durante la exploración física presenta signo de Tinel positivo y prueba de Phalen positiva, acompañados de disminución de la sensibilidad superficial palmar en los tres primeros dedos, con fuerza muscular conservada (5/5) en ambas extremidades.',
      'Ante la distribución anatómica de los síntomas y los hallazgos exploratorios, la sospecha clínica principal es compresión del nervio mediano dentro del túnel carpiano. Entre los diagnósticos diferenciales considerados se encuentran la radiculopatía cervical, el síndrome de salida torácica, el síndrome del pronador redondo y la neuropatía del nervio interóseo anterior.',
      'Como estudio complementario se realiza ultrasonido de muñeca, el cual demuestra un aumento del área transversal del nervio mediano de 20.4 mm² (valor de referencia: 8.5 mm²) y un diámetro de 5.1 mm, hallazgos que respaldan el diagnóstico. El manejo reportado incluyó infiltración con corticosteroide guiada por ecografía, destacando la correlación entre el engrosamiento neural ecográfico y los síntomas sensitivos en su territorio.'
    ]
  },
  {
    id: 'hoffmann-mielopatia',
    titulo: 'Caso Clínico: Signo de Hoffmann',
    subtitulo: 'Mielopatía cervical degenerativa por estenosis espondilótica multisegmentaria',
    signoRelacionado: 'Signo de Hoffmann',
    videoRelacionado: 'assets/videos/hoffmann-positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Varón de 61 años, administrativo, consulta por ocho meses de torpeza progresiva en ambas manos. Refiere dificultad para abotonarse la camisa, sostener monedas y escribir. En los últimos tres meses presenta rigidez en ambas piernas, tropiezos y sensación de inestabilidad al caminar. Niega traumatismo reciente.',
      'A la exploración está alerta y orientado; fuerza 4+/5 en músculos intrínsecos de ambas manos y 4/5 en flexores de cadera; tono aumentado en miembros inferiores, reflejos osteotendinosos 3+ en las cuatro extremidades y marcha espástica. Se obtiene Hoffmann bilateral. La sensibilidad vibratoria está discretamente disminuida en ambos pies.'
    ],
    tablaHallazgos: [
      {
        dato: 'Maniobra de exploración',
        hallazgo:
          'Con la mano del paciente relajada, el examinador estabiliza el dedo medio y da un pequeño golpe o "chasquido" hacia abajo sobre la uña o falange distal. La respuesta positiva consiste en flexión involuntaria (a veces también aducción) del pulgar y flexión del índice.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo:
          'Mielopatía cervical degenerativa por estenosis espondilótica multisegmentaria (diagnóstico probable).'
      },
      {
        dato: 'Justificación diagnóstica',
        hallazgo:
          'La pérdida progresiva de destreza manual, la marcha espástica, la hiperreflexia y el Hoffmann bilateral sugieren compromiso de neurona motora superior a nivel cervical. La resonancia magnética cervical muestra estrechamiento del canal en C4-C5 y C5-C6, con deformación medular y señal intramedular hiperintensa en T2.'
      },
      {
        dato: 'Conducta y estudio complementario',
        hallazgo:
          'Resonancia magnética cervical y valoración por neurología/neurocirugía. Correlacionar el grado de compresión con la evolución funcional y descartar diagnósticos alternativos.'
      }
    ]
  },
  {
    id: 'tromner-mielopatia',
    titulo: 'Caso Clínico: Signo de Trömner',
    subtitulo: 'Mielopatía cervical compresiva secundaria a hernia discal central C5-C6',
    signoRelacionado: 'Signo de Trömner',
    videoRelacionado: 'assets/videos/trömer-positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Mujer de 43 años acude por diez meses de parestesias en ambas manos y dificultad creciente para realizar tareas finas. En las últimas seis semanas nota inestabilidad al bajar escaleras y sensación de descarga eléctrica por la espalda al flexionar el cuello (fenómeno de Lhermitte). No refiere fiebre ni alteración del estado de conciencia.',
      'La exploración revela fuerza 4+/5 en manos, hiperreflexia en miembros superiores e inferiores, aumento del tono en piernas y marcha en tándem alterada. El signo de Trömner se obtiene bilateralmente.'
    ],
    tablaHallazgos: [
      {
        dato: 'Maniobra de exploración',
        hallazgo:
          'Con la mano relajada, el examinador sostiene el dedo medio en posición cómoda y percute o desplaza brevemente hacia arriba la cara palmar de su falange distal. La respuesta positiva consiste en flexión refleja del pulgar y/o del índice, o una respuesta flexora exagerada de los dedos.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo:
          'Mielopatía cervical compresiva secundaria a hernia discal central C5-C6 (diagnóstico probable).'
      },
      {
        dato: 'Justificación diagnóstica',
        hallazgo:
          'La evolución progresiva, la torpeza de manos, la alteración de la marcha, la hiperreflexia y el Trömner bilateral orientan a disfunción corticoespinal por lesión cervical. La resonancia cervical identifica una protrusión discal central C5-C6 que reduce el diámetro del canal y comprime la médula espinal.'
      },
      {
        dato: 'Conducta y estudio complementario',
        hallazgo:
          'Solicitar/valorar resonancia magnética cervical; documentar fuerza, tono, reflejos, sensibilidad, marcha y función esfinteriana. La presencia de deterioro progresivo requiere referencia especializada.'
      }
    ]
  },
  {
    id: 'babinski-evc',
    titulo: 'Caso Clínico: Signo de Babinski',
    subtitulo: 'Evento vascular cerebral isquémico agudo del hemisferio izquierdo',
    signoRelacionado: 'Signo de Babinski',
    videoRelacionado: 'assets/videos/babinski-positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Varón de 69 años, con hipertensión arterial y diabetes mellitus tipo 2, es llevado a urgencias por dificultad súbita para hablar y pérdida de fuerza del lado derecho, iniciadas hace 55 minutos.',
      'A la exploración está despierto, comprende órdenes sencillas, presenta afasia no fluente, paresia facial central derecha y fuerza 2/5 en brazo derecho y 3/5 en pierna derecha. Los reflejos osteotendinosos derechos están exaltados y se obtiene respuesta plantar extensora derecha. La glucemia capilar es de 148 mg/dL.'
    ],
    tablaHallazgos: [
      {
        dato: 'Maniobra de exploración',
        hallazgo:
          'Con un objeto romo, se recorre lentamente el borde lateral de la planta desde el talón hacia la región anterior y luego se curva hacia la base del primer dedo. Se observa la dirección del movimiento inicial del dedo gordo.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo:
          'Evento vascular cerebral isquémico agudo del hemisferio izquierdo, probablemente en territorio de la arteria cerebral media (diagnóstico probable).'
      },
      {
        dato: 'Justificación diagnóstica',
        hallazgo:
          'El inicio súbito de afasia y hemiparesia faciobraquiocrural derecha localiza una lesión hemisférica izquierda. El Babinski derecho apoya afectación de la vía corticoespinal. La tomografía simple inicial descarta hemorragia y la angiotomografía identifica oclusión de una rama proximal de la arteria cerebral media izquierda, con isquemia aguda en difusión.'
      },
      {
        dato: 'Conducta y estudio complementario',
        hallazgo:
          'Activar inmediatamente el protocolo de ictus: determinar hora de última vez bien, glucemia, evaluación neurológica y neuroimagen urgente. La elegibilidad para reperfusión depende de criterios y tiempos; no retrasar la atención por maniobras adicionales.'
      }
    ]
  },
  {
    id: 'chaddock-desmielinizante',
    titulo: 'Caso Clínico: Signo de Chaddock',
    subtitulo: 'Enfermedad desmielinizante del SNC (probable esclerosis múltiple con episodio medular)',
    signoRelacionado: 'Signo de Chaddock',
    videoRelacionado: 'assets/videos/chaddock-positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Mujer de 34 años consulta por debilidad progresiva de la pierna derecha, parestesias y urgencia urinaria de diez días de evolución. Ocho meses antes presentó pérdida dolorosa de la visión del ojo izquierdo que mejoró parcialmente en varias semanas.',
      'A la exploración tiene fuerza 4-/5 en pierna derecha, hiperreflexia, tono aumentado y nivel sensitivo aproximado en T10. La respuesta plantar convencional es difícil de interpretar por retirada, pero al estimular la región dorsolateral del pie se obtiene extensión del hallux derecho.'
    ],
    tablaHallazgos: [
      {
        dato: 'Maniobra de exploración',
        hallazgo:
          'Se estimula con un objeto romo la piel situada por debajo y alrededor del maléolo lateral, avanzando por el borde dorsolateral del pie. La respuesta positiva es extensión del dedo gordo, con posible apertura en abanico de los otros dedos.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo:
          'Enfermedad desmielinizante del sistema nervioso central, probable esclerosis múltiple con episodio medular (diagnóstico probable).'
      },
      {
        dato: 'Justificación diagnóstica',
        hallazgo:
          'La combinación de un episodio previo compatible con neuritis óptica y un nuevo síndrome medular separado en el tiempo, junto con hiperreflexia y respuesta extensora plantar, sugiere enfermedad desmielinizante. La resonancia muestra lesiones hiperintensas típicas periventriculares y una lesión medular.'
      },
      {
        dato: 'Conducta y estudio complementario',
        hallazgo:
          'Resonancia magnética de encéfalo y médula con protocolo para desmielinización; valoración neurológica y estudios complementarios, como bandas oligoclonales en LCR, cuando estén indicados.'
      }
    ]
  },
  {
    id: 'gordon-mielopatia',
    titulo: 'Caso Clínico: Signo de Gordon',
    subtitulo: 'Mielopatía torácica compresiva por probable meningioma intradural extramedular',
    signoRelacionado: 'Signo de Gordon',
    videoRelacionado: 'assets/videos/gordon-positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Mujer de 57 años presenta diez meses de dolor dorsal progresivo, rigidez de ambas piernas y dificultad creciente para caminar. Desde hace tres semanas nota adormecimiento por debajo del tórax y urgencia urinaria.',
      'La exploración muestra paraparesia espástica, hiperreflexia rotuliana y aquílea bilateral y un nivel sensitivo aproximado en T8. La respuesta plantar directa es poco concluyente; al comprimir la musculatura de la pantorrilla se observa extensión del hallux en ambos pies.'
    ],
    tablaHallazgos: [
      {
        dato: 'Maniobra de exploración',
        hallazgo:
          'Con la extremidad relajada, el examinador comprime firmemente la masa muscular de la pantorrilla y observa el dedo gordo. La respuesta positiva consiste en extensión dorsal del hallux, a veces acompañada de separación en abanico de los demás dedos.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo:
          'Mielopatía torácica compresiva por probable meningioma intradural extramedular (diagnóstico probable).'
      },
      {
        dato: 'Justificación diagnóstica',
        hallazgo:
          'El dolor dorsal progresivo, el nivel sensitivo torácico, la paraparesia espástica y la hiperreflexia localizan el proceso a la médula torácica. El Gordon positivo apoya disfunción corticoespinal. La resonancia muestra una masa intradural extramedular a nivel T7 que comprime la médula, con características radiológicas sugerentes de meningioma.'
      },
      {
        dato: 'Conducta y estudio complementario',
        hallazgo:
          'Resonancia magnética de columna torácica con contraste y valoración urgente por neurocirugía, especialmente por progresión motora y síntomas urinarios.'
      }
    ]
  },
  {
    id: 'bing-lesion-parasagital',
    titulo: 'Caso Clínico: Signo de Bing',
    subtitulo: 'Lesión expansiva parasagital frontal izquierda (probable meningioma)',
    signoRelacionado: 'Signo de Bing',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Varón de 52 años consulta por cefalea progresiva de cuatro meses y episodios breves de sacudidas involuntarias del pie derecho, sin pérdida completa de la conciencia. En el último mes presenta dificultad para elevar la pierna derecha y tropiezos.',
      'La exploración evidencia fuerza 4-/5 en la extremidad inferior derecha, hiperreflexia y aumento del tono. Al aplicar un estímulo punzante leve y controlado sobre el dorso del dedo gordo derecho, se produce extensión del hallux. No hay fiebre ni rigidez de nuca.'
    ],
    tablaHallazgos: [
      {
        dato: 'Maniobra de exploración',
        hallazgo:
          'En la descripción clásica, se aplica un estímulo punzante leve y controlado en la superficie dorsal del dedo gordo del pie. La respuesta positiva es extensión del hallux. Es una maniobra histórica y menos utilizada en la práctica habitual; debe evitarse una estimulación agresiva o lesiva.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo:
          'Lesión expansiva parasagital frontal izquierda, probablemente meningioma, con compromiso de la representación motora de la pierna derecha (diagnóstico probable).'
      },
      {
        dato: 'Justificación diagnóstica',
        hallazgo:
          'La cefalea progresiva, las crisis motoras focales del pie derecho y la debilidad de la pierna derecha sugieren una lesión estructural del área motora medial del hemisferio izquierdo. La respuesta extensora con Bing apoya compromiso corticoespinal. La resonancia con contraste muestra una masa extraaxial parasagital frontal izquierda con realce homogéneo y cola dural, compatible con meningioma.'
      },
      {
        dato: 'Conducta y estudio complementario',
        hallazgo:
          'Resonancia magnética cerebral con contraste, evaluación neurológica/neuroquirúrgica y estudio de las crisis focales. La confirmación histopatológica corresponde al análisis del tejido cuando se realiza resección o biopsia.'
      }
    ]
  },
  {
    id: 'kernig-meningitis',
    titulo: 'Caso Clínico: Signo de Kernig',
    subtitulo: 'Meningitis bacteriana aguda por Streptococcus pneumoniae',
    signoRelacionado: 'Signo de Kernig',
    videoRelacionado: 'assets/videos/kernig-positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Varón de 22 años, previamente sano, acude a urgencias por fiebre de 39.2 °C, cefalea intensa, fotofobia, náuseas y vómitos de 24 horas de evolución. Su acompañante refiere somnolencia mayor a la habitual.',
      'A la exploración está despierto, responde adecuadamente, presenta rigidez de nuca y dolor al intentar extender la rodilla con la cadera flexionada a 90°. No se identifican déficit neurológico focal ni lesiones cutáneas purpúricas. Se obtienen hemocultivos y, tras valorar que no existen contraindicaciones para punción lumbar, se analiza LCR.'
    ],
    tablaHallazgos: [
      {
        dato: 'Maniobra de exploración',
        hallazgo:
          'Con el paciente en decúbito supino, se flexionan la cadera y la rodilla aproximadamente a 90°. Después se intenta extender pasivamente la rodilla. Se considera positivo cuando aparece dolor o resistencia que limita la extensión, generalmente por estiramiento de estructuras meníngeas y raíces nerviosas.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo:
          'Meningitis bacteriana aguda por Streptococcus pneumoniae (diagnóstico confirmado en el escenario por estudio del LCR).'
      },
      {
        dato: 'Justificación diagnóstica',
        hallazgo:
          'La fiebre, cefalea intensa, fotofobia, rigidez nucal y Kernig positivo sugieren irritación meníngea. El LCR muestra pleocitosis predominante de neutrófilos, hipoglucorraquia, proteínas elevadas y diplococos grampositivos; el cultivo identifica Streptococcus pneumoniae. Kernig apoya la sospecha, pero la confirmación etiológica depende del estudio microbiológico.'
      },
      {
        dato: 'Conducta y estudio complementario',
        hallazgo:
          'Es una urgencia médica. Obtener hemocultivos y realizar punción lumbar cuando sea seguro, sin retrasar el tratamiento antimicrobiano empírico si la sospecha clínica es alta. La necesidad de neuroimagen antes de la punción depende de los factores de riesgo y protocolos clínicos.'
      }
    ]
  },
  {
    id: 'romberg-b12',
    titulo: 'Caso Clínico: Signo de Romberg',
    subtitulo: 'Degeneración combinada subaguda de la médula espinal por deficiencia de vitamina B12',
    signoRelacionado: 'Signo de Romberg',
    videoRelacionado: 'assets/videos/Romberg-positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Mujer de 56 años acude por ocho meses de parestesias progresivas en ambos pies y dificultad para caminar en espacios oscuros. Refiere que necesita sujetarse al levantarse durante la noche y que ha comenzado a tropezar al bañarse con los ojos cerrados. Lleva 12 años con alimentación estrictamente vegana y no utiliza suplementos de vitamina B12. Niega vértigo rotatorio, hipoacusia o pérdida de fuerza focal.',
      'En la exploración puede mantenerse de pie con los pies juntos y los ojos abiertos, con oscilación mínima. Al cerrar los ojos aumenta de forma marcada el balanceo y debe dar un paso para evitar caer (signo de Romberg positivo). La vibración y la posición articular están disminuidas en los dedos de los pies y los maléolos; presenta marcha cautelosa y golpea el suelo con mayor fuerza al apoyar los pies. Se documenta respuesta plantar extensora bilateral y reflejos rotulianos vivos.'
    ],
    tablaHallazgos: [
      {
        dato: 'Metodología de la maniobra',
        hallazgo:
          'Con el paciente de pie, los pies juntos y los brazos a los lados, se observa primero el equilibrio con los ojos abiertos y después con los ojos cerrados durante 20 a 30 segundos, con el examinador muy cerca para prevenir caídas. Positivo cuando conserva la postura con visión pero pierde estabilidad al eliminarla.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo: 'Degeneración combinada subaguda de la médula espinal por deficiencia de vitamina B12.'
      },
      {
        dato: 'Justificación clínica',
        hallazgo:
          'La pérdida de propiocepción y vibración, el empeoramiento del equilibrio al cerrar los ojos y los signos piramidales sugieren compromiso de cordones posteriores y vías corticoespinales. La dieta sin suplementación, la macrocitosis, la B12 baja y la hiperintensidad de cordones posteriores en RM apoyan la etiología.'
      },
      {
        dato: 'Estudios y datos de apoyo',
        hallazgo:
          'Biometría hemática: Hb 10.8 g/dL y VCM 110 fL. Vitamina B12: 82 pg/mL; ácido metilmalónico elevado. Resonancia magnética cervical: señal T2 simétrica en cordones posteriores.'
      },
      {
        dato: 'Perla de interpretación',
        hallazgo:
          'El Romberg positivo orienta a alteración propioceptiva o vestibular, no identifica por sí mismo la causa. En una ataxia cerebelosa franca suele existir inestabilidad incluso con los ojos abiertos.'
      }
    ]
  },
  {
    id: 'pendulares-cerebeloso',
    titulo: 'Caso Clínico: Reflejos pendulares',
    subtitulo: 'Síndrome cerebeloso probablemente secundario a degeneración cerebelosa alcohólica',
    signoRelacionado: 'Reflejos pendulares',
    videoRelacionado: 'assets/videos/pendulares-positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Hombre de 59 años es valorado por seis meses de inestabilidad progresiva al caminar, dificultad para girar y habla más lenta y escandida. Refiere consumo elevado de alcohol durante más de 20 años y alimentación irregular. Niega pérdida de sensibilidad, diplopía o debilidad focal. Ha presentado varias caídas, sobre todo al caminar en superficies irregulares.',
      'Presenta marcha de base amplia, dificultad para realizar marcha en tándem, dismetría en las pruebas dedo-nariz y talón-rodilla y movimientos alternantes rápidos descompuestos. El tono de las extremidades inferiores está disminuido. Con el paciente sentado en el borde de la camilla y las piernas colgando, la percusión del tendón rotuliano produce varias oscilaciones de la pierna antes de detenerse (aproximadamente cinco o seis balanceos).'
    ],
    tablaHallazgos: [
      {
        dato: 'Metodología de la maniobra',
        hallazgo:
          'Con el paciente sentado, las piernas relajadas y sin apoyo, se percute el tendón rotuliano y se observa si la pierna realiza una serie de oscilaciones de ida y vuelta semejantes a un péndulo (más de cuatro oscilaciones), en lugar de amortiguarse rápidamente.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo:
          'Síndrome cerebeloso de predominio axial y de miembros, probablemente secundario a degeneración cerebelosa relacionada con consumo crónico de alcohol.'
      },
      {
        dato: 'Justificación clínica',
        hallazgo:
          'La combinación de marcha atáxica, dismetría, disdiadococinesia, disartria escandida e hipotonía sugiere disfunción cerebelosa. La respuesta rotuliana pendular se relaciona con la disminución del tono y de la acción amortiguadora de los músculos antagonistas.'
      },
      {
        dato: 'Estudios y datos de apoyo',
        hallazgo:
          'Resonancia magnética: atrofia predominante del vermis cerebeloso superior. Estudios nutricionales y metabólicos (tiamina, folato, vitamina B12, función hepática y electrolitos) y evaluación integral del consumo de alcohol.'
      },
      {
        dato: 'Perla de interpretación',
        hallazgo:
          'Los reflejos pendulares son un hallazgo de hipotonía que puede acompañar a lesiones cerebelosas. No equivalen a clonus ni prueban por sí solos una etiología alcohólica.'
      }
    ]
  },
  {
    id: 'holmes-infarto-cerebeloso',
    titulo: 'Caso Clínico: Signo de Holmes (Stewart-Holmes)',
    subtitulo: 'Infarto cerebeloso hemisférico derecho con síndrome cerebeloso ipsilateral',
    signoRelacionado: 'Signo de Holmes',
    videoRelacionado: 'assets/videos/holmes-positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Hombre de 64 años, con hipertensión arterial y diabetes mellitus tipo 2, acude a urgencias por inicio súbito de vértigo, vómitos, dificultad para coordinar el brazo derecho y habla pastosa, de aproximadamente tres horas de evolución. Niega pérdida de sensibilidad o debilidad franca. El inicio fue abrupto y los síntomas persisten.',
      'Se observa dismetría derecha en la prueba dedo-nariz, disdiadococinesia ipsilateral y marcha inestable con desviación hacia la derecha. Durante la prueba de rebote, el paciente flexiona el codo derecho contra la resistencia del examinador; al retirar súbitamente la resistencia, el antebrazo continúa el movimiento y se aproxima con fuerza al tórax sin conseguir frenarlo a tiempo, por lo que el examinador interpone su mano para evitar un golpe.'
    ],
    tablaHallazgos: [
      {
        dato: 'Metodología de la maniobra',
        hallazgo:
          'Se pide al paciente que flexione el codo contra resistencia del examinador, quien la retira de forma súbita y controlada interponiendo su otra mano para protegerlo. En disfunción cerebelosa, el miembro continúa o sobrepasa el movimiento por incapacidad para ajustar rápidamente los antagonistas.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo: 'Infarto cerebeloso hemisférico derecho, con síndrome cerebeloso ipsilateral.'
      },
      {
        dato: 'Justificación clínica',
        hallazgo:
          'El inicio súbito de vértigo, disartria y ataxia unilateral obliga a descartar un evento vascular de circulación posterior. La dismetría, disdiadococinesia derecha y la pérdida del frenado tras retirar la resistencia orientan al hemisferio cerebeloso derecho.'
      },
      {
        dato: 'Estudios y datos de apoyo',
        hallazgo:
          'Activación de protocolo de evento vascular cerebral: neuroimagen urgente (tomografía inicial según protocolo y resonancia magnética con difusión que muestra restricción aguda), estudio vascular y valoración de factores de riesgo.'
      },
      {
        dato: 'Perla de interpretación',
        hallazgo:
          'También llamado fenómeno de rebote de Stewart-Holmes. Traduce pérdida del reflejo de verificación/frenado cerebeloso; no debe confundirse con el síndrome de Gordon Holmes ni retrasar la atención de un ictus agudo.'
      }
    ]
  },
  {
    id: 'palmomentoniano-dft',
    titulo: 'Caso Clínico: Reflejo palmomentoniano (palmomental)',
    subtitulo:
      'Demencia frontotemporal variante conductual probable con síndrome disejecutivo y signos de liberación frontal',
    signoRelacionado: 'Reflejo palmomentoniano',
    videoRelacionado: 'assets/videos/palmomentoniano positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Mujer de 70 años es llevada a consulta por cambios progresivos de conducta durante los últimos 18 meses. La familia describe desinhibición, comentarios socialmente inapropiados, menor empatía, apatía y decisiones financieras impulsivas. También ha desarrollado conductas repetitivas y una preferencia marcada por alimentos dulces. En etapas iniciales, la memoria episódica parecía menos afectada que la conducta y la capacidad para planificar.',
      'La evaluación neuropsicológica muestra deterioro de funciones ejecutivas, flexibilidad cognitiva y control inhibitorio. En la exploración se obtiene contracción visible del músculo mentoniano al estimular la eminencia tenar de ambas manos. También se identifica otro reflejo primitivo. No hay déficit motor focal ni alteración sensitiva que explique el hallazgo.'
    ],
    tablaHallazgos: [
      {
        dato: 'Metodología de la maniobra',
        hallazgo:
          'Con un objeto romo, como el extremo de un abatelenguas o una llave sin filo, se realiza un estímulo firme y breve desde la región proximal hacia distal sobre la eminencia tenar. La respuesta positiva consiste en contracción del músculo mentoniano ipsilateral, visible como hoyuelo o elevación de la piel del mentón del mismo lado.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo:
          'Demencia frontotemporal variante conductual probable, con síndrome disejecutivo y signos de liberación frontal.'
      },
      {
        dato: 'Justificación clínica',
        hallazgo:
          'La desinhibición, pérdida de empatía, apatía, conductas estereotipadas, hiperoralidad o cambios alimentarios y deterioro ejecutivo con repercusión funcional orientan a la variante conductual de demencia frontotemporal. La atrofia frontoinsular y temporal anterior en neuroimagen apoya el cuadro. El reflejo palmomentoniano es complementario y no es suficiente para establecer el diagnóstico.'
      },
      {
        dato: 'Estudios y datos de apoyo',
        hallazgo:
          'Entrevista con informantes, evaluación neuropsicológica y resonancia cerebral (atrofia frontoinsular y temporal anterior). La tomografía por emisión de positrones puede mostrar hipometabolismo frontotemporal. Deben excluirse causas reversibles, fármacos, trastornos psiquiátricos y otras demencias.'
      },
      {
        dato: 'Perla de interpretación',
        hallazgo:
          'El palmomentoniano es un reflejo primitivo que puede aparecer en adultos mayores sin enfermedad neurológica. Su significado aumenta cuando es bilateral, vivo y se acompaña de otros signos de liberación frontal y de un síndrome frontal clínicamente definido.'
      }
    ]
  },
  {
    id: 'myerson-parkinson',
    titulo: 'Caso Clínico: Signo de Myerson',
    subtitulo: 'Síndrome parkinsoniano compatible con enfermedad de Parkinson idiopática en fase inicial',
    signoRelacionado: 'Signo de Myerson',
    videoRelacionado: 'assets/videos/myerson positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Hombre de 68 años consulta por lentitud progresiva para vestirse, escribir y realizar tareas manuales desde hace 18 meses. Su esposa observa temblor de la mano derecha cuando está en reposo y menor movimiento del brazo derecho al caminar. Niega caídas tempranas, alteraciones importantes de la mirada vertical o deterioro cognitivo de inicio rápido.',
      'Se identifica hipomimia, bradicinesia con decremento de amplitud en movimientos repetitivos, rigidez en rueda dentada y temblor de reposo de predominio derecho. La marcha muestra reducción del braceo derecho. Al percutir repetidamente la región glabelar, el paciente continúa parpadeando sin que la respuesta se habitúe tras múltiples estímulos.'
    ],
    tablaHallazgos: [
      {
        dato: 'Metodología de la maniobra',
        hallazgo:
          'Se percute suavemente y de manera repetida la glabela, entre las cejas, evitando que el paciente anticipe el estímulo visual. En una respuesta normal, los primeros parpadeos disminuyen y desaparecen; se denomina signo de Myerson cuando el parpadeo persiste sin habituación (por ejemplo, tras 10 o más estímulos).'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo: 'Síndrome parkinsoniano compatible con enfermedad de Parkinson idiopática en fase inicial.'
      },
      {
        dato: 'Justificación clínica',
        hallazgo:
          'La bradicinesia es el dato cardinal y se acompaña de rigidez y temblor de reposo, con inicio asimétrico. La persistencia del reflejo glabelar es un dato de apoyo, pero no es específico ni suficiente para diagnosticar enfermedad de Parkinson. La ausencia de datos atípicos tempranos y la respuesta clínica a levodopa pueden reforzar la impresión diagnóstica.'
      },
      {
        dato: 'Estudios y datos de apoyo',
        hallazgo:
          'El diagnóstico es fundamentalmente clínico y requiere valoración por neurología, revisión de fármacos que puedan inducir parkinsonismo y búsqueda de signos de alarma. La neuroimagen se solicita cuando existen datos atípicos o dudas diagnósticas; no confirma por sí sola la enfermedad de Parkinson.'
      },
      {
        dato: 'Perla de interpretación',
        hallazgo:
          'El signo de Myerson es la persistencia del parpadeo ante la percusión repetida de la glabela. Puede aparecer en enfermedad de Parkinson, parálisis supranuclear progresiva y algunos trastornos frontotemporales. Lo importante es la falta de habituación, no el primer parpadeo.'
      }
    ]
  },
  {
    id: 'gowers-duchenne',
    titulo: 'Caso Clínico: Signo de Gowers',
    subtitulo: 'Distrofia muscular de Duchenne (distrofinopatía ligada al cromosoma X)',
    signoRelacionado: 'Signo de Gowers',
    videoRelacionado: 'assets/videos/gowers-positivo.mp4',
    columnasTabla: ['Dato', 'Hallazgo'],
    historiaClinica: [
      'Niño de 5 años y 8 meses es llevado a consulta por caídas frecuentes, dificultad para correr, subir escaleras y levantarse del suelo. Comenzó a caminar alrededor de los 18 meses y recientemente ha dejado de saltar con ambos pies. No refiere dolor ni alteraciones sensitivas. La familia comenta que sus pantorrillas parecen más grandes que las de otros niños.',
      'Se observa marcha de base algo amplia, hiperlordosis lumbar y pseudohipertrofia de pantorrillas. Al pedirle que se levante desde el suelo, primero adopta una posición en decúbito o sentado, apoya las manos en el piso y después coloca las manos sobre sus rodillas y muslos para ir "trepando" por sus piernas hasta ponerse de pie. La fuerza proximal de caderas está disminuida y la sensibilidad se conserva.'
    ],
    tablaHallazgos: [
      {
        dato: 'Metodología de la maniobra',
        hallazgo:
          'Se pide al paciente que se levante desde el suelo sin ayuda. La maniobra es positiva cuando, debido a debilidad de la musculatura proximal de la cintura pélvica y extensores de cadera, necesita apoyar las manos en el suelo y ascender con ellas sobre las piernas o los muslos para extender el tronco y alcanzar la bipedestación.'
      },
      {
        dato: 'Diagnóstico probable',
        hallazgo: 'Distrofia muscular de Duchenne (distrofinopatía ligada al cromosoma X).'
      },
      {
        dato: 'Justificación clínica',
        hallazgo:
          'La edad de inicio, el retraso motor, las caídas, la dificultad para subir escaleras, la debilidad proximal, la marcha anadeante, la pseudohipertrofia de pantorrillas y el signo de Gowers son característicos de una distrofia muscular. La creatina cinasa muy elevada y una variante patogénica en el gen DMD confirman la sospecha de distrofia de Duchenne.'
      },
      {
        dato: 'Estudios y datos de apoyo',
        hallazgo:
          'Creatina cinasa sérica: 13,600 U/L (marcadamente elevada). Estudio molecular: deleción patogénica en el gen DMD con alteración del marco de lectura. Se requiere valoración neuromuscular, cardiológica y respiratoria, además de asesoramiento genético.'
      },
      {
        dato: 'Perla de interpretación',
        hallazgo:
          'El signo de Gowers refleja debilidad proximal y no es exclusivo de Duchenne: puede observarse en otras miopatías. La pseudohipertrofia de pantorrillas no representa mayor fuerza, sino reemplazo del músculo por tejido adiposo y conectivo.'
      }
    ]
  }
];
