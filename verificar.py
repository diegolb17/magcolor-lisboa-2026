"""
Verificacion completa del sitio del congreso contra PRODUCCION.

Comprueba, en los 3 idiomas:
  - las 18 paginas responden 200
  - los 3 data files parsean sin error (un fallo ahi deja la pagina en negro)
  - todas las fotos referenciadas existen y pesan
  - los 5 cambios de octubre (programa y premios)
  - las 7 incorporaciones (jurados, demo, embajadoras, influencers)
  - la foto nueva de Marcela y que la vieja ya no se referencia
  - el SEO de cada pagina (canonical, hreflang, og:image)

Uso:  python verificar.py
"""
import json
import re
import subprocess
import sys
import urllib.error
import urllib.request

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

B = "https://lisboa2026.institutomiriamalcantara.com"
UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/128.0 Safari/537.36"}
IDIOMAS = {"pt": "data.js", "es": "data-es.js", "en": "data-en.js"}
PAGINAS = ["", "ponentes", "programa", "entradas", "patrocinadores", "faq"]

fallos = []
avisos = []


def ok(cond, etiqueta, detalle=""):
    print(f"  {'OK ' if cond else 'XX '} {etiqueta}{('  ' + detalle) if detalle else ''}")
    if not cond:
        fallos.append(etiqueta + (" · " + detalle if detalle else ""))


def baja(path, binario=False):
    r = urllib.request.Request(B + path, headers=UA)
    with urllib.request.urlopen(r, timeout=60) as resp:
        return resp.read() if binario else resp.read().decode("utf-8", "replace")


def codigo(path):
    try:
        r = urllib.request.Request(B + path, headers=UA, method="GET")
        with urllib.request.urlopen(r, timeout=60) as resp:
            return resp.status, len(resp.read())
    except urllib.error.HTTPError as e:
        return e.code, 0


def datos(lang):
    """Evalua el data file en Node y devuelve sus arrays. Si hay error de sintaxis, revienta aqui."""
    js = baja("/" + IDIOMAS[lang])
    script = (
        "let s=" + json.dumps(js) + ";"
        "const fn=new Function('with(this){'+s+'; return {speakers,demos,jurados,embajadoras,influencers,"
        "day1,day2,divineNight,premios,tiers,faqs};}');"
        "const stub={getElementById:()=>null,querySelector:()=>null,querySelectorAll:()=>[]};"
        "const r=fn.call({document:stub});"
        "process.stdout.write(JSON.stringify(r));"
    )
    p = subprocess.run(["node", "-e", script], capture_output=True, text=True, encoding="utf-8")
    if p.returncode != 0:
        print("     ERROR al evaluar", IDIOMAS[lang], ":", (p.stderr or "")[:300])
        return None
    return json.loads(p.stdout)


print("=" * 72)
print("1. LAS 18 PAGINAS")
print("=" * 72)
for lang in IDIOMAS:
    for pag in PAGINAS:
        ruta = f"/{lang}/" + (pag + "/" if pag else "")
        c, n = codigo(ruta)
        ok(c == 200 and n > 3000, f"{ruta:28s}", f"{c} · {n // 1024} KB")
c, _ = codigo("/")
ok(c == 200, "/ (rewrite a /pt/)", str(c))

print()
print("=" * 72)
print("2. DATA FILES: sintaxis y contenido")
print("=" * 72)
D = {}
for lang in IDIOMAS:
    d = datos(lang)
    ok(d is not None, f"{IDIOMAS[lang]} parsea")
    if d is None:
        continue
    D[lang] = d
    ok(len(d["speakers"]) == 15, f"{lang}: 15 ponentes", str(len(d["speakers"])))
    ok(len(d["demos"]) == 5, f"{lang}: 5 demos", str(len(d["demos"])))
    ok(len(d["jurados"]) == 7, f"{lang}: 7 jurados", str(len(d["jurados"])))
    ok(len(d["embajadoras"]) == 6, f"{lang}: 6 embajadoras", str(len(d["embajadoras"])))
    ok(len(d["influencers"]) == 2, f"{lang}: 2 influencers", str(len(d["influencers"])))
    ok(len(d["premios"]) == 2, f"{lang}: 2 premios", str(len(d["premios"])))
    ok(len(d["tiers"]) == 3, f"{lang}: 3 entradas", str(len(d["tiers"])))

