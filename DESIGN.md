---
name: Anthalis
description: Catálogo de Florería Anthalis como una portada de sillar arequipeña de noche, con una hornacina iluminada por colección.
colors:
  night: "#0c0b0a"
  night-2: "#16130f"
  night-line: "#2c271f"
  on-night: "#efe7d6"
  on-night-soft: "#b8ad98"
  gold: "#c8a45c"
  gold-hi: "#e2c585"
  gold-deep: "#7a5f2c"
  sillar: "#d8d2c7"
  sillar-hi: "#ece7df"
  sillar-lo: "#b2a998"
  on-stone: "#2b241c"
  on-stone-soft: "#4d4438"
  field-paper: "#f7f4ef"
  field-rule: "#9f9584"
  collection-suspiros: "#6e5644"
  collection-face-to-face: "#26331f"
  collection-abrazos-de-flor: "#8a1426"
  collection-todo-de-mi: "#f2c6dc"
  collection-luna-de-rosa: "#2a1518"
  collection-orbitas-doradas: "#8fbac9"
typography:
  display:
    fontFamily: "Pinyon Script, cursive"
    fontSize: "clamp(56px, 16vw, 128px)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "0em"
  headline:
    fontFamily: "Marcellus, Times New Roman, serif"
    fontSize: "clamp(26px, 6.4vw, 46px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "0.05em"
  title:
    fontFamily: "Marcellus, Times New Roman, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.02em"
  body:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Marcellus, Times New Roman, serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "0.1em"
  data:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.05em"
  price:
    fontFamily: "Hanken Grotesk Variable, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 650
    lineHeight: 1.3
    fontFeature: "tnum, lnum"
rounded:
  control: "3px"
  dialog: "4px"
  sheet: "14px"
  pill: "12px"
  arch: "999px 999px 0 0"
  band-arch: "50% 50% 0 0 / 84px 84px 0 0"
  band-arch-wide: "50% 50% 0 0 / 150px 150px 0 0"
  round: "50%"
spacing:
  gutter-narrow: "14px"
  gutter: "16px"
  gutter-wide: "32px"
  frieze: "30px"
  touch: "44px"
  control: "48px"
components:
  button-gold:
    backgroundColor: "{colors.night}"
    textColor: "{colors.gold-hi}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-gold-hover:
    backgroundColor: "#1d1810"
    textColor: "#f1d9a2"
  button-night:
    backgroundColor: "{colors.night}"
    textColor: "{colors.on-night}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-stone:
    backgroundColor: "{colors.sillar}"
    textColor: "{colors.on-stone}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-stone-hover:
    backgroundColor: "{colors.sillar-hi}"
  text-link:
    textColor: "{colors.gold}"
    height: "44px"
  tab-active:
    backgroundColor: "{colors.sillar}"
    textColor: "{colors.on-stone}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 14px"
    height: "44px"
  tab-idle:
    textColor: "{colors.on-night-soft}"
    typography: "{typography.label}"
    padding: "0 14px"
    height: "44px"
  input-order:
    backgroundColor: "{colors.field-paper}"
    textColor: "{colors.on-stone}"
    rounded: "{rounded.control}"
    padding: "11px 12px"
    height: "48px"
  niche-add:
    backgroundColor: "{colors.night}"
    textColor: "{colors.gold}"
    rounded: "{rounded.round}"
    size: "48px"
  niche-add-lit:
    backgroundColor: "#1d1810"
    textColor: "{colors.gold-hi}"
    rounded: "{rounded.round}"
    size: "48px"
  piece-add:
    rounded: "{rounded.control}"
    padding: "0 10px"
    height: "44px"
  piece-add-lit:
    backgroundColor: "{colors.night}"
    textColor: "{colors.gold-hi}"
    rounded: "{rounded.control}"
    height: "44px"
  floating-order:
    backgroundColor: "{colors.night}"
    textColor: "{colors.gold-hi}"
    rounded: "{rounded.control}"
    height: "52px"
  count-badge:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.night}"
    rounded: "{rounded.pill}"
    height: "24px"
---

# Design System: Anthalis

## Overview

**Creative North Star: "Sillar de noche"**

