<script lang="ts">
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  // Firestore
  import {
    collection,
    addDoc,
    onSnapshot,
    query,
    orderBy,
    serverTimestamp,
  } from "firebase/firestore";
  import { db } from "$lib/firebase";
  // Componentes
  import ModalInfo from "$lib/components/ModalInfo.svelte";
  // EmailJS (carga en cliente para evitar SSR issues)
  let emailjs: any = null;
  if (browser) {
    import("emailjs-com").then((m) => (emailjs = m.default ?? m));
  }

  // Form contacto
  let nombre = "";
  let email = "";
  let mensaje = "";
  let enviado = false;

  // Modal
  type ModalData = {
    titulo: string;
    videoBase?: string;
    contenido: string;
  } | null;
  let modalData: ModalData = null;

  // Form testimonios
  let testimonioNombre = "";
  let testimonioComentario = "";
  let testimonioRating: number = 5;
  let testimonioEnviado = false;

  // Lista de testimonios desde Firestore
  let testimonios: Array<any> = [];
  // ESC para cerrar
  function onKeydown(e: KeyboardEvent) {
    if (e.key === "Escape" && modalData) cerrarModal();
  }

  onMount(() => {
    if (browser) window.addEventListener("keydown", onKeydown);

    const q = query(
      collection(db, "testimonios"),
      orderBy("createdAt", "desc"),
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      testimonios = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });

    return () => {
      if (browser) window.removeEventListener("keydown", onKeydown);
      unsubscribe();
    };
  });
  function abrirModal(item: {
    title?: string;
    titulo?: string;
    videoBase?: string;
    contenido: string;
  }) {
    modalData = {
      titulo: item.title ?? item.titulo ?? "Detalle",
      videoBase: item.videoBase,
      contenido: item.contenido,
    };
  }

  function cerrarModal() {
    modalData = null;
  }

  const enviarCorreo = async (e: Event) => {
    e.preventDefault();
    try {
      if (!browser || !emailjs) throw new Error("EmailJS no disponible");
      await emailjs.send(
        "service_jqj5141",
        "template_rp7gvfi",
        { nombre, email, mensaje },
        "BCB_XP5C0iEhCvGJ7",
      );
      await emailjs.send(
        "service_jqj5141",
        "template_azju3l8",
        { nombre, email, mensaje },
        "BCB_XP5C0iEhCvGJ7",
      );
      enviado = true;
      nombre = email = mensaje = "";
      setTimeout(() => (enviado = false), 3500);
    } catch (error) {
      console.error("Error al enviar", error);
      alert("Error al enviar el mensaje.");
    }
  };

  const enviarTestimonio = async (e: Event) => {
    e.preventDefault();
    if (testimonioNombre && testimonioComentario) {
      try {
        await addDoc(collection(db, "testimonios"), {
          quote: testimonioComentario.trim(),
          author: testimonioNombre.trim(),
          rating: Number(testimonioRating) || 5,
          createdAt: serverTimestamp(),
          approved: false, // Para moderación
        });
        testimonioEnviado = true;
        testimonioNombre = "";
        testimonioComentario = "";
        testimonioRating = 5;
        setTimeout(() => (testimonioEnviado = false), 3000);
      } catch (error) {
        console.error("Error al enviar testimonio", error);
        alert("Error al enviar el testimonio.");
      }
    }
  };

  // TEXTOS DE SERVICIOS ACTUALIZADOS (Directos + Cierre con experiencia)
  const servicios = [
    {
      icon: "👩‍⚕️",
      title: "Cuidadoras a Domicilio",
      desc: "Atención integral, administración de medicamentos, compañía y cuidado 24/7 en Santiago.",
      videoBase: "/temp",
      contenido: `
        <p>El cuidado en casa requiere más que buenas intenciones; exige conocimientos técnicos y dedicación. Nuestro servicio incluye:</p>
        <ul class="list-disc pl-5 space-y-1 mt-2">
          <li>Administración profesional de medicamentos (oral, inyectable, etc.).</li>
          <li>Control riguroso de signos vitales.</li>
          <li>Manejo de oxigenoterapia y nebulización.</li>
          <li>Prevención y curación de úlceras por presión.</li>
          <li>Aseo, confort y apoyo clínico constante.</li>
        </ul>
        <p class="mt-4 font-semibold text-green-800">Entendemos la complejidad de las enfermedades crónicas y los postoperatorios. Por eso, en SENDO ponemos a tu disposición cuidadoras con experiencia para garantizar la seguridad clínica y emocional que tu familia necesita.</p>
      `,
    },
    {
      icon: "🧪",
      title: "Procedimientos de Enfermería",
      desc: "Instalación de sondas, manejo de ostomías y tratamientos endovenosos por expertos.",
      videoBase: "/suero",
      contenido: `
        <p>Ciertos tratamientos médicos no pueden dejarse al azar. Realizamos procedimientos complejos en la comodidad del hogar:</p>
        <ul class="list-disc pl-5 space-y-1 mt-2">
          <li>Instalación y manejo de sondas (urinarias, nasogástricas, PEG).</li>
          <li>Cuidados de colostomías y traqueostomías.</li>
          <li>Tratamientos endovenosos y manejo de vías.</li>
        </ul>
        <p class="mt-4 font-semibold text-green-800">Evita traslados innecesarios y riesgos de infección intrahospitalaria. Nuestro equipo de enfermería lleva la clínica a tu casa con la seguridad y esterilidad que el paciente requiere.</p>
      `,
    },
  ];

  // TEXTOS DE ARTÍCULOS ACTUALIZADOS (Problema -> Solución SENDO)
  const articulos = [
    {
      titulo: "El hogar como espacio terapéutico",
      videoBase: "/terapia",
      contenido: `
        <p>Está demostrado que el entorno familiar reduce el estrés, disminuye el riesgo de infecciones hospitalarias y acelera la recuperación anímica del paciente.</p>
        <p class="mt-3 font-semibold text-green-800">En SENDO potenciamos estos beneficios llevando la atención profesional directamente a tu puerta, transformando tu hogar en el lugar más seguro y cómodo para sanar.</p>
      `,
    },
    {
      titulo: "¿Cuándo buscar ayuda profesional?",
      videoBase: "/medidorpresion",
      contenido: `
        <p>Cuando actividades básicas como bañarse, vestirse o administrarse medicamentos se vuelven un riesgo o una carga excesiva para la familia, es momento de actuar.</p>
        <p class="mt-3 font-semibold text-green-800">No esperes a que ocurra un accidente. Nuestra experiencia de más de 18 años nos permite intervenir a tiempo, devolviendo la tranquilidad a la familia y la dignidad al paciente.</p>
      `,
    },
    {
      titulo: "Combatir la soledad y el deterioro",
      videoBase: "/soledad",
      contenido: `
        <p>La soledad en la vejez es un factor crítico que acelera el deterioro cognitivo y la depresión. El aislamiento es tan peligroso como una enfermedad física.</p>
        <p class="mt-3 font-semibold text-green-800">Nuestras cuidadoras no son solo asistencia física; son compañía, conversación y contención. En SENDO cuidamos la salud emocional porque sabemos que es vital para la calidad de vida.</p>
      `,
    },
  ];
