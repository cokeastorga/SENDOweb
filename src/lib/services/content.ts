export interface ServiceFAQ {
  pregunta: string;
  respuesta: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string;
  heroVideo: string;
  icon: string;
  content: string;
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "cuidadoras-a-domicilio-santiago",
    title: "Cuidadoras a Domicilio en Santiago | SENDO Enfermería",
    metaDescription: "Servicio profesional de cuidadoras a domicilio en todo Santiago. Atención integral 24/7, acompañamiento y bienestar para el adulto mayor. Cotiza sin compromiso.",
    keywords: "cuidadoras a domicilio santiago, cuidado adulto mayor, cuidadoras 24 horas, cuidadoras de enfermo santiago, acompañamiento adulto mayor",
    heroVideo: "cuidado",
    icon: "👩‍⚕️",
    relatedSlugs: ["auxiliar-enfermeria-turnos-12-24-horas", "telemedicina-consulta-medica-online", "cuidado-adulto-mayor-santiago"],
    content: `
      <p class="text-lg text-gray-600 mb-6">En <strong>SENDO Enfermería</strong> entendemos que confiar el cuidado de un ser querido a una tercera persona es una decisión compleja. Por eso, desde 2007, ofrecemos un servicio de <strong>cuidadoras a domicilio en Santiago</strong> rigurosamente seleccionadas, capacitadas y con verdadera vocación de servicio.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">¿Qué incluye nuestro servicio de cuidadoras?</h2>
      <p class="text-gray-600 mb-4">Nuestras cuidadoras profesionales se integran a la dinámica familiar para proporcionar un cuidado seguro y respetuoso. Sus labores principales incluyen:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Aseo y confort:</strong> Baño en cama o ducha, lubricación de la piel y prevención de escaras.</li>
        <li><strong>Apoyo en la alimentación:</strong> Asistencia en las comidas, respetando dietas y texturas indicadas.</li>
        <li><strong>Control de medicamentos:</strong> Administración de fármacos vía oral según prescripción médica (horarios y dosis exactas).</li>
        <li><strong>Movilización y prevención de caídas:</strong> Asistencia para levantarse, caminar o uso de silla de ruedas.</li>
        <li><strong>Acompañamiento y estimulación:</strong> Conversación, paseos (si la condición lo permite) y estimulación cognitiva básica para evitar la soledad.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">¿Por qué elegir las cuidadoras de SENDO?</h2>
      <p class="text-gray-600 mb-6">El mercado laboral en Chile es amplio, pero la seguridad no es transable. A diferencia de contratar personal de manera informal, SENDO te garantiza <strong>tranquilidad total</strong>. Verificamos los antecedentes, realizamos pruebas psicológicas y comprobamos las referencias de cada una de nuestras cuidadoras. Además, ante cualquier eventualidad o licencia médica, <strong>garantizamos un reemplazo oportuno</strong> para que tu familiar nunca quede solo.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Modalidades adaptadas a tu familia</h2>
      <p class="text-gray-600 mb-6">Sabemos que cada hogar tiene necesidades diferentes. Ofrecemos <strong>turnos de 12 horas</strong> (diurnos o nocturnos) para brindar respiro a la familia, o <strong>cobertura 24/7</strong> mediante un sistema de turnos rotativos para pacientes que requieren asistencia ininterrumpida. Llegamos a <strong>todas las comunas de Santiago</strong> (Las Condes, Providencia, Ñuñoa, Maipú, La Florida, Quilicura, etc.).</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">¿Buscas una cuidadora de confianza en Santiago?</p>
        <p class="text-green-700 mt-2">Déjanos ayudarte. Solicita una <a href="/#contacto" class="underline font-bold">cotización sin compromiso</a> y evaluaremos juntos el perfil ideal para tu familiar.</p>
      </div>
    `,
    faqs: [
      {
        pregunta: "¿Qué pasa si la cuidadora se enferma o no puede ir?",
        respuesta: "En SENDO garantizamos la continuidad del servicio. Si una cuidadora presenta licencia o un imprevisto, coordinamos un reemplazo a la brevedad para asegurar que el paciente no quede sin asistencia."
      },
      {
        pregunta: "¿Las cuidadoras pueden poner inyecciones?",
        respuesta: "No. Las cuidadoras administran medicamentos solo por vía oral. Si el paciente requiere inyecciones, sueros o sondas, debe contratar el servicio de Técnico en Enfermería (TENS) o Enfermera."
      },
      {
        pregunta: "¿Cubren mi comuna?",
        respuesta: "Sí, nuestras cuidadoras prestan servicio en todas las comunas de la Región Metropolitana (Santiago Centro, Sector Oriente, Norte, Sur y Poniente)."
      }
    ]
  },
  {
    slug: "enfermeria-a-domicilio-santiago",
    title: "Enfermería a Domicilio en Santiago | SENDO",
    metaDescription: "Procedimientos de enfermería a domicilio en Santiago. Instalación de sueros, sondas, curaciones y manejo clínico por profesionales certificados.",
    keywords: "enfermeria a domicilio santiago, enfermera a domicilio, curaciones a domicilio, instalacion suero domicilio, sonda foley santiago",
    heroVideo: "suero",
    icon: "🧪",
    relatedSlugs: ["auxiliar-enfermeria-turnos-12-24-horas", "cuidados-postoperatorios-domicilio", "telemedicina-consulta-medica-online"],
    content: `
      <p class="text-lg text-gray-600 mb-6">El servicio de <strong>enfermería a domicilio en Santiago</strong> de SENDO está diseñado para pacientes que requieren procedimientos clínicos complejos sin la necesidad de acudir a un centro hospitalario. Llevamos la clínica a tu hogar, reduciendo el riesgo de infecciones intrahospitalarias y mejorando el confort del paciente.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Procedimientos Clínicos en Casa</h2>
      <p class="text-gray-600 mb-4">Nuestro equipo de Técnicos en Enfermería de Nivel Superior (TENS) y Enfermeras Universitarias (EU) está capacitado para realizar una amplia gama de procedimientos bajo estricto rigor clínico:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Manejo de vías venosas:</strong> Instalación de sueroterapia, administración de antibióticos endovenosos y extracción de sangre.</li>
        <li><strong>Manejo de sondas:</strong> Instalación y cambio de sonda Foley (urinaria) y sonda nasogástrica.</li>
        <li><strong>Curaciones avanzadas:</strong> Tratamiento de escaras (úlceras por presión), pie diabético, heridas quirúrgicas y quemaduras.</li>
        <li><strong>Manejo de ostomías:</strong> Cuidado y educación sobre colostomías y gastrostomías.</li>
        <li><strong>Terapia respiratoria:</strong> Aspiración de secreciones y manejo de oxígeno.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Profesionales Certificados y Seguros</h2>
      <p class="text-gray-600 mb-6">Todos los procedimientos invasivos conllevan un riesgo, por lo que la expertise del profesional es vital. En SENDO, exigimos que todo nuestro personal clínico esté <strong>inscrito en el Registro Nacional de Prestadores Individuales de Salud</strong> de la Superintendencia de Salud de Chile. Validamos sus títulos y experiencia clínica previa para asegurar que tu familiar esté en las mejores manos posibles.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Evita Traslados Innecesarios</h2>
      <p class="text-gray-600 mb-6">Para un adulto mayor o un paciente recién operado, el simple hecho de subir a un auto para ir a un control o a cambiarse una venda puede ser doloroso y agotador. Nuestro servicio de enfermería domiciliaria elimina ese estrés. Realizamos la visita programada en la comodidad de tu hogar, abarcando <strong>todas las comunas de Santiago</strong>, con todos los insumos necesarios para garantizar un procedimiento estéril y seguro.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">¿Necesitas un procedimiento de enfermería en casa?</p>
        <p class="text-green-700 mt-2">No expongas a tu familiar. <a href="/#contacto" class="underline font-bold">Agenda una visita clínica</a> con nuestras enfermeras y TENS en Santiago.</p>
      </div>
    `,
    faqs: [
      {
        pregunta: "¿Traen los insumos médicos necesarios?",
        respuesta: "Podemos proveer los insumos médicos estándar (guantes, gasas, sueros, jeringas) incluyéndolos en la cotización, o bien utilizar los insumos que la familia ya haya adquirido."
      },
      {
        pregunta: "¿Realizan administración de medicamentos endovenosos?",
        respuesta: "Sí, nuestras enfermeras y TENS administran tratamientos endovenosos (como antibióticos), siempre y cuando exista una receta e indicación médica clara y vigente."
      },
      {
        pregunta: "¿El servicio está disponible fines de semana?",
        respuesta: "Sí, coordinamos visitas para procedimientos de enfermería todos los días del año, incluyendo fines de semana y días festivos."
      }
    ]
  },
  {
    slug: "auxiliar-enfermeria-turnos-12-24-horas",
    title: "Auxiliares de Enfermería Turnos 12 y 24 Horas | SENDO",
    metaDescription: "Auxiliares de enfermería (TENS) en Santiago. Cobertura en turnos de 12 y 24 horas para pacientes que requieren cuidado clínico continuo y monitorización.",
    keywords: "auxiliar enfermeria santiago, TENS a domicilio, turnos 12 horas enfermeria, turnos 24 horas adulto mayor, cuidado pacientes complejos",
    heroVideo: "medidorpresion",
    icon: "🕐",
    relatedSlugs: ["cuidadoras-a-domicilio-santiago", "enfermeria-a-domicilio-santiago", "cuidados-postoperatorios-domicilio"],
    content: `
      <p class="text-lg text-gray-600 mb-6">Cuando la condición de un paciente requiere más que solo compañía y asistencia básica, es necesario escalar el nivel de cuidado. Nuestro servicio de <strong>Auxiliares de Enfermería (TENS) en turnos de 12 y 24 horas en Santiago</strong> está diseñado para pacientes con dependencia severa, patologías crónicas complejas o cuidados paliativos que requieren vigilancia clínica continua.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">¿Por qué contratar una TENS para turnos?</h2>
      <p class="text-gray-600 mb-4">A diferencia de una cuidadora tradicional, un Técnico en Enfermería de Nivel Superior (TENS) tiene la formación clínica para adelantarse a las complicaciones. Este servicio incluye:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Monitorización constante:</strong> Control riguroso de signos vitales (presión arterial, saturación, frecuencia cardíaca, glicemia capilar).</li>
        <li><strong>Manejo de pacientes postrados:</strong> Prevención activa de úlceras por presión y manejo de escaras grado 1 y 2.</li>
        <li><strong>Nutrición clínica:</strong> Administración de alimentación por sonda (gastrostomía o sonda nasogástrica).</li>
        <li><strong>Administración farmacológica compleja:</strong> Medicación intramuscular, subcutánea y manejo de dispositivos médicos.</li>
        <li><strong>Reacción ante emergencias:</strong> Capacidad técnica para identificar descompensaciones tempranas y aplicar primeros auxilios mientras se contacta a servicios de urgencia.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Cobertura en Turnos Diurnos, Nocturnos o 24/7</h2>
      <p class="text-gray-600 mb-6">El cuidado de un paciente altamente dependiente agota rápidamente a la familia (el conocido "burnout" del cuidador). Ofrecemos <strong>turnos de 12 horas diurnos</strong> para que puedas trabajar con tranquilidad, o <strong>turnos de 12 horas nocturnos</strong> para asegurar el descanso de la familia mientras la TENS vigila el sueño y las necesidades del paciente. Para casos críticos, organizamos un sistema de <strong>turnos rotativos 24/7</strong> para asegurar que el paciente jamás quede sin supervisión clínica.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Supervisión y Registro Clínico</h2>
      <p class="text-gray-600 mb-6">Nuestro personal en turno mantiene una hoja de registro clínico diaria (bitácora) donde se anotan signos vitales, deposiciones, ingesta y eventos relevantes. Esta bitácora es fundamental para que el médico tratante evalúe la evolución del paciente durante sus visitas o a través de nuestro servicio de <strong>telemedicina</strong>.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">Asegura un cuidado clínico profesional y continuo</p>
        <p class="text-green-700 mt-2">El bienestar de tu familiar no puede improvisarse. <a href="/#contacto" class="underline font-bold">Solicita una cotización</a> para turnos de auxiliares de enfermería (TENS) en todo Santiago.</p>
      </div>
    `,
    faqs: [
      {
        pregunta: "¿Qué diferencia hay entre este servicio y una cuidadora normal?",
        respuesta: "La auxiliar (TENS) tiene un título técnico superior en salud, lo que le permite realizar procedimientos invasivos (inyecciones, manejo de sondas, control clínico estricto), mientras que la cuidadora se enfoca en asistencia básica (aseo, compañía, alimentación oral)."
      },
      {
        pregunta: "¿Cómo funcionan los turnos de 24 horas?",
        respuesta: "Para cobertura 24/7 se asigna un equipo de profesionales (generalmente 2 o 3) que se van rotando en turnos de 12 o 24 horas para garantizar descanso legal del trabajador y atención ininterrumpida para el paciente."
      },
      {
        pregunta: "¿El personal lleva uniforme?",
        respuesta: "Sí, todo nuestro personal clínico asiste al domicilio debidamente uniformado y con su credencial de identificación de SENDO Enfermería."
      }
    ]
  },
  {
    slug: "telemedicina-consulta-medica-online",
    title: "Telemedicina y Consultas Médicas Online en Chile | SENDO",
    metaDescription: "Consultas médicas por telemedicina para adultos mayores. Médico online en Chile para evaluación, recetas electrónicas y seguimiento. Sin salir de casa.",
    keywords: "telemedicina chile, consulta medica online, medico a domicilio santiago, receta medica online chile, geriatra online",
    heroVideo: "abuela_computador",
    icon: "💻",
    relatedSlugs: ["cuidado-adulto-mayor-santiago", "cuidadoras-a-domicilio-santiago", "auxiliar-enfermeria-turnos-12-24-horas"],
    content: `
      <p class="text-lg text-gray-600 mb-6">Mover a un adulto mayor con movilidad reducida o dolor hacia un centro médico puede ser una odisea que empeora su condición. En SENDO hemos integrado un servicio de <strong>Telemedicina y Consulta Médica Online</strong> pensado específicamente para acercar la salud al hogar, combinando la tecnología con nuestro cuidado presencial.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Atención Médica Inmediata desde tu Computador o Celular</h2>
      <p class="text-gray-600 mb-4">Nuestro servicio de telemedicina permite conectar a tu familiar con un médico certificado a través de una videollamada segura. Durante la consulta, el médico puede:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li>Evaluar síntomas nuevos (fiebre, dolor, cambios de ánimo).</li>
        <li>Controlar y ajustar tratamientos de enfermedades crónicas (hipertensión, diabetes, hipotiroidismo).</li>
        <li>Evaluar exámenes de laboratorio previos.</li>
        <li>Emitir <strong>Recetas Electrónicas</strong> (válidas en todas las farmacias de Chile) para medicamentos de uso continuo.</li>
        <li>Emitir órdenes médicas para exámenes a domicilio o derivaciones.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">El Valor Agregado: Coordinación Médico-Cuidadora</h2>
      <p class="text-gray-600 mb-6">Si ya cuentas con una cuidadora o TENS de SENDO en el domicilio, la telemedicina alcanza su máximo potencial. <strong>Nuestro médico interactúa directamente con nuestra profesional en terreno</strong>. La TENS toma los signos vitales exactos en vivo, enfoca heridas si es necesario, y recibe las nuevas indicaciones médicas para ejecutarlas de inmediato (por ejemplo, cambiar la dosis de un medicamento). Es como tener una clínica completa en la habitación.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">¿Para quién está recomendada la telemedicina?</h2>
      <p class="text-gray-600 mb-6">Es la solución ideal para consultas de morbilidad baja (resfríos, molestias urinarias, dolores musculares), controles geriátricos de rutina, renovación de recetas crónicas, y pacientes psiquiátricos o con demencia donde sacarlos de su entorno genera crisis de agitación. Ahorras tiempo, estrés, gastos de traslado y proteges al adulto mayor de virus presentes en las salas de espera.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">La salud de tu familiar a un clic de distancia</p>
        <p class="text-green-700 mt-2">Agenda hoy mismo una <a href="/#contacto" class="underline font-bold">consulta médica online</a> y resuelve tus dudas de salud sin moverte de casa.</p>
      </div>
    `,
    faqs: [
      {
        pregunta: "¿Cómo funciona la receta electrónica?",
        respuesta: "El médico genera la receta en un sistema certificado. Te llegará un PDF a tu correo o WhatsApp, el cual puedes presentar desde tu celular en cualquier farmacia física del país o usar para compras online."
      },
      {
        pregunta: "¿El médico puede dar licencias médicas?",
        respuesta: "La emisión de licencias médicas por telemedicina depende del criterio clínico del médico tras la evaluación, y se rige por las normativas vigentes del Ministerio de Salud (COMPIN/SUSESO)."
      },
      {
        pregunta: "¿Qué pasa si el médico determina que es una urgencia?",
        respuesta: "Si durante la videollamada el médico detecta que el paciente cursa un cuadro grave (ej. sospecha de infarto o ACV), indicará el traslado inmediato al servicio de urgencias más cercano."
      }
    ]
  },
  {
    slug: "cuidado-adulto-mayor-santiago",
    title: "Cuidado del Adulto Mayor en Santiago | SENDO",
    metaDescription: "Especialistas en cuidado integral del adulto mayor en Santiago. Acompañamiento, estimulación cognitiva y prevención del deterioro en la tercera edad.",
    keywords: "cuidado adulto mayor santiago, cuidado ancianos domicilio, estimulacion cognitiva adulto mayor, acompañamiento tercera edad santiago",
    heroVideo: "terapia",
    icon: "🧠",
    relatedSlugs: ["cuidadoras-a-domicilio-santiago", "telemedicina-consulta-medica-online", "cuidados-postoperatorios-domicilio"],
    content: `
      <p class="text-lg text-gray-600 mb-6">El envejecimiento no debe ser sinónimo de soledad o deterioro inactivo. En SENDO ofrecemos un servicio integral de <strong>Cuidado del Adulto Mayor a Domicilio en Santiago</strong> enfocado no solo en la asistencia física, sino en promover la salud mental, la dignidad y la autonomía remanente de la persona.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Acompañamiento y Prevención de la Soledad</h2>
      <p class="text-gray-600 mb-4">La soledad es uno de los mayores factores de riesgo para la depresión y el deterioro cognitivo acelerado en la tercera edad. Nuestras cuidadoras están entrenadas para brindar un acompañamiento activo y significativo:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Conversación activa:</strong> Fomento de la reminiscencia (recordar el pasado) que fortalece la identidad.</li>
        <li><strong>Lectura guiada:</strong> Lectura de diarios, libros o revistas de interés del paciente.</li>
        <li><strong>Acompañamiento en paseos:</strong> Caminatas seguras por el parque o el barrio para mantener el tono muscular y la absorción de vitamina D.</li>
        <li><strong>Apoyo en hobbies:</strong> Fomento de actividades placenteras como jardinería suave, tejido o música.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Estimulación Cognitiva en Casa</h2>
      <p class="text-gray-600 mb-6">Para pacientes con principio de Alzheimer, demencia senil o simplemente como método preventivo, incorporamos rutinas de <strong>estimulación cognitiva básica</strong>. A través de puzles, juegos de mesa, clasificación de objetos, sopa de letras y musicoterapia, ayudamos a mantener activas las redes neuronales, retrasando el avance del deterioro y mejorando el ánimo general.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Respeto por la Autonomía (El Método SENDO)</h2>
      <p class="text-gray-600 mb-6">Un error común en el cuidado es la sobreprotección, es decir, "hacer todo por el paciente". En SENDO practicamos el cuidado progresivo. Si el adulto mayor aún puede abotonarse la camisa, aunque tarde 5 minutos, la cuidadora lo supervisará y alentará en lugar de hacerlo por él. Mantener estas pequeñas acciones diarias es vital para conservar su masa muscular y su autoestima.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">Mejoremos la calidad de vida de tu ser querido</p>
        <p class="text-green-700 mt-2">La vejez debe vivirse con dignidad y alegría. <a href="/#contacto" class="underline font-bold">Conversemos sobre cómo podemos ayudar</a> a que tu familiar disfrute esta etapa en la comodidad de su hogar en Santiago.</p>
      </div>
    `,
    faqs: [
      {
        pregunta: "¿Atienden a pacientes con Alzheimer avanzado?",
        respuesta: "Sí. Contamos con personal especializado y con experiencia en el manejo de pacientes con Alzheimer, demencia frontotemporal y otras patologías cognitivas en todas sus etapas."
      },
      {
        pregunta: "¿La cuidadora hace labores domésticas?",
        respuesta: "El rol principal es el cuidado exclusivo del paciente. Realizan labores del entorno directo del paciente (mantener ordenada su habitación, preparar su comida, lavar su vajilla), pero no reemplazan a una asesora del hogar o nana para limpieza general de la casa."
      },
      {
        pregunta: "¿Tienen cobertura en Chicureo o comunas periféricas?",
        respuesta: "Sí, la amplia red de profesionales de SENDO nos permite abarcar comunas como Chicureo, Puente Alto, Maipú y Quilicura, además del sector oriente y centro de Santiago."
      }
    ]
  },
  {
    slug: "cuidados-postoperatorios-domicilio",
    title: "Cuidados Postoperatorios a Domicilio en Santiago | SENDO",
    metaDescription: "Recuperación post cirugía en casa. Enfermería para cuidados postoperatorios, manejo del dolor, curación de heridas y prevención de complicaciones en Santiago.",
    keywords: "cuidados postoperatorios domicilio, enfermera postoperatorio santiago, recuperacion cirugia casa, curacion heridas quirurgicas, cuidado post cirugia estetica",
    heroVideo: "remedios",
    icon: "🏥",
    relatedSlugs: ["enfermeria-a-domicilio-santiago", "auxiliar-enfermeria-turnos-12-24-horas", "telemedicina-consulta-medica-online"],
    content: `
      <p class="text-lg text-gray-600 mb-6">El alta médica tras una cirugía no significa que la recuperación haya terminado. Las primeras semanas en casa son críticas. El servicio de <strong>Cuidados Postoperatorios a Domicilio</strong> de SENDO está diseñado para asegurar una recuperación rápida, segura y sin complicaciones, bajo la atenta mirada de profesionales clínicos.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">¿Qué abarca el cuidado post cirugía?</h2>
      <p class="text-gray-600 mb-4">Nuestro equipo de TENS y Enfermeras Universitarias se encarga de implementar al pie de la letra las indicaciones de tu cirujano tratante. Esto incluye:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Manejo de la Herida Quirúrgica:</strong> Curaciones avanzadas o simples según protocolo, vigilancia de bordes, detección temprana de inflamación o signos de infección.</li>
        <li><strong>Manejo del Dolor:</strong> Administración estricta de analgésicos y antiinflamatorios (orales o inyectables) para evitar picos de dolor.</li>
        <li><strong>Prevención de Trombosis:</strong> Administración de anticoagulantes (ej. heparina subcutánea) y asistencia en la movilización temprana segura.</li>
        <li><strong>Asistencia en la Movilidad:</strong> Ayuda experta para levantarse de la cama, ir al baño y caminar, protegiendo la zona operada (especialmente en cirugías traumatológicas como prótesis de cadera o rodilla).</li>
        <li><strong>Cuidado de Drenajes:</strong> Medición y vaciado de drenajes (ej. Hemosuc, Jackson-Pratt), registrando los débitos para el médico.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Ideal para todo tipo de cirugías</h2>
      <p class="text-gray-600 mb-6">Brindamos cobertura para postoperatorios de <strong>cirugías traumatológicas</strong> (cadera, rodilla, columna), <strong>cirugías digestivas/abdominales</strong> (vesícula, hernias, bariátricas), <strong>cirugías oncológicas</strong>, y <strong>cirugías plásticas o estéticas</strong> (abdominoplastia, liposucción) donde el reposo y la asistencia en el movimiento son críticos para los resultados.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Tranquilidad para la familia</h2>
      <p class="text-gray-600 mb-6">Para un familiar sin conocimientos médicos, enfrentarse a curaciones sangrantes, manejar horarios complejos de medicamentos o mover a un paciente adolorido es una fuente de gran estrés. Al contratar a SENDO para los primeros días o semanas post-alta, la familia vuelve a ser familia, y el estrés clínico queda en manos de profesionales.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">Asegura el éxito de tu cirugía</p>
        <p class="text-green-700 mt-2">No arriesgues una infección o complicación. <a href="/#contacto" class="underline font-bold">Cotiza nuestros planes de enfermería postoperatoria</a> por turnos o visitas programadas en Santiago.</p>
      </div>
    `,
    faqs: [
      {
        pregunta: "¿Por cuánto tiempo se debe contratar el servicio?",
        respuesta: "Depende exclusivamente de la complejidad de la cirugía y la evaluación médica. Puede ser desde unos pocos días (visitas para curaciones y medicamentos) hasta un mes de acompañamiento con turnos de 12 horas."
      },
      {
        pregunta: "¿Tienen convenio con Fonasa o Isapres?",
        respuesta: "Emitimos boletas de honorarios por servicios profesionales de enfermería. Muchas Isapres reembolsan parte de estos gastos médicos si existe una orden o receta médica que indique la necesidad de curaciones o enfermería en domicilio. Debes consultar el detalle de tu plan."
      },
      {
        pregunta: "¿Asisten a pacientes tras cirugías plásticas?",
        respuesta: "Sí, es uno de nuestros servicios más solicitados. Ayudamos con la higiene, movilización para ir al baño sin estirar las suturas, manejo de drenajes y administración de analgésicos."
      }
    ]
  }
];
