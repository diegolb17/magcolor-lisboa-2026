// MAGColor Experience Lisboa 2026 — Data

// === SPEAKERS ===
const speakers = [
  { flag: "🇧🇷", country: "Brasil", name: "Andrea Martins", img: "andrea-martins-v2", spec: "Pigmentología y Colorimetría", bio: "Fundadora de MAG Color. Más de 40 años en el mercado. Líder en Latinoamérica con certificación REACH Europa." },
  { flag: "🇪🇸", country: "España", name: "Miriam Alcántara", img: "miriam-alcantara", spec: "Dirección Artística", bio: "+30 años de trayectoria. +30.000 alumnas formadas. Speaker y jurado internacional." },
  { flag: "🇻🇪", country: "Venezuela", name: "Ana Gabriela", img: "ana-gabriela-v2", spec: "Full Lips — Training Látex Labios", bio: "Especialista en técnica de labios completos. Formadora internacional." },
  { flag: "🇧🇷", country: "Brasil", name: "Bianca Tostes", img: "bianca-tostes-v2", spec: "Microblading — Training Látex", bio: "Especialista en microblading. Formadora y competidora internacional." },
  { flag: "🇪🇸", country: "España", name: "Mónica Puga", img: "monica-puga-v2", spec: "Natural Bloom Process — Cejas difuminadas", bio: "Especialista en técnicas de difuminado. Natural Bloom Process." },
  { flag: "🇮🇹", country: "Italia", name: "Ennio Orsini", img: "ennio-orsini-v2", spec: "Donde el arte se encuentra con el algoritmo", bio: "Especialista en inteligencia artificial aplicada al sector de la micropigmentación." },
  { flag: "🇪🇸", country: "España", name: "Albert Grau", img: "albert-grau-v2", spec: "Aspectos legales del sector", bio: "Empresario con más de 30 años en el sector sanitario relacionado con la micropigmentación, el tattoo y el piercing. Fundador de su propia escuela en Barcelona, guía y orienta a los profesionales en el sistema legal actual." },
  { flag: "🇧🇷", country: "Brasil", name: "Sand Guimarães", img: "sand-guimaraes-v2", spec: "Camuflaje de Estrías", bio: "Referencia internacional en camuflaje de estrías y reconstrucción dérmica." },
  { flag: "🇪🇸", country: "España", name: "Isa Cercós", img: "isa-cercos-v2", spec: "Reconstrucción de Areola Mamaria", bio: "Especialista en reconstrucción de areola mamaria. Técnica de alta especialización médica." },
  { flag: "🇧🇷", country: "Brasil", name: "Marcela Macedo", img: "marcela-macedo", spec: "Reconstrucción de Cejas", bio: "Especialista en reconstrucción avanzada de cejas con técnica de hiperrealismo." },
  { flag: "🇵🇹", country: "Portugal", name: "Eliane Pinto", img: "eliane-pinto-v2", spec: "Trazos de Amor — Micropigmentación que acoge y transforma", bio: "Especialista en micropigmentación humanizada. Transforma vidas con técnica y acogimiento." },
  { flag: "🇵🇹", country: "Portugal", name: "Bárbara Monteiro", img: "barbara-monteiro-v3", spec: "Pele negra", bio: "Referente en técnica para pieles negras." },
  { flag: "🇵🇹", country: "Portugal", name: "Andreia Guerreiro", img: "andreia-guerreiro-v2", spec: "Demostración en vivo", bio: "Profesional portuguesa de micropigmentación." },
  { flag: "🇧🇷", country: "Brasil", name: "Bia Lacerada", img: "bia-lacerada-v2", spec: "Luxer Liner — Técnica en ojos", bio: "Especialista en técnica de ojos. Creadora del Luxer Liner." },
  { flag: "🇧🇷", country: "Brasil", name: "Luiza Furiatti", img: "luiza-furiatti", spec: "Del diagnóstico al pigmento", bio: "Especialista en diagnóstico y estrategia para cejas." }
];

const demos = [
  { flag: "🇧🇷", country: "Brasil", name: "Adriana Matsuoka", img: "adriana-matsuoka-v2", spec: "Scalp Shading" },
  { flag: "🇵🇹", country: "Portugal", name: "Andreia Guerreiro", img: "andreia-guerreiro-v2", spec: "MicroScalp — Técnica Realista de puntillismo" },
  { flag: "🇧🇷", country: "Brasil", name: "Renata Swierginski", img: "renata-swierginski", spec: "Demostración en vivo — Barba" },
  { flag: "🇧🇷", country: "Brasil", name: "Bia Lacerada", img: "bia-lacerada-v2", spec: "Luxer Liner — Técnica en ojos" }
];

