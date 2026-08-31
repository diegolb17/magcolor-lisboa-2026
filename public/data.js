// MAGColor Experience Lisboa 2026 — Data

// === SPEAKERS ===
const speakers = [
  { flag: "🇧🇷", country: "Brasil", name: "Andrea Martins", img: "andrea-martins-v2", spec: "Pigmentologia e Colorimetria", bio: "Fundadora da MAG Color. Mais de 40 anos no mercado. Líder na América Latina com certificação REACH Europa." },
  { flag: "🇪🇸", country: "Espanha", name: "Miriam Alcántara", img: "miriam-alcantara", spec: "Direção Artística", bio: "+30 anos de trajetória. +30.000 alunas formadas. Speaker e jurada internacional." },
  { flag: "🇻🇪", country: "Venezuela", name: "Ana Gabriela", img: "ana-gabriela-v2", spec: "Full Lips — Training Látex Lábios", bio: "Especialista em técnica de lábios completos. Formadora internacional." },
  { flag: "🇧🇷", country: "Brasil", name: "Bianca Tostes", img: "bianca-tostes-v2", spec: "Microblading — Training Látex", bio: "Especialista em microblading. Formadora e competidora internacional." },
  { flag: "🇪🇸", country: "Espanha", name: "Mónica Puga", img: "monica-puga-v2", spec: "Natural Bloom Process — Cejas difuminadas", bio: "Especialista em técnicas de esfumado. Natural Bloom Process." },
  { flag: "🇮🇹", country: "Italia", name: "Ennio Orsini", img: "ennio-orsini-v2", spec: "Donde el arte se encuentra con el algoritmo", bio: "Especialista em inteligência artificial aplicada ao setor de micropigmentação." },
  { flag: "🇪🇸", country: "Espanha", name: "Albert Grau", img: "albert-grau-v2", spec: "Aspectos legales del sector", bio: "Empresário com mais de 30 anos no setor sanitário relacionado à micropigmentação, tattoo e piercing. Fundador da sua própria escola em Barcelona, é quem guia e orienta os profissionais no sistema legal atual." },
  { flag: "🇧🇷", country: "Brasil", name: "Sand Guimarães", img: "sand-guimaraes-v2", spec: "Camuflagem de Estrias", bio: "Referência internacional em camuflagem de estrias e reconstrução dérmica." },
  { flag: "🇪🇸", country: "Espanha", name: "Isa Cercós", img: "isa-cercos-v2", spec: "Reconstrução de Aréola Mamária", bio: "Especialista em reconstrução de aréola mamária. Técnica de alta especialização médica." },
  { flag: "🇧🇷", country: "Brasil", name: "Marcela Macedo", img: "marcela-macedo", spec: "Reconstrução de Sobrancelhas", bio: "Especialista em reconstrução avançada de sobrancelhas com técnica de hiper-realismo." },
  { flag: "🇵🇹", country: "Portugal", name: "Eliane Pinto", img: "eliane-pinto-v2", spec: "Traços de Amor — Micropigmentação que acolhe e transforma", bio: "Especialista em micropigmentação humanizada. Transforma vidas com técnica e acolhimento." },
  { flag: "🇵🇹", country: "Portugal", name: "Bárbara Monteiro", img: "barbara-monteiro-v3", spec: "Pele negra", bio: "Referente en técnica para pieles negras." },
,
  { flag: "🇵🇹", country: "Portugal", name: "Andreia Guerreiro", img: "andreia-guerreiro-v2", spec: "Demonstração ao vivo", bio: "Profissional portuguesa de micropigmentação." },
  { flag: "🇧🇷", country: "Brasil", name: "Bia Lacerada", img: "bia-lacerada-v2", spec: "Luxer Liner — Técnica em olhos", bio: "Especialista em técnica de olhos. Criadora do Luxer Liner." },
  { flag: "🇧🇷", country: "Brasil", name: "Luiza Furiatti", img: "luiza-furiatti", spec: "Do diagnóstico ao pigmento", bio: "Especialista em diagnóstico e estratégia para sobrancelhas." }
];

const demos = [
  { flag: "🇧🇷", country: "Brasil", name: "Adriana Matsuoka", img: "adriana-matsuoka-v2", spec: "Scalp Shading" },
  { flag: "🇵🇹", country: "Portugal", name: "Andreia Guerreiro", img: "andreia-guerreiro-v2", spec: "MicroScalp — Técnica Realista de pontilismo" },
  { flag: "🇧🇷", country: "Brasil", name: "Renata Swierginski", img: "renata-swierginski", spec: "Demonstração ao vivo — Barba" },
  { flag: "🇧🇷", country: "Brasil", name: "Bia Lacerada", img: "bia-lacerada-v2", spec: "Luxer Liner — Técnica em olhos" }
];

