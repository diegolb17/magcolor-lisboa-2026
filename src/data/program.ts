export interface ProgramItem {
  time: string;
  duration: string;
  title_es: string;
  title_pt: string;
  title_en: string;
  description_es: string;
  description_pt: string;
  description_en: string;
  highlight?: boolean;
  type?: 'break' | 'music' | 'special' | 'talk';
}

export const day1: ProgramItem[] = [
  {
    time: "08:30",
    duration: "60 min",
    title_es: "Registro y Welcome Coffee",
    title_pt: "Registro e Welcome Coffee",
    title_en: "Registration & Welcome Coffee",
    description_es: "Acreditación, entrega de lanyard personalizado negro y dorado con QR del programa. Bolsa de bienvenida en cada silla. Café de bienvenida.",
    description_pt: "Credenciamento, entrega do lanyard personalizado preto e dourado com QR do programa. Bolsa de boas-vindas em cada cadeira. Café de boas-vindas.",
    description_en: "Accreditation, personalized black and gold lanyard with program QR code. Welcome bag on each seat. Welcome coffee.",
    type: "break"
  },
  {
    time: "09:00",
    duration: "5 min",
    title_es: "Vídeo Cuenta Atrás — 5 minutos",
    title_pt: "Vídeo Contagem Regressiva — 5 minutos",
    title_en: "Countdown Video — 5 minutes",
    description_es: "En pantalla aparece una cuenta atrás de 5 minutos con música potente. Las asistentes entienden que el evento está a punto de empezar.",
    description_pt: "Na tela aparece uma contagem regressiva de 5 minutos com música potente. As participantes entendem que o evento está prestes a começar.",
    description_en: "A 5-minute countdown appears on screen with powerful music. Attendees know the event is about to begin.",
    type: "special"
  },
  {
    time: "09:05",
    duration: "3 min",
    title_es: "Vídeo Institucional MAG Color Experience",
    title_pt: "Vídeo Institucional MAG Color Experience",
    title_en: "MAG Color Experience Institutional Video",
    description_es: "Primer gran impacto visual y emocional del evento. Audio al máximo.",
    description_pt: "Primeiro grande impacto visual e emocional do evento. Áudio no máximo.",
    description_en: "First major visual and emotional impact of the event. Audio at maximum.",
    type: "special"
  },
  {
    time: "09:08",
    duration: "10 min",
    title_es: "Bienvenida Oficial — Presentador MC",
    title_pt: "Boas-vindas Oficiais — Apresentador MC",
    title_en: "Official Welcome — MC Host",
    description_es: "El presentador da la bienvenida en portugués y español. Explica el programa del día. Primer anuncio del sorteo.",
    description_pt: "O apresentador dá as boas-vindas em português e espanhol. Explica o programa do dia. Primeiro anúncio do sorteio.",
    description_en: "The host welcomes everyone in Portuguese and Spanish. Explains the day's program. First raffle announcement.",
    highlight: true
  },
  {
    time: "09:13",
    duration: "4 min",
    title_es: "Presentación: Miriam Alcántara y Andrea Martins",
    title_pt: "Apresentação: Miriam Alcántara e Andrea Martins",
    title_en: "Presentation: Miriam Alcántara and Andrea Martins",
    description_es: "Miriam Alcántara (Directora y Embajadora MAG Color Europa) y Andrea Martins (Fundadora de MAG Color) abren oficialmente el congreso.",
    description_pt: "Miriam Alcántara (Diretora e Embaixadora MAG Color Europa) e Andrea Martins (Fundadora da MAG Color) abrem oficialmente o congresso.",
    description_en: "Miriam Alcántara (Director & MAG Color Europe Ambassador) and Andrea Martins (MAG Color Founder) officially open the congress.",
    highlight: true
  },
  {
    time: "09:20",
    duration: "60 min",
    title_es: "Ponencia 1 — Full Lips · Ana Gabriela · Venezuela",
    title_pt: "Palestra 1 — Full Lips · Ana Gabriela · Venezuela",
    title_en: "Talk 1 — Full Lips · Ana Gabriela · Venezuela",
    description_es: "Training Látex Labios. Las asistentes pueden practicar con su propia máquina. Cámara de directo activa. Traducción simultánea.",
    description_pt: "Training Látex Lábios. As participantes podem praticar com sua própria máquina. Câmera ao vivo ativa. Tradução simultânea.",
    description_en: "Latex Lip Training. Attendees can practice with their own machine. Live camera active. Simultaneous translation.",
    type: "talk"
  }
];

