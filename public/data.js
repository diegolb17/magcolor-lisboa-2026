// MAGColor Experience Lisboa 2026 — Data

// === SPEAKERS ===
const speakers = [
  { flag: "🇧🇷", country: "Brasil", name: "Andrea Martins", img: "andrea-martins", spec: "Pigmentologia e Colorimetria", bio: "Fundadora da MAG Color. Mais de 40 anos no mercado. Líder na América Latina com certificação REACH Europa." },
  { flag: "🇪🇸", country: "Espanha", name: "Miriam Alcántara", img: "miriam-alcantara", spec: "Direção Artística", bio: "+30 anos de trajetória. +30.000 alunas formadas. Speaker e jurada internacional." },
  { flag: "🇻🇪", country: "Venezuela", name: "Ana Gabriela", img: "ana-gabriela", spec: "Full Lips — Training Látex Lábios", bio: "Especialista em técnica de lábios completos. Formadora internacional." },
  { flag: "🇧🇷", country: "Brasil", name: "Bianca Tostes", img: "bianca-tostes", spec: "Microblading — Training Látex", bio: "Especialista em microblading. Formadora e competidora internacional." },
  { flag: "🇪🇸", country: "Espanha", name: "Mónica Puga", img: "monica-puga", spec: "Natural Bloom Process — Cejas difuminadas", bio: "Especialista em técnicas de esfumado. Natural Bloom Process." },
  { flag: "🇧🇷", country: "Brasil", name: "Ennio Orsini", img: "ennio-orsini", spec: "Donde el arte se encuentra con el algoritmo", bio: "Especialista em inteligência artificial aplicada ao setor de micropigmentação." },
  { flag: "🇪🇸", country: "Espanha", name: "Albert Grau", img: "albert-grau", spec: "Aspectos legales del sector", bio: "Empresário com mais de 30 anos no setor sanitário relacionado à micropigmentação, tattoo e piercing. Fundador da sua própria escola em Barcelona, é quem guia e orienta os profissionais no sistema legal atual." },
  { flag: "🇧🇷", country: "Brasil", name: "Sand Guimarães", img: "sand-guimaraes", spec: "Camuflagem de Estrias", bio: "Referência internacional em camuflagem de estrias e reconstrução dérmica." },
  { flag: "🇪🇸", country: "Espanha", name: "Isa Cercós", img: "isa-cercos", spec: "Reconstrução de Aréola Mamária", bio: "Especialista em reconstrução de aréola mamária. Técnica de alta especialização médica." },
  { flag: "🇧🇷", country: "Brasil", name: "Marcela Macedo", img: "marcela-macedo", spec: "Reconstrução de Sobrancelhas", bio: "Especialista em reconstrução avançada de sobrancelhas com técnica de hiper-realismo." },
  { flag: "🇧🇷", country: "Brasil", name: "Keli Ribeiro", img: "keli-ribeiro", spec: "Nanoblading de Excelência", bio: "Especialista em nanoblading e tecnologia laser aplicada à micropigmentação." },
  { flag: "🇧🇷", country: "Brasil", name: "Bárbara Monteiro", img: "barbara-monteiro", spec: "Shadow line — Pele negra", bio: "Especialista em Shadow Line. Referência em técnica para peles negras." },
];

const demos = [
  { flag: "🇧🇷", country: "Brasil", name: "Eliane Pinto", img: "eliane-pinto", spec: "Microblading" },
  { flag: "🇵🇹", country: "Portugal", name: "Adriana Matsuoka", img: "andreia-guerreiro", spec: "Capilar" },
  { flag: "🇵🇹", country: "Portugal", name: "Andreia Guerreiro", img: "adriana-matsuoka", spec: "Demonstração" },
  { flag: "🇨🇴🇪🇸", country: "Colômbia/Espanha", name: "Luis Carlos Ballestas", img: "luis-carlos-ballestas", spec: "Barba" }
];