print()
print("=" * 72)
print("3. FOTOS: todas las referenciadas existen")
print("=" * 72)
refs = set()
for lang, d in D.items():
    for arr in ("speakers", "demos", "jurados", "embajadoras", "influencers"):
        for x in d[arr]:
            refs.add(x["img"])
print(f"  {len(refs)} fotos distintas referenciadas")
rotas = []
for img in sorted(refs):
    c, n = codigo(f"/assets/speakers/{img}.jpg")
    if c != 200 or n < 5000:
        rotas.append(f"{img}.jpg ({c}, {n}B)")
ok(not rotas, "ninguna foto rota", ", ".join(rotas))
c, n = codigo("/assets/speakers/marcela-macedo-v2.jpg")
ok(c == 200 and n > 100000, "foto nueva de Marcela", f"{n // 1024} KB")
ok("marcela-macedo" not in refs, "la foto vieja de Marcela ya no se usa")
ok("marcela-macedo-v2" in refs, "se usa marcela-macedo-v2")

print()
print("=" * 72)
print("4. LOS 5 CAMBIOS DE OCTUBRE")
print("=" * 72)
ESPERA = {
    "es": dict(spa="spa de pies", regalo="regalo del evento", cap="Andreia Guerreiro",
               vip_fuera=["10 participantes", "los ponentes"], vip_dentro="Andrea Martins",
               pig="Pigmentos MAG Color", dto="50% de descuento en la entrada"),
    "pt": dict(spa="spa de pés", regalo="presente do evento", cap="Andreia Guerreiro",
               vip_fuera=["10 participantes", "os palestrantes"], vip_dentro="Andrea Martins",
               pig="Pigmentos MAG Color", dto="50% de desconto no ingresso"),
    "en": dict(spa="foot spa", regalo="gift from the event", cap="Andreia Guerreiro",
               vip_fuera=["10 Divine VIP participants", "congress speakers"], vip_dentro="Andrea Martins",
               pig="MAG Color pigments", dto="50% off the ticket"),
}
for lang, d in D.items():
    e = ESPERA[lang]
    print(f"  --- {lang.upper()} ---")
    # 1) spa de pies sin hora
    spa = [x for x in d["day1"] if e["spa"].lower() in x["title"].lower()]
    ok(len(spa) == 1, f"{lang} 1· existe el spa de pies")
    if spa:
        ok(spa[0]["t"] == "", f"{lang} 1· sin hora", repr(spa[0]["t"]))
        ok(e["regalo"].lower() in spa[0]["desc"].lower(), f"{lang} 1· dice que es un regalo")
    ok(not [x for x in d["day1"] if x["title"].strip() in ("Descanso", "Break")],
       f"{lang} 1· ya no hay 'Descanso' suelto")
    # 2) Andreia en lugar de Boring
    ok(not [x for x in d["day2"] if "Boring" in x["title"]], f"{lang} 2· Boring fuera del dia 2")
    cap = [x for x in d["day2"] if e["cap"] in x["title"] and x["t"] == "14:45"]
    ok(len(cap) == 1, f"{lang} 2· Andreia a las 14:45", cap[0]["title"] if cap else "")
    # 3) Divine Night
    dn = d["divineNight"][0]["desc"]
    for frase in e["vip_fuera"]:
        ok(frase not in dn, f"{lang} 3· fuera '{frase}'")
    ok(e["vip_dentro"] in dn, f"{lang} 3· sigue Andrea Martins")
    ok("VIP" in dn, f"{lang} 3· sigue siendo solo VIP")
    # 4) pigmentos sin cantidad
    todos = [i for p in d["premios"] for i in p["items"]]
    ok(not [i for i in todos if re.search(r"\b10\s*(unidades|units)", i)], f"{lang} 4· sin '10 unidades'")
    ok(len([i for i in todos if i == e["pig"]]) == 2, f"{lang} 4· pigmentos sin cantidad en los 2 premios")
    # 5) 50% dto en la entrada (2o premio)
    seg = d["premios"][1]["items"]
    ok(any(e["dto"] in i for i in seg), f"{lang} 5· 2o premio con 50% dto. de entrada")
    ok(not [i for i in seg if re.match(r"^1 (entrada|ingresso|ticket)", i)], f"{lang} 5· ya no regala la entrada")
    # el 1er premio conserva su plaza de ponente (no habia que tocarlo)
    pri = d["premios"][0]["items"]
    ok(any(re.search(r"(ponente|palestrante|speaker)", i) for i in pri), f"{lang} ·  1er premio conserva la plaza de ponente")

