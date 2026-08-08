// MAGColor Experience Lisboa 2026 — Data

// === SPEAKERS ===
const speakers = [
  { flag: "🇧🇷", country: "Brasil", name: "Andrea Martins", img: "andrea-martins", spec: "Pigmentología y Colorimetría", bio: "Fundadora de MAG Color. Más de 40 años en el mercado. Líder en Latinoamérica con certificación REACH Europa." },
  { flag: "🇪🇸", country: "España", name: "Miriam Alcántara", img: "miriam-alcantara", spec: "Dirección Artística", bio: "+30 años de trayectoria. +30.000 alumnas formadas. Speaker y jurado internacional." },
  { flag: "🇻🇪", country: "Venezuela", name: "Ana Gabriela", img: "ana-gabriela", spec: "Full Lips — Training Látex Labios", bio: "Especialista en técnica de labios completos. Formadora internacional." },
  { flag: "🇧🇷", country: "Brasil", name: "Bianca Tostes", img: "bianca-tostes", spec: "Microblading — Training Látex", bio: "Especialista en microblading. Formadora y competidora internacional." },
  { flag: "🇪🇸", country: "España", name: "Mónica Puga", img: "monica-puga", spec: "Natural Bloom Process — Cejas difuminadas", bio: "Especialista en técnicas de difuminado. Natural Bloom Process." },
  { flag: "🇧🇷", country: "Brasil", name: "Ennio Orsini", img: "ennio-orsini", spec: "Donde el arte se encuentra con el algoritmo", bio: "Especialista en inteligencia artificial aplicada al sector de la micropigmentación." },
  { flag: "🇪🇸", country: "España", name: "Albert Grau", img: "albert-grau", spec: "Aspectos legales del sector", bio: "Empresario con más de 30 años en el sector sanitario relacionado con la micropigmentación, el tattoo y el piercing. Fundador de su propia escuela en Barcelona, guía y orienta a los profesionales en el sistema legal actual." },
  { flag: "🇧🇷", country: "Brasil", name: "Sand Guimarães", img: "sand-guimaraes", spec: "Camuflaje de Estrías", bio: "Referencia internacional en camuflaje de estrías y reconstrucción dérmica." },
  { flag: "🇪🇸", country: "España", name: "Isa Cercós", img: "isa-cercos", spec: "Reconstrucción de Areola Mamaria", bio: "Especialista en reconstrucción de areola mamaria. Técnica de alta especialización médica." },
  { flag: "🇧🇷", country: "Brasil", name: "Marcela Macedo", img: "marcela-macedo", spec: "Reconstrucción de Cejas", bio: "Especialista en reconstrucción avanzada de cejas con técnica de hiperrealismo." },
  { flag: "🇧🇷", country: "Brasil", name: "Keli Ribeiro", img: "keli-ribeiro", spec: "Nanoblading de Excelencia", bio: "Especialista en nanoblading y tecnología láser aplicada a la micropigmentación." },
  { flag: "🇧🇷", country: "Brasil", name: "Bárbara Monteiro", img: "barbara-monteiro", spec: "Shadow line — Pele negra", bio: "Especialista en Shadow Line. Referente en técnica para pieles negras." },
];

const demos = [
  { flag: "🇧🇷", country: "Brasil", name: "Eliane Pinto", img: "eliane-pinto", spec: "Microblading" },
  { flag: "🇧🇷", country: "Brasil", name: "Adriana Matsuoka", img: "andreia-guerreiro", spec: "Capilar" },
  { flag: "🇵🇹", country: "Portugal", name: "Andreia Guerreiro", img: "adriana-matsuoka", spec: "Demostración" },
  { flag: "🇨🇴🇪🇸", country: "Colombia/España", name: "Luis Carlos Ballestas", img: "luis-carlos-ballestas", spec: "Barba" },
  { flag: "🇧🇷", country: "Brasil", name: "Luiza Furiatti", spec: "Demonstracao" }
];