// === TIERS ===
const tiers = [
  { name: "Basic", desc: "Para profissionais que querem viver o evento completo e acessar o conteúdo essencial.", price: "497 €", includes: ["Acesso aos 2 dias completos","Palestras internacionais","Tradução simultânea português-espanhol","Almoços dia 1 e dia 2","Networking","Acesso à cena cocktail entrega de prémios","Kit de boas-vindas padrão","Certificado digital de participação","Vale de 497 € em formação"], link: "https://buy.stripe.com/cNifZjdCn2gZ5WqgBH7kc00" },
  { name: "Gold", desc: "Para profissionais que querem uma experiência mais completa, com mais valor e benefícios premium.", price: "797 €", badge: "MAIS ESCOLHIDO", badgeClass: "tier-badge-gold", hl: true, includes: ["Tudo o incluído em Basic","Kit de negócio","Localização preferencial","Presente surpresa do patrocinador","Certificado físico premium","Vale de 797 € em formação"], link: "https://buy.stripe.com/cNibJ30PB7BjacG7177kc01" },
  { name: "Divine VIP", desc: "Para quem quer viver o MAGColor Experience no nível máximo. Apenas 10 vagas.", price: "1.297 €", badge: "APENAS 10 VAGAS", badgeClass: "tier-badge-red", includes: ["Tudo o incluído em Gold","Primeira fila garantida","Divine Night: jantar privado VIP","2 noites de hospedagem (duplo compartilhado)","Café da manhã no Hotel HF Fénix Lisboa","Acesso preferencial","Meet & Greet privado com palestrantes","Direito a voto popular no campeonato","Credencial personalizada","Mesa VIP na Cena","Vale de 1.297 € em formação"], link: "https://buy.stripe.com/6oUcN769V08RgB43OV7kc02" }
];

// === PROGRAM ===
const day1 = [
{t:"08:30", d:"60 min", title:"Registro e Welcome Coffee", desc:"Acreditación, entrega de lanyard personalizado negro e dourado com QR do programa. Bolsa de boas-vindas em cada cadeira. Café de boas-vindas."},
{t:"09:00", d:"5 min", star:true, title:"Vídeo Contagem Regressiva", desc:"Na tela aparece uma contagem regressiva de 5 minutos com música potente."},
{t:"09:05", d:"3 min", star:true, title:"Vídeo Institucional MAG Color Experience", desc:"Primeiro grande impacto visual e emocional do evento."},
{t:"09:10", d:"10 min", star:true, title:"Boas-vindas Oficiais — Apresentador MC", desc:"Abertura oficial do congresso. Palavras de Miriam Alcántara e Andrea Martins."},
{t:"09:20", d:"70 min", title:"Training Látex Lábios · Ana Gabriela · 🇻🇪", desc:"Câmara ao vivo. Tradução simultânea. Participantes podem praticar com sua própria máquina."},
{t:"10:30", d:"60 min", title:"Training Látex Microblading · Bianca Tostes · 🇧🇷", desc:"Técnica com camilla, lupa e taburete. Câmara ao vivo."},
{t:"11:30", d:"60 min", title:"Training Látex Natural Bloom Process · Mónica Puga · 🇪🇸", desc:"Cejas difuminadas. Tradução simultânea."},
{t:"12:30", d:"5 min", star:true, title:"Sorteio", desc:"Premio especial. Todos os participantes concorrem."},
{t:"12:35", d:"55 min", title:"Almoço de networking", desc:"Lunch ligero. Detalle dulce sorpresa en las mesas."},
{t:"13:30", d:"5 min", star:true, title:"Sorteio", desc:"Segundo sorteio do dia. Premio especial."},
{t:"13:35", d:"45 min", title:"Técnica e Colorimetria em Peles Negras · Bárbara Monteiro · 🇧🇷", desc:"Ponencia especializada em colorimetria para peles negras."},
{t:"14:20", d:"30 min", title:"Coffee Break", desc:"Pausa. Detalle dulce sorpresa."},
{t:"14:50", d:"120 min", star:true, title:"Campeonato em Látex — 3 categorias", desc:"Fio a Fio · Sombreado · Lábios. Jurados internacionais avaliam ao vivo."},
{t:"16:50", d:"30 min", star:true, title:"Sorteio e Encerramento do Dia 1", desc:"Premio especial. Palavras de Miriam Alcántara."}
];
const day2 = [
  { t:"08:30", d:"60 min", star:true, title:"Saxofonista ao Vivo", desc:"Saxofonista em direto. Ambiente festivo premium. Dress code: PRETO E DOURADO." },
  { t:"09:15", d:"3 min", star:true, title:"Vídeo Contagem Regressiva + Vídeo MAG Color", desc:"O Dia 2 arranca com a mesma energia do Dia 1." },
  { t:"09:28", d:"57 min", star:true, title:"Pigmentologia e Colorimetria · Andrea Martins · 🇧🇷", desc:"A palestra de maior peso académico do congresso." },
  { t:"10:25", d:"50 min", title:"Aspectos Jurídicos · Albert Grau · 🇪🇸", desc:"Informação essencial para o mercado europeu." },
  { t:"11:15", d:"50 min", title:"Camuflagem de Estrias · Sand Guimarães · 🇧🇷", desc:"Técnica avançada de camuflagem." },
  { t:"12:05", d:"50 min", title:"Reconstrução de Aréola Mamária · Isa Cercós · 🇪🇸", desc:"Sessão de alta especialização médica." },
  { t:"12:55", d:"60 min", title:"Almoço de networking", desc:"Lunch ligero." },
  { t:"13:55", d:"50 min", title:"Reconstrução de Sobrancelhas · Marcela Macedo · 🇧🇷", desc:"Técnica avançada de reconstrução." },
  { t:"14:45", d:"50 min", title:"Laser em Micropigmentação · Keli Ribeiro · 🇧🇷", desc:"Tecnologia laser aplicada." },
  { t:"15:35", d:"120 min", star:true, title:"Demonstrações Práticas ao Vivo", desc:"5 artistas em 5 estações simultâneas." },
  { t:"18:30", d:"120 min", star:true, title:"Cena Branca de Gala — Premiação", desc:"Dress code: PRETO E DOURADO. Mesa VIP. Troféus." },
  { t:"20:30", d:"30 min", star:true, title:"Encerramento Final", desc:"Palavras finais. Anúncio da próxima edição europeia." }
];
const divineNight = [
  { t:"21:00", star:true, title:"Divine Night — Jantar Privado VIP", desc:"Apenas para as 10 participantes com ingresso Divine VIP. Jantar íntimo com Miriam Alcántara, Andrea Martins e os palestrantes. Recepção com coquetel." }
];