export const day2: ProgramItem[] = [
  {
    time: "08:30",
    duration: "60 min",
    title_es: "Saxofonista en Vivo — Apertura de Puertas",
    title_pt: "Saxofonista ao Vivo — Abertura das Portas",
    title_en: "Live Saxophonist — Doors Open",
    description_es: "Un saxofonista en directo ameniza la entrada durante 60 minutos. Ambiente festivo y premium desde el primer minuto.",
    description_pt: "Um saxofonista ao vivo anima a entrada durante 60 minutos. Ambiente festivo e premium desde o primeiro minuto.",
    description_en: "A live saxophonist entertains the entrance for 60 minutes. Festive and premium atmosphere from the very first minute.",
    type: "special"
  },
  {
    time: "09:15",
    duration: "3 min",
    title_es: "Vídeo Cuenta Atrás + Vídeo MAG Color",
    title_pt: "Vídeo Contagem Regressiva + Vídeo MAG Color",
    title_en: "Countdown Video + MAG Color Video",
    description_es: "El Día 2 arranca con la misma energía que el Día 1.",
    description_pt: "O Dia 2 começa com a mesma energia do Dia 1.",
    description_en: "Day 2 starts with the same energy as Day 1.",
    type: "special"
  },
  {
    time: "09:26",
    duration: "57 min",
    title_es: "Ponencia 6 — Pigmentología y Colorimetría · Andrea Martins · Brasil",
    title_pt: "Palestra 6 — Pigmentologia e Colorimetria · Andrea Martins · Brasil",
    title_en: "Talk 6 — Pigmentology and Colorimetry · Andrea Martins · Brazil",
    description_es: "La ponencia de más peso académico del congreso. La fundadora de MAG Color comparte su conocimiento.",
    description_pt: "A palestra de maior peso acadêmico do congresso. A fundadora da MAG Color compartilha seu conhecimento.",
    description_en: "The most academically significant talk of the congress. The founder of MAG Color shares her knowledge.",
    highlight: true,
    type: "talk"
  },
  {
    time: "18:30",
    duration: "120 min",
    title_es: "Cena de Gala — Premiación del Campeonato",
    title_pt: "Jantar de Gala — Premiação do Campeonato",
    title_en: "Gala Dinner — Championship Awards",
    description_es: "Dress code: NEGRO Y DORADO. Mesa VIP. Palabras de Miriam y Andrea. Entrega de certificados. Premiación de las 3 categorías. Foto grupal oficial.",
    description_pt: "Dress code: PRETO E DOURADO. Mesa VIP. Palavras de Miriam e Andrea. Entrega de certificados. Premiação das 3 categorias. Foto oficial do grupo.",
    description_en: "Dress code: BLACK AND GOLD. VIP table. Words from Miriam and Andrea. Certificate ceremony. Awards for 3 categories. Official group photo.",
    highlight: true,
    type: "special"
  }
];

export const divineNight: ProgramItem[] = [
  {
    time: "21:00",
    duration: "—",
    title_es: "Divine Night — Cena Privada VIP",
    title_pt: "Divine Night — Jantar Privado VIP",
    title_en: "Divine Night — Private VIP Dinner",
    description_es: "Solo para las 10 asistentes con ticket Divine VIP. Cena íntima con Miriam Alcántara, Andrea Martins y los ponentes del congreso. Recepción con cóctel.",
    description_pt: "Apenas para as 10 participantes com ingresso Divine VIP. Jantar íntimo com Miriam Alcántara, Andrea Martins e os palestrantes do congresso. Recepção com coquetel.",
    description_en: "Only for the 10 Divine VIP ticket holders. Intimate dinner with Miriam Alcántara, Andrea Martins and the congress speakers. Cocktail reception.",
    highlight: true,
    type: "special"
  }
];