</script>

<svelte:head>
  <title>SENDO - Enfermería y Cuidadoras a Domicilio en Santiago Oriente</title>
  
  <meta
    name="description"
    content="Servicios de enfermería y cuidadoras a domicilio en Las Condes, Vitacura, Lo Barnechea y todo Santiago. Más de 18 años de experiencia en cuidado de adulto mayor."
  />
  <meta
    name="keywords"
    content="enfermeria a domicilio, cuidadoras a domicilio, santiago, adulto mayor, postoperatorio, sondas, tratamientos endovenosos, enfermeras santiago, SENDO, cuidados tercera edad, las condes, vitacura, lo barnechea, ñuñoa"
  />
  <meta name="robots" content="index, follow" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charset="UTF-8" />
  <meta name="author" content="SENDO" />
  <meta name="geo.region" content="CL-RM" />
  <meta name="geo.placename" content="Santiago, Chile" />
  <meta name="geo.position" content="-33.4489;-70.6693" />
  <meta name="ICBM" content="-33.4489, -70.6693" />
  <link rel="canonical" href="https://www.enfermeriasendo.cl" />
  <meta
    property="og:title"
    content="SENDO - Experiencia en Cuidadoras a Domicilio"
  />
  <meta
    property="og:description"
    content="Atención profesional 24/7 en el hogar. Expertos en adulto mayor y procedimientos de enfermería en sector oriente y Santiago."
  />
  <meta
    property="og:image"
    content="https://www.enfermeriasendo.cl/logo3.jpg"
  />
  <meta property="og:url" content="https://www.enfermeriasendo.cl" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="es_CL" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="SENDO - Cuidadoras y Enfermería en Santiago"
  />
  <meta
    name="twitter:description"
    content="Más de 18 años cuidando a adultos mayores en Santiago. Contacto inmediato."
  />
  <meta
    name="twitter:image"
    content="https://www.enfermeriasendo.cl/og-image.jpg"
  />

  <link
    rel="preload"
    href="/abuela_computador.mp4"
    as="video"
    type="video/mp4"
  />
  <link rel="preload" href="/logo3.jpg" as="image" />

  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />

  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": "SENDO - Servicios de Enfermería a domicilio",
      "image": "https://www.enfermeriasendo.cl/logo4.png",
      "url": "https://www.enfermeriasendo.cl",
      "telephone": "+56998451117",
      "email": "sendo.eirl@gmail.com",
      "areaServed": [
        { "@type": "City", "name": "Las Condes" },
        { "@type": "City", "name": "Vitacura" },
        { "@type": "City", "name": "Lo Barnechea" },
        { "@type": "City", "name": "La Reina" },
        { "@type": "City", "name": "Ñuñoa" },
        { "@type": "City", "name": "Chicureo" },
        { "@type": "City", "name": "Santiago" }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Santiago",
        "addressRegion": "Región Metropolitana",
        "addressCountry": "CL"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -33.4489,
        "longitude": -70.6693
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "priceRange": "$$",
      "description": "Servicios de enfermería y cuidadoras a domicilio en Santiago. Atención 24/7 con más de 18 años de experiencia."
    }
  </script>
