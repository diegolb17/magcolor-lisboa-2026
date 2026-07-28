// MAGColor Experience Lisboa 2026 — Data

// === SPEAKERS ===
const speakers = [
  { flag: "🇧🇷", country: "Brasil", name: "Andrea Martins", img: "andrea-martins", spec: "Pigmentología y Colorimetría", bio: "Fundadora de MAG Color. Más de 40 años en el mercado. Líder en Latinoamérica con certificación REACH Europa." },
  { flag: "🇪🇸", country: "España", name: "Miriam Alcántara", img: "miriam-alcantara", spec: "Dirección Artística", bio: "+30 años de trayectoria. +30.000 alumnas formadas. Speaker y jurado internacional." },
  { flag: "🇻🇪", country: "Venezuela", name: "Ana Gabriela", img: "ana-gabriela", spec: "Full Lips — Training Látex Labios", bio: "Especialista en técnica de labios completos. Formadora internacional." },
  { flag: "🇧🇷", country: "Brasil", name: "Bianca Tostes", img: "bianca-tostes", spec: "Microblading — Training Látex", bio: "Especialista en microblading. Formadora y competidora internacional." },
  { flag: "🇪🇸", country: "España", name: "Mónica Puga", img: "monica-puga", spec: "Difuminado de Cejas y Ojos", bio: "Especialista en técnicas de difuminado. Natural Bloom Process." },
  { flag: "🇧🇷", country: "Brasil", name: "Ennio Orsini", img: "ennio-orsini", spec: "Donde el Arte Encuentra al Algoritmo — IA", bio: "Especialista en inteligencia artificial aplicada al sector de la micropigmentación." },
  { flag: "🇪🇸", country: "España", name: "Albert Grau", img: "albert-grau", spec: "Aspectos Jurídicos Legales", bio: "Abogado especialista en legislación para el sector de estética y belleza en Europa." },
  { flag: "🇧🇷", country: "Brasil", name: "Sand Guimarães", img: "sand-guimaraes", spec: "Camuflaje de Estrías", bio: "Referencia internacional en camuflaje de estrías y reconstrucción dérmica." },
  { flag: "🇪🇸", country: "España", name: "Isa Cercós", img: "isa-cercos", spec: "Reconstrucción de Areola Mamaria", bio: "Especialista en reconstrucción de areola mamaria. Técnica de alta especialización médica." },
  { flag: "🇧🇷", country: "Brasil", name: "Marcela Macedo", img: "marcela-macedo", spec: "Reconstrucción de Cejas", bio: "Especialista en reconstrucción avanzada de cejas con técnica de hiperrealismo." },
  { flag: "🇧🇷", country: "Brasil", name: "Keli Ribeiro", img: "keli-ribeiro", spec: "Nanoblading de Excelencia", bio: "Especialista en nanoblading y tecnología láser aplicada a la micropigmentación." }
];

const demos = [
  { flag: "🇧🇷", country: "Brasil", name: "Eliane Pinto", img: "eliane-pinto", spec: "Microblading" },
  { flag: "🇧🇷", country: "Brasil", name: "Adriana Matsuoka", img: "adriana-matsuoka", spec: "Capilar" },
  { flag: "🇵🇹", country: "Portugal", name: "Andreia Guerreiro", img: "andreia-guerreiro", spec: "Demostración" },
  { flag: "🇨🇴🇪🇸", country: "Colombia/España", name: "Luis Carlos Ballestas", img: "luis-carlos-ballestas", spec: "Barba" }
];

