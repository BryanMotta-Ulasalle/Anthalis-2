---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["src/App.jsx"]
---

# Superficie: web de Anthalis (página única + diálogo de pedido)

## Alcance y modo

Página única completa: cabecera, apertura, colecciones y catálogo, cómo pedir,
preguntas, cierre, pie y diálogo de pedido. Modo: **Persuade** (el diálogo de
pedido se ejecuta con disciplina de Operate dentro del mismo mundo).

## Audiencia, tarea y acción

- Audiencia (hipótesis, ver PRODUCT.md): quien compra flores para regalar o
  celebrar, desde el móvil.
- Acción primaria en la primera pantalla: **recorrer las colecciones** y añadir
  un arreglo; WhatsApp llega al final con el pedido armado.
- Prueba: las 21 fotos y los nombres de colección. Nada de testimonios ni cifras.
- Debe evitar: frío o inaccesible, tienda genérica, recargado.

## Direction contract

THESIS: Anthalis como una portada de sillar arequipeña de noche: cada colección
vive en su propia hornacina iluminada. Rechaza la florería por defecto (foto
grande, titular, botón y cuadrícula de tarjetas iguales) y también el
negro-y-oro de lujo genérico.

OWN-WORLD: Fondo negro nocturno (#0c0b0a) dominante; oro del logo (#c8a45c) solo
como luz y filo, nunca como relleno plano; sillar gris perla (#d8d2c7) con grano
de piedra en marcos, arcos y orlas tallados en bajorrelieve. Cada hornacina
tiene el fondo de su colección, a escala de región: Suspiros café (#6e5644), Face
to face verde helecho (#26331f), Abrazos de flor carmesí (#8a1426), Todo de mí
rosa (#f2c6dc), Luna de rosa mármol granate (#2a1518), Órbitas doradas celeste
(#8fbac9). Inscripciones en mayúsculas romanas grabadas (Marcellus); nombres de
colección en caligrafía del catálogo (Pinyon Script, con mesura); texto y UI en
Hanken Grotesk con cifras tabulares. Composición por bloques enteros de sillar
(módulo de hilada), nunca fracciones. Una sola luz dorada para todo lo que no es
producto; las fotos de producto no se alteran.

STORY: El visitante reconoce la marca del catálogo (negro, oro, tulipanes) y un
lugar de Arequipa; entiende que hay seis colecciones con talla y precio; entra
en una, añade un arreglo (su hornacina se enciende) y termina enviando por
WhatsApp un pedido ya redactado con fecha, dedicatoria y colores.

FIRST VIEWPORT: Móvil 390 × 844. Arriba, sobre el negro, el logo original de
Anthalis y el contador del pedido. Una línea de inscripción grabada con el lema.
Debajo, ocupando ~60 % del alto, la hilera de hornacinas de sillar en arco, una
por colección, deslizable en horizontal con la siguiente asomando; cada
hornacina muestra el arreglo principal, nombre caligráfico, talla y precio
tabular, con un «+» para añadir. Tocar el nicho abre la colección. En escritorio
la hilera se ve completa como una portada de seis nichos.

FORM: Portada tallada de sillar con hornacinas como unidad de navegación;
posición 6 de 7 en mi lista ordenada (1 papel de envoltura, 2 catálogo
flip-book, 3 tarjeta de dedicatoria, 4 vitrina con rótulo dorado, 5 muros de
Santa Catalina, 6 sillar de noche, 7 mercado de flores). seed:57a9157b7b3422d8.
Interacción firma: la hornacina se enciende (luz dorada que sube por la piedra)
al añadir su arreglo al pedido. Gramática de movimiento: luz que sube y baja,
400 ms, sin rebotes; todo estático con movimiento reducido.

Raises: unidades enteras de sillar (de Sala de azulejos); una sola luz (de Sol
interior); precios en columna tabular (de Campo de datos); estado encendido
inequívoco (de Caja de ritmos); orla tallada del pie con los datos prácticos (de
Cartel de teatro underground).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Momento memorable

La hilera de hornacinas iluminadas en la noche de Arequipa, y la luz que se
enciende en la piedra cuando eliges un arreglo.

## Decisiones sin resolver

- Riesgo declarado: las hornacinas evocan templos; dosificar para que se lea
  regalo y celebración, no solemnidad.
- Las fotos tienen fondo crema propio: resolver cómo se asientan en cada nicho
  sin recortar el arreglo.
- Logo solo en raster 325 × 353 con fondo negro; no hay vector.
- Datos pendientes del negocio (horario, delivery, pagos, tallas de Luna de
  rosa) se muestran como pendientes o se omiten.