</svelte:head>

<section
  id="hero"
  class="relative min-h-screen flex items-center justify-center text-center px-4 py-16 overflow-hidden"
>
  <video
    autoplay
    loop
    muted
    playsinline
    class="absolute top-0 left-0 w-full h-full object-cover z-0"
    aria-hidden="true"
    preload="auto"
  >
    <source src="/abuela_computador.webm" type="video/webm" />
    <source src="/abuela_computador.mp4" type="video/mp4" />
  </video>
  <div
    class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent z-10"
  ></div>
  <div
    data-aos="fade-up"
    class="relative z-20 max-w-4xl mx-auto text-white px-4"
  >
    <img
      src="/logo3.jpg"
      alt="Logo de SENDO Enfermería Domiciliaria"
      class="mx-auto rounded-full mb-6 h-54 w-auto drop-shadow-lg"
    />
    <h1
      class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg"
    >
      Bienvenidos a <span class="text-green-400">SENDO</span>
    </h1>
    <p class="text-lg md:text-2xl mb-2 drop-shadow">
      Especialistas en el cuidado del <span class="text-green-300 font-semibold">Adulto Mayor</span> a domicilio
    </p>
    <p class="text-lg md:text-2xl mb-10 drop-shadow">Trayectoria y Confianza desde 2007</p>
    <a
      href="#servicios"
      class="inline-flex items-center gap-3 px-8 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition text-lg font-semibold"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
      Conoce nuestros servicios
    </a>
  </div>