// === TIERS ===
const tiers = [
  { name: "Basic", desc: "Para profissionais que querem viver o evento completo e acessar o conteúdo essencial.", price: "497 €", includes: ["Acesso aos 2 dias completos","Palestras internacionais","Tradução simultânea português-espanhol","Almoços dia 1 e dia 2","Networking","Acesso à cena cocktail entrega de prémios","Kit de boas-vindas padrão","Certificado digital de participação","Vale de 497 € em formação"], link: "https://buy.stripe.com/cNifZjdCn2gZ5WqgBH7kc00" },
  { name: "Gold", desc: "Para profissionais que querem uma experiência mais completa, com mais valor e benefícios premium.", price: "797 €", badge: "MAIS ESCOLHIDO", badgeClass: "tier-badge-gold", hl: true, includes: ["Tudo o incluído em Basic","Kit de negócio","Localização preferencial","Certificado físico premium","Vale de 797 € em formação"], link: "https://buy.stripe.com/cNibJ30PB7BjacG7177kc01" },
  { name: "Divine VIP", desc: "Para quem quer viver o MAGColor Experience no nível máximo. Apenas 10 vagas.", price: "1.297 €", badge: "APENAS 10 VAGAS", badgeClass: "tier-badge-red", includes: ["Tudo o incluído em Gold","Primeira fila garantida","Divine Night: jantar privado VIP","2 noites de hospedagem (duplo compartilhado)","Café da manhã no Hotel HF Fénix Lisboa","Acesso preferencial","Meet & Greet privado com palestrantes","Direito a voto popular no campeonato","Credencial personalizada","Mesa VIP na Cena","Vale de 1.297 € em formação"], link: "https://buy.stripe.com/6oUcN769V08RgB43OV7kc02" }
];

// === PROGRAM ===
const day1 = [
  {t:"08:30", title:"Acreditacao e entrega de lanyard. Cafe de boas-vindas.", desc:""},
  {t:"09:00", title:"Inicio do congresso", desc:""},
  {t:"09:05", title:"Video Contagem Regressiva + Video Institucional MAG Color", desc:""},
  {t:"09:10", title:"Boas-vindas Oficiais — Miriam Alcantara e Andrea Martins", desc:""},
  {t:"09:20", title:"Training Latex Labios · Ana Gabriela · 🇻🇪", desc:"As participantes podem praticar com sua propria maquina em latex."},
  {t:"10:30", title:"Training Latex Microblading · Bianca Tostes · 🇧🇷", desc:"As participantes podem praticar com seu proprio tebori em latex."},
  {t:"11:30", title:"Training Latex Esfumado · Monica Puga · 🇪🇸", desc:"As participantes podem praticar com sua propria maquina em latex."},
  {t:"12:30", star:true, title:"Sorteio especial", desc:""},
  {t:"12:35", title:"Almoco de networking", desc:""},
  {t:"13:30", star:true, title:"Sorteio", desc:""},
  {t:"13:35", title:"Tecnica e Colorimetria em Peles Negras · Barbara Monteiro · 🇵🇹", desc:"Ponencia especializada em colorimetria para peles negras."},
  {t:"14:10", title:"Arte e Algoritmo · Ennio Orsini · 🇮🇹", desc:""},
  {t:"14:45", title:"Eliane Pinto · 🇵🇹", desc:"Micropigmentação que abraça e transforma."},
  {t:"15:25", title:"Luiza Furiatti · 🇧🇷", desc:"Do diagnóstico ao pigmento: O que sua sobrancelha precisa? Como transformar análise em estratégia e resultado."},
  {t:"15:35", star:true, title:"Sorteio", desc:""},
  {t:"15:45", title:"Coffee Break", desc:""},
  {t:"16:00", star:true, title:"Campeonato em Latex — 3 categorias", desc:"Fio a Fio · Sombreado · Labios. Jurados internacionais avaliam ao vivo."},
  {t:"18:00", title:"Fim do Campeonato e deliberação do júri", desc:""},
  {t:"18:30", title:"Descanso", desc:""},
  {t:"20:00", star:true, title:"Cena de Gala — Entrega de Prêmios", desc:"Dress code: PRETO E DOURADO."},

];