print()
print("=" * 72)
print("5. LAS 7 INCORPORACIONES")
print("=" * 72)
NUEVAS = {
    "jurados": ["Giovana Lima", "Delma Lima"],
    "demos": ["Leticia Márquez"],
    "embajadoras": ["Thais Prestes", "Fernanda Zampiroli"],
    "influencers": ["Bia Lashes", "Thais Silva"],
}
for lang, d in D.items():
    faltan = []
    for arr, gente in NUEVAS.items():
        nombres = [x["name"] for x in d[arr]]
        faltan += [f"{n} ({arr})" for n in gente if n not in nombres]
    ok(not faltan, f"{lang}: las 7 estan", ", ".join(faltan))
# que no se hayan colado duplicados
for lang, d in D.items():
    dups = []
    for arr in ("speakers", "demos", "jurados", "embajadoras", "influencers"):
        ns = [x["name"] for x in d[arr]]
        dups += [f"{n} x{ns.count(n)} en {arr}" for n in set(ns) if ns.count(n) > 1]
    ok(not dups, f"{lang}: sin duplicados dentro de un mismo grupo", ", ".join(dups))

print()
print("=" * 72)
print("6. RENDER REAL EN EL NAVEGADOR (no solo los datos)")
print("=" * 72)
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
for lang in IDIOMAS:
    p = subprocess.run([CHROME, "--headless", "--disable-gpu", "--no-sandbox", "--dump-dom",
                        "--virtual-time-budget=20000", f"{B}/{lang}/ponentes/"],
                       capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=180)
    dom = p.stdout or ""
    for grid, minimo in (("sp-grid", 15), ("demos-grid", 5), ("jurados-grid", 7),
                         ("embajadoras-grid", 6), ("influencers-grid", 2)):
        m = re.search(r'id="' + grid + r'"[^>]*>(.*?)</div>\s*(?:<div style="text-align:center|</div></section>)', dom, re.S)
        trozo = m.group(1) if m else ""
        n = trozo.count('class="card center speaker"') or trozo.count('class="sp-card"')
        ok(n >= minimo, f"{lang} · {grid} pinta {minimo}", f"encontradas {n}")

print()
print("=" * 72)
print("7. SEO INTACTO")
print("=" * 72)
for lang in IDIOMAS:
    for pag in PAGINAS:
        ruta = f"/{lang}/" + (pag + "/" if pag else "")
        html = baja(ruta)
        can = re.search(r'<link rel="canonical" href="([^"]+)"', html)
        hre = len(re.findall(r'hreflang="', html))
        og = re.search(r'<meta property="og:image" content="([^"]+)"', html)
        bien = bool(can) and hre >= 4 and bool(og) and og.group(1).startswith("http")
        esperado = f"{B}{ruta}".rstrip("/")
        coincide = bool(can) and can.group(1).rstrip("/") == esperado
        ok(bien and coincide, f"SEO {ruta:26s}", f"canonical={'ok' if coincide else (can.group(1) if can else 'FALTA')} · hreflang={hre}")

print()
print("=" * 72)
if fallos:
    print(f"RESULTADO: {len(fallos)} FALLO(S)")
    for f in fallos:
        print("  -", f)
    sys.exit(1)
print("RESULTADO: todo correcto, sin bugs")
