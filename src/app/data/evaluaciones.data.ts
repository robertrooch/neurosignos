export interface PreguntaEvaluacion {
  id: number;
  pregunta: string;
  opciones: { inciso: string; texto: string }[];
  respuestaCorrecta: string;
  retroalimentacion: string;
}

export interface Evaluacion {
  id: string;
  titulo: string;
  subtitulo: string;
  tema: string;
  casoRelacionadoId?: string;
  preguntas: PreguntaEvaluacion[];
}

export const EVALUACIONES: Evaluacion[] = [
  {
    id: 'eval-chvostek',
    titulo: 'Cuestionario de Autoevaluación: Signo de Chvostek',
    subtitulo: 'Hipocalcemia aguda posterior a tiroidectomía total e hiperexcitabilidad neuromuscular',
    tema: 'Signo de Chvostek',
    casoRelacionadoId: 'chvostek-hipocalcemia',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Qué hallazgo físico define a un signo de Chvostek positivo durante la exploración?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Contracción involuntaria de los músculos faciales ipsilaterales al percutir el trayecto del nervio facial.'
          },
          {
            inciso: 'b',
            texto: 'Flexión involuntaria del antebrazo al percutir el músculo masetero.'
          },
          {
            inciso: 'c',
            texto: 'Pérdida súbita de la sensibilidad en la hemicara ipsilateral.'
          }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La percusión anterior al conducto auditivo externo estimula un nervio facial hiperexcitable por hipocalcemia, desencadenando espasmo facial ipsilateral.'
      },
      {
        id: 2,
        pregunta: '¿Qué par craneal se estimula directamente al realizar la maniobra de Chvostek?',
        opciones: [
          { inciso: 'a', texto: 'Nervio trigémino (V)' },
          { inciso: 'b', texto: 'Nervio facial (VII)' },
          { inciso: 'c', texto: 'Nervio glosofaríngeo (IX)' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'El signo evalúa la excitabilidad motora de las ramas del VII par craneal (nervio facial).'
      },
      {
        id: 3,
        pregunta: '¿Cuál es la alteración bioquímica principal que explica el cuadro clínico de la paciente?',
        opciones: [
          { inciso: 'a', texto: 'Hiperpotasemia' },
          { inciso: 'b', texto: 'Hipocalcemia' },
          { inciso: 'c', texto: 'Hiponatremia' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'La disminución del calcio ionizado (0.72 mmol/L) reduce el umbral de despolarización axonal y genera tetania latente o manifiesta.'
      }
    ]
  },
  {
    id: 'eval-trousseau',
    titulo: 'Evaluación: Signo de Trousseau',
    subtitulo: 'Hipocalcemia sintomática grave y tetania latente',
    tema: 'Signo de Trousseau',
    casoRelacionadoId: 'trousseau-hipocalcemia',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Qué hallazgo clínico describe un signo de Trousseau positivo?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Espasmo carpopedal provocado al inflar un manguito de presión arterial por encima de la presión sistólica durante 2 a 3 minutos.'
          },
          {
            inciso: 'b',
            texto: 'Contracción muscular facial ipsilateral al percutir por delante del oído.'
          },
          {
            inciso: 'c',
            texto: 'Contracción del músculo gastrocnemio al estirar bruscamente el tobillo.'
          },
          {
            inciso: 'd',
            texto: 'Pérdida súbita de la capacidad para cerrar los ojos.'
          }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'El signo de Trousseau evalúa la tetania latente mediante isquemia transitoria con manguito de presión, desencadenando espasmo carpopedal.'
      },
      {
        id: 2,
        pregunta: '¿Cuál es la alteración bioquímica principal que explica el cuadro de la paciente?',
        opciones: [
          { inciso: 'a', texto: 'Hiponatremia' },
          { inciso: 'b', texto: 'Hipocalcemia' },
          { inciso: 'c', texto: 'Hiperpotasemia' },
          { inciso: 'd', texto: 'Hipermagnesemia' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'El calcio total (5.7 mg/dL) y el calcio ionizado (0.93 mg/dL) están severamente disminuidos con albúmina normal (4.2 g/dL), confirmando hipocalcemia verdadera.'
      },
      {
        id: 3,
        pregunta: '¿Qué antecedente quirúrgico relevante explica la etiología del cuadro en este caso?',
        opciones: [
          { inciso: 'a', texto: 'Tiroidectomía total' },
          { inciso: 'b', texto: 'Colecistectomía laparoscópica' },
          { inciso: 'c', texto: 'Nefrectomía unilateral' },
          { inciso: 'd', texto: 'Apendicectomía' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La tiroidectomía total es la causa más frecuente de hipoparatiroidismo posquirúrgico por lesión, desvascularización o extirpación inadvertida de las glándulas paratiroides.'
      },
      {
        id: 4,
        pregunta: '¿Con qué postura característica se manifiesta el espasmo carpopedal ("mano de partero")?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Flexión de muñeca y articulaciones metacarpofalángicas, extensión de interfalángicas y aducción del pulgar.'
          },
          {
            inciso: 'b',
            texto: 'Extensión aislada del codo con pronación forzada del antebrazo.'
          },
          {
            inciso: 'c',
            texto: 'Abducción involuntaria del hombro con flexión dorsal de todos los dedos.'
          },
          {
            inciso: 'd',
            texto: 'Flacidez completa de la mano con caída de la muñeca.'
          }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Esta postura típica resulta de la contracción simultánea de los músculos intrínsecos de la mano y flexores del antebrazo por hiperexcitabilidad axonal.'
      },
      {
        id: 5,
        pregunta: '¿Por qué la hipocalcemia aumenta la excitabilidad neuromuscular?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Reduce el umbral de despolarización de las membranas nerviosas, facilitando descargas espontáneas.'
          },
          {
            inciso: 'b',
            texto: 'Bloquea de forma irreversible los canales de sodio dependientes de voltaje.'
          },
          {
            inciso: 'c',
            texto: 'Destruye directamente las vainas de mielina de los nervios periféricos.'
          },
          {
            inciso: 'd',
            texto: 'Impide la liberación de acetilcolina en la placa neuromuscular.'
          }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'El calcio extracelular estabiliza la membrana neuronal; su descenso vuelve más permeable la membrana al sodio y acerca el potencial de reposo al umbral de disparo.'
      },
      {
        id: 6,
        pregunta: '¿Qué otras alteraciones metabólicas acompañan y agravan la hipocalcemia en esta paciente?',
        opciones: [
          { inciso: 'a', texto: 'Déficit de vitamina D e hipomagnesemia' },
          { inciso: 'b', texto: 'Hipercalcemia e hiperuricemia' },
          { inciso: 'c', texto: 'Alcalosis respiratoria por hiperventilación primaria únicamente' },
          { inciso: 'd', texto: 'Hiperfosfatemia por intoxicación exógena de vitamina A' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La hipomagnesemia inhibe tanto la secreción de PTH como su acción periférica, perpetuando la hipocalcemia refractaria si no se corrige junto con la vitamina D.'
      },
      {
        id: 7,
        pregunta:
          '¿Cuál es la principal diferencia semiológica entre el signo de Trousseau y el signo de Chvostek?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Trousseau se provoca por isquemia en el brazo generando espasmo carpopedal, mientras que Chvostek se provoca por percusión del nervio facial generando contracción facial.'
          },
          {
            inciso: 'b',
            texto: 'Ambos evalúan exclusivamente los reflejos pupilares ante estímulos luminosos.'
          },
          {
            inciso: 'c',
            texto:
              'Chvostek requiere un esfigmomanómetro y Trousseau se explora con martillo de reflejos en la cara.'
          },
          {
            inciso: 'd',
            texto: 'Trousseau indica lesión cerebelosa y Chvostek indica irritación meníngea.'
          }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Aunque ambos traducen hiperexcitabilidad neuromuscular por hipocalcemia, Trousseau es más específico y utiliza oclusión arterial braquial, mientras Chvostek utiliza percusión mecánica sobre el VII par craneal.'
      }
    ]
  },
  {
    id: 'eval-hoover',
    titulo: 'Evaluación: Signo de Hoover',
    subtitulo: 'Debilidad motora funcional y sinergia de oposición complementaria',
    tema: 'Signo de Hoover',
    casoRelacionadoId: 'hoover-funcional',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Cuál es la característica principal de un signo de Hoover positivo?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Contracción involuntaria de los músculos faciales al percutir por delante del oído.'
          },
          {
            inciso: 'b',
            texto:
              'Discrepancia entre la debilidad en la extensión voluntaria de la cadera y la extensión involuntaria conservada al flexionar la cadera contralateral contra resistencia.'
          },
          {
            inciso: 'c',
            texto: 'Pérdida de la sensibilidad vibratoria en la extremidad inferior afectada.'
          },
          {
            inciso: 'd',
            texto: 'Abolición o ausencia del reflejo aquíleo ipsilateral.'
          }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'El signo de Hoover positivo demuestra que la vía motora hacia los extensores de la cadera está íntegra al activarse de manera automática y sinérgica durante la flexión contralateral.'
      },
      {
        id: 2,
        pregunta: '¿En qué posición del paciente se realiza habitualmente la maniobra del signo de Hoover?',
        opciones: [
          { inciso: 'a', texto: 'Deambulando en línea recta.' },
          { inciso: 'b', texto: 'Sentado al borde de la camilla con las piernas colgando.' },
          { inciso: 'c', texto: 'En decúbito supino con ambas extremidades inferiores extendidas.' },
          { inciso: 'd', texto: 'En decúbito prono con flexión de rodillas a 90 grados.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'El decúbito supino permite aislar la extensión de cadera y colocar ambas manos del examinador debajo de los talones para comparar la presión ejercida.'
      },
      {
        id: 3,
        pregunta: '¿Dónde coloca el examinador sus manos durante la prueba para percibir la respuesta motora?',
        opciones: [
          { inciso: 'a', texto: 'Debajo de ambos talones (de la extremidad afectada y de la sana).' },
          { inciso: 'b', texto: 'Sobre la región lumbar del paciente.' },
          { inciso: 'c', texto: 'Sobre el dorso del pie contralateral.' },
          { inciso: 'd', texto: 'Sobre ambas rótulas para fijar las rodillas.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Palpar ambos talones permite sentir simultáneamente la presión extensora involuntaria en el talón aparentemente débil mientras se resiste la flexión de la pierna opuesta.'
      },
      {
        id: 4,
        pregunta: '¿Cuál es el hallazgo esperado en un signo de Hoover negativo (respuesta normal)?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'La presión extensora involuntaria en el talón contralateral es congruente con la fuerza de extensión voluntaria evaluada previamente.'
          },
          {
            inciso: 'b',
            texto:
              'No se percibe ninguna presión descendente en ninguno de los talones al flexionar la cadera opuesta.'
          },
          {
            inciso: 'c',
            texto: 'Se desencadena clonus sostenido del tobillo al elevar la pierna.'
          },
          {
            inciso: 'd',
            texto: 'Aparece dorsiflexión del primer dedo con separación en abanico de los demás dedos.'
          }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'En condiciones normales existe coherencia entre la fuerza voluntaria y la fuerza sinérgica automática ejercida por ambos miembros inferiores.'
      },
      {
        id: 5,
        pregunta: '¿Con qué condición clínica se asocia clásicamente un signo de Hoover positivo?',
        opciones: [
          { inciso: 'a', texto: 'Miastenia gravis exclusivamente.' },
          { inciso: 'b', texto: 'Trastorno neurológico funcional (debilidad motora funcional).' },
          { inciso: 'c', texto: 'Polineuropatía diabética en todos los casos.' },
          { inciso: 'd', texto: 'Lesión aislada del nervio peroneo común.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Es una de las pruebas semiológicas más útiles y específicas para respaldar el diagnóstico positivo de debilidad funcional en extremidades inferiores.'
      },
      {
        id: 6,
        pregunta: '¿Qué consideración clínica es fundamental al interpretar un signo de Hoover positivo?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Demuestra de forma definitiva que el paciente está simulando voluntariamente sus síntomas.'
          },
          {
            inciso: 'b',
            texto:
              'Evidencia disociación entre fuerza voluntaria y automática, pero no equivale a simulación y debe interpretarse dentro de una valoración integral (el dolor limitante puede influir).'
          },
          {
            inciso: 'c',
            texto: 'Es un hallazgo constante en personas sanas y solo aparece en lesiones medulares completas.'
          },
          {
            inciso: 'd',
            texto: 'Evalúa exclusivamente la fuerza proximal de las extremidades superiores.'
          }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Un signo de Hoover positivo apoya un trastorno neurológico funcional (que es involuntario) y nunca debe confundirse con simulación (malingering).'
      },
      {
        id: 7,
        pregunta: '¿Qué mecanismo fisiológico explica el signo de Hoover?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Una sinergia motora automática (principio de oposición complementaria) entre ambas extremidades inferiores al flexionar una cadera contra resistencia.'
          },
          {
            inciso: 'b',
            texto: 'Un reflejo fotomotor mediado por el tronco encefálico.'
          },
          {
            inciso: 'c',
            texto: 'La activación exclusiva de fibras nociceptivas cutáneas plantares.'
          },
          {
            inciso: 'd',
            texto: 'La fatiga neuromuscular progresiva tras repetir la misma tarea.'
          }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Para estabilizar la pelvis al flexionar una cadera contra resistencia, el sistema nervioso genera automáticamente una extensión compensatoria en la pierna contraria.'
      }
    ]
  },
  {
    id: 'eval-phalen',
    titulo: 'Evaluación: Pruebas de Phalen I y II',
    subtitulo: 'Síndrome del túnel carpiano y neuropatía del nervio mediano',
    tema: 'Signo de Phalen',
    casoRelacionadoId: 'phalen-tunel-carpiano',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Qué nervio periférico se encuentra comprometido en el síndrome del túnel carpiano?',
        opciones: [
          { inciso: 'a', texto: 'Nervio cubital' },
          { inciso: 'b', texto: 'Nervio radial' },
          { inciso: 'c', texto: 'Nervio mediano' },
          { inciso: 'd', texto: 'Nervio musculocutáneo' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'El túnel carpiano es un canal osteofibroso inextensible en la cara palmar de la muñeca por donde transcurre el nervio mediano junto con los tendones flexores.'
      },
      {
        id: 2,
        pregunta: '¿Cómo se colocan las muñecas del paciente durante la prueba de Phalen I (clásica)?',
        opciones: [
          {
            inciso: 'a',
            texto: 'En flexión palmar máxima sostenida, juntando el dorso de ambas manos.'
          },
          {
            inciso: 'b',
            texto:
              'En extensión dorsal máxima juntando las palmas (posición de oración, que corresponde a Phalen II o invertida).'
          },
          {
            inciso: 'c',
            texto: 'En posición neutra con ambos puños cerrados.'
          },
          {
            inciso: 'd',
            texto: 'En desviación cubital forzada con los dedos extendidos.'
          }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La flexión palmar completa aumenta la presión dentro del túnel carpiano y comprime el nervio mediano contra el retináculo flexor; la extensión dorsal máxima corresponde a la maniobra de Phalen invertida (Phalen II).'
      },
      {
        id: 3,
        pregunta: '¿Cuánto tiempo se mantiene habitualmente la posición durante la maniobra de Phalen?',
        opciones: [
          { inciso: 'a', texto: '5 segundos' },
          { inciso: 'b', texto: '10 segundos' },
          { inciso: 'c', texto: '15 segundos' },
          { inciso: 'd', texto: 'Aproximadamente 60 segundos (1 minuto)' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Mantener la flexión sostenida durante 60 segundos permite reproducir la isquemia transitoria y compresión mecánica necesarias para desencadenar los síntomas en pacientes con neuropatía del mediano.'
      },
      {
        id: 4,
        pregunta:
          '¿Qué grupo de dedos presenta clásicamente parestesias u hormigueo en la compresión del nervio mediano?',
        opciones: [
          { inciso: 'a', texto: 'Pulgar, índice, dedo medio y mitad radial del dedo anular.' },
          { inciso: 'b', texto: 'Dedo meñique y mitad cubital del dedo anular únicamente.' },
          { inciso: 'c', texto: 'Todos los dedos por igual, incluyendo el dorso completo de la mano.' },
          { inciso: 'd', texto: 'Exclusivamente el dedo índice y el dedo meñique.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Esta distribución corresponde al territorio sensitivo palmar de las ramas digitales del nervio mediano; el meñique es inervado por el nervio cubital.'
      },
      {
        id: 5,
        pregunta: '¿Qué hallazgo caracteriza a una prueba de Phalen positiva?',
        opciones: [
          { inciso: 'a', texto: 'Dolor exclusivo en el hombro al elevar el brazo.' },
          { inciso: 'b', texto: 'Dolor en la región lumbar irradiado hacia la pierna.' },
          {
            inciso: 'c',
            texto:
              'Reproducción o exacerbación de parestesias, adormecimiento o dolor en el territorio de distribución del nervio mediano.'
          },
          { inciso: 'd', texto: 'Contracción involuntaria de los músculos de la eminencia hipotenar.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La prueba se considera positiva únicamente cuando reproduce los síntomas sensitivos típicos en los dedos inervados por el nervio mediano.'
      },
      {
        id: 6,
        pregunta:
          '¿Cómo deben interpretarse las maniobras de provocación (como Phalen) en el diagnóstico del síndrome del túnel carpiano?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Un resultado positivo demuestra de manera aislada y definitiva la enfermedad sin requerir historia clínica.'
          },
          {
            inciso: 'b',
            texto:
              'Son pruebas clínicas de apoyo que no deben interpretarse de forma aislada; un resultado negativo no excluye siempre el diagnóstico.'
          },
          {
            inciso: 'c',
            texto: 'Sirven exclusivamente para evaluar la circulación arterial de la mano.'
          },
          {
            inciso: 'd',
            texto: 'Un resultado negativo descarta por completo cualquier neuropatía compresiva.'
          }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Ninguna maniobra clínica posee sensibilidad o especificidad del 100 %, por lo que deben integrarse con la clínica (atrofia tenar, síntomas nocturnos) y estudios electrodiagnósticos.'
      },
      {
        id: 7,
        pregunta:
          '¿Cuál es la principal diferencia semiológica entre la prueba de Phalen y el signo de Tinel?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Phalen provoca los síntomas mediante flexión o extensión sostenida de la muñeca, mientras que Tinel los provoca mediante percusión suave sobre el nervio mediano en el túnel carpiano.'
          },
          {
            inciso: 'b',
            texto: 'Tinel se realiza percutiendo el codo y Phalen elevando el hombro.'
          },
          {
            inciso: 'c',
            texto: 'Ambas maniobras evalúan exactamente la misma postura estática sin tocar al paciente.'
          },
          {
            inciso: 'd',
            texto: 'Phalen evalúa el nervio cubital y Tinel evalúa el nervio radial.'
          }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Ambas exploran el atrapamiento del nervio mediano en la muñeca, pero Phalen utiliza compresión postural sostenida y Tinel utiliza percusión mecánica directa para desencadenar parestesias distales.'
      }
    ]
  },
  {
    id: 'eval-tinel',
    titulo: 'Evaluación: Signo de Tinel',
    subtitulo: 'Percusión del nervio mediano y neuropatía compresiva del carpo',
    tema: 'Signo de Tinel',
    casoRelacionadoId: 'tinel-tunel-carpiano',
    preguntas: [
      {
        id: 1,
        pregunta: '¿En qué consiste la maniobra para buscar el signo de Tinel?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Comprimir la arteria radial hasta que desaparezca el pulso distal.'
          },
          {
            inciso: 'b',
            texto:
              'Percutir suavemente el trayecto del nervio mediano en la muñeca y observar si se producen parestesias o sensación de descarga eléctrica.'
          },
          {
            inciso: 'c',
            texto: 'Mantener ambas muñecas en flexión palmar máxima durante 60 segundos.'
          },
          {
            inciso: 'd',
            texto: 'Medir exclusivamente la fuerza de oposición del pulgar contra resistencia.'
          }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'El signo de Tinel evalúa la irritabilidad mecánica de un nervio periférico mediante percusión ligera directa sobre su trayecto superficial.'
      },
      {
        id: 2,
        pregunta: '¿Qué nervio periférico se evalúa al explorar el signo de Tinel en la muñeca?',
        opciones: [
          { inciso: 'a', texto: 'Nervio radial' },
          { inciso: 'b', texto: 'Nervio cubital' },
          { inciso: 'c', texto: 'Nervio mediano' },
          { inciso: 'd', texto: 'Nervio musculocutáneo' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'El nervio mediano atraviesa el túnel carpiano en la cara palmar de la muñeca y es el comprometido en este síndrome compresivo.'
      },
      {
        id: 3,
        pregunta: '¿Dónde se aplica exactamente la percusión durante la maniobra de Tinel en la muñeca?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Sobre la cara palmar de la muñeca, a nivel del túnel carpiano (entre los tendones del palmar largo y flexor radial del carpo).'
          },
          { inciso: 'b', texto: 'Por detrás del maléolo medial del tobillo.' },
          { inciso: 'c', texto: 'Directamente sobre el tendón de Aquiles.' },
          { inciso: 'd', texto: 'Por delante del conducto auditivo externo sobre el nervio facial.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La percusión se realiza sobre el retináculo flexor en la superficie volar de la muñeca, justo donde el nervio mediano entra al túnel carpiano.'
      },
      {
        id: 4,
        pregunta: '¿Qué respuesta clínica hace positivo al signo de Tinel?',
        opciones: [
          { inciso: 'a', texto: 'Dolor lumbar irradiado hacia la cara posterior del muslo.' },
          { inciso: 'b', texto: 'Abolición inmediata del reflejo bicipital.' },
          {
            inciso: 'c',
            texto: 'Contracción involuntaria de los músculos orbicular de los párpados y cigomático.'
          },
          {
            inciso: 'd',
            texto:
              'Sensación de hormigueo, parestesias o descarga eléctrica irradiada hacia los dedos inervados por el nervio mediano.'
          }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'La irradiación distal de parestesias o "toques eléctricos" hacia la mano indica hiperexcitabilidad de las fibras sensitivas del nervio mediano.'
      },
      {
        id: 5,
        pregunta: '¿Qué dedos se afectan clásicamente en el territorio sensitivo del nervio mediano?',
        opciones: [
          { inciso: 'a', texto: 'Pulgar, índice, dedo medio y mitad radial del dedo anular.' },
          { inciso: 'b', texto: 'Dedo meñique y mitad cubital del dedo anular únicamente.' },
          { inciso: 'c', texto: 'Todos los dedos por igual, incluyendo el dorso completo de la mano.' },
          { inciso: 'd', texto: 'Solo el dorso del pulgar y la eminencia hipotenar.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Las ramas digitales palmares del nervio mediano inervan los tres primeros dedos y la cara radial del cuarto dedo.'
      },
      {
        id: 6,
        pregunta:
          '¿Qué otra maniobra de provocación suele realizarse junto con el signo de Tinel para evaluar el síndrome del túnel carpiano?',
        opciones: [
          { inciso: 'a', texto: 'Signo de Babinski' },
          { inciso: 'b', texto: 'Prueba de Romberg' },
          { inciso: 'c', texto: 'Signo de Brudzinski' },
          { inciso: 'd', texto: 'Prueba de Phalen' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Combinar la percusión directa (Tinel) con la flexión sostenida de la muñeca (Phalen) mejora la orientación diagnóstica clínica en el síndrome del túnel carpiano.'
      },
      {
        id: 7,
        pregunta: '¿Qué significado fisiopatológico tiene un signo de Tinel positivo?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Indica irritación mecánica local, desmielinización focal o regeneración e hiperexcitabilidad axonal de un nervio periférico en un sitio de atrapamiento (debe interpretarse en el contexto clínico).'
          },
          {
            inciso: 'b',
            texto: 'Evalúa la integridad motora del nervio femoral y la médula espinal lumbar.'
          },
          {
            inciso: 'c',
            texto: 'Confirma por sí solo una lesión de origen central sin requerir correlación clínica.'
          },
          {
            inciso: 'd',
            texto: 'Mide el flujo arterial colateral entre las arterias radial y cubital.'
          }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'El signo de Tinel traduce irritabilidad o regeneración axonal periférica ante estímulos mecánicos leves, por lo que siempre debe integrarse con la exploración sensitiva, motora y estudios complementarios.'
      }
    ]
  },
  {
    id: 'eval-hoffmann',
    titulo: 'Evaluación: Signo de Hoffmann',
    subtitulo: 'Vía corticoespinal superior y mielopatía cervical degenerativa',
    tema: 'Signo de Hoffmann',
    casoRelacionadoId: 'hoffmann-mielopatia',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Qué maniobra se utiliza para explorar el signo de Hoffmann?',
        opciones: [
          { inciso: 'a', texto: 'Comprimir la masa muscular de la pantorrilla.' },
          { inciso: 'b', texto: 'Flexionar pasivamente la cadera y extender la rodilla.' },
          { inciso: 'c', texto: 'Dar un pequeño golpe descendente sobre la uña del dedo medio.' },
          { inciso: 'd', texto: 'Estimular el borde lateral de la planta del pie.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Con la mano relajada y estabilizando la falange media del dedo medio, se realiza un chasquido descendente sobre la uña o falange distal.'
      },
      {
        id: 2,
        pregunta: '¿Cuál es la respuesta considerada positiva?',
        opciones: [
          { inciso: 'a', texto: 'Flexión involuntaria del pulgar y del índice.' },
          { inciso: 'b', texto: 'Extensión del dedo gordo del pie.' },
          { inciso: 'c', texto: 'Flexión de ambas rodillas al flexionar el cuello.' },
          { inciso: 'd', texto: 'Abducción del quinto dedo del pie.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'El signo positivo consiste en flexión (y a menudo aducción) involuntaria del pulgar junto con flexión del índice.'
      },
      {
        id: 3,
        pregunta: '¿Qué sistema se considera principalmente al interpretar un Hoffmann positivo?',
        opciones: [
          { inciso: 'a', texto: 'Vía espinocerebelosa.' },
          { inciso: 'b', texto: 'Vía corticoespinal o piramidal.' },
          { inciso: 'c', texto: 'Sistema vestibular periférico.' },
          { inciso: 'd', texto: 'Nervio óptico.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Un reflejo flexor digital exaltado sugiere pérdida de inhibición supramedular sobre la vía corticoespinal o piramidal.'
      },
      {
        id: 4,
        pregunta: 'En el caso descrito, ¿qué dato apoya más una mielopatía cervical?',
        opciones: [
          { inciso: 'a', texto: 'Cefalea pulsátil aislada.' },
          { inciso: 'b', texto: 'Pérdida auditiva unilateral.' },
          { inciso: 'c', texto: 'Rigidez de nuca aguda.' },
          { inciso: 'd', texto: 'Torpeza manual acompañada de marcha espástica e hiperreflexia.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'La combinación de pérdida de destreza fina en manos y signos piramidales en miembros inferiores localiza la disfunción en la médula cervical.'
      },
      {
        id: 5,
        pregunta: '¿Cuál es el estudio de imagen más útil para valorar la compresión medular cervical?',
        opciones: [
          { inciso: 'a', texto: 'Radiografía simple de tórax.' },
          { inciso: 'b', texto: 'Resonancia magnética de columna cervical.' },
          { inciso: 'c', texto: 'Ultrasonido abdominal.' },
          { inciso: 'd', texto: 'Electroencefalograma.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'La RM cervical permite visualizar directamente el canal raquídeo, los discos intervertebrales y cambios de señal intramedular en T2.'
      },
      {
        id: 6,
        pregunta: '¿Qué significa que el signo de Hoffmann sea positivo de forma aislada?',
        opciones: [
          { inciso: 'a', texto: 'Confirma esclerosis múltiple.' },
          { inciso: 'b', texto: 'Confirma lesión medular cervical.' },
          {
            inciso: 'c',
            texto: 'Puede sugerir hiperexcitabilidad corticoespinal, pero requiere correlación clínica.'
          },
          { inciso: 'd', texto: 'Diagnostica neuropatía periférica.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Puede observarse en individuos sanos con hiperreflexia fisiológica, por lo que nunca establece diagnóstico por sí solo.'
      },
      {
        id: 7,
        pregunta: '¿Cuál de los siguientes hallazgos es más característico de neurona motora superior?',
        opciones: [
          { inciso: 'a', texto: 'Hiperreflexia y espasticidad.' },
          { inciso: 'b', texto: 'Fasciculaciones con hiporreflexia.' },
          { inciso: 'c', texto: 'Atrofia marcada aislada.' },
          { inciso: 'd', texto: 'Hipotonía flácida con arreflexia.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'El síndrome piramidal se caracteriza por aumento del tono dependiente de velocidad (espasticidad), hiperreflexia y signos patológicos.'
      },
      {
        id: 8,
        pregunta: '¿Qué estructura puede verse comprometida en una mielopatía cervical?',
        opciones: [
          { inciso: 'a', texto: 'Cerebelo exclusivamente.' },
          { inciso: 'b', texto: 'Nervio femoral.' },
          { inciso: 'c', texto: 'Unión neuromuscular.' },
          { inciso: 'd', texto: 'Médula espinal cervical.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'La compresión extrínseca en segmentos como C4-C6 afecta tanto tractos ascendentes como descendentes de la médula cervical.'
      },
      {
        id: 9,
        pregunta: '¿Cuál es una limitación del signo de Hoffmann?',
        opciones: [
          { inciso: 'a', texto: 'Solo puede explorarse en miembros inferiores.' },
          {
            inciso: 'b',
            texto: 'Puede presentarse en algunas personas sin mielopatía y no debe usarse solo.'
          },
          { inciso: 'c', texto: 'Siempre indica una lesión aguda.' },
          { inciso: 'd', texto: 'Es específico de meningitis.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Debido a su sensibilidad y especificidad moderadas, requiere integrarse con síntomas motores, sensitivos y neuroimagen.'
      },
      {
        id: 10,
        pregunta: '¿Qué combinación obliga a investigar compresión medular con mayor atención?',
        opciones: [
          { inciso: 'a', texto: 'Hoffmann positivo aislado sin síntomas.' },
          { inciso: 'b', texto: 'Dolor local de muñeca sin alteración neurológica.' },
          { inciso: 'c', texto: 'Torpeza de manos, alteración de marcha, hiperreflexia y espasticidad.' },
          { inciso: 'd', texto: 'Parestesia transitoria de un dedo después de apoyar el codo.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La tríada clínica de disfunción manual, alteración de la marcha y signos piramidales exige descartar compresión medular cervical.'
      }
    ]
  },
  {
    id: 'eval-tromner',
    titulo: 'Evaluación: Signo de Trömner',
    subtitulo: 'Alternativa piramidal en miembro superior y hernia discal cervical',
    tema: 'Signo de Trömner',
    casoRelacionadoId: 'tromner-mielopatia',
    preguntas: [
      {
        id: 1,
        pregunta: '¿En qué zona se aplica el estímulo para explorar Trömner?',
        opciones: [
          { inciso: 'a', texto: 'Borde medial de la tibia.' },
          { inciso: 'b', texto: 'Cara palmar de la falange distal del dedo medio.' },
          { inciso: 'c', texto: 'Tendón rotuliano.' },
          { inciso: 'd', texto: 'Región inframaleolar lateral.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'A diferencia de Hoffmann (que percute el dorso/uña), Trömner percute o desplaza hacia arriba la cara palmar (volar) de la falange distal del dedo medio.'
      },
      {
        id: 2,
        pregunta: '¿Qué respuesta apoya un Trömner positivo?',
        opciones: [
          { inciso: 'a', texto: 'Flexión involuntaria del pulgar o índice.' },
          { inciso: 'b', texto: 'Extensión del hallux.' },
          { inciso: 'c', texto: 'Dolor al extender la rodilla.' },
          { inciso: 'd', texto: 'Ausencia del reflejo aquíleo.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'El estiramiento rápido de los flexores profundos desencadena flexión refleja involuntaria del pulgar y/o del índice.'
      },
      {
        id: 3,
        pregunta: 'Trömner se considera un signo que puede sugerir alteración de:',
        opciones: [
          { inciso: 'a', texto: 'Nervio facial.' },
          { inciso: 'b', texto: 'Vía auditiva.' },
          { inciso: 'c', texto: 'Tracto corticoespinal.' },
          { inciso: 'd', texto: 'Nervio óptico.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Traduce hiperexcitabilidad segmentaria cervical por disminución del control inhibidor descendente del tracto corticoespinal.'
      },
      {
        id: 4,
        pregunta: '¿Qué combinación clínica es compatible con mielopatía cervical?',
        opciones: [
          { inciso: 'a', texto: 'Diarrea, fiebre y dolor abdominal.' },
          { inciso: 'b', texto: 'Vértigo posicional aislado.' },
          { inciso: 'c', texto: 'Dolor de hombro sin alteraciones neurológicas.' },
          { inciso: 'd', texto: 'Torpeza de manos, marcha inestable e hiperreflexia.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Refleja afectación simultánea de vías motoras en extremidades superiores e inferiores.'
      },
      {
        id: 5,
        pregunta: '¿Qué estudio permite visualizar directamente la médula y una hernia discal compresiva?',
        opciones: [
          { inciso: 'a', texto: 'Resonancia magnética cervical.' },
          { inciso: 'b', texto: 'Radiografía de mano.' },
          { inciso: 'c', texto: 'Tomografía de senos paranasales.' },
          { inciso: 'd', texto: 'Ecocardiograma.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La RM cervical delimita con precisión protrusiones discales centrales (como C5-C6) y el grado de contacto o compresión medular.'
      },
      {
        id: 6,
        pregunta: '¿Cuál enunciado compara correctamente Trömner y Hoffmann?',
        opciones: [
          { inciso: 'a', texto: 'Ambos evalúan exclusivamente meninges.' },
          {
            inciso: 'b',
            texto:
              'Son maniobras distintas de la mano que pueden evidenciar hiperreflexia de vía corticoespinal.'
          },
          { inciso: 'c', texto: 'Ambos se realizan comprimiendo la pantorrilla.' },
          { inciso: 'd', texto: 'Trömner evalúa el nervio óptico y Hoffmann el vestibular.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Cambia el punto de aplicación del estímulo (palmar en Trömner vs. ungueal/dorsal en Hoffmann), pero comparten el mismo arco reflejo piramidal.'
      },
      {
        id: 7,
        pregunta: '¿Qué hallazgo sería menos congruente con lesión de neurona motora superior?',
        opciones: [
          { inciso: 'a', texto: 'Espasticidad.' },
          { inciso: 'b', texto: 'Hiperreflexia.' },
          {
            inciso: 'c',
            texto: 'Hiporreflexia generalizada con atrofia y fasciculaciones como único patrón.'
          },
          { inciso: 'd', texto: 'Clonus.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La hiporreflexia con atrofia marcada y fasciculaciones corresponde a lesión de neurona motora inferior, no superior.'
      },
      {
        id: 8,
        pregunta: '¿Qué fenómeno referido al flexionar el cuello puede aparecer en algunas mielopatías?',
        opciones: [
          { inciso: 'a', texto: 'Signo de Murphy.' },
          { inciso: 'b', texto: 'Signo de Cullen.' },
          { inciso: 'c', texto: 'Signo de Homans.' },
          { inciso: 'd', texto: 'Fenómeno de Lhermitte.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'El fenómeno de Lhermitte es una sensación breve de descarga eléctrica que desciende por la columna o extremidades al flexionar el cuello.'
      },
      {
        id: 9,
        pregunta: '¿Qué debe concluirse ante un Trömner positivo sin otros datos?',
        opciones: [
          { inciso: 'a', texto: 'Se confirma compresión medular.' },
          {
            inciso: 'b',
            texto: 'Es un dato que debe integrarse con la historia y el resto del examen.'
          },
          { inciso: 'c', texto: 'Se confirma una infección meníngea.' },
          { inciso: 'd', texto: 'Se descarta enfermedad del sistema nervioso central.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Todo signo piramidal aislado debe interpretarse dentro del contexto clínico completo.'
      },
      {
        id: 10,
        pregunta: 'En este caso, ¿cuál es el mecanismo anatómico principal del diagnóstico propuesto?',
        opciones: [
          { inciso: 'a', texto: 'Compresión de la médula espinal cervical.' },
          { inciso: 'b', texto: 'Lesión aislada del nervio peroneo.' },
          { inciso: 'c', texto: 'Desmielinización del nervio óptico exclusivamente.' },
          { inciso: 'd', texto: 'Alteración de la placa neuromuscular.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La protrusión discal central en C5-C6 estrecha el canal vertebral y comprime directamente la médula espinal cervical.'
      }
    ]
  },
  {
    id: 'eval-babinski',
    titulo: 'Evaluación: Signo de Babinski',
    subtitulo: 'Respuesta plantar extensora, tracto corticoespinal y protocolo de EVC agudo',
    tema: 'Signo de Babinski',
    casoRelacionadoId: 'babinski-evc',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Cómo se realiza la maniobra clásica de Babinski?',
        opciones: [
          { inciso: 'a', texto: 'Se percute el tendón del bíceps.' },
          { inciso: 'b', texto: 'Se comprime la pantorrilla.' },
          {
            inciso: 'c',
            texto: 'Se estimula el borde lateral de la planta del pie desde el talón hacia delante.'
          },
          { inciso: 'd', texto: 'Se flexiona el cuello del paciente.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'El estímulo romo recorre el borde lateral plantar desde el talón hasta la cabeza de los metatarsianos, curvándose medialmente hacia la base del hallux.'
      },
      {
        id: 2,
        pregunta: '¿Cuál es la respuesta plantar extensora positiva?',
        opciones: [
          { inciso: 'a', texto: 'Flexión plantar de todos los dedos.' },
          {
            inciso: 'b',
            texto: 'Extensión dorsal del dedo gordo, a veces con abanico de los demás dedos.'
          },
          { inciso: 'c', texto: 'Flexión refleja de ambas rodillas.' },
          { inciso: 'd', texto: 'Contracción aislada del cuádriceps.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'La dorsiflexión tónica del primer dedo (hallux) con abducción/abanico de los restantes constituye la respuesta patológica de Babinski.'
      },
      {
        id: 3,
        pregunta: 'En un adulto, un Babinski verdadero sugiere alteración de:',
        opciones: [
          { inciso: 'a', texto: 'Neurona motora superior/vía corticoespinal.' },
          { inciso: 'b', texto: 'Nervio olfatorio.' },
          { inciso: 'c', texto: 'Unión neuromuscular.' },
          { inciso: 'd', texto: 'Nervio radial exclusivamente.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'En adultos, la pérdida del control inhibidor del tracto corticoespinal libera el reflejo nociceptivo extensor medular.'
      },
      {
        id: 4,
        pregunta: '¿Por qué el Babinski puede ser fisiológico en un lactante pequeño?',
        opciones: [
          { inciso: 'a', texto: 'Por lesión medular obligatoria.' },
          { inciso: 'b', texto: 'Por neuropatía diabética.' },
          { inciso: 'c', texto: 'Por ausencia del sistema piramidal.' },
          { inciso: 'd', texto: 'Por inmadurez de la mielinización y del control corticoespinal.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Durante los primeros meses de vida las vías corticoespinales aún no completan su mielinización, por lo que la respuesta extensora puede ser normal hasta alrededor de los 12-24 meses.'
      },
      {
        id: 5,
        pregunta: 'En el caso, la afasia y la hemiparesia derecha orientan a una lesión en:',
        opciones: [
          { inciso: 'a', texto: 'Hemisferio derecho cerebeloso.' },
          { inciso: 'b', texto: 'Hemisferio izquierdo, probablemente territorio de cerebral media.' },
          { inciso: 'c', texto: 'Médula lumbar.' },
          { inciso: 'd', texto: 'Nervio ciático derecho.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'En la mayoría de las personas el lenguaje se lateraliza al hemisferio izquierdo, y el compromiso faciobraquiocrural con afasia es típico de la arteria cerebral media izquierda.'
      },
      {
        id: 6,
        pregunta:
          'Ante un déficit neurológico focal de inicio súbito, ¿qué estudio inicial se realiza habitualmente para descartar hemorragia?',
        opciones: [
          { inciso: 'a', texto: 'Resonancia de rodilla.' },
          { inciso: 'b', texto: 'Radiografía cervical.' },
          { inciso: 'c', texto: 'Tomografía computarizada simple de cráneo.' },
          { inciso: 'd', texto: 'Electromiografía.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La TC simple de cráneo es rápida, accesible y permite diferenciar de inmediato entre un EVC isquémico y uno hemorrágico antes de decidir terapia trombolítica.'
      },
      {
        id: 7,
        pregunta: '¿Qué dato diferencia una respuesta de Babinski de una retirada inespecífica?',
        opciones: [
          { inciso: 'a', texto: 'La dirección inicial de extensión del dedo gordo.' },
          { inciso: 'b', texto: 'La sudoración del pie.' },
          { inciso: 'c', texto: 'La temperatura cutánea.' },
          { inciso: 'd', texto: 'El color de las uñas.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Observar el movimiento inicial del primer dedo (extensión tónica lenta frente a flexión rápida de cadera/rodilla por cosquilleo o dolor) evita falsos positivos.'
      },
      {
        id: 8,
        pregunta:
          '¿Qué vía motora desciende desde la corteza cerebral hacia la médula y se relaciona con Babinski?',
        opciones: [
          { inciso: 'a', texto: 'Vía espinotalámica.' },
          { inciso: 'b', texto: 'Fascículo grácil.' },
          { inciso: 'c', texto: 'Vía vestibuloocular.' },
          { inciso: 'd', texto: 'Tracto corticoespinal.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'El tracto corticoespinal conduce los impulsos motores voluntarios y modula los reflejos segmentarios espinales.'
      },
      {
        id: 9,
        pregunta:
          '¿Cuál de las siguientes situaciones puede producir una respuesta plantar extensora en un adulto?',
        opciones: [
          { inciso: 'a', texto: 'Lesión de la vía corticoespinal por EVC.' },
          { inciso: 'b', texto: 'Rinitis alérgica.' },
          { inciso: 'c', texto: 'Otitis externa.' },
          { inciso: 'd', texto: 'Gastritis.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Cualquier daño estructural o funcional de la vía piramidal (como un EVC isquémico o hemorrágico) puede desencadenar el signo de Babinski.'
      },
      {
        id: 10,
        pregunta: '¿Cuál es la interpretación más correcta del Babinski positivo en el caso?',
        opciones: [
          { inciso: 'a', texto: 'Confirma por sí solo una oclusión de cerebral media.' },
          {
            inciso: 'b',
            texto:
              'Apoya lesión de vía corticoespinal, pero la etiología se determina con el contexto y estudios.'
          },
          { inciso: 'c', texto: 'Demuestra meningitis bacteriana.' },
          { inciso: 'd', texto: 'Es específico de lesión del nervio periférico.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'El signo localiza disfunción de neurona motora superior, pero determinar si es vascular, tumoral o desmielinizante requiere historia clínica y neuroimagen.'
      }
    ]
  },
  {
    id: 'eval-chaddock',
    titulo: 'Evaluación: Signo de Chaddock',
    subtitulo: 'Sucedáneo de Babinski dorsolateral y enfermedad desmielinizante del SNC',
    tema: 'Signo de Chaddock',
    casoRelacionadoId: 'chaddock-desmielinizante',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Dónde se aplica el estímulo para explorar Chaddock?',
        opciones: [
          { inciso: 'a', texto: 'En la cara anterior de la rodilla.' },
          {
            inciso: 'b',
            texto: 'En la región dorsolateral del pie, alrededor y por debajo del maléolo lateral.'
          },
          { inciso: 'c', texto: 'En el tendón de Aquiles exclusivamente.' },
          { inciso: 'd', texto: 'En la palma de la mano.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'El estímulo romo recorre el borde lateral externo del pie, rodeando por debajo al maléolo lateral hacia delante.'
      },
      {
        id: 2,
        pregunta: '¿Qué respuesta representa un Chaddock positivo?',
        opciones: [
          { inciso: 'a', texto: 'Flexión de codo.' },
          { inciso: 'b', texto: 'Abducción del pulgar.' },
          { inciso: 'c', texto: 'Extensión del dedo gordo del pie.' },
          { inciso: 'd', texto: 'Flexión del cuello.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Al igual que en Babinski, la respuesta positiva consiste en la extensión dorsal del hallux (con posible apertura en abanico de los demás dedos).'
      },
      {
        id: 3,
        pregunta: 'Chaddock es una variante de exploración de:',
        opciones: [
          { inciso: 'a', texto: 'La respuesta plantar extensora.' },
          { inciso: 'b', texto: 'El reflejo fotomotor.' },
          { inciso: 'c', texto: 'El reflejo nauseoso.' },
          { inciso: 'd', texto: 'El reflejo aquíleo normal.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Forma parte de los sucedáneos de Babinski destinados a evocar el reflejo extensor patológico desde un territorio cutáneo alternativo.'
      },
      {
        id: 4,
        pregunta: '¿Qué vía se evalúa indirectamente con Chaddock?',
        opciones: [
          { inciso: 'a', texto: 'Corticonuclear exclusivamente.' },
          { inciso: 'b', texto: 'Espinocerebelosa posterior.' },
          { inciso: 'c', texto: 'Lemnisco medial.' },
          { inciso: 'd', texto: 'Corticoespinal.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Evalúa la integridad de la modulación descendente del tracto corticoespinal sobre los circuitos medulares lumbosacros.'
      },
      {
        id: 5,
        pregunta: '¿En qué situación puede ser útil Chaddock?',
        opciones: [
          { inciso: 'a', texto: 'Para medir agudeza visual.' },
          {
            inciso: 'b',
            texto:
              'Cuando se desea buscar respuesta extensora con un estímulo alternativo a la planta del pie.'
          },
          { inciso: 'c', texto: 'Para evaluar audición.' },
          { inciso: 'd', texto: 'Para medir fuerza de prensión.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Resulta especialmente útil cuando la estimulación plantar directa provoca retirada excesiva, cosquilleo o existe lesión plantar.'
      },
      {
        id: 6,
        pregunta: 'En el caso, ¿qué antecedente apoya una enfermedad desmielinizante?',
        opciones: [
          { inciso: 'a', texto: 'Dolor abdominal remoto.' },
          { inciso: 'b', texto: 'Fractura de tobillo.' },
          {
            inciso: 'c',
            texto: 'Episodio previo de pérdida visual dolorosa compatible con neuritis óptica.'
          },
          { inciso: 'd', texto: 'Hipertensión arterial aislada.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La neuritis óptica unilateral dolorosa es una manifestación inicial clásica de enfermedades desmielinizantes como la esclerosis múltiple.'
      },
      {
        id: 7,
        pregunta: '¿Qué patrón temporal puede apoyar esclerosis múltiple?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Episodios neurológicos separados en tiempo y con diferentes localizaciones del SNC.'
          },
          { inciso: 'b', texto: 'Un único dolor muscular de horas.' },
          { inciso: 'c', texto: 'Fiebre aislada después de ejercicio.' },
          { inciso: 'd', texto: 'Parestesia de segundos al comprimir un nervio.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La diseminación en espacio (nervio óptico y médula espinal) y en tiempo (8 meses de diferencia) es el pilar clínico del diagnóstico.'
      },
      {
        id: 8,
        pregunta: '¿Qué estudio es central para evaluar lesiones desmielinizantes del SNC?',
        opciones: [
          { inciso: 'a', texto: 'Radiografía de tórax.' },
          { inciso: 'b', texto: 'Ultrasonido de tiroides.' },
          { inciso: 'c', texto: 'Densitometría ósea.' },
          { inciso: 'd', texto: 'Resonancia magnética de encéfalo y médula.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'La RM con contraste permite demostrar placas desmielinizantes periventriculares, yuxtacorticales, infratentoriales y medulares.'
      },
      {
        id: 9,
        pregunta: '¿Qué afirmación sobre Chaddock es correcta?',
        opciones: [
          { inciso: 'a', texto: 'Un resultado positivo confirma esclerosis múltiple.' },
          {
            inciso: 'b',
            texto:
              'Es equivalente a una respuesta plantar extensora y debe correlacionarse con otros datos.'
          },
          { inciso: 'c', texto: 'Evalúa irritación meníngea.' },
          { inciso: 'd', texto: 'Solo es positivo si duele la rodilla.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Un Chaddock positivo indica disfunción piramidal sin especificar por sí solo la patología subyacente.'
      },
      {
        id: 10,
        pregunta: '¿Qué diferencia principal existe entre Babinski y Chaddock?',
        opciones: [
          { inciso: 'a', texto: 'Babinski se explora en mano y Chaddock en pie.' },
          { inciso: 'b', texto: 'Babinski evalúa meninges y Chaddock el cerebelo.' },
          {
            inciso: 'c',
            texto: 'Usan zonas distintas de estimulación, pero buscan una respuesta extensora del hallux.'
          },
          { inciso: 'd', texto: 'No tienen relación fisiológica.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Babinski estimula el borde lateral plantar y Chaddock el borde dorsolateral inframaleolar, convergiendo ambos en el mismo arco reflejo extensor.'
      }
    ]
  },
  {
    id: 'eval-gordon',
    titulo: 'Evaluación: Signo de Gordon',
    subtitulo: 'Sucedáneo de Babinski por compresión sural y mielopatía torácica',
    tema: 'Signo de Gordon',
    casoRelacionadoId: 'gordon-mielopatia',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Cómo se explora el signo de Gordon?',
        opciones: [
          { inciso: 'a', texto: 'Se comprime la musculatura de la pantorrilla.' },
          { inciso: 'b', texto: 'Se percute la uña del dedo medio.' },
          { inciso: 'c', texto: 'Se flexiona el cuello.' },
          { inciso: 'd', texto: 'Se estimula el borde interno de la mano.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'El examinador comprime firmemente la masa muscular de los gemelos y el sóleo mientras observa la respuesta de los dedos del pie.'
      },
      {
        id: 2,
        pregunta: '¿Qué respuesta corresponde a Gordon positivo?',
        opciones: [
          { inciso: 'a', texto: 'Flexión del pulgar.' },
          { inciso: 'b', texto: 'Extensión del dedo gordo del pie.' },
          { inciso: 'c', texto: 'Dolor cervical.' },
          { inciso: 'd', texto: 'Flexión involuntaria de cadera al flexionar cuello.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'La dorsiflexión del hallux (a menudo con apertura en abanico de los otros dedos) constituye la respuesta extensora positiva.'
      },
      {
        id: 3,
        pregunta: 'Gordon es una maniobra alternativa para buscar:',
        opciones: [
          { inciso: 'a', texto: 'Reflejo corneal.' },
          { inciso: 'b', texto: 'Reflejo mandibular.' },
          { inciso: 'c', texto: 'Respuesta plantar extensora.' },
          { inciso: 'd', texto: 'Reflejo pupilar.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Es un sucedáneo clásico del signo de Babinski que comparte el mismo significado clínico de disfunción corticoespinal.'
      },
      {
        id: 4,
        pregunta: '¿Qué localización sugiere un nivel sensitivo en T8 con paraparesia espástica?',
        opciones: [
          { inciso: 'a', texto: 'Nervio mediano.' },
          { inciso: 'b', texto: 'Corteza occipital.' },
          { inciso: 'c', texto: 'Unión neuromuscular.' },
          { inciso: 'd', texto: 'Médula espinal torácica.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Un nivel sensitivo bien delimitado en el tronco (T8) junto con debilidad espástica de miembros inferiores localiza la lesión a la médula torácica.'
      },
      {
        id: 5,
        pregunta: '¿Qué estudio permite caracterizar una masa que comprime la médula torácica?',
        opciones: [
          { inciso: 'a', texto: 'Resonancia magnética de columna torácica.' },
          { inciso: 'b', texto: 'Electrocardiograma.' },
          { inciso: 'c', texto: 'Radiografía de mano.' },
          { inciso: 'd', texto: 'Audiometría.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La RM de columna torácica con contraste define la ubicación intradural o extradural de la lesión y el grado de compresión medular.'
      },
      {
        id: 6,
        pregunta: '¿Qué característica clínica es típica de un proceso medular compresivo progresivo?',
        opciones: [
          { inciso: 'a', texto: 'Hemorragia nasal aislada.' },
          { inciso: 'b', texto: 'Nivel sensitivo, debilidad espástica y alteraciones esfinterianas.' },
          { inciso: 'c', texto: 'Prurito ocular.' },
          { inciso: 'd', texto: 'Dolor dental.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'La compresión medular progresiva afecta de forma ascendente/descendente las vías sensitivas, corticoespinales y autonómicas vesicales.'
      },
      {
        id: 7,
        pregunta: '¿Qué tumor suele ser intradural extramedular y puede comprimir la médula en adultos?',
        opciones: [
          { inciso: 'a', texto: 'Adenoma hipofisario.' },
          { inciso: 'b', texto: 'Glioblastoma cerebral.' },
          { inciso: 'c', texto: 'Meningioma espinal.' },
          { inciso: 'd', texto: 'Schwannoma vestibular exclusivamente.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Los meningiomas espinales son tumores benignos de crecimiento lento que predominan en la región torácica de mujeres adultas.'
      },
      {
        id: 8,
        pregunta: '¿Por qué es importante la urgencia urinaria en este caso?',
        opciones: [
          { inciso: 'a', texto: 'Porque confirma infección urinaria.' },
          { inciso: 'b', texto: 'Porque descarta mielopatía.' },
          { inciso: 'c', texto: 'Porque es característica de lesión de nervio óptico.' },
          { inciso: 'd', texto: 'Porque puede indicar compromiso medular con vías autonómicas.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Los síntomas esfinterianos traducen afectación de tractos autonómicos medulares y constituyen un dato de alarma para valoración quirúrgica oportuna.'
      },
      {
        id: 9,
        pregunta: '¿Qué interpretación es correcta ante Gordon positivo?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Sugiere respuesta plantar extensora, pero no identifica por sí sola la causa.'
          },
          { inciso: 'b', texto: 'Confirma meningioma.' },
          { inciso: 'c', texto: 'Diagnostica polineuropatía periférica.' },
          { inciso: 'd', texto: 'Excluye lesión del sistema nervioso central.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Como todo sucedáneo piramidal, localiza disfunción de neurona motora superior sin definir su etiología específica.'
      },
      {
        id: 10,
        pregunta: '¿Qué otro hallazgo apoya compromiso de neurona motora superior en el caso?',
        opciones: [
          { inciso: 'a', texto: 'Arreflexia y flacidez.' },
          { inciso: 'b', texto: 'Hiperreflexia y espasticidad.' },
          { inciso: 'c', texto: 'Fasciculaciones aisladas con hipotonía.' },
          { inciso: 'd', texto: 'Miotonía.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'La hiperreflexia osteotendinosa y el incremento espástico del tono son signos cardinales del síndrome de neurona motora superior.'
      }
    ]
  },
  {
    id: 'eval-bing',
    titulo: 'Evaluación: Signo de Bing',
    subtitulo: 'Sucedáneo dorsal del hallux y lesión motora parasagital',
    tema: 'Signo de Bing',
    casoRelacionadoId: 'bing-lesion-parasagital',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Cuál es la maniobra clásica descrita para el signo de Bing?',
        opciones: [
          { inciso: 'a', texto: 'Comprimir la pantorrilla.' },
          { inciso: 'b', texto: 'Percutir el tendón rotuliano.' },
          { inciso: 'c', texto: 'Aplicar un estímulo punzante leve en el dorso del dedo gordo.' },
          { inciso: 'd', texto: 'Flexionar pasivamente el cuello.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La maniobra clásica aplica pequeños estímulos puntiformes suaves y controlados sobre la superficie dorsal del primer dedo o pie.'
      },
      {
        id: 2,
        pregunta: '¿Qué respuesta se considera positiva?',
        opciones: [
          { inciso: 'a', texto: 'Extensión dorsal del hallux.' },
          { inciso: 'b', texto: 'Flexión del codo.' },
          { inciso: 'c', texto: 'Miosis.' },
          { inciso: 'd', texto: 'Abducción del hombro.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La respuesta refleja positiva consiste en la dorsiflexión del dedo gordo del pie.'
      },
      {
        id: 3,
        pregunta: 'El signo de Bing pertenece al grupo de maniobras que buscan:',
        opciones: [
          { inciso: 'a', texto: 'Irritación meníngea.' },
          { inciso: 'b', texto: 'Alteración vestibular.' },
          { inciso: 'c', texto: 'Denervación periférica.' },
          { inciso: 'd', texto: 'Respuesta plantar extensora.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Es un sucedáneo histórico del signo de Babinski empleado para evidenciar liberación piramidal.'
      },
      {
        id: 4,
        pregunta: '¿Cuál es una característica práctica del signo de Bing?',
        opciones: [
          { inciso: 'a', texto: 'Es la prueba de elección en todo paciente.' },
          { inciso: 'b', texto: 'Es una maniobra histórica y poco utilizada actualmente.' },
          { inciso: 'c', texto: 'Se realiza con flexión del cuello.' },
          { inciso: 'd', texto: 'Es específico de meningitis.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'En la práctica clínica moderna se prefieren Babinski, Chaddock o Gordon debido a que son más reproducibles y menos molestos.'
      },
      {
        id: 5,
        pregunta: 'En el caso, ¿qué área cortical explica mejor la debilidad predominante de la pierna?',
        opciones: [
          { inciso: 'a', texto: 'Giro temporal superior.' },
          { inciso: 'b', texto: 'Corteza visual primaria.' },
          { inciso: 'c', texto: 'Región medial del lóbulo frontal (lobulillo paracentral).' },
          { inciso: 'd', texto: 'Corteza gustativa.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'En el homúnculo motor primario, la representación de la extremidad inferior se ubica en la cara medial del giro precentral (lobulillo paracentral).'
      },
      {
        id: 6,
        pregunta:
          '¿Qué relación anatómica explica que una lesión frontal izquierda afecte la pierna derecha?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Las fibras corticoespinales cruzan principalmente en la decusación piramidal para controlar el lado contralateral.'
          },
          { inciso: 'b', texto: 'El nervio óptico cruza en el quiasma.' },
          { inciso: 'c', texto: 'El cerebelo controla solo el mismo lado en toda su extensión.' },
          { inciso: 'd', texto: 'La médula lumbar recibe fibras del nervio facial.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Alrededor del 85-90 % de las fibras del tracto corticoespinal decusan en el bulbo raquídeo hacia el cordón lateral opuesto.'
      },
      {
        id: 7,
        pregunta: 'Las sacudidas involuntarias breves del pie derecho pueden corresponder a:',
        opciones: [
          { inciso: 'a', texto: 'Crisis focales motoras.' },
          { inciso: 'b', texto: 'Crisis de ausencia típicas obligatoriamente.' },
          { inciso: 'c', texto: 'Síncope vasovagal.' },
          { inciso: 'd', texto: 'Temblor fisiológico por frío.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La irritación cortical por una masa parasagital puede desencadenar crisis epilépticas focales motoras en el segmento corporal correspondiente.'
      },
      {
        id: 8,
        pregunta: '¿Qué estudio caracteriza mejor una lesión parasagital cerebral?',
        opciones: [
          { inciso: 'a', texto: 'Radiografía de cráneo como prueba definitiva.' },
          { inciso: 'b', texto: 'Ultrasonido Doppler de piernas.' },
          { inciso: 'c', texto: 'Punción lumbar como primer estudio.' },
          { inciso: 'd', texto: 'Resonancia magnética cerebral con contraste.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'La RM con gadolinio permite evaluar masas extraaxiales, el signo de la cola dural y el efecto de masa sobre la corteza motora.'
      },
      {
        id: 9,
        pregunta: '¿Cuál es la interpretación más segura de un Bing positivo?',
        opciones: [
          { inciso: 'a', texto: 'Confirma por sí mismo un meningioma.' },
          {
            inciso: 'b',
            texto: 'Sugiere una respuesta plantar extensora y debe correlacionarse con otros hallazgos.'
          },
          { inciso: 'c', texto: 'Confirma una lesión del nervio peroneo.' },
          { inciso: 'd', texto: 'Descarta una lesión cerebral.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Orienta a compromiso de neurona motora superior y debe integrarse con la exploración completa y la neuroimagen.'
      },
      {
        id: 10,
        pregunta: '¿Qué precaución debe tenerse al realizar esta maniobra?',
        opciones: [
          { inciso: 'a', texto: 'Aplicar presión intensa hasta provocar sangrado.' },
          { inciso: 'b', texto: 'Repetirla hasta producir dolor intenso.' },
          { inciso: 'c', texto: 'Usar un estímulo leve y controlado, sin lesionar la piel.' },
          { inciso: 'd', texto: 'Realizarla únicamente con el paciente de pie.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Debe evitarse cualquier estimulación traumática, dolorosa o lesiva sobre el dorso del pie.'
      }
    ]
  },
  {
    id: 'eval-kernig',
    titulo: 'Evaluación: Signo de Kernig',
    subtitulo: 'Irritación meníngea y abordaje de meningitis bacteriana aguda',
    tema: 'Signo de Kernig',
    casoRelacionadoId: 'kernig-meningitis',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Cómo se realiza la maniobra de Kernig?',
        opciones: [
          { inciso: 'a', texto: 'Se percute la uña del dedo medio.' },
          { inciso: 'b', texto: 'Se estimula el borde lateral del pie.' },
          { inciso: 'c', texto: 'Se flexionan cadera y rodilla y después se intenta extender la rodilla.' },
          { inciso: 'd', texto: 'Se comprime la pantorrilla.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Con el paciente en decúbito supino y cadera/rodilla flexionadas a 90°, se intenta extender pasivamente la pierna.'
      },
      {
        id: 2,
        pregunta: '¿Qué constituye un Kernig positivo?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Dolor o resistencia al extender pasivamente la rodilla con la cadera flexionada.'
          },
          { inciso: 'b', texto: 'Extensión aislada del dedo gordo.' },
          { inciso: 'c', texto: 'Flexión involuntaria del pulgar.' },
          { inciso: 'd', texto: 'Ausencia del reflejo rotuliano.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La tracción de las raíces lumbosacras inflamadas provoca dolor y espasmo protector de los músculos isquiotibiales que frena la extensión.'
      },
      {
        id: 3,
        pregunta: '¿Qué proceso evalúa principalmente el signo de Kernig?',
        opciones: [
          { inciso: 'a', texto: 'Lesión de neurona motora inferior.' },
          { inciso: 'b', texto: 'Irritación meníngea.' },
          { inciso: 'c', texto: 'Lesión del nervio radial.' },
          { inciso: 'd', texto: 'Disfunción cerebelosa.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Evalúa la inflamación o irritación de las meninges y raíces nerviosas lumbosacras (presente en meningitis o hemorragia subaracnoidea).'
      },
      {
        id: 4,
        pregunta: '¿Cuál es la interpretación correcta de un Kernig negativo?',
        opciones: [
          { inciso: 'a', texto: 'Excluye por completo meningitis.' },
          { inciso: 'b', texto: 'Confirma infección viral.' },
          { inciso: 'c', texto: 'Descarta hemorragia subaracnoidea.' },
          { inciso: 'd', texto: 'No descarta meningitis, porque su sensibilidad es limitada.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Los signos meníngeos clásicos tienen baja sensibilidad; su ausencia nunca debe excluir el diagnóstico ante sospecha clínica.'
      },
      {
        id: 5,
        pregunta: '¿Qué patrón de LCR es clásico de meningitis bacteriana?',
        opciones: [
          { inciso: 'a', texto: 'Glucosa elevada, proteínas bajas y ausencia de células.' },
          { inciso: 'b', texto: 'Predominio de eosinófilos siempre.' },
          { inciso: 'c', texto: 'Neutrofilia, proteínas elevadas y glucosa disminuida.' },
          { inciso: 'd', texto: 'Solo eritrocitos sin leucocitos.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La meningitis bacteriana aguda cursa típicamente con pleocitosis polimorfonuclear, hiperproteinorraquia e hipoglucorraquia.'
      },
      {
        id: 6,
        pregunta: 'En el caso, ¿qué microorganismo se identifica en el LCR?',
        opciones: [
          { inciso: 'a', texto: 'Streptococcus pneumoniae.' },
          { inciso: 'b', texto: 'Candida albicans.' },
          { inciso: 'c', texto: 'Plasmodium falciparum.' },
          { inciso: 'd', texto: 'Giardia lamblia.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'El neumococo (diplococo grampositivo) es uno de los principales agentes etiológicos de meningitis bacteriana aguda en adultos jóvenes.'
      },
      {
        id: 7,
        pregunta:
          'Ante sospecha alta de meningitis bacteriana, ¿qué principio de manejo es correcto?',
        opciones: [
          { inciso: 'a', texto: 'Esperar varios días la confirmación del cultivo antes de tratar.' },
          { inciso: 'b', texto: 'No administrar tratamiento si Kernig es negativo.' },
          { inciso: 'c', texto: 'Dar únicamente analgésicos.' },
          {
            inciso: 'd',
            texto:
              'Iniciar tratamiento empírico oportuno según protocolo, sin retrasarlo por estudios no indispensables.'
          }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'La meningitis bacteriana es una emergencia neurológica; el retraso en iniciar antibióticos empeora el pronóstico y la mortalidad.'
      },
      {
        id: 8,
        pregunta: '¿Qué otro signo clásico busca irritación meníngea mediante flexión pasiva del cuello?',
        opciones: [
          { inciso: 'a', texto: 'Chvostek.' },
          { inciso: 'b', texto: 'Brudzinski.' },
          { inciso: 'c', texto: 'Tinel.' },
          { inciso: 'd', texto: 'Phalen.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'El signo de Brudzinski consiste en la flexión involuntaria de caderas y rodillas al flexionar pasivamente el cuello del paciente.'
      },
      {
        id: 9,
        pregunta:
          '¿Qué dato podría hacer necesaria una evaluación adicional antes de realizar punción lumbar?',
        opciones: [
          { inciso: 'a', texto: 'Fotofobia aislada.' },
          { inciso: 'b', texto: 'Fiebre sin otros síntomas.' },
          {
            inciso: 'c',
            texto:
              'Déficit neurológico focal, papiledema o deterioro importante del estado de conciencia, según contexto y protocolo.'
          },
          { inciso: 'd', texto: 'Edad de 22 años por sí sola.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Estos datos sugieren hipertensión intracraneal o lesión ocupante de espacio, por lo que se indica TC craneal previa para evitar herniación cerebral.'
      },
      {
        id: 10,
        pregunta: '¿Cuál es la afirmación más precisa sobre Kernig?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Es un signo de irritación meníngea, no identifica por sí solo el microorganismo causal.'
          },
          { inciso: 'b', texto: 'Es un signo patognomónico de neumococo.' },
          { inciso: 'c', texto: 'Evalúa directamente el tracto corticoespinal.' },
          { inciso: 'd', texto: 'Un resultado positivo demuestra siempre meningitis bacteriana.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Kernig detecta irritación meníngea de cualquier causa (infecciosa o hemorrágica); el agente causal se establece mediante análisis microbiológico del LCR.'
      }
    ]
  },
  {
    id: 'eval-romberg',
    titulo: 'Evaluación: Signo de Romberg',
    subtitulo: 'Equilibrio, propiocepción consciente y degeneración combinada subaguda',
    tema: 'Signo de Romberg',
    casoRelacionadoId: 'romberg-b12',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Cuál es la respuesta que define un Romberg positivo clásico?',
        opciones: [
          { inciso: 'a', texto: 'El paciente pierde el equilibrio únicamente con los ojos abiertos.' },
          { inciso: 'b', texto: 'Mantiene la postura con ojos abiertos y pierde estabilidad al cerrarlos.' },
          { inciso: 'c', texto: 'Presenta temblor de reposo al cerrar los ojos.' },
          { inciso: 'd', texto: 'No puede flexionar las rodillas durante la maniobra.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'El signo de Romberg evalúa la dependencia visual para compensar un déficit propioceptivo o vestibular; por ello, el desequilibrio aparece o se acentúa claramente al cerrar los ojos.'
      },
      {
        id: 2,
        pregunta: '¿Qué vía sensitiva participa de manera fundamental en la propiocepción consciente?',
        opciones: [
          { inciso: 'a', texto: 'Cordones posteriores y lemnisco medial.' },
          { inciso: 'b', texto: 'Tracto corticoespinal lateral.' },
          { inciso: 'c', texto: 'Tracto espinotalámico anterior exclusivamente.' },
          { inciso: 'd', texto: 'Fascículo longitudinal medial.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Los fascículos grácil y cuneiforme (cordones posteriores) conducen la sensibilidad vibratoria y la propiocepción consciente hacia el lemnisco medial y el tálamo.'
      },
      {
        id: 3,
        pregunta: '¿Qué función se elimina al pedir al paciente que cierre los ojos?',
        opciones: [
          { inciso: 'a', texto: 'La sensibilidad vibratoria.' },
          { inciso: 'b', texto: 'La función vestibular.' },
          { inciso: 'c', texto: 'La compensación visual para mantener el equilibrio.' },
          { inciso: 'd', texto: 'La fuerza muscular antigravitatoria.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La bipedestación estable depende de tres aferencias (visión, propiocepción y sistema vestibular); cerrar los ojos suprime la aferencia visual compensatoria.'
      },
      {
        id: 4,
        pregunta: '¿Qué patrón es más característico de una ataxia cerebelosa manifiesta?',
        opciones: [
          { inciso: 'a', texto: 'Inestabilidad solo al cerrar los ojos.' },
          { inciso: 'b', texto: 'Pérdida aislada de vibración sin alteración de coordinación.' },
          { inciso: 'c', texto: 'Equilibrio completamente normal con ojos abiertos.' },
          {
            inciso: 'd',
            texto: 'Inestabilidad que puede estar presente tanto con ojos abiertos como cerrados.'
          }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'A diferencia de la ataxia sensitiva, el paciente cerebeloso presenta inestabilidad postural y ampliación de la base de sustentación incluso con los ojos abiertos.'
      },
      {
        id: 5,
        pregunta: '¿Cuál es la secuencia adecuada para realizar la prueba?',
        opciones: [
          { inciso: 'a', texto: 'Paciente sentado, ojos cerrados desde el inicio y empuje brusco.' },
          {
            inciso: 'b',
            texto:
              'Pies juntos; observar primero con ojos abiertos y después cerrados, protegiendo al paciente.'
          },
          { inciso: 'c', texto: 'Marcha en línea recta con los ojos vendados.' },
          { inciso: 'd', texto: 'Paciente en decúbito, con flexión pasiva de cadera.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Primero se verifica que el paciente pueda sostenerse con los ojos abiertos y los pies juntos, y luego se pide cerrar los ojos durante 20-30 segundos con el examinador listo para sujetarlo.'
      },
      {
        id: 6,
        pregunta: 'En el caso presentado, ¿qué mecanismo explica mejor el hallazgo?',
        opciones: [
          { inciso: 'a', texto: 'Alteración propioceptiva por compromiso de cordones posteriores.' },
          { inciso: 'b', texto: 'Lesión aislada del nervio facial.' },
          { inciso: 'c', texto: 'Hiperactividad del sistema extrapiramidal.' },
          { inciso: 'd', texto: 'Debilidad primaria de músculos extraoculares.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La deficiencia de vitamina B12 produce desmielinización de los cordones posteriores de la médula espinal, generando ataxia sensitiva.'
      },
      {
        id: 7,
        pregunta: '¿Qué dato clínico apoya especialmente la deficiencia de vitamina B12?',
        opciones: [
          { inciso: 'a', texto: 'Hipercalcemia y leucocitosis.' },
          { inciso: 'b', texto: 'Hiponatremia aislada.' },
          { inciso: 'c', texto: 'Macrocitosis y concentración sérica baja de B12.' },
          { inciso: 'd', texto: 'Elevación aislada de troponina.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La anemia megaloblástica con volumen corpuscular medio elevado (VCM 110 fL), B12 sérica baja (82 pg/mL) y ácido metilmalónico elevado confirman el déficit de cobalamina.'
      },
      {
        id: 8,
        pregunta:
          'Además de la enfermedad de cordones posteriores, ¿qué otro sistema puede generar un Romberg positivo?',
        opciones: [
          { inciso: 'a', texto: 'Sistema olfatorio.' },
          { inciso: 'b', texto: 'Sistema motor de la primera motoneurona de forma aislada.' },
          { inciso: 'c', texto: 'Sistema visual exclusivamente.' },
          { inciso: 'd', texto: 'Sistema vestibular, cuando existe disfunción no compensada.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Una vestibulopatía periférica o central no compensada también puede producir oscilación o caída lateral al suprimir la referencia visual.'
      },
      {
        id: 9,
        pregunta: '¿Qué modalidades sensitivas conviene evaluar en este paciente?',
        opciones: [
          { inciso: 'a', texto: 'Sentido de posición articular y vibración.' },
          { inciso: 'b', texto: 'Olfato y gusto.' },
          { inciso: 'c', texto: 'Agudeza visual y visión cromática únicamente.' },
          { inciso: 'd', texto: 'Reflejo corneal exclusivamente.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La batiestesia (sentido de posición articular) y la palestesia (sensibilidad vibratoria con diapasón de 128 Hz) exploran directamente la integridad de los cordones posteriores.'
      },
      {
        id: 10,
        pregunta: '¿Cuál es la interpretación más adecuada de un Romberg positivo aislado?',
        opciones: [
          { inciso: 'a', texto: 'Confirma esclerosis múltiple.' },
          {
            inciso: 'b',
            texto:
              'Orienta a un problema de integración sensitiva/vestibular, pero requiere correlación clínica.'
          },
          { inciso: 'c', texto: 'Confirma una lesión cerebelosa hemisférica.' },
          { inciso: 'd', texto: 'Demuestra una miopatía primaria.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'El signo localiza disfunción en las vías propioceptivas o vestibulares, pero su etiología (déficit de B12, tabes dorsal, polineuropatía sensitiva) requiere historia clínica y estudios.'
      }
    ]
  },
  {
    id: 'eval-pendulares',
    titulo: 'Evaluación: Reflejos pendulares',
    subtitulo: 'Hipotonía cerebelosa, amortiguación antagonista y degeneración vermiana',
    tema: 'Reflejos pendulares',
    casoRelacionadoId: 'pendulares-cerebeloso',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Cómo se explora de forma clásica el reflejo rotuliano pendular?',
        opciones: [
          { inciso: 'a', texto: 'Paciente en decúbito con rodilla bloqueada.' },
          { inciso: 'b', texto: 'Paciente de pie sobre una sola pierna.' },
          {
            inciso: 'c',
            texto: 'Paciente sentado, piernas relajadas y colgando, con percusión del tendón rotuliano.'
          },
          { inciso: 'd', texto: 'Paciente en decúbito prono con percusión del tendón aquíleo.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Dejar las piernas colgando libremente al borde de la camilla permite observar sin fricción el número de oscilaciones posteriores al golpe rotuliano.'
      },
      {
        id: 2,
        pregunta: '¿Qué hallazgo caracteriza una respuesta pendular?',
        opciones: [
          { inciso: 'a', texto: 'Oscilaciones repetidas de la pierna después de la percusión.' },
          { inciso: 'b', texto: 'Ausencia completa de toda contracción muscular.' },
          { inciso: 'c', texto: 'Flexión plantar sostenida del pie.' },
          { inciso: 'd', texto: 'Contracción repetitiva de los músculos faciales.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'En lugar de detenerse tras una única fase de extensión-flexión, la pierna oscila varias veces hacia adelante y atrás como un péndulo.'
      },
      {
        id: 3,
        pregunta: '¿Cuál es el mecanismo fisiológico más relacionado con este hallazgo?',
        opciones: [
          { inciso: 'a', texto: 'Espasticidad intensa.' },
          { inciso: 'b', texto: 'Hiperactividad de la motoneurona alfa.' },
          { inciso: 'c', texto: 'Lesión aislada de la unión neuromuscular.' },
          {
            inciso: 'd',
            texto: 'Hipotonía con menor amortiguación de la oscilación por los músculos antagonistas.'
          }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'La hipotonía cerebelosa reduce el tono postural y retrasa el freno reflejo de los músculos isquiotibiales antagonistas tras la extensión del cuádriceps.'
      },
      {
        id: 4,
        pregunta: '¿Con qué sistema se asocia clásicamente el reflejo pendular?',
        opciones: [
          { inciso: 'a', texto: 'Sistema límbico.' },
          { inciso: 'b', texto: 'Cerebelo.' },
          { inciso: 'c', texto: 'Nervio óptico.' },
          { inciso: 'd', texto: 'Corteza auditiva primaria.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Es un signo clásico de hipotonía asociada a síndromes cerebelosos o pancerebelosos.'
      },
      {
        id: 5,
        pregunta: '¿Qué raíces participan principalmente en el reflejo rotuliano?',
        opciones: [
          { inciso: 'a', texto: 'C5-C6.' },
          { inciso: 'b', texto: 'S1-S2.' },
          { inciso: 'c', texto: 'L3-L4.' },
          { inciso: 'd', texto: 'T10-T12.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'El reflejo patelar o rotuliano está mediado por el nervio femoral y los segmentos medulares lumbares L2-L4 (principalmente L3-L4).'
      },
      {
        id: 6,
        pregunta: '¿Qué conjunto de hallazgos apoya un síndrome cerebeloso en el caso descrito?',
        opciones: [
          { inciso: 'a', texto: 'Afasia, hemianopsia y anestesia facial.' },
          { inciso: 'b', texto: 'Rigidez en rueda dentada y temblor de reposo aislados.' },
          { inciso: 'c', texto: 'Hipoestesia en guante y calcetín sin alteración de coordinación.' },
          { inciso: 'd', texto: 'Dismetría, disdiadococinesia y marcha de base amplia.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'La ataxia de la marcha con base amplia, dismetría, descomposición de movimientos alternantes, disartria escandida e hipotonía conforman el síndrome cerebeloso.'
      },
      {
        id: 7,
        pregunta: '¿Cuál es una interpretación correcta del reflejo pendular?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Puede apoyar hipotonía cerebelosa, pero no establece por sí solo la causa.'
          },
          { inciso: 'b', texto: 'Confirma siempre una lesión de nervio periférico.' },
          { inciso: 'c', texto: 'Es diagnóstico específico de esclerosis lateral amiotrófica.' },
          { inciso: 'd', texto: 'Es equivalente a una respuesta plantar extensora.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Orienta hacia hipotonía de origen cerebeloso, pero determinar la etiología requiere historia clínica, perfil nutricional y neuroimagen.'
      },
      {
        id: 8,
        pregunta: 'En una lesión cerebelosa pura, ¿qué hallazgo sensitivo sería menos esperado?',
        opciones: [
          { inciso: 'a', texto: 'Propiocepción conservada.' },
          {
            inciso: 'b',
            texto: 'Pérdida marcada de vibración por lesión primaria de cordones posteriores.'
          },
          { inciso: 'c', texto: 'Sensibilidad superficial conservada.' },
          { inciso: 'd', texto: 'Ausencia de un nivel sensitivo medular.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'La ataxia cerebelosa pura cursa sin déficit sensitivo primario; la pérdida marcada de vibración sugiere compromiso de cordones posteriores o neuropatía.'
      },
      {
        id: 9,
        pregunta: 'En el contexto clínico presentado, ¿qué antecedente apoya la etiología propuesta?',
        opciones: [
          { inciso: 'a', texto: 'Exposición reciente a ruido intenso.' },
          { inciso: 'b', texto: 'Cirugía oftalmológica previa.' },
          { inciso: 'c', texto: 'Consumo crónico y elevado de alcohol.' },
          { inciso: 'd', texto: 'Alergia estacional.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'El etilismo crónico y las deficiencias nutricionales asociadas (como tiamina) son causas frecuentes de degeneración del vermis cerebeloso superior.'
      },
      {
        id: 10,
        pregunta: '¿Qué hallazgo NO debe confundirse con el reflejo pendular?',
        opciones: [
          { inciso: 'a', texto: 'Una respuesta rotuliana breve y amortiguada.' },
          { inciso: 'b', texto: 'Hipotonía de una extremidad.' },
          { inciso: 'c', texto: 'Dismetría en talón-rodilla.' },
          { inciso: 'd', texto: 'Clonus sostenido por hiperreflexia.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'El clonus consiste en contracciones rítmicas involuntarias sostenidas por hiperexcitabilidad piramidal, mientras que el reflejo pendular es una oscilación pasiva por hipotonía.'
      }
    ]
  },
  {
    id: 'eval-holmes',
    titulo: 'Evaluación: Signo de Holmes (Stewart-Holmes)',
    subtitulo: 'Fenómeno de rebote cerebeloso e infarto de circulación posterior',
    tema: 'Signo de Holmes',
    casoRelacionadoId: 'holmes-infarto-cerebeloso',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Qué evalúa principalmente el fenómeno de rebote de Stewart-Holmes?',
        opciones: [
          { inciso: 'a', texto: 'La sensibilidad termoalgésica.' },
          { inciso: 'b', texto: 'La capacidad cerebelosa para frenar y regular el movimiento.' },
          { inciso: 'c', texto: 'La función del nervio olfatorio.' },
          { inciso: 'd', texto: 'La fuerza de los músculos faciales.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Evalúa el control cerebeloso de verificación y frenado rápido mediante la activación coordinada de los músculos antagonistas.'
      },
      {
        id: 2,
        pregunta: '¿Qué respuesta sugiere alteración cerebelosa durante la maniobra?',
        opciones: [
          { inciso: 'a', texto: 'El movimiento se detiene de inmediato y con precisión.' },
          { inciso: 'b', texto: 'Se produce una respuesta pupilar bilateral.' },
          { inciso: 'c', texto: 'Aparece una respuesta plantar flexora.' },
          { inciso: 'd', texto: 'El miembro continúa o sobrepasa el movimiento al retirar la resistencia.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Al fallar el freno oportuno del tríceps (antagonista), la flexión del bíceps continúa bruscamente hacia el hombro o el tórax.'
      },
      {
        id: 3,
        pregunta: '¿Qué precaución debe tomar el examinador?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Proteger el rostro y el cuerpo del paciente ante el movimiento no frenado.'
          },
          { inciso: 'b', texto: 'Retirar ambas manos y alejarse.' },
          { inciso: 'c', texto: 'Realizar la prueba con el paciente de pie y sin apoyo.' },
          { inciso: 'd', texto: 'Aplicar dolor intenso para provocar la respuesta.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'El examinador debe interponer su brazo o mano libre entre el puño del paciente y su cara/tórax para evitar un traumatismo por el rebote.'
      },
      {
        id: 4,
        pregunta:
          'En condiciones normales, ¿qué permite detener el movimiento al retirar la resistencia?',
        opciones: [
          { inciso: 'a', texto: 'La contracción del músculo agonista exclusivamente.' },
          { inciso: 'b', texto: 'La inhibición permanente de todos los músculos.' },
          { inciso: 'c', texto: 'El ajuste oportuno de los músculos antagonistas.' },
          { inciso: 'd', texto: 'La pérdida de información propioceptiva.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'El cerebelo coordina la relajación rápida del agonista (bíceps) y la contracción inmediata del antagonista (tríceps) para frenar la extremidad.'
      },
      {
        id: 5,
        pregunta:
          '¿Qué estructura participa de manera central en el control de la coordinación y del frenado del movimiento?',
        opciones: [
          { inciso: 'a', texto: 'Hipocampo.' },
          { inciso: 'b', texto: 'Cerebelo.' },
          { inciso: 'c', texto: 'Quiasma óptico.' },
          { inciso: 'd', texto: 'Núcleo caudado de forma aislada.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'El cerebelo regula la sinergia, métrica y temporización entre músculos agonistas y antagonistas durante los movimientos voluntarios.'
      },
      {
        id: 6,
        pregunta: '¿Qué otros hallazgos son congruentes con disfunción cerebelosa?',
        opciones: [
          { inciso: 'a', texto: 'Afasia de Broca y hemianopsia homónima.' },
          { inciso: 'b', texto: 'Parálisis flácida aislada y anestesia completa.' },
          { inciso: 'c', texto: 'Rigidez en rueda dentada y bradicinesia aisladas.' },
          { inciso: 'd', texto: 'Dismetría y disdiadococinesia.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'La incapacidad para calcular distancias (dismetría) y para ejecutar movimientos alternantes rápidos (disdiadococinesia) son signos cardinales cerebelosos.'
      },
      {
        id: 7,
        pregunta: '¿Qué nombre se usa con frecuencia para esta maniobra?',
        opciones: [
          { inciso: 'a', texto: 'Fenómeno de rebote de Stewart-Holmes.' },
          { inciso: 'b', texto: 'Signo de Babinski.' },
          { inciso: 'c', texto: 'Reflejo palmomentoniano.' },
          { inciso: 'd', texto: 'Prueba de Kernig.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'En semiología neurológica se conoce indistintamente como signo de Holmes o fenómeno de rebote de Stewart-Holmes.'
      },
      {
        id: 8,
        pregunta:
          'En una lesión hemisférica cerebelosa, ¿en qué lado suelen predominar los signos de coordinación?',
        opciones: [
          { inciso: 'a', texto: 'Siempre en el lado contrario.' },
          { inciso: 'b', texto: 'En ambos lados por igual, obligatoriamente.' },
          { inciso: 'c', texto: 'En el mismo lado de la lesión.' },
          { inciso: 'd', texto: 'Solo en los músculos del cuello.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Debido a la doble decusación de las vías cerebelosas eferentes, las lesiones de un hemisferio cerebeloso producen ataxia y dismetría ipsilaterales.'
      },
      {
        id: 9,
        pregunta:
          'Por el inicio súbito y los factores de riesgo vascular del caso, ¿cuál es la prioridad clínica?',
        opciones: [
          { inciso: 'a', texto: 'Solicitar únicamente electromiografía.' },
          {
            inciso: 'b',
            texto: 'Activar evaluación urgente de evento vascular cerebral e indicar neuroimagen.'
          },
          { inciso: 'c', texto: 'Dar de alta si conserva fuerza muscular.' },
          { inciso: 'd', texto: 'Posponer los estudios hasta que desaparezca el vértigo.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Un síndrome cerebeloso agudo en un paciente con HTA y diabetes es un infarto de circulación posterior hasta demostrar lo contrario y requiere protocolo de ictus inmediato.'
      },
      {
        id: 10,
        pregunta: '¿Cuál es la limitación principal del signo de Holmes?',
        opciones: [
          { inciso: 'a', texto: 'No puede explorarse en extremidades superiores.' },
          { inciso: 'b', texto: 'Solo es válido en lactantes.' },
          { inciso: 'c', texto: 'Evalúa exclusivamente la sensibilidad vibratoria.' },
          {
            inciso: 'd',
            texto: 'Apoya disfunción cerebelosa, pero no determina por sí solo la etiología.'
          }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Identifica alteración en el control cerebeloso del movimiento, pero no distingue entre isquemia, hemorragia, tumor o desmielinización sin neuroimagen.'
      }
    ]
  },
  {
    id: 'eval-palmomentoniano',
    titulo: 'Evaluación: Reflejo palmomentoniano (palmomental)',
    subtitulo: 'Reflejos de liberación frontal y demencia frontotemporal variante conductual',
    tema: 'Reflejo palmomentoniano',
    casoRelacionadoId: 'palmomentoniano-dft',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Cómo se obtiene el reflejo palmomentoniano?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Se estimula la eminencia tenar y se observa la contracción del mentón.'
          },
          { inciso: 'b', texto: 'Se percute el tendón rotuliano.' },
          { inciso: 'c', texto: 'Se estimula el borde lateral de la planta del pie.' },
          { inciso: 'd', texto: 'Se golpea repetidamente la glabela.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'El estímulo romo desde proximal hacia distal sobre la eminencia tenar desencadena una contracción breve de los músculos del mentón del mismo lado.'
      },
      {
        id: 2,
        pregunta: '¿Qué músculo produce la respuesta visible del mentón?',
        opciones: [
          { inciso: 'a', texto: 'Masetero.' },
          { inciso: 'b', texto: 'Orbicular de los ojos.' },
          { inciso: 'c', texto: 'Mentoniano (mentalis).' },
          { inciso: 'd', texto: 'Esternocleidomastoideo.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'El músculo mentoniano (inervado por el nervio facial, VII par) eleva y arruga la piel de la barbilla al contraerse.'
      },
      {
        id: 3,
        pregunta: '¿Cómo se clasifica este reflejo en el adulto?',
        opciones: [
          { inciso: 'a', texto: 'Reflejo osteotendinoso profundo.' },
          { inciso: 'b', texto: 'Reflejo primitivo o de liberación frontal.' },
          { inciso: 'c', texto: 'Reflejo miotático inverso.' },
          { inciso: 'd', texto: 'Reflejo vestibuloocular.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Es un reflejo arcaico normalmente inhibido por la corteza frontal madura que puede reaparecer ante disfunción de los lóbulos frontales.'
      },
      {
        id: 4,
        pregunta: '¿Cuál es una limitación importante del reflejo palmomentoniano?',
        opciones: [
          { inciso: 'a', texto: 'Solo puede aparecer en niños.' },
          { inciso: 'b', texto: 'Es específico de una lesión del nervio facial.' },
          { inciso: 'c', texto: 'Siempre indica una lesión tumoral frontal.' },
          {
            inciso: 'd',
            texto: 'Puede presentarse en adultos mayores sin enfermedad neurológica.'
          }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Puede hallarse de forma leve y aislada en un porcentaje significativo de adultos mayores sanos, por lo que carece de especificidad diagnóstica por sí solo.'
      },
      {
        id: 5,
        pregunta: '¿Qué patrón aumenta la sospecha de disfunción frontal?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Reflejo bilateral y vivo, acompañado de otros signos de liberación frontal.'
          },
          { inciso: 'b', texto: 'Reflejo aislado, débil y sin síntomas.' },
          { inciso: 'c', texto: 'Reflejo aquíleo disminuido de forma aislada.' },
          { inciso: 'd', texto: 'Reflejo pupilar fotomotor conservado.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Cuando es persistente, vivo, bilateral y coexiste con otros reflejos atávicos (prensión, hociqueo, glabelar) y síndrome disejecutivo, adquiere valor clínico.'
      },
      {
        id: 6,
        pregunta:
          '¿Con qué trastorno puede observarse con mayor frecuencia dentro de los síndromes neurodegenerativos?',
        opciones: [
          { inciso: 'a', texto: 'Neuralgia del trigémino.' },
          { inciso: 'b', texto: 'Miastenia gravis.' },
          { inciso: 'c', texto: 'Demencia frontotemporal.' },
          { inciso: 'd', texto: 'Neuropatía cubital.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La degeneración lobular frontotemporal compromete precozmente los circuitos prefrontales inhibidores, favoreciendo la aparición de signos de liberación frontal.'
      },
      {
        id: 7,
        pregunta:
          '¿Qué función cerebral se relaciona con la interpretación de un reflejo de liberación frontal?',
        opciones: [
          { inciso: 'a', texto: 'Audición periférica.' },
          { inciso: 'b', texto: 'Control inhibitorio cortical de respuestas motoras primitivas.' },
          { inciso: 'c', texto: 'Sensibilidad térmica del pie.' },
          { inciso: 'd', texto: 'Reflejo de estiramiento del cuádriceps.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'La corteza prefrontal ejerce modulación inhibitoria tónica sobre arcos reflejos subcorticales presentes en etapas tempranas del desarrollo.'
      },
      {
        id: 8,
        pregunta:
          '¿Qué conjunto de síntomas respalda una variante conductual de demencia frontotemporal?',
        opciones: [
          { inciso: 'a', texto: 'Vértigo episódico y nistagmo posicional.' },
          { inciso: 'b', texto: 'Pérdida de fuerza distal con fasciculaciones.' },
          { inciso: 'c', texto: 'Dolor radicular y parestesias dermatomales.' },
          {
            inciso: 'd',
            texto: 'Desinhibición, pérdida de empatía y deterioro ejecutivo progresivo.'
          }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Los cambios de personalidad, apatía, desinhibición, pérdida de empatía, conductas estereotipadas y disfunción ejecutiva definen el perfil clínico de esta entidad.'
      },
      {
        id: 9,
        pregunta: '¿Cuál es el enfoque más adecuado ante un palmomentoniano positivo?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Integrarlo con historia, cognición, otros signos y neuroimagen cuando esté indicada.'
          },
          { inciso: 'b', texto: 'Diagnosticar demencia de manera automática.' },
          { inciso: 'c', texto: 'Iniciar tratamiento dopaminérgico sin evaluación.' },
          { inciso: 'd', texto: 'Considerarlo equivalente a Babinski.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Nunca establece un diagnóstico aislado; debe correlacionarse con la entrevista al informante, pruebas neuropsicológicas y resonancia cerebral.'
      },
      {
        id: 10,
        pregunta: '¿En qué se diferencia de la respuesta de Babinski?',
        opciones: [
          { inciso: 'a', texto: 'Ambos son reflejos pupilares.' },
          { inciso: 'b', texto: 'Babinski produce contracción del mentón.' },
          {
            inciso: 'c',
            texto:
              'Babinski es una respuesta plantar extensora; el palmomentoniano produce contracción del mentón.'
          },
          { inciso: 'd', texto: 'El palmomentoniano se explora en el tendón rotuliano.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Babinski evalúa integridad de la vía corticoespinal mediante extensión del hallux, mientras que el palmomentoniano explora liberación frontal mediante contracción mentoniana.'
      }
    ]
  },
  {
    id: 'eval-myerson',
    titulo: 'Evaluación: Signo de Myerson',
    subtitulo: 'Reflejo glabelar inagotable y síndrome parkinsoniano',
    tema: 'Signo de Myerson',
    casoRelacionadoId: 'myerson-parkinson',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Cómo se explora el signo de Myerson?',
        opciones: [
          { inciso: 'a', texto: 'Se comprime la pantorrilla.' },
          { inciso: 'b', texto: 'Se percute repetidamente la glabela y se observa el parpadeo.' },
          { inciso: 'c', texto: 'Se estimula la eminencia tenar.' },
          { inciso: 'd', texto: 'Se flexiona pasivamente la cadera.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Se aplican golpecitos suaves y rítmicos sobre la glabela (entrecejo) observando si el reflejo orbicular de los párpados se extingue o persiste.'
      },
      {
        id: 2,
        pregunta:
          '¿Qué ocurre normalmente con el reflejo de parpadeo ante estímulos glabelares repetidos?',
        opciones: [
          { inciso: 'a', texto: 'Aumenta de manera indefinida.' },
          { inciso: 'b', texto: 'Se transforma en una respuesta plantar.' },
          { inciso: 'c', texto: 'Produce contracción del mentón.' },
          {
            inciso: 'd',
            texto: 'Se habitúa y disminuye después de las primeras percusiones.'
          }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'En sujetos sanos, la respuesta de parpadeo se habitúa tras los primeros 3 a 5 estímulos y cesa por completo.'
      },
      {
        id: 3,
        pregunta: '¿Qué respuesta define el signo de Myerson?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Parpadeo persistente sin habituación ante percusiones repetidas.'
          },
          { inciso: 'b', texto: 'Ausencia completa de parpadeo desde el primer estímulo.' },
          { inciso: 'c', texto: 'Miosis sostenida.' },
          { inciso: 'd', texto: 'Nistagmo horizontal.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La persistencia sincrónica del parpadeo tras 10 o más percusiones glabelares consecutivas define la falta de habituación característica.'
      },
      {
        id: 4,
        pregunta: '¿Con qué trastornos se ha asociado el signo de Myerson?',
        opciones: [
          { inciso: 'a', texto: 'Exclusivamente con neuropatía periférica.' },
          { inciso: 'b', texto: 'Solo con enfermedad cerebelosa.' },
          {
            inciso: 'c',
            texto:
              'Enfermedad de Parkinson y otros trastornos parkinsonianos o frontotemporales.'
          },
          { inciso: 'd', texto: 'Exclusivamente con meningitis bacteriana.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Aunque es clásico en la enfermedad de Parkinson, también se presenta en parkinsonismos atípicos y síndromes de deterioro frontal difuso.'
      },
      {
        id: 5,
        pregunta: '¿Cuál es una afirmación correcta sobre su valor diagnóstico?',
        opciones: [
          { inciso: 'a', texto: 'Confirma por sí solo enfermedad de Parkinson.' },
          {
            inciso: 'b',
            texto: 'Es un dato complementario y no debe interpretarse de forma aislada.'
          },
          { inciso: 'c', texto: 'Excluye parkinsonismos atípicos.' },
          { inciso: 'd', texto: 'Sustituye la evaluación de bradicinesia.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Carece de especificidad absoluta para distinguir entre enfermedad de Parkinson idiopática y otros trastornos neurodegenerativos.'
      },
      {
        id: 6,
        pregunta: 'Según la definición clínica de parkinsonismo, ¿qué combinación es esencial?',
        opciones: [
          { inciso: 'a', texto: 'Temblor postural y ataxia.' },
          { inciso: 'b', texto: 'Hipotonía y arreflexia.' },
          { inciso: 'c', texto: 'Nistagmo y dismetría.' },
          { inciso: 'd', texto: 'Bradicinesia más temblor de reposo o rigidez.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Según los criterios clínicos actuales (MDS), la bradicinesia es el requisito indispensable, acompañada de rigidez muscular y/o temblor de reposo.'
      },
      {
        id: 7,
        pregunta: '¿Qué técnica ayuda a evitar que el paciente anticipe visualmente el golpe?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Percutir desde arriba o fuera de su campo visual directo, sin amenaza visual.'
          },
          { inciso: 'b', texto: 'Pedirle que mire fijamente el martillo.' },
          { inciso: 'c', texto: 'Realizar el golpe frente a sus ojos.' },
          { inciso: 'd', texto: 'Cerrar manualmente los párpados.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Aproximar el dedo desde la frente superior evita desencadenar el reflejo visual de amenaza, que provocaría parpadeo voluntario o defensivo.'
      },
      {
        id: 8,
        pregunta:
          '¿Cuál de las siguientes enfermedades puede formar parte del diagnóstico diferencial de un Myerson positivo?',
        opciones: [
          { inciso: 'a', texto: 'Síndrome de Guillain-Barré.' },
          { inciso: 'b', texto: 'Miopatía inflamatoria.' },
          { inciso: 'c', texto: 'Parálisis supranuclear progresiva.' },
          { inciso: 'd', texto: 'Radiculopatía lumbar.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La parálisis supranuclear progresiva (PSP) cursa con parkinsonismo axial y signos de liberación frontal, incluyendo reflejo glabelar inagotable.'
      },
      {
        id: 9,
        pregunta: '¿Qué significa que el parpadeo no se habitúe?',
        opciones: [
          { inciso: 'a', texto: 'Que el nervio óptico está necesariamente lesionado.' },
          {
            inciso: 'b',
            texto: 'Que persiste una respuesta refleja ante estímulos repetidos.'
          },
          { inciso: 'c', texto: 'Que existe una lesión medular lumbar.' },
          { inciso: 'd', texto: 'Que hay pérdida de sensibilidad profunda.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Traduce una falla en los mecanismos inhibitorios centrales encargados de suprimir respuestas reflejas repetitivas e irrelevantes.'
      },
      {
        id: 10,
        pregunta:
          'En el caso clínico, ¿qué hallazgos son más importantes para sustentar el síndrome parkinsoniano?',
        opciones: [
          { inciso: 'a', texto: 'Reflejo palmomentoniano y Babinski.' },
          { inciso: 'b', texto: 'Ataxia y dismetría.' },
          { inciso: 'c', texto: 'Hiporreflexia y pérdida propioceptiva.' },
          { inciso: 'd', texto: 'Bradicinesia, rigidez y temblor de reposo.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'La tríada motora asimétrica (bradicinesia con decremento, rigidez en rueda dentada y temblor de reposo) constituye el núcleo diagnóstico del cuadro.'
      }
    ]
  },
  {
    id: 'eval-gowers',
    titulo: 'Evaluación: Signo de Gowers',
    subtitulo: 'Debilidad muscular proximal y distrofia muscular de Duchenne',
    tema: 'Signo de Gowers',
    casoRelacionadoId: 'gowers-duchenne',
    preguntas: [
      {
        id: 1,
        pregunta: '¿Qué describe el signo de Gowers?',
        opciones: [
          { inciso: 'a', texto: 'Extensión involuntaria del dedo gordo del pie.' },
          { inciso: 'b', texto: 'Parpadeo persistente ante percusión glabelar.' },
          {
            inciso: 'c',
            texto: "Uso de las manos para 'trepar' por los muslos al levantarse del suelo."
          },
          { inciso: 'd', texto: 'Pérdida del equilibrio al cerrar los ojos.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'El paciente compensa la debilidad de cadera y muslo apoyando las manos en el piso y escalando progresivamente por sus rodillas y muslos para erguir el tronco.'
      },
      {
        id: 2,
        pregunta: '¿Qué grupo muscular suele estar debilitado y explica la maniobra?',
        opciones: [
          {
            inciso: 'a',
            texto: 'Musculatura proximal de cintura pélvica y extensores de cadera.'
          },
          { inciso: 'b', texto: 'Músculos intrínsecos de la mano.' },
          { inciso: 'c', texto: 'Músculos extraoculares.' },
          { inciso: 'd', texto: 'Músculos de la masticación exclusivamente.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'La debilidad de los glúteos (extensores de cadera) y del cuádriceps impide incorporar el tronco directamente desde el suelo sin ayuda de los brazos.'
      },
      {
        id: 3,
        pregunta: '¿Con qué enfermedad se asocia clásicamente en un niño pequeño?',
        opciones: [
          { inciso: 'a', texto: 'Esclerosis múltiple.' },
          { inciso: 'b', texto: 'Enfermedad de Parkinson.' },
          { inciso: 'c', texto: 'Ataxia de Friedreich exclusivamente.' },
          { inciso: 'd', texto: 'Distrofia muscular de Duchenne.' }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Es un hallazgo semiológico emblemático en varones preescolares con distrofia muscular de Duchenne antes de perder la capacidad de marcha.'
      },
      {
        id: 4,
        pregunta: '¿Qué explica la pseudohipertrofia de las pantorrillas en Duchenne?',
        opciones: [
          { inciso: 'a', texto: 'Aumento de fibras musculares funcionales.' },
          { inciso: 'b', texto: 'Reemplazo de músculo por tejido adiposo y conectivo.' },
          { inciso: 'c', texto: 'Edema por insuficiencia venosa como mecanismo típico.' },
          { inciso: 'd', texto: 'Hipertrofia por entrenamiento deportivo.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'La necrosis crónica de fibras musculares es sustituida por infiltración fibrograsa, dando un aspecto voluminoso pero con fuerza reducida.'
      },
      {
        id: 5,
        pregunta:
          '¿Qué estudio de laboratorio es útil como prueba inicial ante sospecha de una distrofia muscular?',
        opciones: [
          { inciso: 'a', texto: 'Troponina ultrasensible.' },
          { inciso: 'b', texto: 'Bilirrubina indirecta.' },
          { inciso: 'c', texto: 'Creatina cinasa sérica.' },
          { inciso: 'd', texto: 'Amilasa pancreática.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'La creatina cinasa (CK) sérica suele elevarse de 10 a 100 veces por encima del límite normal debido a la fragilidad del sarcolema y rabdomiólisis crónica.'
      },
      {
        id: 6,
        pregunta: '¿Qué gen está alterado en la distrofia muscular de Duchenne?',
        opciones: [
          { inciso: 'a', texto: 'DMD, que codifica distrofina.' },
          { inciso: 'b', texto: 'HTT, que codifica huntingtina.' },
          { inciso: 'c', texto: 'PMP22, relacionado con algunas neuropatías hereditarias.' },
          { inciso: 'd', texto: 'GBA, asociado a enfermedad de Gaucher.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Mutaciones fuera del marco de lectura en el gen DMD (Xp21) provocan ausencia casi total de distrofina en la membrana de la fibra muscular.'
      },
      {
        id: 7,
        pregunta: '¿Qué patrón de inicio es congruente con Duchenne?',
        opciones: [
          { inciso: 'a', texto: 'Inicio súbito en la edad adulta.' },
          { inciso: 'b', texto: 'Debilidad distal aislada después de los 60 años.' },
          { inciso: 'c', texto: 'Pérdida sensitiva como primer síntoma.' },
          {
            inciso: 'd',
            texto: 'Dificultades motoras en la primera infancia, con retraso de hitos motores.'
          }
        ],
        respuestaCorrecta: 'd',
        retroalimentacion:
          'Suele manifestarse entre los 2 y 5 años con retraso para caminar, incapacidad para saltar o correr, caídas frecuentes y dificultad para subir escaleras.'
      },
      {
        id: 8,
        pregunta: '¿Qué otra entidad puede producir un signo de Gowers positivo?',
        opciones: [
          { inciso: 'a', texto: 'Migraña con aura.' },
          {
            inciso: 'b',
            texto: 'Distrofias musculares de cinturas y otras miopatías proximales.'
          },
          { inciso: 'c', texto: 'Conjuntivitis viral.' },
          { inciso: 'd', texto: 'Hipoacusia neurosensorial.' }
        ],
        respuestaCorrecta: 'b',
        retroalimentacion:
          'Cualquier patología que cause debilidad marcada de la cintura pélvica (distrofia de Becker, distrofias de cinturas, polimiositis, atrofia muscular espinal) puede producirlo.'
      },
      {
        id: 9,
        pregunta: 'En una miopatía primaria como Duchenne, ¿qué hallazgo suele conservarse?',
        opciones: [
          { inciso: 'a', texto: 'El sentido del olfato exclusivamente.' },
          { inciso: 'b', texto: 'La visión cromática exclusivamente.' },
          { inciso: 'c', texto: 'La sensibilidad superficial y profunda.' },
          { inciso: 'd', texto: 'El reflejo fotomotor exclusivamente.' }
        ],
        respuestaCorrecta: 'c',
        retroalimentacion:
          'Dado que la alteración reside exclusivamente en la fibra muscular y no en los nervios periféricos ni vías espinales, la sensibilidad permanece intacta.'
      },
      {
        id: 10,
        pregunta: '¿Cuál es la interpretación más precisa del signo de Gowers?',
        opciones: [
          {
            inciso: 'a',
            texto:
              'Indica debilidad muscular proximal, pero no identifica por sí solo una enfermedad específica.'
          },
          { inciso: 'b', texto: 'Confirma de manera aislada una mutación en DMD.' },
          { inciso: 'c', texto: 'Demuestra una lesión de cordones posteriores.' },
          { inciso: 'd', texto: 'Es una prueba específica de lesión del cerebelo.' }
        ],
        respuestaCorrecta: 'a',
        retroalimentacion:
          'Localiza el déficit motor en la musculatura proximal de miembros inferiores y cintura pélvica, requiriendo enzimas musculares y estudio genético para el diagnóstico definitivo.'
      }
    ]
  }
];