Anthalis se presenta como una portada de sillar arequipeño vista de noche: el negro nocturno domina, la piedra tallada aparece en marcos, arcos, frisos y orlas, y el oro del logo se comporta como luz, no como pintura. Cada colección vive en su propia hornacina, con el fondo de color que traía su página en el catálogo original; la hornacina es a la vez la unidad visual y la unidad de navegación, y la banda de colección repite el mismo arco a escala de muro.

El sistema alterna dos materiales con dos tintas: noche (texto claro `on-night`) y piedra (texto oscuro `on-stone`). La piedra de los muros grandes (fachada y bandas) está iluminada desde el suelo y se apaga hacia la cornisa, como un muro bañado por reflectores. Las regiones de colección añaden un tercer registro, local y acotado: su fondo y su par de tintas solo existen dentro de su hornacina o su campo de banda. Las fotos de producto se muestran tal cual, sin filtros ni tintes.

La densidad es de escaparate móvil: hileras deslizables con la siguiente pieza asomando, bloques de piedra completos y aire generoso entre secciones (72 a 96px). El movimiento es luz que sube y baja con una sola curva, sin rebotes.

**Key Characteristics:**
- Negro nocturno dominante; la piedra aparece como bloque entero con grano, nunca como tinte suave.
- Oro como luz y filo: contornos internos, halos cálidos, cifras de estado y texto de acción; los controles son caras de noche con canto dorado.
- Arco como silueta firma: medio punto en las hornacinas, arco elíptico en el campo de cada banda.
- Tres voces tipográficas con papeles fijos: inscripción grabada, caligrafía de nombre, texto de interfaz.
- Estado «encendido» inequívoco cuando un arreglo está en el pedido: la luz dorada sube por la piedra.

## Colors

Una noche casi negra, piedra gris perla con grano y un oro antiguo que solo ilumina; las colecciones aportan su propio fondo dentro de su nicho o su banda.

### Primary
- **Oro de tulipán** (`gold`): luz y filo. Canto interno de los botones dorados y del botón flotante, foco visible, texto de enlace, icono «+» de las hornacinas en reposo, canto del «+» de pieza encendido, filete superior del plinto encendido, insignias de cantidad.
- **Oro encendido** (`gold-hi`): el mismo oro más alto, para texto de acción sobre noche (botón dorado, botón flotante, controles encendidos), el anillo del «+» de hornacina encendido y el filete interno del hueco encendido.
- **Oro bruñido** (`gold-deep`): el oro sobre piedra, donde `gold` no alcanza contraste: numerales de la escalinata, títulos de la orla, foco dentro de la tablilla de pedido y de la orla, contador «En tu pedido».

### Secondary
- **Sillar** (`sillar`): piedra base con grano (`--grain`). En bloques pequeños (escalinata, orla, tablilla, pestaña activa) lleva un degradado suave iluminado desde abajo; en los muros grandes (fachada y bandas) lleva el degradado de cornisa nocturna (ver Elevation & Depth).
- **Sillar alto** (`sillar-hi`): arista iluminada; filos superiores de escalones y bisel interno de zócalos y plintos.
- **Sillar bajo** (`sillar-lo`): sombra de la piedra; zócalo bajo la fachada y las bandas, filete superior del plinto de cada hornacina en reposo.

### Tertiary: ambientes de colección
Cada colección define un trío `--c-bg` / `--c-ink` / `--c-soft` en `src/config/collections.js`, aplicado a escala de región (hueco de la hornacina, campo de la banda, pieza teñida en la vista plana). Los fondos son los tokens `collection-*`. Tintas:

| Colección | Tinta (`--c-ink`) | Tinta suave (`--c-soft`) |
|---|---|---|
| Suspiros | #f7f0e6 | #e6d6c2 |
| Face to face | #f2eee4 | #cfd8c3 |
| Abrazos de flor | #fdf0ec | #f3cfcf |
| Todo de mí | #2b1520 | #5d3546 |
| Luna de rosa (con veta de mármol `--marble`) | #f7ede9 | #dcc2c5 |
| Órbitas doradas | #0f222a | #21424f |