// === TIERS ===
const tiers = [
  { name: "Basic", desc: "Para profesionales que quieren vivir el evento completo y acceder al contenido esencial.", price: "497 €", includes: ["Acceso a los 2 días completos","Ponencias internacionales","Traducción simultánea portugués-español","Almuerzos día 1 y día 2","Networking","Acceso a la cena cocktail entrega de premios","Kit de bienvenida estándar","Certificado digital de participación","Vale de 497 € en formación"], link: "https://buy.stripe.com/cNifZjdCn2gZ5WqgBH7kc00" },
  { name: "Gold", desc: "Para profesionales que quieren una experiencia más completa, con más valor y beneficios premium.", price: "797 €", badge: "MÁS ELEGIDO", badgeClass: "tier-badge-gold", hl: true, includes: ["Todo lo incluido en Basic","Kit de negocio","Ubicación preferencial","Regalo sorpresa del patrocinador","Certificado físico premium","Vale de 797 € en formación"], link: "https://buy.stripe.com/cNibJ30PB7BjacG7177kc01" },
  { name: "Divine VIP", desc: "Para quien quiere vivir el MAGColor Experience al máximo nivel. Solo 10 plazas.", price: "1.297 €", badge: "SOLO 10 PLAZAS", badgeClass: "tier-badge-red", includes: ["Todo lo incluido en Gold","Primera fila garantida","Divine Night: cena privada VIP","2 noches de alojamiento (doble compartido)","Desayuno en el Hotel HF Fénix Lisboa","Acceso preferencial","Meet & Greet privado con ponentes","Derecho a voto popular en el campeonato","Credencial personalizada","Mesa VIP en la Cena","Vale de 1.297 € en formación"], link: "https://buy.stripe.com/6oUcN769V08RgB43OV7kc02" }
];

// === PROGRAM ===
const day1 = [
  { t:"08:30", d:"60 min", title:"Registro y Welcome Coffee", desc:"Acreditación, entrega de lanyard personalizado negro y dorado con QR del programa. Bolsa de bienvenida en cada silla." },
  { t:"09:00", d:"5 min", star:true, title:"Vídeo Cuenta Regresiva", desc:"En la pantalla aparece una cuenta regresiva de 5 minutos con música potente." },
  { t:"09:05", d:"3 min", star:true, title:"Vídeo Institucional MAG Color Experience", desc:"Primer gran impacto visual y emocional del evento." },
  { t:"09:08", d:"14 min", star:true, title:"Bienvenida Oficial + Miriam Alcántara y Andrea Martins", desc:"Apertura oficial del congreso." },
  { t:"09:22", d:"60 min", title:"Training Látex Labios · Ana Gabriela · 🇻🇪", desc:"Cámara en vivo. Traducción simultánea." },
  { t:"10:22", d:"60 min", title:"Training Látex Microblading · Bianca Tostes · 🇧🇷", desc:"Técnica con camilla, lupa y taburete." },
  { t:"11:22", d:"60 min", title:"Training Látex Difuminado · Mónica Puga · 🇪🇸", desc:"Última ponencia de la mañana." },
  { t:"12:22", d:"60 min", title:"Almuerzo de networking", desc:"Lunch ligero. Detalle dulce sorpresa." },
  { t:"13:22", d:"40 min", title:"Marketing y Ventas · Ennio Orsini · 🇧🇷", desc:"Posicionamiento y negocio para profesionales." },
  { t:"14:02", d:"40 min", title:"Arte y Algoritmo — IA · Ennio Orsini · 🇧🇷", desc:"Inteligencia artificial aplicada al sector." },
  { t:"14:42", d:"30 min", title:"Coffee Break", desc:"Pausa. Detalle dulce sorpresa." },
  { t:"15:12", d:"120 min", star:true, title:"Campeonato en Látex — 3 categorías", desc:"Pelo a Pelo · Difuminado · Labios. Jurados internacionales." },
  { t:"17:12", d:"30 min", star:true, title:"Sorteo y Cierre del Día 1", desc:"Premio especial. Palabras de Miriam Alcántara." }
];
const day2 = [
  { t:"08:30", d:"60 min", star:true, title:"Saxofonista en Vivo", desc:"Saxofonista en directo. Ambiente festivo premium. Dress code: NEGRO Y DORADO." },
  { t:"09:15", d:"3 min", star:true, title:"Vídeo Cuenta Regresiva + Vídeo MAG Color", desc:"El Día 2 arranca con la misma energía del Día 1." },
  { t:"09:28", d:"57 min", star:true, title:"Pigmentología y Colorimetría · Andrea Martins · 🇧🇷", desc:"La ponencia de mayor peso académico del congreso." },
  { t:"10:25", d:"50 min", title:"Aspectos Jurídicos · Albert Grau · 🇪🇸", desc:"Información esencial para el mercado europeo." },
  { t:"11:15", d:"50 min", title:"Camuflaje de Estrías · Sand Guimarães · 🇧🇷", desc:"Técnica avanzada de camuflaje." },
  { t:"12:05", d:"50 min", title:"Reconstrucción de Areola Mamaria · Isa Cercós · 🇪🇸", desc:"Sesión de alta especialización médica." },
  { t:"12:55", d:"60 min", title:"Almuerzo de networking", desc:"Lunch ligero." },
  { t:"13:55", d:"50 min", title:"Reconstrução de Cejas · Marcela Macedo · 🇧🇷", desc:"Técnica avanzada de reconstrucción." },
  { t:"14:45", d:"50 min", title:"Láser en Micropigmentación · Keli Ribeiro · 🇧🇷", desc:"Tecnología láser aplicada." },
  { t:"15:35", d:"120 min", star:true, title:"Demostraciones Prácticas en Vivo", desc:"5 artistas en 5 estaciones simultáneas." },
  { t:"18:30", d:"120 min", star:true, title:"Cena Blanca de Gala — Premiación", desc:"Dress code: NEGRO Y DORADO. Mesa VIP. Trofeos." },
  { t:"20:30", d:"30 min", star:true, title:"Cierre Final", desc:"Palabras finales. Anuncio de la próxima edición europea." }
];
const divineNight = [
  { t:"21:00", star:true, title:"Divine Night — Cena Privada VIP", desc:"Solo para las 10 participantes con entrada Divine VIP. Cena íntima con Miriam Alcántara, Andrea Martins y los ponentes del congreso. Recepción con cóctel." }
];

