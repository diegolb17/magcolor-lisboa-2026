// MAGColor Experience Lisboa 2026 — Data

// === SPEAKERS ===
const speakers = [
  { flag: "🇧🇷", country: "Brazil", name: "Andrea Martins", img: "andrea-martins", spec: "Pigmentology & Colorimetry", bio: "Founder of MAG Color. Over 40 years in the market. Leader in Latin America with REACH Europe certification." },
  { flag: "🇪🇸", country: "Spain", name: "Miriam Alcántara", img: "miriam-alcantara", spec: "Artistic Direction", bio: "30+ years of experience. 30,000+ students trained. International speaker and judge." },
  { flag: "🇻🇪", country: "Venezuela", name: "Ana Gabriela", img: "ana-gabriela", spec: "Full Lips — Latex Lip Training", bio: "Specialist in full lip technique. International trainer." },
  { flag: "🇧🇷", country: "Brazil", name: "Bianca Tostes", img: "bianca-tostes", spec: "Microblading — Latex Training", bio: "Specialist in microblading. International trainer and competitor." },
  { flag: "🇪🇸", country: "Spain", name: "Mónica Puga", img: "monica-puga", spec: "Powder Brows & Eyes", bio: "Specialist in powder techniques. Natural Bloom Process." },
  { flag: "🇧🇷", country: "Brazil", name: "Ennio Orsini", img: "ennio-orsini", spec: "Where Art Meets the Algorithm — AI", bio: "Specialist in artificial intelligence applied to the micropigmentation sector." },
  { flag: "🇪🇸", country: "Spain", name: "Albert Grau", img: "albert-grau", spec: "Legal & Juridical Aspects", bio: "Lawyer specialized in legislation for the aesthetics and beauty sector in Europe." },
  { flag: "🇧🇷", country: "Brazil", name: "Sand Guimarães", img: "sand-guimaraes", spec: "Stretch Mark Camouflage", bio: "International reference in stretch mark camouflage and dermal reconstruction." },
  { flag: "🇪🇸", country: "Spain", name: "Isa Cercós", img: "isa-cercos", spec: "Areola Reconstruction", bio: "Specialist in areola reconstruction. Highly specialized medical technique." },
  { flag: "🇧🇷", country: "Brazil", name: "Marcela Macedo", img: "marcela-macedo", spec: "Eyebrow Reconstruction", bio: "Specialist in advanced eyebrow reconstruction with hyperrealism technique." },
  { flag: "🇧🇷", country: "Brazil", name: "Keli Ribeiro", img: "keli-ribeiro", spec: "Excellence Nanoblading", bio: "Specialist in nanoblading and laser technology applied to micropigmentation." }
];

const demos = [
  { flag: "🇧🇷", country: "Brazil", name: "Eliane Pinto", img: "eliane-pinto", spec: "Microblading" },
  { flag: "🇧🇷", country: "Brazil", name: "Adriana Matsuoka", img: "adriana-matsuoka", spec: "Capillary" },
  { flag: "🇵🇹", country: "Portugal", name: "Andreia Guerreiro", img: "andreia-guerreiro", spec: "Demo" },
  { flag: "🇨🇴🇪🇸", country: "Colombia/Spain", name: "Luis Carlos Ballestas", spec: "Beard" }
];

// === TIERS ===
const tiers = [
  { name: "Basic", desc: "For professionals who want to experience the full event and access essential content.", old: "697 €", price: "497 €", includes: ["Access to 2 full days","International lectures","Simultaneous Portuguese-Spanish translation","Lunches day 1 & 2","Networking","Access to White Gala Dinner","Standard welcome kit","Digital participation certificate","€497 training voucher"], excludes: ["Premium business kit","Divine Night private dinner","Accommodation","Front row"], link: "https://buy.stripe.com/cNifZjdCn2gZ5WqgBH7kc00" },
  { name: "Gold", desc: "For professionals who want a more complete experience with more value and premium benefits.", old: "997 €", price: "797 €", badge: "MOST CHOSEN", badgeClass: "tier-badge-gold", hl: true, includes: ["Everything included in Basic","Business kit valued at €200","Preferential seating at White Gala","Surprise sponsor gift","Premium physical certificate","€797 training voucher"], excludes: ["Divine Night private dinner","Accommodation included"], link: "https://buy.stripe.com/cNibJ30PB7BjacG7177kc01" },
  { name: "Divine VIP", desc: "For those who want to experience MAGColor at the highest level. Only 10 spots.", old: "1.597 €", price: "1.297 €", badge: "ONLY 10 SPOTS", badgeClass: "tier-badge-red", includes: ["Everything included in Gold","Guaranteed front row","Divine Night: Private VIP dinner","2 nights accommodation (shared double)","Breakfast at HF Fénix Lisbon Hotel","Preferential access","Private Meet & Greet with speakers","Popular vote right at championship","Personalized credential","VIP table at White Gala","€1,297 training voucher"], excludes: [], link: "https://buy.stripe.com/6oUcN769V08RgB43OV7kc02" }
];

