// Blog content - SEO-optimized articles for enfermeriasendo.cl
export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  author: string;
  keywords: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "como-elegir-cuidadora-adulto-mayor-santiago",
    title: "Cómo Elegir la Mejor Cuidadora para un Adulto Mayor en Santiago",
    metaDescription: "Guía completa para seleccionar una cuidadora profesional para adultos mayores en Santiago. Consejos de SENDO con más de 18 años de experiencia en cuidado domiciliario.",
    date: "2026-05-05",
    author: "Equipo SENDO",
    keywords: "cuidadora adulto mayor santiago, como elegir cuidadora, cuidadoras profesionales santiago, seleccion cuidadoras chile",
    content: `
      <p class="text-lg text-gray-600 mb-6">Elegir una cuidadora para un ser querido es una de las decisiones más importantes que puede tomar una familia. No se trata solo de encontrar a alguien que esté presente, sino de asegurar que esa persona tenga las competencias técnicas, la vocación y la confianza necesaria para cuidar a quien más amas.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">1. Verifica la experiencia y formación</h2>
      <p class="text-gray-600 mb-4">Una cuidadora profesional debe contar con formación en auxiliar de enfermería o áreas afines. Busca personal con experiencia comprobable en el cuidado de adultos mayores, idealmente con referencias verificables.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">2. Evalúa las habilidades técnicas</h2>
      <p class="text-gray-600 mb-4">Dependiendo de las necesidades del paciente, la cuidadora debería manejar:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li>Administración de medicamentos (oral, inyectable)</li>
        <li>Control de signos vitales</li>
        <li>Manejo de oxigenoterapia si es necesario</li>
        <li>Prevención de úlceras por presión</li>
        <li>Higiene y movilización del paciente</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">3. La importancia del trato humano</h2>
      <p class="text-gray-600 mb-4">Más allá de las competencias técnicas, una buena cuidadora debe mostrar empatía, paciencia y calidez. El adulto mayor necesita sentirse acompañado, no solo atendido.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">4. Contrata a través de una empresa especializada</h2>
      <p class="text-gray-600 mb-4">Contratar de forma independiente puede ser más económico, pero implica riesgos: falta de respaldo, sin reemplazos ante emergencias y sin garantías de calidad. Una empresa como <strong>SENDO</strong> realiza un proceso riguroso de selección, ofrece supervisión continua y garantiza reemplazos cuando sea necesario.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">5. Pregunta por turnos flexibles</h2>
      <p class="text-gray-600 mb-6">Cada familia tiene necesidades distintas. En SENDO ofrecemos turnos de 12 y 24 horas, con cobertura en todo Santiago, incluyendo fines de semana y feriados.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">¿Necesitas una cuidadora profesional en Santiago?</p>
        <p class="text-green-700 mt-2">Con más de 18 años de experiencia, SENDO te ayuda a encontrar la cuidadora ideal para tu familiar. <a href="/#contacto" class="underline font-bold">Contáctanos sin compromiso</a>.</p>
      </div>
    `,
  },
  {
    slug: "beneficios-enfermeria-domiciliaria-vs-hospitalizacion",
    title: "Beneficios de la Enfermería Domiciliaria vs Hospitalización en Santiago",
    metaDescription: "Descubre por qué la enfermería a domicilio es una alternativa superior a la hospitalización prolongada. Menos riesgo de infección, recuperación más rápida y mejor calidad de vida.",
    date: "2026-05-03",
    author: "Equipo SENDO",
    keywords: "enfermeria domiciliaria santiago, beneficios cuidado domicilio, alternativa hospitalizacion, enfermeras a domicilio chile",
    content: `
      <p class="text-lg text-gray-600 mb-6">La hospitalización prolongada puede ser necesaria en casos críticos, pero para muchos pacientes —especialmente adultos mayores— el hogar ofrece ventajas significativas para su recuperación y bienestar.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Menor riesgo de infecciones intrahospitalarias</h2>
      <p class="text-gray-600 mb-6">Los hospitales, por su naturaleza, concentran pacientes con diversas patologías. El riesgo de contraer infecciones nosocomiales es real y puede complicar cuadros ya delicados. En el hogar, el ambiente controlado reduce drásticamente este riesgo.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Recuperación emocional más rápida</h2>
      <p class="text-gray-600 mb-6">Está demostrado que los pacientes que se recuperan en un entorno familiar experimentan menos estrés, ansiedad y depresión. La presencia de seres queridos, rutinas conocidas y un espacio cómodo acelera la recuperación anímica.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Atención personalizada y exclusiva</h2>
      <p class="text-gray-600 mb-6">En un hospital, una enfermera puede atender a múltiples pacientes simultáneamente. Con enfermería domiciliaria, el profesional se dedica 100% al paciente, asegurando una atención de mayor calidad y un seguimiento más detallado.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Ahorro en costos a largo plazo</h2>
      <p class="text-gray-600 mb-6">Los costos de hospitalización pueden ser significativamente mayores que los de un servicio profesional a domicilio. Además, los servicios domiciliarios son flexibles y se adaptan a las necesidades reales del paciente.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Procedimientos complejos en casa</h2>
      <p class="text-gray-600 mb-6">Gracias a equipos especializados, hoy es posible realizar procedimientos como instalación de sondas, tratamientos endovenosos, curaciones complejas y manejo de ostomías directamente en el domicilio del paciente.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">¿Tu familiar necesita atención profesional en casa?</p>
        <p class="text-green-700 mt-2">En SENDO llevamos la clínica a tu hogar con más de 18 años de experiencia. <a href="/#contacto" class="underline font-bold">Solicita una cotización</a>.</p>
      </div>
    `,
  },
  {
    slug: "telemedicina-chile-consultas-medicas-online",
    title: "Guía de Telemedicina en Chile: Consultas Médicas desde Casa en Santiago",
    metaDescription: "Todo sobre la telemedicina en Chile. Consultas médicas online para adultos mayores en Santiago. Recetas electrónicas, seguimiento y coordinación con cuidadoras.",
    date: "2026-05-01",
    author: "Equipo SENDO",
    keywords: "telemedicina chile, consulta medica online santiago, medico online chile, telemedicina adulto mayor, consulta virtual medica",
    content: `
      <p class="text-lg text-gray-600 mb-6">La telemedicina ha revolucionado el acceso a la salud en Chile. Para los adultos mayores y personas con movilidad reducida, la posibilidad de recibir atención médica sin salir de casa representa un avance significativo en su calidad de vida.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">¿Qué es la telemedicina?</h2>
      <p class="text-gray-600 mb-6">La telemedicina permite la realización de consultas médicas a distancia mediante videollamada. El médico puede evaluar síntomas, revisar exámenes, ajustar tratamientos y emitir recetas electrónicas, todo sin que el paciente deba trasladarse a un centro médico.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Ventajas para el adulto mayor</h2>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Sin traslados:</strong> Evita viajes incómodos y riesgosos para pacientes con movilidad reducida.</li>
        <li><strong>Rapidez:</strong> Acceso inmediato a un médico sin esperas prolongadas.</li>
        <li><strong>Seguimiento continuo:</strong> Ideal para control de enfermedades crónicas.</li>
        <li><strong>Coordinación con cuidadoras:</strong> El médico puede coordinar directamente con la cuidadora en terreno.</li>
        <li><strong>Recetas electrónicas:</strong> Válidas en farmacias de todo Chile.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">¿Cuándo usar telemedicina?</h2>
      <p class="text-gray-600 mb-4">La telemedicina es ideal para:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li>Control y seguimiento de enfermedades crónicas (diabetes, hipertensión, etc.)</li>
        <li>Ajuste de medicamentos</li>
        <li>Evaluación de síntomas nuevos o cambios en el estado del paciente</li>
        <li>Segunda opinión médica</li>
        <li>Orientación a familiares y cuidadoras</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Telemedicina con SENDO</h2>
      <p class="text-gray-600 mb-6">En SENDO contamos con un médico certificado disponible para consultas telemáticas. Lo que nos diferencia es la <strong>coordinación directa con nuestras cuidadoras en terreno</strong>: el médico evalúa al paciente por videollamada y la cuidadora ejecuta las indicaciones en el acto.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">¿Necesitas una consulta médica online?</p>
        <p class="text-green-700 mt-2">Agenda una consulta telemática con nuestro médico. Sin traslados, sin esperas. <a href="/#contacto" class="underline font-bold">Contáctanos por WhatsApp</a>.</p>
      </div>
    `,
  },
  {
    slug: "senales-familiar-necesita-cuidadora-profesional",
    title: "5 Señales de que tu Familiar Necesita una Cuidadora Profesional",
    metaDescription: "Identifica las señales de que tu adulto mayor necesita asistencia profesional en casa. Guía práctica de SENDO para familias en Santiago.",
    date: "2026-04-28",
    author: "Equipo SENDO",
    keywords: "señales necesita cuidadora, cuando contratar cuidadora, adulto mayor necesita ayuda, cuidadora profesional santiago",
    content: `
      <p class="text-lg text-gray-600 mb-6">Muchas familias postergan la decisión de contratar una cuidadora profesional, ya sea por desconocimiento, culpa o la esperanza de que "las cosas mejoren". Reconocer las señales a tiempo puede prevenir accidentes graves y mejorar significativamente la calidad de vida del adulto mayor.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">1. Dificultad para realizar actividades básicas</h2>
      <p class="text-gray-600 mb-6">Si tu familiar tiene problemas para bañarse, vestirse, cocinar o alimentarse solo, es una señal clara de que necesita asistencia. Estas actividades, conocidas como <em>actividades básicas de la vida diaria</em> (ABVD), son indicadores clave de dependencia funcional.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">2. Olvidos frecuentes de medicamentos</h2>
      <p class="text-gray-600 mb-6">El adulto mayor que olvida tomar sus medicamentos, los duplica o los mezcla corre un riesgo serio. Una cuidadora profesional lleva un control riguroso de horarios y dosis.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">3. Caídas o accidentes recientes</h2>
      <p class="text-gray-600 mb-6">Las caídas son la principal causa de hospitalización en adultos mayores. Si tu familiar ha sufrido una o más caídas recientes, es fundamental contar con alguien que lo asista en su movilización y prevenga nuevos episodios.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">4. Aislamiento social y cambios de ánimo</h2>
      <p class="text-gray-600 mb-6">La soledad prolongada puede derivar en depresión y deterioro cognitivo acelerado. Si notas que tu familiar se aísla, pierde interés en actividades que antes disfrutaba o muestra cambios bruscos de humor, una cuidadora puede ofrecer la compañía y estimulación que necesita.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">5. Agotamiento del cuidador familiar</h2>
      <p class="text-gray-600 mb-6">El "burnout" del cuidador es real y frecuente. Si tú o algún familiar está sacrificando su salud, trabajo o relaciones para cuidar al adulto mayor, es momento de buscar apoyo profesional. No es un acto de abandono, sino de responsabilidad.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">¿Reconoces alguna de estas señales?</p>
        <p class="text-green-700 mt-2">No esperes a que sea tarde. En SENDO te ayudamos con cuidadoras profesionales en todo Santiago. <a href="/#contacto" class="underline font-bold">Habla con nosotros hoy</a>.</p>
      </div>
    `,
  },
  {
    slug: "cuidados-postoperatorios-en-casa",
    title: "Cuidados Postoperatorios en Casa: Lo que Debes Saber",
    metaDescription: "Guía de cuidados postoperatorios a domicilio en Santiago. Manejo de heridas, medicamentos, signos vitales y rehabilitación temprana con enfermería profesional.",
    date: "2026-04-25",
    author: "Equipo SENDO",
    keywords: "cuidados postoperatorios domicilio, recuperacion cirugia en casa, enfermeria postoperatorio santiago, cuidados post cirugia chile",
    content: `
      <p class="text-lg text-gray-600 mb-6">La recuperación postoperatoria en casa es cada vez más común y, cuando se realiza con apoyo profesional, ofrece ventajas significativas sobre la estancia hospitalaria prolongada. Sin embargo, requiere preparación y personal capacitado.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">¿Qué incluyen los cuidados postoperatorios?</h2>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Manejo de heridas:</strong> Curaciones, cambios de apósitos y vigilancia de signos de infección.</li>
        <li><strong>Administración de medicamentos:</strong> Analgésicos, antibióticos, anticoagulantes según indicación médica.</li>
        <li><strong>Control de signos vitales:</strong> Monitoreo de presión arterial, temperatura, saturación de oxígeno y frecuencia cardíaca.</li>
        <li><strong>Movilización asistida:</strong> Prevención de complicaciones por inmovilización prolongada.</li>
        <li><strong>Alimentación:</strong> Dieta adecuada según tipo de cirugía y condición del paciente.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Ventajas de recuperarse en casa</h2>
      <p class="text-gray-600 mb-4">Recuperarse en el hogar, con atención profesional, ofrece:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li>Menor riesgo de infecciones hospitalarias</li>
        <li>Mayor comodidad y bienestar emocional</li>
        <li>Atención personalizada y exclusiva</li>
        <li>Presencia de la familia como apoyo</li>
        <li>Menores costos comparado con hospitalización</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">¿Cuándo es seguro recuperarse en casa?</h2>
      <p class="text-gray-600 mb-6">La decisión siempre debe ser aprobada por el médico tratante. Generalmente es viable cuando el paciente está estable, la herida no requiere monitoreo hospitalario intensivo y se cuenta con personal de enfermería capacitado en el domicilio.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">¿Necesitas enfermería postoperatoria en Santiago?</p>
        <p class="text-green-700 mt-2">En SENDO tenemos amplia experiencia en cuidados post cirugía a domicilio. <a href="/#contacto" class="underline font-bold">Cotiza sin compromiso</a>.</p>
      </div>
    `,
  {
    slug: "cuanto-cuesta-cuidadora-domicilio-santiago-2026",
    title: "Cuánto Cuesta una Cuidadora a Domicilio en Santiago (2026)",
    metaDescription: "Guía de precios 2026 para contratar una cuidadora a domicilio en Santiago. Conoce los factores que influyen en el costo y cómo presupuestar el cuidado.",
    date: "2026-05-18",
    author: "Equipo SENDO",
    keywords: "cuánto cuesta cuidadora domicilio santiago, precio cuidadora, valor turno cuidadora, costo mensual cuidadora adulto mayor",
    content: `
      <p class="text-lg text-gray-600 mb-6">Una de las primeras preguntas que surgen al buscar apoyo para un familiar es: <strong>¿Cuánto cuesta una cuidadora a domicilio en Santiago?</strong> El valor no es único y depende de varios factores clave que determinan el nivel de especialización y la carga horaria requerida.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Factores que determinan el precio</h2>
      <p class="text-gray-600 mb-4">El costo mensual o por turno de una cuidadora varía según:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Nivel de dependencia del paciente:</strong> Un paciente autovalente que solo requiere compañía y supervisión tiene un costo menor que un paciente postrado o con demencia avanzada.</li>
        <li><strong>Formación del profesional:</strong> Una cuidadora básica tiene una tarifa distinta a la de una Técnico en Enfermería de Nivel Superior (TENS) o una enfermera universitaria.</li>
        <li><strong>Modalidad y horarios:</strong> Los turnos de 12 horas diurnos, nocturnos, o la modalidad de cuidadora puertas adentro ("cama adentro") tienen valores diferentes.</li>
        <li><strong>Días festivos y fines de semana:</strong> La cobertura en días feriados o domingos suele tener un recargo en el valor del turno.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Modalidades de contratación</h2>
      <p class="text-gray-600 mb-4">En empresas formales y establecidas en Santiago, puedes encontrar tres modalidades principales:</p>
      <h3 class="text-xl font-semibold text-green-600 mb-2">1. Turnos de 12 horas (Diurno o Nocturno)</h3>
      <p class="text-gray-600 mb-4">Es la modalidad más solicitada. Permite a la familia descansar por la noche o trabajar durante el día, sabiendo que el paciente está cuidado. Se contrata por bloques mensuales de días específicos o de lunes a viernes.</p>
      <h3 class="text-xl font-semibold text-green-600 mb-2">2. Cuidado 24/7 (Turnos rotativos)</h3>
      <p class="text-gray-600 mb-4">Para pacientes con alta dependencia. Se organiza un equipo de 2 o 3 cuidadoras o TENS que rotan en turnos de 12 o 24 horas para garantizar cobertura ininterrumpida los 365 días del año.</p>
      <h3 class="text-xl font-semibold text-green-600 mb-2">3. Procedimientos puntuales</h3>
      <p class="text-gray-600 mb-6">Si solo necesitas instalación de suero, curaciones o administración de medicamentos, se cobra por visita (procedimiento de enfermería) y no por hora.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">¿Por qué elegir una empresa vs. contrato directo?</h2>
      <p class="text-gray-600 mb-6">Contratar de manera informal puede parecer más económico inicialmente (ahorro de cotizaciones y comisiones), pero <strong>las agencias especializadas como SENDO ofrecen respaldo ante ausencias (reemplazos garantizados), selección rigurosa, supervisión clínica continua y cumplimiento legal laboral</strong>, evitando demandas futuras y asegurando la continuidad del cuidado.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">¿Buscas un presupuesto exacto para tu caso?</p>
        <p class="text-green-700 mt-2">Cada familia tiene necesidades distintas. <a href="/#contacto" class="underline font-bold">Contáctanos por WhatsApp</a> para evaluar tu situación y entregarte una cotización transparente y sin compromiso.</p>
      </div>
    `,
  },
  {
    slug: "diferencia-tens-enfermera-cuidadora",
    title: "TENS vs Enfermera vs Cuidadora: ¿Cuál Necesitas para tu Familiar?",
    metaDescription: "Conoce las diferencias reales entre una cuidadora, una TENS y una enfermera universitaria. Descubre qué perfil es el adecuado para cuidar a tu adulto mayor.",
    date: "2026-05-15",
    author: "Equipo SENDO",
    keywords: "diferencia TENS enfermera cuidadora, qué es una TENS, técnico en enfermería, roles de cuidado domiciliario, perfil profesional de salud",
    content: `
      <p class="text-lg text-gray-600 mb-6">Al momento de buscar ayuda en casa, es común confundir los términos "cuidadora", "TENS" y "enfermera". Sin embargo, cada una tiene una formación distinta y está legal y clínicamente autorizada para realizar funciones diferentes. Conocer esta diferencia es clave para elegir la asistencia correcta.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">1. La Cuidadora de Adulto Mayor</h2>
      <p class="text-gray-600 mb-4">La cuidadora es una persona capacitada (generalmente a través de cursos de cuidadores o experiencia práctica) enfocada en la asistencia de las Actividades de la Vida Diaria (AVD). Su rol es principalmente asistencial y de acompañamiento.</p>
      <p class="text-gray-600 mb-4"><strong>¿Qué puede hacer?</strong></p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li>Aseo y confort (baño en cama o ducha).</li>
        <li>Ayuda en la alimentación y vestimenta.</li>
        <li>Acompañamiento, conversación y estimulación cognitiva básica.</li>
        <li>Administración de medicamentos por vía oral (previamente indicados y organizados).</li>
        <li>Prevención de caídas y asistencia en movilización.</li>
      </ul>
      <p class="text-gray-600 mb-6"><strong>Ideal para:</strong> Pacientes autovalentes o con dependencia leve a moderada, demencia temprana o que requieren compañía y supervisión por seguridad.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">2. TENS (Técnico de Enfermería de Nivel Superior)</h2>
      <p class="text-gray-600 mb-4">La TENS cuenta con un título técnico de educación superior (generalmente 2 a 2.5 años de estudio). Tiene conocimientos clínicos formales y está autorizada para realizar procedimientos invasivos básicos bajo indicación médica.</p>
      <p class="text-gray-600 mb-4"><strong>¿Qué puede hacer?</strong></p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li>Todo lo que hace una cuidadora.</li>
        <li>Control exhaustivo y registro de signos vitales.</li>
        <li>Administración de medicamentos (oral, intramuscular, subcutánea, y manejo de bombas de infusión simples).</li>
        <li>Manejo de pacientes postrados, prevención y curación de escaras (úlceras por presión) grado 1 y 2.</li>
        <li>Manejo de gastrostomías, colostomías y sondas Foley.</li>
        <li>Aspiración de secreciones básica.</li>
      </ul>
      <p class="text-gray-600 mb-6"><strong>Ideal para:</strong> Pacientes postrados, con patologías crónicas descompensadas, alta médica reciente, o alimentación por sonda.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">3. Enfermera Universitaria (EU)</h2>
      <p class="text-gray-600 mb-4">La enfermera es una profesional con grado universitario (5 años de estudio). Su rol en el domicilio suele ser de supervisión, evaluación clínica y ejecución de procedimientos de alta complejidad.</p>
      <p class="text-gray-600 mb-4"><strong>¿Qué puede hacer?</strong></p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li>Evaluación integral del paciente y diseño del plan de cuidados.</li>
        <li>Supervisión clínica de las TENS y cuidadoras.</li>
        <li>Curaciones avanzadas y complejas (pie diabético, úlceras profundas).</li>
        <li>Instalación y recambio de sondas (Foley, nasogástrica).</li>
        <li>Instalación de vías venosas para sueroterapia o antibióticos.</li>
      </ul>
      <p class="text-gray-600 mb-6"><strong>Ideal para:</strong> Visitas puntuales para procedimientos invasivos o evaluación experta ante cambios en la condición del paciente.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">¿Aún no estás seguro de quién necesitas?</p>
        <p class="text-green-700 mt-2">En SENDO, evaluamos el estado clínico de tu familiar para asignar a la profesional adecuada. <a href="/#contacto" class="underline font-bold">Solicita nuestra asesoría gratuita</a> y aseguremos el mejor cuidado.</p>
      </div>
    `,
  },
  {
    slug: "cuidado-paciente-alzheimer-domicilio",
    title: "Cuidado de Pacientes con Alzheimer a Domicilio en Santiago",
    metaDescription: "Estrategias prácticas para el cuidado de adultos mayores con Alzheimer o demencia en casa. Cómo mantener un ambiente seguro y manejar las alteraciones de conducta.",
    date: "2026-05-12",
    author: "Equipo SENDO",
    keywords: "Alzheimer cuidado domicilio, demencia adulto mayor, cuidadoras alzheimer santiago, manejo paciente con demencia, cuidados cognitivos",
    content: `
      <p class="text-lg text-gray-600 mb-6">El cuidado domiciliario de un familiar con enfermedad de Alzheimer o algún otro tipo de demencia es uno de los mayores desafíos para cualquier familia. La pérdida progresiva de la memoria y la autonomía requiere un enfoque de cuidado especializado, donde la paciencia y el entorno seguro son fundamentales.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Creando un entorno seguro (Prevención)</h2>
      <p class="text-gray-600 mb-4">El hogar debe adaptarse para prevenir accidentes y reducir la ansiedad del paciente:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Eliminar riesgos de caídas:</strong> Retirar alfombras sueltas, cables en el suelo y exceso de muebles.</li>
        <li><strong>Seguridad en la cocina y baños:</strong> Bloquear acceso a llaves de gas, cuchillos e instalar barras de apoyo en la ducha.</li>
        <li><strong>Iluminación adecuada:</strong> Mantener luces encendidas por la noche (luces de cortesía) para evitar la desorientación nocturna.</li>
        <li><strong>Prevención de extravíos:</strong> Asegurar puertas de salida al exterior. Es útil que el paciente use una pulsera con sus datos y contacto.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Manejo de las alteraciones de conducta</h2>
      <p class="text-gray-600 mb-4">Los pacientes con Alzheimer suelen presentar agitación, agresividad, deambulación constante o el "síndrome del atardecer" (mayor confusión al final del día). Para manejarlo:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>No discutir ni contradecir:</strong> Si el paciente afirma algo irreal, no intentes convencerlo de su error mediante la lógica. Usa la empatía y la redirección de atención.</li>
        <li><strong>Rutinas estrictas:</strong> Mantener horarios fijos para comidas, higiene y sueño reduce enormemente la ansiedad y confusión.</li>
        <li><strong>Lenguaje simple:</strong> Da instrucciones de un solo paso, usando un tono de voz calmado y contacto visual a su altura.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">La importancia de la estimulación cognitiva</h2>
      <p class="text-gray-600 mb-6">El cuidado no es solo supervisión física. Realizar ejercicios cognitivos simples (armar puzles sencillos, escuchar música de su juventud, clasificar objetos, repasar álbumes familiares) ayuda a mantener las funciones mentales remanentes por más tiempo y mejora el estado de ánimo.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Protegiendo al cuidador principal</h2>
      <p class="text-gray-600 mb-6">La carga emocional y física de cuidar a un paciente con demencia es altísima, llevando frecuentemente al "Síndrome del Cuidador Quemado". Delegar ciertas horas del día o los turnos nocturnos a <strong>cuidadoras profesionales</strong> no solo protege la salud mental de la familia, sino que asegura que el paciente reciba una atención óptima y sin tensiones.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">Especialistas en cuidado cognitivo en Santiago</p>
        <p class="text-green-700 mt-2">En SENDO contamos con personal capacitado en el manejo de Alzheimer y otras demencias. Brindamos acompañamiento compasivo y estimulación. <a href="/#contacto" class="underline font-bold">Conversemos sobre tu caso</a>.</p>
      </div>
    `,
  },
  {
    slug: "cuidado-paciente-postrado-domicilio-santiago",
    title: "Cuidado de Pacientes Postrados a Domicilio: Guía Completa",
    metaDescription: "Guía completa para el cuidado de pacientes encamados o postrados en casa. Cómo prevenir escaras, aseo en cama, alimentación y movilización.",
    date: "2026-05-09",
    author: "Equipo SENDO",
    keywords: "paciente postrado domicilio, cuidado paciente en cama, prevencion escaras, TENS a domicilio santiago, aseo en cama adulto mayor",
    content: `
      <p class="text-lg text-gray-600 mb-6">El cuidado de un paciente en situación de postración (encamamiento prolongado) requiere de una dedicación clínica meticulosa. La inmovilidad trae consigo riesgos serios para la salud que pueden prevenirse con el protocolo adecuado ejecutado por personal especializado (TENS o cuidadores avanzados).</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">1. Prevención de Úlceras por Presión (Escaras)</h2>
      <p class="text-gray-600 mb-4">Es la complicación más frecuente y dolorosa del paciente postrado. Para prevenirlas se debe:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Cambios posturales:</strong> Cambiar la posición del paciente cada 2 o 3 horas rigurosamente, incluso de noche.</li>
        <li><strong>Uso de colchón antiescaras:</strong> Esencial para distribuir la presión. Idealmente tipo burbuja con motor compresor.</li>
        <li><strong>Hidratación de la piel:</strong> Mantener la piel limpia, seca y bien hidratada con cremas específicas, prestando especial atención a talones, codos y zona sacra.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">2. Higiene y Aseo en Cama (Baño de Esponja)</h2>
      <p class="text-gray-600 mb-6">El aseo debe ser diario y cuidadoso. Se realiza por partes para evitar enfriamientos. Es fundamental el secado perfecto, especialmente en los pliegues (axilas, ingle, bajo el pecho) para evitar infecciones por hongos. El cambio de pañal debe ser frecuente, apenas se detecte humedad o deposiciones.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">3. Movilización y Kinesiterapia</h2>
      <p class="text-gray-600 mb-6">Aunque el paciente no pueda levantarse, la movilización pasiva de sus articulaciones (ejercicios suaves realizados por el cuidador) es crucial para prevenir la rigidez muscular, las contracturas dolorosas y mejorar la circulación sanguínea. Además, elevar la cabecera de la cama ayuda a la expansión pulmonar previniendo neumonías.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">4. Alimentación Segura y Prevención de Aspiración</h2>
      <p class="text-gray-600 mb-6">Alimentar a un paciente en cama conlleva el riesgo de aspiración (que el alimento vaya a los pulmones). El paciente debe estar sentado o semi-sentado (ángulo de al menos 45 a 60 grados) durante la comida y permanecer en esa posición al menos 30 a 45 minutos después de comer. Si el paciente se alimenta por gastrostomía o sonda nasogástrica, el manejo debe hacerlo exclusivamente personal de enfermería (TENS o Enfermera).</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Equipamiento básico recomendado</h2>
      <p class="text-gray-600 mb-6">Para el cuidado domiciliario óptimo se recomienda contar con: catre clínico articulado, colchón antiescaras, barandas de seguridad, mesa de alimentación adaptable y, según el caso, oxigenoterapia o aspirador de secreciones.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">El cuidado del paciente postrado es altamente exigente</p>
        <p class="text-green-700 mt-2">Asegura la calidad de vida de tu familiar y tu propia tranquilidad delegando estos cuidados en las TENS y cuidadoras expertas de SENDO. <a href="/#contacto" class="underline font-bold">Solicita apoyo domiciliario hoy</a>.</p>
      </div>
    `,
  },
  {
    slug: "guia-contratar-enfermeria-domicilio-chile",
    title: "Guía Completa para Contratar Enfermería a Domicilio en Chile",
    metaDescription: "Paso a paso para elegir el mejor servicio de enfermería domiciliaria en Chile. Criterios de evaluación, validación de profesionales y qué preguntas hacer.",
    date: "2026-05-06",
    author: "Equipo SENDO",
    keywords: "contratar enfermería domicilio chile, servicio enfermería casa, empresas de enfermeria santiago, requisitos cuidadoras chile, asistencia domiciliaria integral",
    content: `
      <p class="text-lg text-gray-600 mb-6">Permitir que un tercero entre a tu hogar y asuma la responsabilidad de cuidar a un ser querido requiere de máxima confianza. El mercado de asistencia domiciliaria en Chile (home care) es amplio, pero la calidad varía enormemente. Aquí te presentamos una guía práctica de qué debes evaluar antes de contratar.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">1. Define claramente qué servicio necesitas</h2>
      <p class="text-gray-600 mb-6">Como vimos en artículos anteriores, no es lo mismo requerir acompañamiento (Cuidadora) que manejo de sondas o inyecciones (TENS/Enfermera). El primer paso es tener un diagnóstico claro y solicitar a la agencia una <strong>evaluación clínica inicial</strong> para determinar el perfil del profesional idóneo.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">2. Valida la formalidad de la empresa</h2>
      <p class="text-gray-600 mb-4">Contratar servicios "informales" o directamente de portales de clasificados es un riesgo legal y sanitario. Una empresa establecida debe ofrecerte:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li>Facturación o boletas de honorarios transparentes.</li>
        <li>Filtro exhaustivo (verificación de antecedentes, certificados de la Superintendencia de Salud en caso de TENS/EU).</li>
        <li>Garantía de reemplazo inmediato ante licencias, vacaciones o inasistencia del personal.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">3. Preguntas clave que DEBES hacer a la agencia</h2>
      <p class="text-gray-600 mb-4">Antes de firmar un acuerdo, asegúrate de preguntar:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><em>"¿Qué pasa si la cuidadora asignada no llega a su turno?"</em> (Busca respuestas que aseguren un plan de contingencia 24/7).</li>
        <li><em>"¿Si el paciente no tiene afinidad o no le agrada la cuidadora, puedo solicitar un cambio?"</em></li>
        <li><em>"¿El personal cuenta con supervisión por parte de una enfermera jefe o supervisora clínica?"</em></li>
        <li><em>"¿Qué protocolo siguen en caso de una emergencia médica en el domicilio?"</em></li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">4. Evalúa la experiencia y cobertura</h2>
      <p class="text-gray-600 mb-6">Busca empresas con años de trayectoria comprobable y que tengan capacidad operativa real en tu comuna. Una agencia local que domina las redes de derivación y conoce los tiempos de desplazamiento en Santiago es siempre una ventaja operativa frente a urgencias.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">5. Revisa la integración de servicios (Telemedicina)</h2>
      <p class="text-gray-600 mb-6">Las agencias más modernas no solo envían personal de enfermería, sino que integran soluciones. Por ejemplo, contar con soporte de <strong>telemedicina</strong> permite que la cuidadora en terreno pueda conectar al paciente inmediatamente con un médico por videollamada ante cualquier duda clínica, evitando traslados innecesarios a Urgencias.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">La confianza se construye con experiencia y respaldo</p>
        <p class="text-green-700 mt-2">En SENDO cumplimos con todos los estándares clínicos y de formalidad, respaldados por nuestra trayectoria desde 2007 en todo Santiago. <a href="/#contacto" class="underline font-bold">Cotiza con confianza y seguridad</a>.</p>
      </div>
    `,
  }
];