// === TIERS ===
const tiers = [
  { name: "Basic", desc: "Para profesionales que quieren vivir el evento completo y acceder al contenido esencial.", price: "497 €", includes: ["Acceso a los 2 días completos","Ponencias internacionales","Traducción simultánea portugués-español","Almuerzos día 1 y día 2","Networking","Acceso a la cena cocktail entrega de premios","Kit de bienvenida estándar","Certificado digital de participación","Vale de 497 € en formación"], link: "https://buy.stripe.com/cNifZjdCn2gZ5WqgBH7kc00" },
  { name: "Gold", desc: "Para profesionales que quieren una experiencia más completa, con más valor y beneficios premium.", price: "797 €", badge: "MÁS ELEGIDO", badgeClass: "tier-badge-gold", hl: true, includes: ["Todo lo incluido en Basic","Kit de negocio","Ubicación preferencial","Certificado físico premium","Vale de 797 € en formación"], link: "https://buy.stripe.com/cNibJ30PB7BjacG7177kc01" },
  { name: "Divine VIP", desc: "Para quien quiere vivir el MAGColor Experience al máximo nivel. Solo 10 plazas.", price: "1.297 €", badge: "SOLO 10 PLAZAS", badgeClass: "tier-badge-red", includes: ["Todo lo incluido en Gold","Primera fila garantida","Divine Night: cena privada VIP","2 noches de alojamiento (doble compartido)","Desayuno en el Hotel HF Fénix Lisboa","Acceso preferencial","Meet & Greet privado con ponentes","Derecho a voto popular en el campeonato","Credencial personalizada","Mesa VIP en la Cena","Vale de 1.297 € en formación"], link: "https://buy.stripe.com/6oUcN769V08RgB43OV7kc02" }
];

// === PROGRAM ===
const day1 = [
  {t:"08:30", title:"Acreditacion y entrega de lanyard. Cafe de bienvenida.", desc:""},
  {t:"09:00", title:"Inicio del congreso", desc:""},
  {t:"09:05", title:"Video Cuenta Regresiva + Video Institucional MAG Color", desc:""},
  {t:"09:10", title:"Bienvenida Oficial — Miriam Alcantara y Andrea Martins", desc:""},
  {t:"09:20", title:"Training Latex Labios · Ana Gabriela · 🇻🇪", desc:"Las participantes pueden practicar con su propia maquina en latex."},
  {t:"10:30", title:"Training Latex Microblading · Bianca Tostes · 🇧🇷", desc:"Las participantes pueden practicar con su propio tebori en latex."},
  {t:"11:30", title:"Training Latex Difuminado · Monica Puga · 🇪🇸", desc:"Las participantes pueden practicar con su propia maquina en latex."},
  {t:"12:30", star:true, title:"Sorteo especial", desc:""},
  {t:"12:35", title:"Almuerzo de networking", desc:""},
  {t:"13:30", star:true, title:"Sorteo", desc:""},
  {t:"13:35", title:"Tecnica y Colorimetria en Pieles Negras · Barbara Monteiro · 🇵🇹", desc:"Ponencia especializada en colorimetria para pieles negras."},
  {t:"14:10", title:"Arte y Algoritmo · Ennio Orsini · 🇮🇹", desc:""},
  {t:"14:45", title:"Eliane Pinto · 🇵🇹", desc:"Micropigmentación que abraza y transforma."},
  {t:"15:25", title:"Luiza Furiatti · 🇧🇷", desc:"Del diagnóstico al pigmento: ¿Qué necesita tu ceja? Cómo transformar análisis en estrategia y resultado."},
  {t:"15:35", star:true, title:"Sorteo", desc:""},
  {t:"15:45", title:"Coffee Break", desc:""},
  {t:"16:00", star:true, title:"Campeonato en Latex — 3 categorias", desc:"Pelo a Pelo · Difuminado · Labios. Jurados internacionales evaluan en vivo."},
  {t:"18:00", title:"Fin del Campeonato y deliberación del jurado", desc:""},
  {t:"18:30", title:"Descanso", desc:""},
  {t:"20:00", star:true, title:"Cena de Gala — Entrega de Premios", desc:"Dress code: NEGRO Y DORADO."},

];