// === TIERS ===
const tiers = [
  { name: "Basic", desc: "Para profesionales que quieren vivir el evento completo y acceder al contenido esencial.", price: "497 €", includes: ["Acceso a los 2 días completos","Ponencias internacionales","Traducción simultánea portugués-español","Almuerzos día 1 y día 2","Networking","Acceso a la cena cocktail entrega de premios","Kit de bienvenida estándar","Certificado digital de participación","Vale de 497 € en formación"], link: "https://buy.stripe.com/cNifZjdCn2gZ5WqgBH7kc00" },
  { name: "Gold", desc: "Para profesionales que quieren una experiencia más completa, con más valor y beneficios premium.", price: "797 €", badge: "MÁS ELEGIDO", badgeClass: "tier-badge-gold", hl: true, includes: ["Todo lo incluido en Basic","Kit de negocio","Ubicación preferencial","Regalo sorpresa del patrocinador","Certificado físico premium","Vale de 797 € en formación"], link: "https://buy.stripe.com/cNibJ30PB7BjacG7177kc01" },
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
  {t:"13:35", title:"Tecnica y Colorimetria en Pieles Negras · Barbara Monteiro · 🇧🇷", desc:"Ponencia especializada en colorimetria para pieles negras."},
  {t:"14:10", title:"Arte y Algoritmo · Ennio Orsini · 🇧🇷", desc:""},
  {t:"14:45", title:"Eliane Pinto · 🇧🇷", desc:""},
  {t:"15:25", title:"Luiza Furiatti · 🇧🇷", desc:""},
  {t:"15:35", star:true, title:"Sorteo", desc:""},
  {t:"15:45", title:"Coffee Break", desc:""},
  {t:"16:00", star:true, title:"Campeonato en Latex — 3 categorias", desc:"Pelo a Pelo · Difuminado · Labios. Jurados internacionales evaluan en vivo."},

];

const day2 = [
  {t:"09:00", title:"Apertura MAG Experience 2º Dia", desc:"Segundo dia del congreso. Dress code: NEGRO Y DORADO."},
  {t:"09:30", title:"Pigmentologia y Colorimetria · Andrea Martins · 🇧🇷", desc:""},
  {t:"10:15", title:"Aspectos Legales del Sector · Albert Grau · 🇪🇸", desc:""},
  {t:"10:55", star:true, title:"Sorteo", desc:""},
  {t:"11:15", title:"Camuflaje de Estrias · Sand Guimaraes · 🇧🇷", desc:""},
  {t:"12:05", title:"Reconstruccion de Areola · Isa Cercos · 🇪🇸", desc:""},
  {t:"12:55", title:"Almuerzo de networking", desc:""},
  {t:"13:55", title:"Reconstruccion de Cejas · Marcela Macedo · 🇧🇷", desc:""},
  {t:"14:45", title:"Laser en Micropigmentacion · Keli Ribeiro · 🇧🇷", desc:""},
  {t:"15:35", title:"Demostraciones Practicas en Vivo — Dia 2", desc:"Eliane Pinto, Adriana Matsuoka, Andreia Guerreiro, Luis Carlos Ballestas."},
  {t:"18:30", star:true, title:"Ceremonia de Entrega de Premios", desc:""},

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

const jurados = [
  { flag: "🇧🇷", country: "Brasil", name: "Gerliene Trindade", spec: "Jurado" },
  { flag: "🇪🇸", country: "España", name: "Natalia Puche", spec: "Jurado" },
];
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


function renderJurados() {
  const grid = document.getElementById('jurados-grid');
  if (!grid) return;
  grid.innerHTML = jurados.map(j => `<div class="card center speaker"><img src="/assets/speakers/${j.name.toLowerCase().replace(/ /g,'-').normalize('NFD').replace(/[̀-ͯ]/g,'')}.jpg" class="avatar" alt="${j.name}" style="object-fit:cover" onerror="this.style.display='none'"><p class="sp-name">${j.name}</p><p class="sp-spec">${j.spec}</p></div>`).join('');
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
renderJurados();
renderFAQ();