// === FAQ ===
const faqs = [
  { q:"¿Qué incluye cada tipo de entrada?", a:"Todas las entradas incluyen acceso a los 2 días de evento, ponencias internacionales, traducción simultánea, almuerzos, coffee breaks, acceso a la Cena Blanca de Gala, kit de bienvenida y certificado. Las diferencias están en los beneficios adicionales de cada categoría (Gold y Divine VIP)." },
  { q:"¿El alojamiento está incluido?", a:"El alojamiento está incluido solo en la entrada Divine VIP (2 noches en habitación doble compartida con desayuno en el Hotel HF Fénix Lisboa). Para las demás categorías, ofrecemos un enlace con descuento exclusivo para participantes." },
  { q:"¿Habrá traducción simultánea?", a:"¡Sí! El evento tendrá traducción simultánea portugués-español en todas las ponencias. Un traductor profesional estará en la sala con micrófono propio." },
  { q:"¿Cómo funciona el Campeonato?", a:"El campeonato tiene 3 categorías: Pelo a Pelo, Difuminado de Cejas y Labios. Las participantes compiten en vivo. Un jurado internacional evalúa cada trabajo y las ganadoras son premiadas en la Cena Blanca de Gala con trofeos, reconocimiento y visibilidad internacional." },
  { q:"¿Cuáles son las formas de pago?", a:"Aceptamos pago online vía Stripe (tarjeta de crédito/débito) y también transferencia bancaria o Bizum para las 20 primeras entradas con descuento exclusivo." },
  { q:"¿Cuál es la política de cancelación?", a:"Cancelación hasta 60 días antes del evento: reembolso del 50%. Después de ese plazo, sin reembolso. La plaza es transferible: puedes ceder tu entrada a otra profesional con 7 días de antelación." },
  { q:"¿Cómo funciona el vale formativo?", a:"Cada entrada incluye un vale formativo equivalente (Basic: 497 €, Gold: 797 €, Divine VIP: 1.297 €) aplicable íntegramente en programas de formación del Instituto Miriam Alcántara." }
];