// === FAQ ===
const faqs = [
  { q:"O que está incluído em cada tipo de ingresso?", a:"Todos os ingressos incluem acesso aos 2 dias de evento, palestras internacionais, tradução simultânea, almoços, coffee breaks, acesso à Cena Branca de Gala, kit de boas-vindas e certificado. As diferenças estão nos benefícios adicionais de cada categoria (Gold e Divine VIP)." },
  { q:"O alojamento está incluído?", a:"O alojamento está incluído apenas no ingresso Divine VIP (2 noites em quarto duplo compartilhado com café da manhã no Hotel HF Fénix Lisboa). Para as demais categorias, oferecemos um link com desconto exclusivo para participantes." },
  { q:"Haverá tradução simultânea?", a:"Sim! O evento terá tradução simultânea português-espanhol em todas as palestras. Um tradutor profissional estará na sala com microfone próprio." },
  { q:"Como funciona o Campeonato?", a:"O campeonato tem 3 categorias: Fio a Fio, Sombreado de Sobrancelhas e Lábios. As participantes competem ao vivo. Um júri internacional avalia cada trabalho e as vencedoras são premiadas na Cena Branca de Gala com troféus, reconhecimento e visibilidade internacional." },
  { q:"Quais são as formas de pagamento?", a:"Aceitamos pagamento online via Stripe (cartão de crédito/débito) e também transferência bancária ou Bizum para os 20 primeiros ingressos com desconto exclusivo." },
  { q:"Qual é a política de cancelamento?", a:"Cancelamento até 60 dias antes do evento: reembolso de 50%. Após esse prazo, sem reembolso. A vaga é transferível: você pode ceder seu ingresso a outra profissional com 7 dias de antecedência." },
  { q:"Como funciona o vale formativo?", a:"Cada ingresso inclui um vale formativo equivalente (Basic: 497 €, Gold: 797 €, Divine VIP: 1.297 €) aplicável integralmente em programas de formação do Instituto Miriam Alcántara." }
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