const day2 = [
  {t:"09:00", title:"Abertura MAG Experience 2º Dia", desc:"Segundo dia do congresso."},
  {t:"09:30", title:"Pigmentologia e Colorimetria · Andrea Martins · 🇧🇷", desc:""},
  {t:"10:15", title:"Aspectos Legais do Setor · Albert Grau · 🇪🇸", desc:""},
  {t:"10:55", star:true, title:"Sorteio", desc:""},
  {t:"11:15", title:"Camuflagem de Estrias · Sand Guimaraes · 🇧🇷", desc:""},
  {t:"12:05", title:"Reconstrucao de Areola · Isa Cercos · 🇪🇸", desc:""},
  {t:"12:55", title:"Almoco de networking", desc:""},
  {t:"13:55", title:"Reconstrucao de Sobrancelhas · Marcela Macedo · 🇧🇷", desc:""},
  {t:"14:45", title:"André Boring", desc:""},
  {t:"15:35", title:"Demonstracoes Praticas ao Vivo — Dia 2", desc:"Adriana Matsuoka, Andreia Guerreiro, Bia Lacerada, Renata Swierginski."},

];

const divineNight = [
  { t:"21:00", star:true, title:"Divine Night — Jantar Privado VIP", desc:"Apenas para as 10 participantes com ingresso Divine VIP. Jantar íntimo com Miriam Alcántara, Andrea Martins e os palestrantes. Recepção com coquetel." }
];

// === FAQ ===
const faqs = [
  { q:"O que está incluído em cada tipo de ingresso?", a:"Todos os ingressos incluem acesso aos 2 dias de evento, palestras internacionais, tradução simultânea, almoços, coffee breaks, acesso à Gala de Premiação, kit de boas-vindas e certificado. As diferenças estão nos benefícios adicionais de cada categoria (Gold e Divine VIP)." },
  { q:"O alojamento está incluído?", a:"O alojamento está incluído apenas no ingresso Divine VIP (2 noites em quarto duplo compartilhado com café da manhã no Hotel HF Fénix Lisboa). Para as demais categorias, oferecemos um link com desconto exclusivo para participantes." },
  { q:"Haverá tradução simultânea?", a:"Sim! O evento terá tradução simultânea português-espanhol em todas as palestras." },
  { q:"Como funciona o Campeonato?", a:"O campeonato tem 3 categorias: Fio a Fio, Sombreado de Sobrancelhas e Lábios. As participantes competem ao vivo em látex. Um júri internacional avalia cada trabalho e as vencedoras são premiadas na Gala de Premiação com troféus, reconhecimento e visibilidade internacional." },
  { q:"Quais são as formas de pagamento?", a:"Aceitamos pagamento online via Stripe (cartão de crédito/débito) e também transferência bancária ou Bizum." },
  { q:"Qual é a política de cancelamento?", a:"Cancelamento até 60 dias antes do evento: reembolso de 50%. Após esse prazo, sem reembolso. A vaga é transferível: você pode ceder seu ingresso a outra profissional com 7 dias de antecedência." },
  { q:"Como funciona o vale formativo?", a:"Cada ingresso inclui um vale formativo equivalente (Basic: 497 €, Gold: 797 €, Divine VIP: 1.297 €) aplicável integralmente em programas de formação específicos do Instituto Miriam Alcántara." }
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
  { flag: "🇧🇷", country: "Brasil", name: "Adriana Matsuoka", img: "adriana-matsuoka-v2", spec: "Embaixadora" },
  { flag: "🇧🇷", country: "Brasil", name: "Daiane Santos", img: "daiane-santos", spec: "Embaixadora" },
  { flag: "🇵🇹", country: "Portugal", name: "Elisa Pereira", img: "elisa-pereira", spec: "Embaixadora" },
  { flag: "🇧🇷", country: "Brasil", name: "Gerliene Trindade", img: "gerliene-trindade-v2", spec: "Embaixadora" },
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
  grid.innerHTML = jurados.map(j => `<div class="card center speaker"><img src="/assets/speakers/${j.img || j.name.toLowerCase().replace(/ /g,'-').normalize('NFD').replace(/[̀-ͯ]/g,'')}.jpg" class="avatar" alt="${j.name}" style="object-fit:cover" onerror="this.style.display='none'"><p class="sp-name">${j.name}</p><p class="sp-spec">${j.spec}</p></div>`).join('');
}

function renderEmbajadoras() {
  const grid = document.getElementById('embajadoras-grid');
  if (!grid) return;
  grid.innerHTML = embajadoras.map(e => `<div class="card center speaker"><img src="/assets/speakers/${e.img}.jpg" class="avatar" alt="${e.name}" style="object-fit:cover" onerror="this.style.display='none'"><p class="sp-name">${e.name}</p><p class="sp-spec">${e.spec}</p></div>`).join('');
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
renderEmbajadoras();
renderFAQ();