// === RENDER ===
function renderSpeakers() {
  const grid = document.getElementById('sp-grid');
  if (!grid) return;
  grid.innerHTML = speakers.map(s => `<div class="sp-card"><div class="sp-photo" style="background-image:url('/assets/speakers/${s.img}.jpg');background-size:cover;background-position:center"></div><div class="sp-body"><p class="sp-title">${s.name}</p><p class="sp-spec-detail">${s.spec}</p><p class="sp-bio">${s.bio}</p></div></div>`).join('');
  const demosGrid = document.getElementById('demos-grid');
  if (!demosGrid) return;
  demosGrid.innerHTML = demos.map(d => `<div class="card center speaker"><img src="/assets/speakers/${d.img}.jpg" class="avatar" alt="${d.name}" style="object-fit:cover" onerror="this.style.display='none'"><p class="sp-name">${d.name}</p><p class="sp-spec">${d.spec}</p></div>`).join('');
}

function renderTiers() {
  const container = document.getElementById('tiers');
  if (!container) return;
  container.innerHTML = tiers.map(t => {
    const badge = t.badge ? `<span class="tier-badge ${t.badgeClass}">${t.badge}</span>` : '';
    const includes = t.includes.map(i => `<li><span class="chk">✓</span> ${i}</li>`).join('');
    const excludes = t.excludes.length ? `<ul class="tier-list">${t.excludes.map(e => `<li class="ex"><span class="dash">—</span> ${e}</li>`).join('')}</ul>` : '';
    return `<div class="tier${t.hl?' tier-hl':''}">${badge}<h3 class="tier-name">${t.name}</h3><p class="tier-desc">${t.desc}</p><div class="tier-price">${t.price}</div><ul class="tier-list">${includes}</ul>${excludes}<a href="${t.link}" target="_blank" rel="noopener" class="btn btn-gold tier-btn">Comprar ${t.name}</a></div>`;
  }).join('');
}

function renderTimeline(containerId, data) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.className = 'timeline';
  el.innerHTML = data.map(s => `<div class="tl-item"><div class="tl-time"><div class="tl-hour">${s.t}</div>${s.d?`<div class="tl-dur">${s.d}</div>`:''}</div><div class="tl-line"><div class="tl-dot"></div></div><div class="tl-body"><h4 class="tl-title">${s.star?'<span class="tl-star">✦</span>':''}${s.title}</h4><p class="tl-desc">${s.desc}</p></div></div>`).join('');
}

function renderFAQ() {
  const el = document.getElementById('faq-list');
  if (!el) return;
  el.innerHTML = faqs.map((f, i) => `<div class="faq-item${i===0?' open':''}"><button class="faq-q" onclick="this.parentElement.classList.toggle('open')"><span>${f.q}</span><span class="faq-chev">${i===0?'−':'+'}</span></button><div class="faq-a-wrap"><p class="faq-a">${f.a}</p></div></div>`).join('');
}

function switchTab(t) {
  ['d1','d2','dn'].forEach(id => {
    const tab = document.querySelector(`[onclick="switchTab('${id}')"]`);
    if (tab) tab.classList.toggle('tab-active', id === t);
    const tl = document.getElementById('tl-'+id);
    if (tl) tl.style.display = id === t ? '' : 'none';
  });
}

// Init
renderSpeakers();
renderTiers();
renderTimeline('tl-d1', day1);
renderTimeline('tl-d2', day2);
renderTimeline('tl-dn', divineNight);
renderFAQ();