Una colección nueva recibe por turno uno de tres ambientes de reserva (café #3b2a1f, azul noche #1d2a33, vino #5a1f2c) con sus tintas claras.

### Neutral
- **Noche** (`night`): fondo de página, cabecera, barra de herramientas del catálogo y cara de todos los controles sobre los que vive el oro.
- **Noche segunda** (`night-2`): menú desplegado y opciones del selector.
- **Junta de noche** (`night-line`): filetes de 1px entre cabecera, herramientas, preguntas y menú; borde de la insignia vacía.
- **Marfil de noche** (`on-night`): texto principal sobre noche.
- **Marfil apagado** (`on-night-soft`): entradillas, descripciones, contadores y pestañas inactivas sobre noche.
- **Tinta de piedra** (`on-stone`) y **tinta de piedra suave** (`on-stone-soft`): texto principal y secundario sobre sillar.
- **Papel de campo** (`field-paper`) y **regla de campo** (`field-rule`): fondo y borde de los campos del formulario de pedido, dentro de la tablilla de piedra.

### Named Rules
**The One Light Rule.** El oro es la única luz de todo lo que no es producto. En los controles es canto más luz: cara `night`, contorno interno dorado y un halo cálido que cae bajo el control; nunca un relleno dorado plano. Sobre la piedra aparece como luz que sube (el degradado del arco encendido), no como pintura. Solo las insignias de cantidad (22 a 26px) y la selección de texto llevan oro plano, porque son puntos de luz, no superficies.

**The Region Rule.** Un color de colección solo pinta una región completa de su colección (hueco de nicho, campo de banda, pieza teñida). Nunca se usa como acento suelto fuera de ella, y su texto usa siempre su propio par `--c-ink` / `--c-soft`.

**The Untouched Photo Rule.** Las fotos de producto no se tiñen, filtran ni recortan con máscaras; el marco y la luz las rodean, no las alteran.

## Typography

**Display Font:** Pinyon Script (con cursive)
**Inscription Font:** Marcellus (con Times New Roman, serif)
**Body Font:** Hanken Grotesk Variable (con system-ui, sans-serif)

**Character:** Marcellus actúa como inscripción grabada en mayúsculas romanas; Pinyon Script es la caligrafía del catálogo impreso, reservada a nombres y a una palabra de acento; Hanken Grotesk lleva toda la interfaz y las cifras, siempre tabulares.

### Hierarchy
- **Display** (Pinyon Script 400, clamp(56px, 16vw, 128px), 0.9): la palabra caligráfica de la portada, en oro. Los nombres de colección en las bandas usan la misma voz a clamp(54px, 14vw, 96px), 1.05; en las hornacinas, clamp(22px, 13cqi, 38px) según el ancho del nicho.
- **Headline** (Marcellus 400, mayúsculas, clamp(26px, 6.4vw, 46px), 1.12, 0.05em): títulos de sección. Pueden cerrar con una palabra en caligrafía dorada a 1.75em en línea propia. La línea grabada de la portada usa clamp(22px, 6.2vw, 56px), máximo 19ch.
- **Title** (Marcellus 400, 17px, 1.25, 0.02em): nombre de cada arreglo y de cada artículo del pedido; 21px en los peldaños; 24px en la pieza principal de escritorio cuando ocupa 2×2.
- **Body** (Hanken Grotesk 400, 16px, 1.6): texto corrido; entradillas a 40-56ch, respuestas a 62ch.
- **Label** (Marcellus 400, mayúsculas, 14px, 0.1em): navegación, pestañas de colección (0.06em), términos de la lista de datos y títulos de la orla (0.12em).
- **Data** (Hanken Grotesk 600, mayúsculas, 12-13px, 0.05-0.1em): talla en el plinto y línea de datos bajo el nombre de cada banda (13px, 0.1em, `--c-soft`, hasta 60ch). Va después del nombre al que acompaña, nunca encima de un título.
- **Price** (Hanken Grotesk 650, 18-20px, cifras tabulares y de caja alta): precios y subtotal (22px); 16.5px en el plinto de la hornacina desde 1100px.

### Named Rules
**The Three Voices Rule.** Marcellus graba, Pinyon nombra, Hanken informa. La caligrafía solo nombra colecciones o pone una palabra de acento por titular; nunca va en botones, precios, cuerpo ni etiquetas.

**The Tabular Price Rule.** Toda cifra de precio, cantidad o contador lleva `font-variant-numeric: tabular-nums` (y `lining-nums` en precios).

**The Middle Dot Rule.** Las líneas de datos separan sus partes con « · ». Dentro de cada parte y antes del punto los espacios son de no separación (U+00A0); el único espacio normal va después del punto, así que la línea solo se parte tras « · » y nunca deja «Talla» o un punto huérfanos.

## Layout

Contenedor `min(1240px, 100% - 2 × gutter)`, con gutter de 16px en móvil, 14px por debajo de 360px y 32px desde 760px. El campo de cada banda se ensancha a `min(1300px, 100% - 24px)` (56px desde 760px). Ritmo vertical entre secciones de 72 a 96px; objetivos táctiles de 44px como mínimo y 48px en controles primarios.

- **Fachada:** en móvil, hilera horizontal con `scroll-snap` centrado; cada nicho mide `min(74%, 300px)` para que asome el siguiente. Desde 1100px, rejilla de seis columnas con `subgrid` para alinear huecos y plintos.
- **Banda de colección:** muro de sillar con una hilada de friso de 30px arriba, el campo en arco 22px por debajo (relleno 72/16/48px en móvil, 96/36/64px desde 760px) y un zócalo de 12px al cierre.
- **Piezas de banda:** 2 columnas en móvil con la pieza principal a fila completa; 3 columnas desde 760px con la principal en una celda; 4 columnas desde 1100px con la principal en 2×2. Una banda de exactamente cuatro piezas usa en escritorio `2fr` para la principal y tres columnas iguales, todas alineadas arriba, con la descripción de las secundarias reservando 4.5em para que precios y botones caigan a la misma altura. Una colección de un solo arreglo se centra en una columna de 460px.
- **Escalinata:** peldaños desplazados `--step × 14px` (6% desde 560px); desde 1100px, cuatro columnas que suben `200px + step × 36px`.
- **Orla del pie:** celdas apiladas en móvil, rejilla `1.4fr 1fr 1fr 1fr` desde 760px.
- **Diálogo:** hoja inferior a ancho completo en móvil (92dvh máx.), tablilla centrada de 600px desde 760px.
- La cabecera es pegajosa (64px, 76px desde 760px) y la barra de herramientas del catálogo también lo es desde 760px.

## Elevation & Depth

La profundidad es la de la piedra tallada de noche: luz rasante que entra desde el suelo, sombras internas que hunden los huecos y aristas claras de 1px que levantan los filos. No hay tarjetas flotantes; lo que sale del plano es la luz dorada (halos cálidos desplazados hacia abajo bajo los elementos encendidos) y la tablilla del pedido.

### Cornisa nocturna
Fachada y bandas comparten un degradado de muro iluminado por reflectores: arena cálida en la base (#e8d3a6), sillar claro hacia el 38% (#d6cdbd), piedra en penumbra al 78% (#a79f91) y cornisa apagada arriba (#7d766a), siempre bajo el grano. Los bloques pequeños (escalinata, orla, tablilla) usan la versión corta: #e3cfa6 abajo, `sillar` al 55%, #cdc6ba arriba.

### Shadow Vocabulary
- **Hilada de friso** (`inset 0 2px 0 rgb(60 50 36 / .45), 0 8px 12px -8px rgb(20 14 6 / .6)`): la hilada tallada de 30px que corona cada banda; la de la fachada proyecta `0 6px 10px -6px rgb(40 32 20 / .55)`.
- **Hueco de hornacina** (`inset 0 16px 18px -8px rgb(0 0 0 / .6), inset 0 -10px 16px -10px rgb(0 0 0 / .45)`): hunde el nicho en la piedra.
- **Hueco de banda** (`inset 0 22px 26px -12px rgb(0 0 0 / .55), inset 0 0 0 1px rgb(255 255 255 / .08)`): el campo de color de cada colección.
- **Bisel de arco** (`inset 0 2px 0 rgb(255 255 255 / .35), inset 0 -3px 0 rgb(60 50 36 / .25)`): marco de piedra alrededor del hueco.
- **Arista** (`inset 0 1px 0 var(--sillar-hi)`): filo iluminado de zócalos y plintos.
- **Peldaño** (`0 10px 14px -8px rgb(0 0 0 / .7)`): cada bloque de la escalinata sobre la noche.
- **Halo dorado** (`0 10px 22px -10px rgb(226 197 133 / .55)`): luz cálida bajo el botón dorado; se abre a `0 12px 26px -8px` al .7 en hover. El botón flotante lleva `0 10px 26px -6px` al .45 y la pieza encendida `0 10px 20px -8px` al .7.
- **Halo de arco encendido** (`0 16px 34px -8px rgb(240 200 120 / .75)`): la luz que la hornacina encendida derrama bajo su arco; el «+» encendido lleva `0 8px 20px -4px rgb(240 200 120 / .9)`.
- **Tablilla** (`0 30px 80px rgb(0 0 0 / .6)` en escritorio, `0 -10px 40px rgb(0 0 0 / .5)` como hoja móvil): el diálogo de pedido.

### Named Rules
**The Lit Niche Rule.** El estado encendido (`data-lit`) se expresa con luz que sube por la piedra, a la vez en todo el nicho: la piedra del arco pasa a un degradado de oro desde la base (#f3d48e, #d6b46c al 35%, #b9a27a al 70%, piedra #a89f90 arriba) con su halo; el hueco gana un filete interno de 2px en `gold-hi` y su resplandor radial sube (opacidad .28 a 1, sin desplazamiento); el plinto toma un filete superior en `gold`; el «+» pasa a cara #1d1810 con anillo de 3px en `gold-hi` y halo; el contador pasa a «En tu pedido · n» en `gold-deep`. Las transiciones duran 400ms con `--ease-light`; con movimiento reducido el cambio es inmediato. La pieza de banda encendida sigue la misma gramática: contorno dorado de 3px y luz cálida desde abajo sobre la foto, y su botón como cara `night` con canto dorado de 2px.

**The Light From Below Rule.** Los degradados de piedra, los resplandores y los halos entran o caen desde abajo, como la iluminación nocturna de una fachada; ninguna luz cae desde arriba y la cornisa es siempre la parte más oscura del muro.

## Shapes

La forma firma es el arco. Las hornacinas son de medio punto (`999px 999px 0 0`) con 7px de marco biselado; el campo de cada banda es un arco elíptico (`50% 50% 0 0 / 84px`, 150px desde 760px) rodeado por un borde de piedra de 6px (#ddd3c2). Ambos quedan bajo una hilada de friso de tulipanes en bajorrelieve (`--frieze`, 48 × 33px en repetición horizontal sobre 30px de alto) y se cierran con un zócalo de `sillar-lo` de 10-12px. Todo lo demás es casi recto: controles con esquina de 3px, tablilla de 4px (14px arriba como hoja móvil), insignias en píldora y el «+» de hornacina en círculo. Las fotos son cuadradas (`aspect-ratio: 1`) y llevan un filete de 1px (oro al 75% en nichos, tinta de colección al 22% en piezas).

## Components

### Buttons
Caras de noche con canto y luz dorados; tactilidad sobria.
- **Shape:** esquina apenas rota (3px), 48px de alto, Hanken 600 a 15px.
- **Dorado (acción principal):** cara `night`, texto `gold-hi`, contorno interno de 1px en `gold` y halo dorado cálido debajo. Funciona igual sobre noche y sobre la tablilla de piedra.
- **Hover / Focus:** cara #1d1810, texto #f1d9a2, contorno `gold-hi` y halo más abierto; transición de 250ms con `--ease-light`. Foco global: contorno de 2px en `gold` a 3px (en `gold-deep` sobre piedra).
- **Noche y Piedra:** variantes llanas para fondos opuestos (noche sobre la tablilla, piedra sobre la noche); la de piedra pasa a `sillar-hi` en hover.
- **Enlace de texto:** oro, subrayado de 1px desplazado 6px, con icono; `gold-hi` en hover.

### Chips (pestañas de colección)
- **Style:** Marcellus 14px en mayúsculas, `on-night-soft`, 44px de alto, en fila deslizable sin barra.
- **State:** la pestaña activa (`aria-pressed`) se convierte en un bloque de sillar con grano y tinta `on-stone`; no hay subrayado ni oro.

### Cards / Containers (pieza de colección)
- **Corner Style:** recta; la foto cuadrada no lleva radio.
- **Background:** transparente sobre el campo de su banda; en la vista plana, pieza teñida con `--c-bg` y 10px de relleno.
- **Shadow Strategy:** sombra baja bajo la foto (`0 14px 22px -14px rgb(0 0 0 / .7)`) y filete interno; al encenderse, contorno dorado de 3px y luz cálida desde abajo, en 400ms.
- **Acción:** botón de 44px contorneado en la tinta de la colección al 45%; al encenderse pasa a cara `night`, texto `gold-hi`, canto dorado de 2px y halo cálido, con la cantidad en un disco de noche con cifra dorada.

### Inputs / Fields
- **Style:** búsqueda sobre noche como línea inferior de 1px en `night-line`, sin caja. En la tablilla de pedido, campos de 48px con fondo `field-paper`, borde de 1px `field-rule` y esquina de 3px.
- **Focus:** la línea de búsqueda pasa a `gold`; los campos del pedido pasan a borde `gold-deep` con anillo de 2px en oro al 55%.
- **Disabled:** opacidad .45 y cursor no permitido.

### Navigation
- **Style:** cabecera de noche pegajosa con el logo original (`mix-blend-mode: lighten`) y el contador del pedido. Enlaces en Marcellus mayúsculas a 0.1em; `on-night-soft` en escritorio, `gold-hi` en hover.
- **Mobile:** menú desplegado como panel `night-2` bajo la cabecera, enlaces de 48px separados por filetes `night-line`.
- **Contador:** disco de 24px en oro con cifra tabular; vacío, se vuelve contorno `night-line` con cifra apagada.

### Hornacina (componente firma)
Arco de piedra con 7px de marco biselado, hueco con el fondo de la colección, nombre caligráfico en su tinta, foto cuadrada con filete dorado y, debajo, un plinto con filete de 3px en `sillar-lo`: talla en voz de dato, precio tabular, contador y un «+» circular de 48px (44px desde 1100px; cara `night`, icono `gold`, sombra oscura corta). Todo el nicho es pulsable mediante el botón del nombre, cuyo foco se dibuja alrededor del nicho entero. Encendida, sigue la regla del nicho encendido.

### Banda de colección
Muro de sillar con el degradado de cornisa nocturna, coronado por la hilada de friso de 30px. Dentro, el campo de color en arco elíptico con borde de piedra de 6px, cabecera centrada con el nombre en caligrafía y la línea de datos debajo, rejilla de piezas con la principal destacada y zócalo de piedra al cierre.

### Escalinata y orla
Los pasos para pedir son peldaños de sillar con arista superior de 5px en `sillar-hi` y numeral en Marcellus `gold-deep`. El pie es una orla de piedra bajo un friso, con celdas separadas por filetes de 1px y títulos grabados en `gold-deep`.

### Botón flotante del pedido
Barra fija de 52px (máx. 420px, a la derecha desde 1100px), cara `night`, texto `gold-hi`, canto dorado de 1px, halo dorado cálido y disco de cantidad en oro.

## Do's and Don'ts

### Do:
- **Do** construir cada superficie nueva con los dos materiales: noche con texto `on-night`, o piedra con grano (`--grain` sobre `sillar`) con texto `on-stone`.
- **Do** dar a los muros de piedra grandes el degradado de cornisa nocturna: claro y cálido en la base, apagado arriba.
- **Do** expresar todo control dorado como cara `night`, texto `gold-hi`, canto dorado interno y halo cálido debajo, no con un relleno dorado.
- **Do** usar `gold-deep` para cualquier oro sobre piedra.
- **Do** aplicar los colores de colección solo como región completa, con su propio par de tintas.
- **Do** mostrar el estado «en el pedido» con la regla del nicho encendido: piedra que se dora desde abajo, filete dorado, resplandor y halo, en 400ms con `cubic-bezier(.16, 1, .3, 1)`.
- **Do** usar cifras tabulares en precios, cantidades y contadores.
- **Do** unir las partes de cada línea de datos con espacios de no separación y cortar solo después de « · ».
- **Do** mantener objetivos táctiles de 44px como mínimo (48px en controles primarios).

### Don't:
- **Don't** usar el oro como superficie plana de botón, banda o sección; solo los discos de cantidad lo llevan plano.
- **Don't** usar Pinyon Script fuera de nombres de colección y de una palabra de acento por titular.
- **Don't** teñir, filtrar ni enmascarar las fotos de producto.
- **Don't** usar un color de colección como acento suelto fuera de su región.
- **Don't** iluminar desde arriba ni dejar la cornisa más clara que la base.
- **Don't** añadir rebotes ni movimientos que no sean luz que sube o baja; con `prefers-reduced-motion` todo queda estático.
- **Don't** convertir la página en la florería por defecto (foto grande, titular, botón y cuadrícula de tarjetas iguales) ni en un negro y oro de lujo genérico.
