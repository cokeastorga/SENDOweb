export interface ComunaData {
  slug: string;
  comunaNombre: string;
  title: string;
  metaDescription: string;
  keywords: string;
  heroVideo: string;
  content: string;
  highlights: string[];
}

export const comunasData: ComunaData[] = [
  {
    slug: "cuidadoras-las-condes",
    comunaNombre: "Las Condes",
    title: "Cuidadoras a Domicilio en Las Condes | SENDO Enfermería",
    metaDescription: "Servicio premium de cuidadoras a domicilio y enfermería en Las Condes. Personal de confianza para el cuidado del adulto mayor 24/7. Cotiza hoy.",
    keywords: "cuidadoras a domicilio las condes, enfermera a domicilio las condes, cuidado adulto mayor las condes, TENS las condes, agencia cuidadoras sector oriente",
    heroVideo: "cuidado",
    highlights: [
      "Cobertura rápida en todo el sector de Apoquindo, El Golf, San Carlos de Apoquindo y alrededores.",
      "Personal rigurosamente evaluado y con referencias comprobables.",
      "Atención bilingüe disponible (sujeto a disponibilidad).",
      "Experiencia en recintos y condominios con estrictos controles de acceso."
    ],
    content: `
      <p class="text-lg text-gray-600 mb-6">Encontrar personal de salud de absoluta confianza para el cuidado de un familiar en <strong>Las Condes</strong> es una prioridad para muchas familias del sector oriente. En SENDO Enfermería entendemos que buscas más que compañía: buscas seguridad, profesionalismo y un trato digno para tus seres queridos.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Nuestro Servicio en Las Condes</h2>
      <p class="text-gray-600 mb-4">Nuestra red de <strong>cuidadoras y Técnicos en Enfermería (TENS)</strong> tiene amplia experiencia trabajando en la comuna de Las Condes. Ya sea que te encuentres cerca del Mall Alto Las Condes, en el sector de Los Dominicos o en San Carlos de Apoquindo, nuestro personal se desplaza hasta tu domicilio garantizando puntualidad y discreción.</p>
      
      <p class="text-gray-600 mb-6">Ofrecemos soluciones integrales de salud a domicilio que incluyen:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong><a href="/servicios/cuidadoras-a-domicilio-santiago" class="text-green-600 hover:underline">Cuidadoras Profesionales:</a></strong> Asistencia en aseo, vestimenta, alimentación y compañía para adultos mayores.</li>
        <li><strong><a href="/servicios/auxiliar-enfermeria-turnos-12-24-horas" class="text-green-600 hover:underline">TENS en Turnos de 12 y 24 Horas:</a></strong> Personal clínico capacitado para manejo de pacientes postrados, control de medicamentos y signos vitales.</li>
        <li><strong><a href="/servicios/enfermeria-a-domicilio-santiago" class="text-green-600 hover:underline">Enfermería y Curaciones:</a></strong> Procedimientos invasivos (sondas, sueros, curaciones avanzadas) sin necesidad de traslados a clínicas.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Respaldo y Seguridad Garantizada</h2>
      <p class="text-gray-600 mb-6">Sabemos que el ingreso de una persona externa al hogar puede generar aprensión. Por eso, en SENDO realizamos un <strong>filtro estricto</strong> (verificación de antecedentes, evaluación psicológica e inscripción en la Superintendencia de Salud para personal clínico). Nuestro personal asiste siempre debidamente uniformado e identificado.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">Protege a tu familia con expertos</p>
        <p class="text-green-700 mt-2">¿Vives en Las Condes y necesitas apoyo con un adulto mayor? <a href="/#contacto" class="underline font-bold">Solicita una evaluación gratuita</a> y conoce nuestros planes personalizados.</p>
      </div>
    `
  },
  {
    slug: "cuidadoras-vitacura",
    comunaNombre: "Vitacura",
    title: "Cuidadoras a Domicilio en Vitacura | SENDO Enfermería",
    metaDescription: "Agencia de cuidadoras y TENS a domicilio en Vitacura. Cuidados de salud premium, postoperatorios y acompañamiento del adulto mayor 24/7.",
    keywords: "cuidadoras vitacura, enfermera a domicilio vitacura, cuidado adulto mayor vitacura, agencia enfermeria sector oriente, postoperatorio vitacura",
    heroVideo: "terapia",
    highlights: [
      "Atención premium con personal altamente calificado.",
      "Especialistas en cuidados postoperatorios tras cirugías estéticas o traumatológicas.",
      "Cobertura completa desde el sector de Alonso de Córdova hasta Santa María de Manquehue.",
      "Servicio de Telemedicina para interconsultas rápidas sin salir de casa."
    ],
    content: `
      <p class="text-lg text-gray-600 mb-6">Para las familias residentes en <strong>Vitacura</strong>, exigir el más alto estándar de atención médica y cuidado domiciliario es fundamental. En SENDO Enfermería combinamos la excelencia técnica clínica con la calidez humana, ofreciendo un servicio de cuidados a domicilio que cumple y supera las expectativas.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Cuidado Integral en Vitacura</h2>
      <p class="text-gray-600 mb-4">Llegamos a todos los sectores de Vitacura (Lo Curro, Santa María de Manquehue, sector Bicentenario) brindando un catálogo completo de servicios de salud domiciliaria. Nos adaptamos a los estrictos controles de seguridad de condominios y edificios, asegurando un servicio fluido y confiable.</p>
      
      <p class="text-gray-600 mb-6">¿Qué servicios ofrecemos en la comuna?</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong><a href="/servicios/cuidados-postoperatorios-domicilio" class="text-green-600 hover:underline">Cuidados Postoperatorios:</a></strong> Recuperación en casa tras cirugías complejas. Manejo de heridas, drenajes y dolor por parte de enfermeras y TENS.</li>
        <li><strong><a href="/servicios/cuidado-adulto-mayor-santiago" class="text-green-600 hover:underline">Cuidado Cognitivo del Adulto Mayor:</a></strong> Acompañamiento especializado para pacientes con Alzheimer o demencia.</li>
        <li><strong><a href="/servicios/telemedicina-consulta-medica-online" class="text-green-600 hover:underline">Médico a Domicilio (Telemedicina):</a></strong> Evaluación médica online coordinada con nuestra enfermera en terreno, emisión de recetas y órdenes de exámenes.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Flexibilidad y Excelencia</h2>
      <p class="text-gray-600 mb-6">Ofrecemos modalidades de cuidado que se ajustan a tu estilo de vida: desde visitas puntuales para procedimientos de enfermería (instalación de sueros, curaciones avanzadas), hasta turnos de 12 horas o cuidado continuo 24/7. Nuestro equipo de coordinación está disponible ante cualquier emergencia o necesidad de reemplazo del personal.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">La mejor atención de salud sin salir de Vitacura</p>
        <p class="text-green-700 mt-2">Déjanos la logística clínica a nosotros mientras disfrutas de la compañía de tu familiar. <a href="/#contacto" class="underline font-bold">Cotiza nuestros servicios</a>.</p>
      </div>
    `
  },
  {
    slug: "cuidadoras-providencia",
    comunaNombre: "Providencia",
    title: "Cuidadoras a Domicilio en Providencia | SENDO Enfermería",
    metaDescription: "Cuidadoras profesionales y enfermería a domicilio en Providencia. Atención rápida, turnos 24 horas y manejo de pacientes postrados.",
    keywords: "cuidadoras providencia, enfermeria a domicilio providencia, cuidadoras de enfermo providencia, TENS providencia, atención adulto mayor",
    heroVideo: "medidorpresion",
    highlights: [
      "Rápida respuesta y asignación de personal en toda la comuna de Providencia.",
      "Ideal para departamentos: personal discreto, respetuoso de normas de convivencia.",
      "Conexión directa con nuestra red de profesionales para derivaciones o consultas.",
      "Garantía de reemplazo inmediato ante imprevistos."
    ],
    content: `
      <p class="text-lg text-gray-600 mb-6"><strong>Providencia</strong> es una comuna con una alta población de adultos mayores que desean mantener su independencia y vivir en sus propios hogares el mayor tiempo posible. En SENDO apoyamos ese objetivo mediante servicios profesionales de cuidado a domicilio, adaptándonos al ritmo de vida de la comuna.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Apoyo Domiciliario en Providencia</h2>
      <p class="text-gray-600 mb-4">Desde el sector de Pedro de Valdivia Norte hasta el Barrio Italia, nuestro personal de salud (Cuidadoras, TENS y Enfermeras) está disponible para asistir a tu familiar, ya sea en casa o departamento.</p>
      
      <p class="text-gray-600 mb-6">Destacamos en Providencia por:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong><a href="/servicios/cuidadoras-a-domicilio-santiago" class="text-green-600 hover:underline">Acompañamiento Activo:</a></strong> Nuestras cuidadoras no solo asisten médicamente, sino que fomentan paseos (ej. Plazas de Providencia, Parque Inés de Suárez) si la movilidad del paciente lo permite.</li>
        <li><strong><a href="/servicios/auxiliar-enfermeria-turnos-12-24-horas" class="text-green-600 hover:underline">Manejo de Pacientes Complejos:</a></strong> Atención de TENS para pacientes postrados, alimentación por sonda y prevención de escaras.</li>
        <li><strong><a href="/servicios/enfermeria-a-domicilio-santiago" class="text-green-600 hover:underline">Atención Post-Alta Rápida:</a></strong> Coordinación eficiente para recibir a pacientes recién dados de alta de los hospitales y clínicas del sector.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">La Diferencia SENDO</h2>
      <p class="text-gray-600 mb-6">Con más de 18 años de trayectoria, sabemos que la formalidad es clave. A diferencia de contratar por avisos informales, SENDO te entrega la certeza de estar ingresando a tu hogar a personal con título validado (Superintendencia de Salud) y con un contrato de prestación de servicios claro, con boletas de honorarios que muchas veces puedes reembolsar en tu Isapre.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">Cuidado compasivo y profesional en Providencia</p>
        <p class="text-green-700 mt-2">Permite que tu familiar envejezca con dignidad en su propio hogar. <a href="https://wa.me/56998451117" target="_blank" rel="noopener noreferrer" class="underline font-bold">Escríbenos por WhatsApp</a> y organizaremos una evaluación.</p>
      </div>
    `
  },
  {
    slug: "cuidadoras-nunoa",
    comunaNombre: "Ñuñoa",
    title: "Cuidadoras a Domicilio en Ñuñoa | SENDO Enfermería",
    metaDescription: "Encuentra la mejor cuidadora o TENS a domicilio en Ñuñoa. Atención personalizada para el adulto mayor, administración de medicamentos y compañía.",
    keywords: "cuidadoras ñuñoa, enfermera a domicilio ñuñoa, TENS a domicilio ñuñoa, cuidado adulto mayor ñuñoa, cuidadoras 24 horas ñuñoa",
    heroVideo: "remedios",
    highlights: [
      "Amplia red de cuidadoras y TENS disponibles para la comuna de Ñuñoa.",
      "Servicios enfocados en la preservación de la autonomía del adulto mayor.",
      "Turnos nocturnos, diurnos o 24/7.",
      "Evaluación inicial para determinar el perfil profesional requerido."
    ],
    content: `
      <p class="text-lg text-gray-600 mb-6">En una comuna residencial y tradicional como <strong>Ñuñoa</strong>, mantener a los adultos mayores en el entorno que conocen y aman es vital para su bienestar emocional. SENDO Enfermería te ofrece la posibilidad de brindarles el mejor cuidado clínico sin desarraigarlos de su hogar.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Enfermería y Cuidadoras en Ñuñoa</h2>
      <p class="text-gray-600 mb-4">Nuestro servicio cubre toda la comuna, desde Plaza Ñuñoa hasta el sector de Simón Bolívar o el Estadio Nacional. Contamos con perfiles diferenciados según el requerimiento de tu familiar:</p>
      
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Para acompañamiento y seguridad:</strong> <a href="/servicios/cuidadoras-a-domicilio-santiago" class="text-green-600 hover:underline">Cuidadoras profesionales</a> que asisten en el baño, preparan alimentos, ayudan con la vestimenta y aseguran que los medicamentos orales se tomen a la hora.</li>
        <li><strong>Para cuidado clínico:</strong> <a href="/servicios/auxiliar-enfermeria-turnos-12-24-horas" class="text-green-600 hover:underline">Auxiliares (TENS)</a> para pacientes postrados, con sondas, manejo de escaras o que requieren inyecciones (ej. insulina o anticoagulantes).</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Alivio para la Familia Cuidadora</h2>
      <p class="text-gray-600 mb-6">El cuidado de un paciente con dependencia severa o demencia genera un desgaste inmenso en la familia. No tienes que hacerlo solo. Ofrecemos esquemas de turnos flexibles: puedes contratar una TENS solo para las noches (para que puedas dormir), turnos de 12 horas diurnas (mientras trabajas), o un equipo 24/7 para cuidado total.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">Recupera la tranquilidad familiar</p>
        <p class="text-green-700 mt-2">¿Necesitas apoyo confiable en Ñuñoa? <a href="/#contacto" class="underline font-bold">Contáctanos hoy mismo</a> y encontraremos al profesional ideal para tu caso.</p>
      </div>
    `
  },
  {
    slug: "cuidadoras-quilicura",
    comunaNombre: "Quilicura",
    title: "Cuidadoras a Domicilio en Quilicura | SENDO Enfermería",
    metaDescription: "Servicio local de enfermería y cuidadoras a domicilio en Quilicura (Sede Central SENDO). Respuesta inmediata, profesionales de confianza y atención 24/7.",
    keywords: "cuidadoras quilicura, enfermeria quilicura, TENS domicilio quilicura, atencion adulto mayor zona norte, inyecciones domicilio quilicura",
    heroVideo: "suero",
    highlights: [
      "¡Nuestra Sede Central está en Quilicura! (Pasaje Teno #262).",
      "Respuesta logística inmediata y supervisión directa en la comuna.",
      "Conocimiento profundo del sector, Valle Lo Campino y zonas aledañas.",
      "Precios competitivos sin recargos por traslados lejanos."
    ],
    content: `
      <p class="text-lg text-gray-600 mb-6">En <strong>SENDO Enfermería estamos orgullosos de tener nuestra base de operaciones en Quilicura</strong> (Pasaje Teno #262). Al ser vecinos de la comuna, ofrecemos a las familias quilicuranas y del sector norte de Santiago una ventaja única: <strong>rapidez de respuesta, supervisión directa y un servicio cercano</strong>.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Salud a Domicilio en Quilicura y Valle Lo Campino</h2>
      <p class="text-gray-600 mb-4">Ya no necesitas buscar agencias lejanas ni pagar enormes costos por desplazamientos. Contamos con un equipo de <a href="/servicios/cuidadoras-a-domicilio-santiago" class="text-green-600 hover:underline">cuidadoras</a>, <a href="/servicios/auxiliar-enfermeria-turnos-12-24-horas" class="text-green-600 hover:underline">TENS</a> y <a href="/servicios/enfermeria-a-domicilio-santiago" class="text-green-600 hover:underline">Enfermeras Universitarias</a> que residen o se movilizan eficientemente por todo Quilicura, Valle Lo Campino, Lampa y Colina.</p>
      
      <p class="text-gray-600 mb-6">Ofrecemos:</p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong>Procedimientos Clínicos Rápidos:</strong> Instalación de sueros, curaciones de heridas postoperatorias, sondas e inyecciones a domicilio.</li>
        <li><strong>Turnos de cuidado 24 horas:</strong> Para pacientes postrados, con Alzheimer o alta dependencia.</li>
        <li><strong>Telemedicina:</strong> ¿Necesitas un médico? Te conectamos online y nuestra TENS ejecuta sus indicaciones en casa.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Respaldo Local</h2>
      <p class="text-gray-600 mb-6">Desde 2007 somos la principal agencia de cuidados nacida en la zona norte. Nuestro compromiso es entregar un trato humano y digno, asegurando que tu familiar no sienta que recibe a un extraño, sino a un profesional de salud con vocación. Si una cuidadora enferma, nuestra cercanía nos permite gestionar un reemplazo en tiempo récord.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">Tu agencia de enfermería vecina en Quilicura</p>
        <p class="text-green-700 mt-2">Visítanos, llámanos o <a href="https://wa.me/56998451117" target="_blank" rel="noopener noreferrer" class="underline font-bold">escríbenos por WhatsApp</a>. Estamos listos para cuidar de los tuyos.</p>
      </div>
    `
  },
  {
    slug: "cuidadoras-maipu",
    comunaNombre: "Maipú",
    title: "Cuidadoras a Domicilio en Maipú | SENDO Enfermería",
    metaDescription: "Cuidado profesional de adultos mayores en Maipú. Cuidadoras capacitadas y TENS a domicilio para turnos, procedimientos y acompañamiento.",
    keywords: "cuidadoras maipu, TENS a domicilio maipu, enfermera maipu, agencia cuidado adulto mayor sector poniente, cuidadoras 24 horas maipu",
    heroVideo: "soledad",
    highlights: [
      "Amplia cobertura en todos los sectores de Maipú (Ciudad Satélite, Pajaritos, Centro).",
      "Planes accesibles y personalizados para familias del sector poniente.",
      "Cuidadoras especializadas en pacientes con movilidad reducida.",
      "Manejo de curaciones y curas postoperatorias en domicilio."
    ],
    content: `
      <p class="text-lg text-gray-600 mb-6">En <strong>Maipú</strong>, una de las comunas más grandes de Santiago, la necesidad de servicios de salud domiciliaria confiables es creciente. SENDO Enfermería ha extendido su red de profesionales al sector poniente para asegurar que tu familiar reciba la misma calidad de cuidado de una clínica, pero en su propio hogar.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Servicios Clínicos y de Compañía en Maipú</h2>
      <p class="text-gray-600 mb-4">Cubrimos desde Ciudad Satélite hasta el sector de Pajaritos, Rinconada y el centro de Maipú. Entendemos que las distancias pueden ser un problema para llevar al adulto mayor a un consultorio u hospital, por lo que te ofrecemos:</p>
      
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong><a href="/servicios/cuidadoras-a-domicilio-santiago" class="text-green-600 hover:underline">Cuidadoras Asistenciales:</a></strong> Prevención de caídas, asistencia en higiene, control de medicación oral y acompañamiento empático contra la soledad.</li>
        <li><strong><a href="/servicios/cuidados-postoperatorios-domicilio" class="text-green-600 hover:underline">TENS para Procedimientos:</a></strong> Curación de escaras, manejo de pacientes postrados, control de signos vitales (presión, diabetes) e inyecciones.</li>
        <li><strong><a href="/servicios/telemedicina-consulta-medica-online" class="text-green-600 hover:underline">Consultas Online:</a></strong> Médico telemático para renovar recetas o revisar cuadros clínicos sin salir de Maipú.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">La Importancia de la Formalidad</h2>
      <p class="text-gray-600 mb-6">No entregues las llaves de tu casa y la salud de tu familiar a cualquier persona. El equipo SENDO está compuesto por trabajadores filtrados, con referencias comprobadas y bajo supervisión clínica. Emitimos documentación formal que garantiza la seriedad de nuestro servicio prestado desde el año 2007.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">Profesionales de salud en la puerta de tu casa en Maipú</p>
        <p class="text-green-700 mt-2">¿Necesitas ayuda con un paciente complejo o un adulto mayor? <a href="/#contacto" class="underline font-bold">Solicita tu presupuesto sin compromiso</a>.</p>
      </div>
    `
  },
  {
    slug: "cuidadoras-la-florida",
    comunaNombre: "La Florida",
    title: "Cuidadoras a Domicilio en La Florida | SENDO Enfermería",
    metaDescription: "Servicios de salud a domicilio en La Florida. TENS, cuidadoras de adulto mayor y enfermeras profesionales. Turnos flexibles y atención de calidad.",
    keywords: "cuidadoras la florida, enfermera a domicilio la florida, TENS la florida, agencia cuidadoras sector sur, cuidado adulto mayor",
    heroVideo: "temp",
    highlights: [
      "Despliegue operativo rápido en La Florida, Macul y Peñalolén.",
      "Especialistas en cuidado de pacientes con deterioro cognitivo (Alzheimer).",
      "Control estricto de medicamentos y signos vitales en domicilio.",
      "Asesoría gratuita sobre el equipamiento clínico necesario en casa."
    ],
    content: `
      <p class="text-lg text-gray-600 mb-6">Para las familias de <strong>La Florida</strong> y el sector sur de Santiago, proveer cuidado especializado para un familiar dependiente puede ser estresante. SENDO Enfermería llega a tu comuna con soluciones prácticas, seguras y altamente profesionales para aliviar la carga de cuidado.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Cuidados Domiciliarios en La Florida</h2>
      <p class="text-gray-600 mb-4">Nuestra red de personal de salud tiene cobertura total en La Florida (Vicente Valdés, Rojas Magallanes, Trinidad, San José de la Estrella, etc.). Evaluamos tu necesidad específica para enviar al profesional idóneo:</p>
      
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong><a href="/servicios/auxiliar-enfermeria-turnos-12-24-horas" class="text-green-600 hover:underline">Atención de Pacientes Postrados:</a></strong> TENS capacitados en movilización, prevención de úlceras por presión (escaras) y baño en cama.</li>
        <li><strong><a href="/servicios/cuidado-adulto-mayor-santiago" class="text-green-600 hover:underline">Estimulación Cognitiva:</a></strong> Cuidadoras entrenadas en el manejo de pacientes con Alzheimer, aplicando rutinas que reducen la ansiedad y agresividad.</li>
        <li><strong><a href="/servicios/enfermeria-a-domicilio-santiago" class="text-green-600 hover:underline">Procedimientos Invasivos:</a></strong> Instalación de sondas (Foley, nasogástrica), sueros y curaciones complejas realizadas por Enfermeras Universitarias.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Turnos Adaptables</h2>
      <p class="text-gray-600 mb-6">El cuidado exige descanso. Si tú eres el cuidador principal de tu familiar en La Florida, SENDO te ofrece turnos de respiro (ej. fines de semana o noches) para evitar el colapso del cuidador. Nos adaptamos con turnos de 12 horas o sistema 24/7 rotativo.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">Confianza y alivio para las familias de La Florida</p>
        <p class="text-green-700 mt-2">Danos la oportunidad de cuidar a quien más amas. <a href="/#contacto" class="underline font-bold">Inicia una conversación con nosotros</a>.</p>
      </div>
    `
  },
  {
    slug: "cuidadoras-lo-barnechea",
    comunaNombre: "Lo Barnechea",
    title: "Cuidadoras a Domicilio en Lo Barnechea | SENDO Enfermería",
    metaDescription: "Atención de salud domiciliaria premium en Lo Barnechea. Cuidadoras 24/7, TENS y enfermeras de alta especialización clínica.",
    keywords: "cuidadoras lo barnechea, enfermera a domicilio lo barnechea, cuidado adulto mayor dehesa, agencia enfermeria chicureo dehesa, TENS a domicilio",
    heroVideo: "tomandoprecion",
    highlights: [
      "Cobertura premium en La Dehesa, El Arrayán y todo Lo Barnechea.",
      "Garantizamos movilización de nuestro personal hasta sectores de difícil acceso.",
      "Altos estándares de confidencialidad y ética profesional.",
      "Expertos en recuperación quirúrgica en domicilio."
    ],
    content: `
      <p class="text-lg text-gray-600 mb-6">Las familias de <strong>Lo Barnechea</strong> y La Dehesa valoran la privacidad, el profesionalismo médico y la excelencia en el trato. En SENDO Enfermería hemos perfeccionado un servicio de home care premium que satisface las exigencias de cuidado clínico de alto estándar sin perder el confort del hogar.</p>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Servicios Médicos Premium en Domicilio</h2>
      <p class="text-gray-600 mb-4">Comprendemos que las distancias desde algunos sectores de Lo Barnechea hacia las clínicas pueden ser un factor de riesgo. Llevamos la solución a tu hogar con un equipo altamente filtrado y capacitado:</p>
      
      <ul class="list-disc pl-6 mb-6 text-gray-600 space-y-2">
        <li><strong><a href="/servicios/cuidados-postoperatorios-domicilio" class="text-green-600 hover:underline">Postoperatorio Complejo:</a></strong> Rehabilitación y cuidado clínico tras cirugías mayores, manejo de dolor con analgésicos intravenosos, cuidados de drenajes y prevención de trombosis (con TENS o Enfermera).</li>
        <li><strong><a href="/servicios/auxiliar-enfermeria-turnos-12-24-horas" class="text-green-600 hover:underline">Vigilancia Clínica Continua:</a></strong> Turnos de 12 o 24 horas para pacientes geriátricos con alta dependencia o cuidados paliativos.</li>
        <li><strong><a href="/servicios/telemedicina-consulta-medica-online" class="text-green-600 hover:underline">Soporte Médico y Telemedicina:</a></strong> Nuestro personal en domicilio está respaldado por médicos especialistas online para ajustes inmediatos de tratamiento.</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-700 mb-4">Confidencialidad y Experiencia</h2>
      <p class="text-gray-600 mb-6">Desde 2007 nos hemos caracterizado por el trato ético y reservado del cuadro clínico de nuestros pacientes. Nuestro personal se adapta a las normativas de tu hogar y comunidad, brindando una asistencia silenciosa pero tremendamente efectiva. Resolvemos la logística de turnos para que el paciente siempre esté acompañado, sin que la familia deba preocuparse de la rotación de personal.</p>

      <div class="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
        <p class="text-green-800 font-semibold text-lg">Servicio de salud domiciliario de primer nivel</p>
        <p class="text-green-700 mt-2">Para atención especializada en Lo Barnechea y La Dehesa, <a href="https://wa.me/56998451117" target="_blank" rel="noopener noreferrer" class="underline font-bold">contáctanos directamente por WhatsApp</a>.</p>
      </div>
    `
  }
];