</section>

<section class="py-20 bg-blue-50 px-4" aria-labelledby="beneficios-title">
  <h2
    id="beneficios-title"
    class="text-3xl md:text-5xl font-bold text-center text-green-600 mb-12"
    data-aos="fade-up"
  >
    ¿Por qué elegir SENDO?
  </h2>
  <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {#each ["Atención 24/7 en todo Santiago Oriente y alrededores", "Personal rigurosamente seleccionado y calificado", "Trato humano, cálido y personalizado", "Planes flexibles según la necesidad del paciente"] as beneficio, index}
      <div
        class="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md border border-blue-100"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <span class="text-xl text-green-600" aria-hidden="true">✅</span>
        <p class="text-gray-700 text-md">{beneficio}</p>
      </div>
    {/each}
  </div>
</section>

<section id="quienes" class="py-20 bg-white px-4" aria-labelledby="quienes-title">
  <div class="max-w-4xl mx-auto text-center" data-aos="fade-up">
    <h2 id="quienes-title" class="text-3xl md:text-5xl font-bold text-green-600 mb-6">
      Quiénes Somos
    </h2>
    <div class="text-base md:text-lg text-gray-600 leading-relaxed space-y-4">
      <p>
        En <span class="font-semibold text-green-600">SENDO</span> contamos con más de <strong class="text-green-700">18 años de experiencia</strong> brindando seguridad y bienestar en el hogar. Nos especializamos en la atención del adulto mayor en comunas como Las Condes, Vitacura, Lo Barnechea, La Reina, Ñuñoa y Chicureo.
      </p>
      <p>
        Sabemos que cada paciente es único. Por eso, nuestro equipo combina capacidad técnica con una profunda calidad humana para asistir en la rutina diaria, terapias y acompañamiento.
      </p>
      <p>
        <strong>¿Por qué nosotros?</strong> Porque entendemos que la salud no espera. Disponemos de equipos especializados y personal con larga trayectoria para realizar desde cuidados básicos hasta hospitalización domiciliaria compleja. Esa experiencia es nuestra garantía de tranquilidad para tu familia.
      </p>
    </div>
  </div>
</section>

<section
  id="servicios"
  class="relative py-20 px-4 overflow-hidden"
  aria-labelledby="servicios-title"
>
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute top-0 left-0 w-full h-full object-cover z-0"
    aria-hidden="true"
    preload="none"
  >
    <source src="/tomandoprecion.webm" type="video/webm" />
    <source src="/tomandoprecion.mp4" type="video/mp4" />
  </video>
  <div class="absolute inset-0 bg-black/40 z-0"></div>
  <div class="relative z-10 text-green-400">
    <h2
      id="servicios-title"
      class="text-3xl md:text-5xl font-bold text-center mb-12"
      data-aos="fade-up"
    >
      Nuestros Servicios
    </h2>
    <div class="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
      {#each servicios as servicio, index}
        <div
          class="bg-white/90 text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 border border-gray-100 backdrop-blur-md cursor-pointer"
          on:click={() => abrirModal(servicio)}
          on:keydown={(e) => e.key === "Enter" && abrirModal(servicio)}
          role="button"
          tabindex="0"
          data-aos="fade-up"
          data-aos-delay={index * 100}
          aria-label={`Más información sobre ${servicio.title}`}
        >
          <div class="text-4xl mb-4" aria-hidden="true">{servicio.icon}</div>
          <h3 class="text-lg font-semibold mb-2">{servicio.title}</h3>
          <p class="text-md">{servicio.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-20 bg-gray-50 px-4" aria-labelledby="articulos-title">
  <h2
    id="articulos-title"
    class="text-3xl md:text-5xl font-bold text-center text-green-600 mb-12"
    data-aos="fade-up"
  >
    Calidad de Vida en el Hogar
  </h2>
  <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {#each articulos as articulo (articulo.titulo)}
      <div
        role="button"
        tabindex="0"
        on:click={() => abrirModal(articulo)}
        on:keydown={(e) => e.key === "Enter" && abrirModal(articulo)}
        class="cursor-pointer bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border border-gray-200"
        data-aos="fade-up"
        data-aos-delay="100"
        aria-label={`Más información sobre ${articulo.titulo}`}
      >
        <h3 class="text-lg font-semibold text-gray-900 mb-2">
          {articulo.titulo}
        </h3>
        <p class="text-md text-green-700">Leer más sobre nuestra visión.</p>
      </div>
    {/each}
  </div>
</section>

<section
  class="relative py-20 px-4 overflow-hidden"
  aria-labelledby="testimonios-title"
>
  <video
    autoplay
    muted
    loop
    playsinline
    class="absolute top-0 left-0 w-full h-full object-cover z-0"
    aria-hidden="true"
    preload="none"
  >
    <source src="/testimonio.webm" type="video/webm" />
    <source src="/testimonio.mp4" type="video/mp4" />
  </video>
  <div class="absolute inset-0 bg-black/50 z-0"></div>
  <div class="relative z-10 text-white">
    <h2
      id="testimonios-title"
      class="text-3xl md:text-5xl font-bold text-center mb-12 text-green-400"
      data-aos="fade-up"
    >
      Lo que dicen las familias
    </h2>
    <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      {#each testimonios as testimonio, index}
        {#if testimonio.approved}
          <blockquote
            class="bg-white/90 text-gray-800 p-6 rounded-xl shadow border-l-4 border-green-400 backdrop-blur-md"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <p class="italic mb-2 text-md">“{testimonio.quote}”</p>

            <div class="flex items-center gap-2 mb-2">
              {#each Array(Number(testimonio.rating) || 0) as _, i}
                <svg
                  class="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.46 8.397c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.97z"
                  />
                </svg>
              {/each}
            </div>
            <footer class="text-xs text-green-800">
              – {testimonio.author}
            </footer>
          </blockquote>
        {/if}
      {/each}
    </div>

    <div
      class="max-w-xl mx-auto mt-12 bg-white/90 p-6 rounded-xl shadow-lg border border-gray-100 backdrop-blur-md"
      data-aos="fade-up"
      data-aos-delay="200"
      aria-labelledby="nuevo-testimonio-title"
    >
      <h3
        id="nuevo-testimonio-title"
        class="text-xl font-semibold text-gray-800 mb-4"
      >
        Comparte tu experiencia
      </h3>
      {#if testimonioEnviado}
        <p class="text-green-600 font-medium mb-4" role="alert">
          ¡Testimonio enviado con éxito! Pendiente de aprobación.
        </p>
      {/if}
      <form
        on:submit|preventDefault={enviarTestimonio}
        class="space-y-4"
        aria-label="Formulario para enviar testimonio"
      >
        <input
          type="text"
          bind:value={testimonioNombre}
          placeholder="Tu nombre"
          required
          class="w-full px-4 py-3 text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          aria-label="Nombre para el testimonio"
        />
        <textarea
          bind:value={testimonioComentario}
          placeholder="Tu comentario"
          required
          class="w-full px-4 py-3 text-gray-800 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-y"
          rows="4"
          aria-label="Comentario para el testimonio"
        ></textarea>
        <div>
          <label
            for="rating"
            class="block text-sm font-medium text-gray-700 mb-1"
            >Calificación</label
          >
          <select
            bind:value={testimonioRating}
            id="rating"
            class="w-full px-4 py-3 border text-gray-800 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            on:change={(e) =>
              (testimonioRating = Number(
                (e.target as HTMLSelectElement).value,
              ))}
            aria-label="Calificación del servicio"
          >
            <option value={5}>5 Estrellas</option>
            <option value={4}>4 Estrellas</option>
            <option value={3}>3 Estrellas</option>
            <option value={2}>2 Estrellas</option>
            <option value={1}>1 Estrella</option>
          </select>
        </div>
        <button
          type="submit"
          class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium"
          >Enviar Testimonio</button
        >
      </form>
    </div>
  </div>
</section>

<section
  id="contacto"
  class="py-20 bg-white px-4"
  aria-labelledby="contacto-title"
>
  <div class="max-w-3xl mx-auto text-center" data-aos="fade-up">
    <h2
      id="contacto-title"
      class="text-3xl md:text-5xl font-bold text-green-600 mb-6"
    >
      Hablemos
    </h2>
    <p class="text-gray-600 mb-8 text-base md:text-lg">
      ¿Necesitas agendar una visita o resolver dudas? Estamos disponibles para ti.
      Contáctanos por WhatsApp, correo o formulario.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4 mb-10">
      <a
        href="https://wa.me/56998451117"
        target="_blank"
        class="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 flex items-center gap-2 transition"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M20.52 3.48a11.998 11.998 0 0 0-16.96 0 11.998 11.998 0 0 0 0 16.96l-1.4 4.9 4.9-1.4a11.998 11.998 0 0 0 16.96-16.96zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1.2-5.9l-.9-2.6c-.1-.2-.2-.4-.4-.5s-.3-.2-.5-.2c-.3 0-.6.1-.8.4-.2.3-.3.6-.3 1 0 .5.2 1 .6 1.4l2.7 2.7c.4.4.9.6 1.4.6.4 0 .7-.1 1-.3.3-.2.5-.5.5-.8 0-.2-.1-.4-.2-.5l-2.6-.9z"
          />
        </svg>
        WhatsApp
      </a>
      <a
        href="mailto:sendo.eirl@gmail.com"
        class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 flex items-center gap-2 transition"
        aria-label="Enviar correo electrónico"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 12H8m8 0l-4 4m4-4l-4-4"
          />
        </svg>
        Enviar correo
      </a>
    </div>
    {#if enviado}
      <p class="text-green-600 font-medium text-center mb-6" role="alert">
        ¡Mensaje enviado con éxito!
      </p>
    {/if}
    <form
      on:submit|preventDefault={enviarCorreo}
      class="bg-white p-6 rounded-xl shadow-lg max-w-xl mx-auto space-y-4 border border-gray-100"
      aria-label="Formulario de contacto"
    >
      <input
        type="text"
        bind:value={nombre}
        placeholder="Nombre"
        required
        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        aria-label="Nombre completo"
      />
      <input
        type="email"
        bind:value={email}
        placeholder="Correo electrónico"
        required
        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        aria-label="Correo electrónico"
      />
      <textarea
        bind:value={mensaje}
        placeholder="¿En qué podemos ayudarte?"
        required
        class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-y"
        rows="4"
        aria-label="Mensaje"
      ></textarea>
      <button
        type="submit"
        class="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-medium"
        >Enviar Mensaje</button
      >
    </form>
  </div>
</section>

<section class="py-10 bg-white text-center">
  <h3 class="text-2xl font-bold text-green-600 mb-4">
    Cobertura en Santiago Oriente
  </h3>
  <p class="text-gray-600 max-w-3xl mx-auto px-4">
    Llegamos rápidamente a <strong
      >Las Condes, Vitacura, Lo Barnechea, La Reina, Providencia, Ñuñoa y Chicureo</strong
    >. Consultar por otras comunas.
  </p>
</section>

<footer class="bg-green-900 text-white py-12 px-4" aria-label="Pie de página">
  <div
    class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left"
  >
    <div class="flex flex-col items-center md:items-start">
      <h3 class="text-xl font-bold text-green-400 mb-2">SENDO</h3>
      <p class="text-sm text-white">Expertos en cuidados a domicilio</p>
      <p class="text-sm text-white mt-4">
        © {new Date().getFullYear()} SENDO. Todos los derechos reservados.
      </p>
    </div>
    <div>
      <h4 class="text-xl font-bold mb-4 text-green-400">Navegación</h4>
      <ul class="space-y-2">
        <li>
          <a
            href="#hero"
            class="text-white hover:text-green-400 transition text-md">Inicio</a
          >
        </li>
        <li>
          <a
            href="#servicios"
            class="text-white hover:text-green-400 transition text-md"
            >Servicios</a
          >
        </li>
        <li>
          <a
            href="#quienes"
            class="text-white hover:text-green-400 transition text-md"
            >Nosotros</a
          >
        </li>
        <li>
          <a
            href="#contacto"
            class="text-white hover:text-green-400 transition text-md"
            >Contacto</a
          >
        </li>
      </ul>
    </div>
    <div>
      <h4 class="text-xl font-bold mb-4 text-green-400">Contáctanos</h4>
      <ul class="space-y-2 text-white">
        <li class="flex items-center justify-center md:justify-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 text-green-400"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <a
            href="https://maps.app.goo.gl/"
            target="_blank"
            class="hover:text-green-400 transition text-md">Santiago, Chile</a
          >
        </li>
        <li class="flex items-center justify-center md:justify-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 text-green-400"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <a
            href="mailto:sendo.eirl@gmail.com"
            class="hover:text-green-400 transition text-md"
            >sendo.eirl@gmail.com</a
          >
        </li>
        <li class="flex items-center justify-center md:justify-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 text-green-400"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
          <a
            href="tel:+56998451117"
            class="hover:text-green-400 transition text-md">+56 9 9845 1117</a
          >
        </li>
        <li class="flex items-center justify-center md:justify-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-4 h-4 text-green-400"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <a
            href="https://wa.me/56998451117"
            target="_blank"
            class="hover:text-green-400 transition text-md">WhatsApp</a
          >
        </li>
      </ul>
      <div class="mt-6 flex justify-center md:justify-start gap-4">
        <a
          href="https://www.facebook.com/pages/Sendo/107147515985494/"
          target="_blank"
          class="text-gray-400 hover:text-green-400 transition"
          aria-label="Facebook de SENDO"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.297c0-.968.784-1.703 1.75-1.703h2.25v-4h-2.25c-2.206 0-4 1.794-4 4v1h-3v4z"
            />
          </svg>
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          class="text-gray-400 hover:text-green-400 transition"
          aria-label="Instagram de SENDO"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.326 3.608 1.301.975.975 1.239 2.242 1.301 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.239-3.608 1.301-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.239-2.242-1.301-3.608-.058-1.28-.072-1.688-.072-4.947s.014-3.667.072-4.947c.073-1.629.468-3.027 1.56-4.119 1.092-1.092 2.49-1.487 4.119-1.56 1.28-.058 1.688-.072 4.947-.072s3.667-.014 4.947-.072c1.629-.073 3.027-.468 4.119-1.56 1.092-1.092 1.487-2.49 1.56-4.119.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.073-1.629-.468-3.027-1.56-4.119-1.092-1.092-2.49-1.487-4.119-1.56-1.28-.058-1.688-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.324c-2.299 0-4.162-1.863-4.162-4.162S9.701 7.838 12 7.838s4.162 1.863 4.162 4.162S14.299 16.162 12 16.162zm4.406-10.406c0 .796-.645 1.441-1.441 1.441s-1.441-.645-1.441-1.441.645-1.441 1.441-1.441 1.441.645 1.441 1.441z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <div
    class="text-center text-sm text-white-500 mt-10 border-t border-green-700 pt-4"
  >
    © {new Date().getFullYear()}
    <a
      href="https://ccsolution.cl"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:underline hover:text-green-300"
    >
      CC IT&Solutions
    </a>. Todos los derechos reservados.
  </div>
</footer>

{#if modalData}
  <ModalInfo {modalData} on:close={cerrarModal} />
{/if}

<style>
  :global(body) {
    font-family: "Poppins", sans-serif;
  }
  :global([data-aos]) {
    opacity: 1 !important;
    transform: none !important;
  }
</style>