const day2 = [
  {t:"09:00", title:"Apertura MAG Experience 2º Día", desc:"Segundo día del congreso."},
  {t:"09:30", title:"Pigmentologia y Colorimetria · Andrea Martins · 🇧🇷", desc:""},
  {t:"10:15", title:"Aspectos Legales del Sector · Albert Grau · 🇪🇸", desc:""},
  {t:"10:55", star:true, title:"Sorteo", desc:""},
  {t:"11:15", title:"Camuflaje de Estrias · Sand Guimaraes · 🇧🇷", desc:""},
  {t:"12:05", title:"Reconstruccion de Areola · Isa Cercos · 🇪🇸", desc:""},
  {t:"12:55", title:"Almuerzo de networking", desc:""},
  {t:"13:55", title:"Reconstruccion de Cejas · Marcela Macedo · 🇧🇷", desc:""},
  {t:"14:45", title:"André Boring", desc:""},
  {t:"15:35", title:"Demostraciones Prácticas en Vivo — Día 2", desc:"Adriana Matsuoka, Andreia Guerreiro, Bia Lacerada, Renata Swierginski."},

];

const divineNight = [
  { t:"21:00", star:true, title:"Divine Night — Cena Privada VIP", desc:"Solo para las 10 participantes con entrada Divine VIP. Cena íntima con Miriam Alcántara, Andrea Martins y los ponentes del congreso. Recepción con cóctel." }
];

// === PREMIOS DEL CAMPEONATO ===
const premios = [
  { pos: "1º", title: "Primer Premio", hl: true, items: [
    "1 equipo Biomaser de última generación",
    "1 caja de agujas Pink Biomaser",
    "1 paquete de anillos",
    "10 unidades de pigmentos MAG Color",
    "1 puesto de ponente en vivo en el próximo MAGColor Experience en Europa",
    "50% de descuento en una formación en el Instituto Miriam Alcántara"
  ] },
  { pos: "2º", title: "Segundo Premio", items: [
    "10 unidades de pigmentos MAG Color",
    "1 paquete de anillos",
    "1 entrada para el próximo MAGColor Experience en Europa",
    "50% de descuento en una formación en el Instituto Miriam Alcántara"
  ] }
];

// === FAQ ===
const faqs = [
  { q:"¿Qué incluye cada tipo de entrada?", a:"Todas las entradas incluyen acceso a los 2 días de evento, ponencias internacionales, traducción simultánea, almuerzos, coffee breaks, acceso a la Gala de Premiación, kit de bienvenida y certificado. Las diferencias están en los beneficios adicionales de cada categoría (Gold y Divine VIP)." },
  { q:"¿El alojamiento está incluido?", a:"El alojamiento está incluido solo en la entrada Divine VIP (2 noches en habitación doble compartida con desayuno en el Hotel HF Fénix Lisboa). Para las demás categorías, ofrecemos un enlace con descuento exclusivo para participantes." },
  { q:"¿Habrá traducción simultánea?", a:"¡Sí! El evento tendrá traducción simultánea portugués-español en todas las ponencias." },
  { q:"¿Cómo funciona el Campeonato?", a:"El campeonato tiene 3 categorías: Pelo a Pelo, Difuminado de Cejas y Labios. Las participantes compiten en vivo en látex. Un jurado internacional evalúa cada trabajo y las ganadoras son premiadas en la Gala de Premiación con trofeos, reconocimiento y visibilidad internacional. Los premios de 1º y 2º puesto incluyen equipo Biomaser, pigmentos MAG Color, puesto de ponente o entrada para la próxima edición europea y 50% de descuento en una formación del Instituto Miriam Alcántara. Consulta la lista completa en la página de Programa." },
  { q:"¿Cuáles son las formas de pago?", a:"Aceptamos pago online vía Stripe (tarjeta de crédito/débito) y también transferencia bancaria o Bizum." },
  { q:"¿Cuál es la política de cancelación?", a:"Cancelación hasta 60 días antes del evento: reembolso del 50%. Después de ese plazo, sin reembolso. La plaza es transferible: puedes ceder tu entrada a otra profesional con 7 días de antelación." },
  { q:"¿Cómo funciona el vale formativo?", a:"Cada entrada incluye un vale formativo equivalente (Basic: 497 €, Gold: 797 €, Divine VIP: 1.297 €) aplicable íntegramente en programas de formación específicos del Instituto Miriam Alcántara." }
];

// === RENDER ===

const jurados = [
  { flag: "🇧🇷", country: "Brasil", name: "Gerliene Trindade", img: "gerliene-trindade-v2", spec: "Jurado" },
  { flag: "🇪🇸", country: "España", name: "Natalia Puche", img: "natalia-puche-v2", spec: "Jurado" },
  { flag: "🇧🇷", country: "Brasil", name: "Glaucia Ferreira", img: "glaucia-ferreira", spec: "Jurado" },
  { flag: "🇧🇷", country: "Brasil", name: "Daiane Santos", img: "daiane-santos", spec: "Jurado" },
  { flag: "🇵🇹", country: "Portugal", name: "Elisa Pereira", img: "elisa-pereira", spec: "Jurado" },
];
const embajadoras = [
  { flag: "🇧🇷", country: "Brasil", name: "Adriana Matsuoka", img: "adriana-matsuoka-v2", spec: "Embajadora" },
  { flag: "🇧🇷", country: "Brasil", name: "Daiane Santos", img: "daiane-santos", spec: "Embajadora" },
  { flag: "🇵🇹", country: "Portugal", name: "Elisa Pereira", img: "elisa-pereira", spec: "Embajadora" },
  { flag: "🇧🇷", country: "Brasil", name: "Gerliene Trindade", img: "gerliene-trindade-v2", spec: "Embajadora" },
];