// === PROGRAM ===
const day1 = [
  { t:"08:30", d:"60 min", title:"Registration & Welcome Coffee", desc:"Accreditation, personalized black & gold lanyard with program QR. Welcome bag on each chair." },
  { t:"09:00", d:"5 min", star:true, title:"Countdown Video", desc:"A 5-minute countdown appears on screen with powerful music." },
  { t:"09:05", d:"3 min", star:true, title:"Vídeo Institucional MAG Color Experience", desc:"First major visual and emotional impact of the event." },
  { t:"09:08", d:"14 min", star:true, title:"Official Welcome + Miriam Alcántara & Andrea Martins", desc:"Official congress opening." },
  { t:"09:22", d:"60 min", title:"Training Látex Labios · Ana Gabriela · 🇻🇪", desc:"Live camera. Simultaneous translation." },
  { t:"10:22", d:"60 min", title:"Training Latex Microblading · Bianca Tostes · 🇧🇷", desc:"Technique with stretcher, magnifier and stool." },
  { t:"11:22", d:"60 min", title:"Training Látex Difuminado · Mónica Puga · 🇪🇸", desc:"Última ponencia de la mañana." },
  { t:"12:22", d:"60 min", title:"Networking Lunch", desc:"Lunch ligero. Detalle dulce sorpresa." },
  { t:"13:22", d:"40 min", title:"Marketing y Ventas · Ennio Orsini · 🇧🇷", desc:"Positioning and business for professionals." },
  { t:"14:02", d:"40 min", title:"Arte y Algoritmo — IA · Ennio Orsini · 🇧🇷", desc:"Artificial intelligence applied to the sector." },
  { t:"14:42", d:"30 min", title:"Coffee Break", desc:"Break. Sweet surprise detail." },
  { t:"15:12", d:"120 min", star:true, title:"Latex Championship — 3 Categories", desc:"Hair by Hair · Powder · Lips. International judges." },
  { t:"17:12", d:"30 min", star:true, title:"Raffle & Day 1 Closing", desc:"Special prize. Words from Miriam Alcántara." }
];
const day2 = [
  { t:"08:30", d:"60 min", star:true, title:"Live Saxophonist", desc:"Live saxophonist. Premium atmosphere. Dress code: BLACK AND GOLD." },
  { t:"09:15", d:"3 min", star:true, title:"Countdown Video + MAG Color Video", desc:"Day 2 starts with the same energy as Day 1." },
  { t:"09:28", d:"57 min", star:true, title:"Pigmentologia e Colorimetria · Andrea Martins · 🇧🇷", desc:"The most academically significant lecture of the congress." },
  { t:"10:25", d:"50 min", title:"Aspectos Jurídicos · Albert Grau · 🇪🇸", desc:"Essential information for the European market." },
  { t:"11:15", d:"50 min", title:"Camuflagem de Estrias · Sand Guimarães · 🇧🇷", desc:"Advanced camouflage technique." },
  { t:"12:05", d:"50 min", title:"Reconstrução de Areola Mamaria · Isa Cercós · 🇪🇸", desc:"Highly specialized medical session." },
  { t:"12:55", d:"60 min", title:"Networking Lunch", desc:"Lunch ligero." },
  { t:"13:55", d:"50 min", title:"Reconstrução de Cejas · Marcela Macedo · 🇧🇷", desc:"Advanced reconstruction technique." },
  { t:"14:45", d:"50 min", title:"Láser en Micropigmentación · Keli Ribeiro · 🇧🇷", desc:"Applied laser technology." },
  { t:"15:35", d:"120 min", star:true, title:"Live Practical Demos", desc:"5 artists at 5 simultaneous stations." },
  { t:"18:30", d:"120 min", star:true, title:"White Gala — Awards Ceremony", desc:"Dress code: BLACK AND GOLD. VIP table. Trophies." },
  { t:"20:30", d:"30 min", star:true, title:"Final Closing", desc:"Final words. Announcement of the next European edition." }
];
const divineNight = [
  { t:"21:00", star:true, title:"Divine Night — Private VIP Dinner", desc:"Only for the 10 Divine VIP participants. Intimate dinner with Miriam Alcántara, Andrea Martins and congress speakers. Cocktail reception." }
];

// === FAQ ===
const faqs = [
  { q:"What's included in each ticket type?", a:"All tickets include access to the 2-day event, international lectures, simultaneous translation, lunches, coffee breaks, access to the White Gala Dinner, welcome kit and certificate. The differences are in the additional benefits of each category (Gold and Divine VIP)." },
  { q:"Is accommodation included?", a:"Accommodation is only included in the Divine VIP ticket (2 nights in a shared double room with breakfast at the HF Fénix Lisbon Hotel). For other categories, we offer an exclusive discount link for participants." },
  { q:"Will there be simultaneous translation?", a:"Yes! The event will have simultaneous Portuguese-Spanish translation at all lectures. A professional translator will be in the room with their own microphone." },
  { q:"How does the Championship work?", a:"The championship has 3 categories: Hair by Hair, Powder Brows and Lips. Participants compete live. An international jury evaluates each work and the winners are awarded at the White Gala Dinner with trophies, recognition and international visibility." },
  { q:"What are the payment methods?", a:"We accept online payment via Stripe (credit/debit card) and also bank transfer or Bizum for the first 20 tickets with exclusive discount." },
  { q:"What is the cancellation policy?", a:"Cancellation up to 60 days before the event: 50% refund. After this period, no refund. The spot is transferable: you can transfer your ticket to another professional with 7 days notice." },
  { q:"How does the training voucher work?", a:"Each ticket includes an equivalent training voucher (Basic: €497, Gold: €797, Divine VIP: €1,297) fully applicable to training programs at Instituto Miriam Alcántara." }
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
    return `<div class="tier${t.hl?' tier-hl':''}">${badge}<h3 class="tier-name">${t.name}</h3><p class="tier-desc">${t.desc}</p><div class="tier-price-old">${t.old}</div><div class="tier-price">${t.price}</div><div class="tier-tag">Early Bird</div><ul class="tier-list">${includes}</ul>${excludes}<a href="${t.link}" target="_blank" rel="noopener" class="btn btn-gold tier-btn">Get ${t.name}</a></div>`;
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
