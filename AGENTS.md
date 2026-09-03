# AGENTS.md — MAGColor Experience Lisboa 2026

Guía maestra para agentes de IA y desarrolladores que trabajen en este repositorio.
**Lee este archivo completo antes de tocar cualquier código.** Está basado únicamente
en el código y configuración reales del proyecto.

---

## 1. Visión General del Proyecto

Sitio web oficial del congreso **MAGColor Experience Lisboa 2026** (24–25 octubre 2026,
Hotel HF Fénix Lisboa), evento de micropigmentación organizado por el Instituto Miriam
Alcántara (Barcelona) y MAG Color (Brasil).

- **Propósito**: landing informativa y de venta del congreso — ponentes, programa,
  entradas (Stripe), FAQ, patrocinadores — en **3 idiomas** (PT, ES, EN).
- **Stack**: [Astro](https://astro.build) `^5.0.0` con `output: 'static'` (SSG puro).
  Sin frameworks UI, sin componentes dinámicos, sin backend, sin base de datos, sin
  variables de entorno.
- **Estilo**: página única por idioma escrita a mano, CSS propio en `src/styles/global.css`
  (fondo negro `#050508`, dorado `#d0bc6e`, tipografías **Lora** (títulos) + **Inter**
  (cuerpo) desde Google Fonts).
- **Tailwind**: declarado en `package.json` pero **NO se usa** en ningún archivo.
  No añadas clases de Tailwind; sigue el CSS existente.
- **Deploy**: Vercel, auto-despliegue desde GitHub. Dominio canónico:
  `https://lisboa2026.institutomiriamalcantara.com` (alias temporal
  `magcolor-lisboa-2026.vercel.app`).

### URLs en producción

| Ruta | Contenido |
|---|---|
| `/` | redirige a `/pt/` (rewrite en `vercel.json`) |
| `/pt/`, `/es/`, `/en/` | Home (countdown, hero, highlights, preview de ponentes) |
| `/pt/ponentes` … | Ponentes, demos en vivo, jurados y embajadoras |
| `/pt/programa` … | Programa con 3 pestañas: Divine Night, Día 1, Día 2 |
| `/pt/entradas` … | Tiers Basic/Gold/Divine VIP + tarjetas extra |
| `/pt/faq` … | Acordeón de preguntas frecuentes |
| `/pt/patrocinadores` … | Logos de sponsors + CTA WhatsApp |

---

## 2. Arquitectura y Estructura del Repositorio

```
magcolor-lisboa-2026/
├── astro.config.mjs          # output: 'static' (lo único que contiene)
├── package.json              # deps: astro ^5.0.0; devDeps: tailwind (SIN USO)
├── vercel.json               # buildCommand, outputDirectory: dist, rewrite / → /pt/
├── public/                   # TODO se sirve tal cual en la raíz del sitio
│   ├── data.js               # ★ DATA PT — fuente de verdad de contenido dinámico
│   ├── data-es.js            # ★ DATA ES — mismo esquema, traducido
│   ├── data-en.js            # ★ DATA EN — mismo esquema, traducido
│   ├── assets/speakers/      # fotos (JPG; nombres versionados -v2/-v3 para cache-bust)
│   ├── assets/sponsors/      # sponsor-1.jpg, sponsor-2.jpg
│   ├── assets/bg/            # lisbon-bg.jpg
│   ├── assets/logos/         # logo-mag-horizontal.jpeg, logo-mag-mark.png
│   ├── logo.png, logo-horizontal.jpg, favicon.png, ig-logo.png
│   ├── og-image.jpg          # ★ 1200×630 — preview al compartir (WhatsApp/IG/Facebook)
│   ├── certificado.jpg       # imagen del vale formativo (página entradas)
│   ├── cejas.jpg / ojos.jpg / labios.jpg   # franja decorativa del home (opacidad 0.20)
│   └── reglas-campeonato.pdf # PDF descargable de reglas (página programa)
├── src/
│   ├── styles/global.css     # ★ ÚNICO CSS del sitio (261 líneas, clases propias)
│   ├── pages/                # ★ 18 páginas: 6 por idioma × pt/es/en
│   │   ├── pt/  → index, ponentes, programa, entradas, faq, patrocinadores (.astro)
│   │   ├── es/  → mismos 6 archivos, texto en español
│   │   └── en/  → mismos 6 archivos, texto en inglés
│   ├── data/                 # ⚠️ MUERTO — program.ts y speakers.ts NO se importan
│   └── i18n/                 # ⚠️ MUERTO — pt/es/en.json NO se importan
└── README.md                 # solo el título del proyecto
```

### Reglas estructurales críticas

- **NO hay layouts ni componentes** (`src/layouts/`, `src/components/` no existen).
  Cada `.astro` es un **documento HTML completo e independiente** (head, header,
  footer, botón flotante de WhatsApp, scripts). Editar algo global = editar **18 archivos**
  (o escribir un script por idioma y aplicarlo a los 3).
- **Contenido dinámico en JavaScript plano, no en Astro.** Los arrays de ponentes,
  tiers, programa, FAQ, jurados y embajadoras viven en `public/data*.js` como
  `const` globales y se renderizan con `innerHTML` en el cliente.
- **Qué carga cada página**: `ponentes`, `programa`, `entradas` y `faq` cargan al final
  `<script is:inline src="/data.js">` (o `data-es.js`/`data-en.js` según idioma).
  `index` y `patrocinadores` son **100% estáticas** (no cargan data) — sus previews de
  ponentes son HTML hardcodeado que hay que actualizar a mano.
- `src/data/*.ts` y `src/i18n/*.json` son **reliquias de un refactor**. No se importan
  desde ninguna página. **No son la fuente de verdad** y están desactualizados — no
  edites basándote en ellos, y si los tocas no cambia nada en producción.

---

## 3. Flujo de Datos y Lógica Central

### Esquema de `public/data*.js` (idéntico en los 3 idiomas)

```js
const speakers = [ { flag, country, name, img, spec, bio }, ... ]   // ponentes
const demos    = [ { flag, country, name, img, spec }, ... ]        // demos en vivo Día 2
const tiers    = [ { name, desc, price, badge?, badgeClass?, hl?,
                     includes: [...], link: "https://buy.stripe.com/..." }, ... ]
const day1     = [ { t: "HH:MM", star?: true, title, desc }, ... ]  // timeline Día 1
const day2     = [ ... ]                                            // timeline Día 2
const divineNight = [ { t: "21:00", star: true, title, desc } ]
const faqs     = [ { q, a }, ... ]
const jurados  = [ { flag, country, name, img, spec }, ... ]
const embajadoras = [ { flag, country, name, img, spec }, ... ]
const premios  = [ { pos, title, hl?, items: [...] }, ... ]        // premios del campeonato
```

### Funciones de render (vanilla JS, al final de cada data file)

| Función | Contenedor | Detalle |
|---|---|---|
| `renderSpeakers()` | `#sp-grid` (ponentes) + `#demos-grid` | fotos como `background-image` en `.sp-photo` |
| `renderTiers()` | `#tiers` (entradas) | tarjetas con botón `Comprar` → Stripe |
| `renderTimeline(id, data)` | `#tl-d1` `#tl-d2` `#tl-dn` (programa) | `star:true` pinta `✦` |
| `renderPremios()` | `#premios-grid` (programa) | tarjetas `.tier.premio`; `hl:true` = borde dorado |
| `renderJurados()` | `#jurados-grid` | `<img>` con `onerror` que oculta si falta |
| `renderEmbajadoras()` | `#embajadoras-grid` | idem |
| `renderFAQ()` | `#faq-list` | primer ítem con clase `open` |
| `switchTab(t)` | pestañas `d1`/`d2`/`dn` | alterna `.tab-active` y `display` |

`// Init` al final invoca todas las funciones. **Un error de sintaxis en cualquiera de
los 3 data files rompe TODO el render de esa página silenciosamente** (página en negro
o secciones vacías) — ver sección 6.

### Interacciones con servicios externos

- **Stripe**: los links de compra (`https://buy.stripe.com/...`) están hardcodeados en
  el array `tiers` de cada idioma. No tocar sin autorización explícita.
- **WhatsApp**: botón flotante `.wa-float` y CTAs — número `+34 696 808 098` con
  mensajes pre-rellenados URL-encoded.
- **Instagram**: `@institutomiriamalcantara` — enlace en footer (18 páginas) y sección
  de Miriam (home).
- **Fuentes**: Google Fonts (Lora + Inter) vía `@import` en `global.css`.
- No hay APIs propias, ni CMS, ni base de datos. La tienda (WordPress/WooCommerce)
  **no forma parte de este repo** — es una instalación aparte administrada en
  `institutomiriamalcantara.com` y `tienda.institutomiriamalcantara.com`.

---

## 4. Instalación y Entorno Local

```bash
npm install        # solo astro + tailwind (este último sin uso)
npm run dev        # servidor local: http://localhost:4321/pt/
npm run build      # compila a dist/ (18 páginas estáticas)
npm run preview    # sirve dist/ localmente
```

- **Sin variables de entorno**: no existe `.env`, no se requiere ninguna.
- **Verificación obligatoria antes de cualquier commit**:

```bash
# 1) Sintaxis JS de los 3 data files (un error = sitio roto en silencio):
for f in public/data.js public/data-es.js public/data-en.js; do
  node -e "require('vm').runInNewContext(require('fs').readFileSync('$f','utf-8'))" \
    2>&1 | grep -q 'SyntaxError' && echo "$f: SINTAXIS ROTA" || echo "$f: OK";
done
# (el único error esperable es 'document is not defined', que es normal en Node)

# 2) Build de Astro:
npx astro build   # debe terminar con "[build] 18 page(s) built"
```

- **Entorno del equipo**: Windows + git-bash (MSYS). `node`, `npm`, `python` y
  `pdflatex` (MiKTeX) disponibles. Los scripts de edición en lote de este proyecto
  suelen hacerse en Python (heredocs de bash con acentos/emoji fallan en git-bash:
  usa `write_file` + `python script.py`).

---

## 5. Testing, Linting y Comandos Útiles

- **No hay tests, no hay linter, no hay CI configurado.** La única validación es el
  `node -e` de sintaxis + `npx astro build` de la sección anterior.
- **Deploy**: `git push` a `main` → Vercel despliega automáticamente en 1–2 min.
  No hay pasos manuales. Para verificar en producción:

```bash
curl -sI "https://lisboa2026.institutomiriamalcantara.com/assets/speakers/<img>.jpg" | head -1
curl -s "https://lisboa2026.institutomiriamalcantara.com/data.js" | grep -c "<nombre>"
```

- **Git**: remote con token PAT embebido en la URL. Si `git push` pide contraseña,
  el token expiró → pedir uno nuevo a Diego y
  `git remote set-url origin https://<token>@github.com/diegolb17/magcolor-lisboa-2026.git`.
- **Verificación visual**: no hay herramienta de screenshot configurada; se revisa con
  `curl` y pidiendo al usuario un hard-refresh (Ctrl+Shift+R) — Vercel cachea agresivamente.

---

## 6. Convenciones y Directrices para Agentes

### Cambios de contenido = siempre ×3

Todo dato (ponentes, programa, tiers, FAQ, jurados, embajadoras) vive en **3 archivos
sincronizados** (`data.js`, `data-es.js`, `data-en.js`). Un cambio hecho solo en uno deja
la web inconsistente entre idiomas. Traduce PT/ES/EN y aplica el cambio en los 3.

### Fotos de ponentes

- Guardar en `public/assets/speakers/`, formato `.jpg` (aunque el archivo fuente sea
  `.png`/`.jpeg`, se renombra a `.jpg`; los navegadores detectan el contenido).
- **Cache-busting obligatorio**: Vercel sirve assets con `max-age=31536000, immutable`.
  **Nunca** sobreescribas una foto existente con el mismo nombre — la web seguirá
  mostrando la vieja. Usa nombre nuevo (`-v2`, `-v3`) y actualiza TODAS las referencias
  (`img` en data files + previews hardcodeados de `src/pages/*/index.astro`).
- Nombres de archivo: kebab-case ASCII sin acentos (ej. `barbara-monteiro-v3.jpg`).
- Referencia de quién aparece dónde (evita duplicar sin querer): una misma persona
  puede estar en `speakers`, `demos`, `jurados` y/o `embajadoras` — es intencional.

### Errores comunes que YA ocurrieron (no repetirlos)

1. **Llave `}` perdida en data files** → página entera en blanco/negro. Siempre correr
   la verificación de sintaxis de la sección 4.
2. **Reemplazos en cadena con `str.replace`** sobre el mismo patrón → duplicados
   (ej. pestañas de programa duplicadas). Usa reemplazos únicos y verifica después
   con `grep -c`.
3. **Fotos "que no se ven"**: casi siempre es caché (nombre repetido) o HTML roto
   (ej. `</a<img` en vez de `</a><img>`). Revisar con curl el asset y el HTML.
4. **Pantalla negra en Android**: los elementos `[data-fade]` arrancan con `opacity:0`
   y dependen de IntersectionObserver. Hay dos redes de seguridad en **las 18 páginas**
   — **no borres ninguna**:
   - `setTimeout(1500ms)` que añade `.is-visible` a lo que no se reveló;
   - `<noscript><style>[data-fade]{opacity:1;transform:none}</style></noscript>` en el
     `<head>`, para quien navega con JS desactivado.

   Si creas una página nueva, cópiale las dos. Verificación (viewport corto a propósito,
   para que casi todo quede bajo el pliegue):

   ```bash
   chrome --headless=new --window-size=1280,700 --virtual-time-budget=4000 \
     --dump-dom http://localhost:8899/pt/ > dom.html
   # todo elemento con data-fade debe acabar con is-visible
   ```
5. **Horas del programa**: redondear a `:00`/`:30` (nada de `:22`, `:02`). Los eventos
   estrella (`sorteo`, galas) llevan `star:true` para pintar el `✦`.
6. **Links de WhatsApp**: siempre con mensaje pre-rellenado URL-encoded, por idioma
   (PT "Olá...", ES "Hola...", EN "Hello...").

### SEO y preview al compartir (bloque en el `<head>` de las 18 páginas)

Cada página lleva, justo después de `</title>`: `meta description` propia, `theme-color`,
`canonical`, `hreflang` para pt/es/en + `x-default`, el juego completo de Open Graph
(`og:title`, `og:description`, `og:url`, `og:image` → `/og-image.jpg`, 1200×630),
Twitter Card y el `<noscript>` del fade.

- **Al crear o renombrar una página, replica el bloque entero** y ajusta `canonical`,
  `og:url` y los tres `hreflang`. Un canonical copiado de otra página es peor que no tenerlo.
- `og:image` es absoluta y apunta al dominio canónico; nunca la pongas relativa.
- `/` sirve `/pt/` por rewrite: su canonical apunta a `/pt/`, así que no hay contenido
  duplicado aunque la URL sea distinta.
- Si cambias `og-image.jpg`, usa **nombre nuevo** (cache immutable de Vercel) y luego
  refresca el scraper de Facebook/WhatsApp en developers.facebook.com/tools/debug.

### Imágenes

- Todo `<img>` lleva `loading="lazy" decoding="async"`, salvo el logo del header
  (`class="logo"`, está sobre el pliegue). Mantén esa regla en lo que añadas.
- En `public/assets/speakers/` solo debe haber fotos **en uso**. Las versiones viejas
  tras un cache-bust se borran (quedan en el historial de git). Comprobación:

```bash
# fotos presentes que no referencia ni data*.js ni ningun .astro
python -c "
import re,os,glob
refs=set()
for f in glob.glob('public/data*.js'): refs|={m+'.jpg' for m in re.findall(r'img:\s*\"([^\"]+)\"',open(f,encoding='utf-8').read())}
for f in glob.glob('src/pages/*/*.astro'): refs|=set(re.findall(r'/assets/speakers/([\w\-.]+\.jpg)',open(f,encoding='utf-8').read()))
have=set(os.listdir('public/assets/speakers'))
print('rotas:',refs-have); print('sin usar:',sorted(have-refs))"
```

### Reglas de estilo

- CSS: variables en `:root` de `global.css` (`--gold`, `--text`, `--bd`…). No
  hardcodear colores. Clases existentes: `.wrap`, `.hdr`, `.nav`, `.card`, `.grid-2/4`,
  `.tiers`, `.sp-grid`, `.timeline` (`.tl-*`), `.faq-item`, `.wa-float`, `.footer`.
- Breakpoints: `@media (max-width: 960px/640px/400px)` ya definidos; respetar el
  comportamiento mobile (hamburguesa ≤960px).
- HTML de páginas: una línea densa por sección es el estilo actual; mantener
  consistencia, no reformatear archivos completos.
- Textos: PT/ES/EN con traducción natural (nada de PT en páginas ES/EN).

### Archivos que NO deben modificarse directamente

- `package-lock.json` (sin tocar; `npm install` lo gestiona).
- Links de Stripe en `tiers` (solo con instrucción explícita de Diego/Miriam).
- `.gitignore`, `vercel.json`, `astro.config.mjs` (configuración de deploy; cambios
  requieren confirmación).

### Contexto de negocio útil

- Evento: 24–25 oct 2026, Hotel HF Fénix Lisboa. Entradas: Basic 497€, Gold 797€,
  Divine VIP 1.297€ (Stripe). Premios del campeonato (array `premios`, página programa):
  1º incluye trofeo, equipo Biomaser, agujas Pink Biomaser, anillos, 10 pigmentos
  MAG Color, puesto de ponente en la próxima edición europea y 50% en formación;
  2º incluye trofeo, 10 pigmentos, anillos, entrada a la próxima edición y 50% en
  formación. El trofeo va siempre como primer item de la lista.
  WhatsApp instituto: +34 696 808 098 (Nieves). Instagram:
  @institutomiriamalcantara. Cambios los pide Miriam vía Diego; antes de inventar
  datos (banderas, specs, bios) preguntar.
- El chatbot de WhatsApp/Instagram (system prompts) y la tienda WooCommerce **no
  viven en este repo** — están en la carpeta `Miriam Alcantara/` y en WordPress.