function renderSpeakers() {
  const grid = document.getElementById('sp-grid');
  if (grid) grid.innerHTML = speakers.map(s => `<div class="sp-card"><div class="sp-photo" style="background-image:url('/assets/speakers/${s.img}.jpg');background-size:cover;background-position:center"></div><div class="sp-body"><p class="sp-title">${s.name}</p><p class="sp-spec-detail">${s.spec}</p><p class="sp-bio">${s.bio}</p></div></div>`).join('');
  const demosGrid = document.getElementById('demos-grid');
  if (demosGrid) demosGrid.innerHTML = demos.map(d => `<div class="card center speaker"><img src="/assets/speakers/${d.img}.jpg" class="avatar" alt="${d.name}" loading="lazy" decoding="async" style="object-fit:cover" onerror="this.style.display='none'"><p class="sp-name">${d.name}</p><p class="sp-spec">${d.spec}</p></div>`).join('');
}

function renderTiers() {
  const container = document.getElementById('tiers');
  if (!container) return;
  container.innerHTML = tiers.map(t => {
    const badge = t.badge ? `<span class="tier-badge ${t.badgeClass}">${t.badge}</span>` : '';
    const includes = t.includes.map(i => `<li><span class="chk">✓</span> ${i}</li>`).join('');
    const excludes = (t.excludes || []).length ? `<ul class="tier-list">${t.excludes.map(e => `<li class="ex"><span class="dash">—</span> ${e}</li>`).join('')}</ul>` : '';
    return `<div class="tier${t.hl?' tier-hl':''}">${badge}<h3 class="tier-name">${t.name}</h3><p class="tier-desc">${t.desc}</p><div class="tier-price">${t.price}</div><ul class="tier-list">${includes}</ul>${excludes}<a href="${t.link}" target="_blank" rel="noopener" class="btn btn-gold tier-btn">Comprar ${t.name}</a></div>`;
  }).join('');
}

function renderTimeline(containerId, data) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.className = 'timeline';
  el.innerHTML = data.map(s => `<div class="tl-item"><div class="tl-time"><div class="tl-hour">${s.t}</div>${s.d?`<div class="tl-dur">${s.d}</div>`:''}</div><div class="tl-line"><div class="tl-dot"></div></div><div class="tl-body"><h4 class="tl-title">${s.star?'<span class="tl-star">✦</span>':''}${s.title}</h4><p class="tl-desc">${s.desc}</p></div></div>`).join('');
}


function renderPremios() {
  const el = document.getElementById('premios-grid');
  if (!el) return;
  el.innerHTML = premios.map(p => `<div class="tier premio${p.hl ? ' tier-hl' : ''}"><div class="premio-pos">${p.pos}</div><h3 class="tier-name">${p.title}</h3><ul class="tier-list">${p.items.map(i => `<li><span class="chk">✓</span> ${i}</li>`).join('')}</ul></div>`).join('');
}

function renderJurados() {
  const grid = document.getElementById('jurados-grid');
  if (!grid) return;
  grid.innerHTML = jurados.map(j => `<div class="card center speaker"><img src="/assets/speakers/${j.img || j.name.toLowerCase().replace(/ /g,'-').normalize('NFD').replace(/[̀-ͯ]/g,'')}.jpg" class="avatar" alt="${j.name}" loading="lazy" decoding="async" style="object-fit:cover" onerror="this.style.display='none'"><p class="sp-name">${j.name}</p><p class="sp-spec">${j.spec}</p></div>`).join('');
}

function renderEmbajadoras() {
  const grid = document.getElementById('embajadoras-grid');
  if (!grid) return;
  grid.innerHTML = embajadoras.map(e => `<div class="card center speaker"><img src="/assets/speakers/${e.img}.jpg" class="avatar" alt="${e.name}" loading="lazy" decoding="async" style="object-fit:cover" onerror="this.style.display='none'"><p class="sp-name">${e.name}</p><p class="sp-spec">${e.spec}</p></div>`).join('');
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
renderPremios();
renderJurados();
renderEmbajadoras();
renderFAQ();
