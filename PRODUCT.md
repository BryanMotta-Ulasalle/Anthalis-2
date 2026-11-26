# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Hipótesis de trabajo, no confirmada por el negocio:** personas que quieren comprar
un arreglo floral para regalar o celebrar una ocasión especial (aniversario,
cumpleaños, agradecimiento, fecha señalada) en Arequipa o para entrega en Arequipa.
Llegan normalmente desde el móvil, a menudo desde un enlace compartido o desde
WhatsApp, quieren ver rápido qué hay, cuánto cuesta y cómo pedirlo, y cerrar el
pedido en una conversación con la florería.

Pendiente de confirmar con Anthalis: perfil real de clientes, ocasiones con más
demanda, proporción de pedidos para entrega frente a recojo, y si hay clientes
corporativos o de eventos.

## Product Purpose

Catálogo digital de **Florería Anthalis** (Arequipa, Perú). Su objetivo es presentar
los arreglos de forma atractiva y facilitar el pedido por WhatsApp: el visitante
elige uno o varios arreglos, ajusta cantidades, añade preferencias (modalidad,
fecha deseada, dirección o zona, dedicatoria, colores) y envía un mensaje ya
redactado al WhatsApp comercial. La venta, el pago y la entrega se cierran en esa
conversación; la web no cobra ni confirma pedidos.

Éxito: que el visitante encuentre un arreglo que le guste y llegue a WhatsApp con
un pedido claro, sin fricción y con información de precio fiable.

## Positioning

**Pendiente de confirmación.** El negocio no ha definido todavía un diferencial
frente a otras florerías de Arequipa. No inventar uno.

Evidencia que sí consta en el catálogo original y puede usarse como hecho:

- Seis colecciones con nombre propio: Suspiros, Face to face, Abrazos de flor,
  Todo de mí, Luna de rosa y Órbitas doradas.
- Tallas por colección (pequeña, mediana, grande) y la indicación
  «color personalizable», sujeto a disponibilidad de temporada.
- Dedicatoria en tarjeta incluida en la dinámica de compra.
- Lema del catálogo: «Celebra los grandes momentos». Lema usado en la web:
  «Flores para grandes momentos».

## Operating Context

- **Fuente de contenido:** Google Sheets publicado como CSV, seis pestañas
  (negocio, portada, categorias, productos, informacion, preguntas). La hoja es la
  fuente de verdad de textos, productos, precios y disponibilidad; el negocio la
  edita sin tocar código. Asignación de URLs en `src/config/site.js`; respaldo local
  en `src/config/catalog.json`; caché de 10 minutos en el navegador.
- **Pedido:** mensaje prellenado vía `wa.me` al WhatsApp comercial
  **984 997 937** (51984997937), fijado en `src/config/site.js`. El cliente revisa el
  mensaje antes de enviarlo.
- **Dinámica de compra publicada en el catálogo original:** elegir estilo y color
  (sujeto a temporada) → agendar fecha y horario, dar dirección exacta y contacto de
  quien recibe, consultar el costo de delivery de la zona → dedicatoria → confirmar
  y pagar.
- **Imágenes:** las fotos de producto son recreaciones con IA de los arreglos del
  catálogo, una por modelo. Se admiten URLs públicas de Cloudinary desde la hoja.
- **Alojamiento previsto:** sitio estático en Netlify. No se despliega desde este
  trabajo.

## Capabilities and Constraints

Funciones confirmadas que deben conservarse:

- Catálogo de 21 arreglos en 6 colecciones, con filtro por colección, búsqueda y
  orden («Selección Anthalis» / «Menor precio»).
- Estados por producto: disponible SI / NO / PENDIENTE; visible; destacado;
  `consultar_precio` y `precio_tipo` (solo CONFIRMADO con `consultar_precio=NO`
  muestra precio; el resto se muestra «Por cotizar» y no suma al subtotal).
- Pedido con cantidades (máx. 99), subtotal sin delivery, modalidad
  (delivery / recojo por coordinar), fecha mínima según hora de Lima, dirección,
  dedicatoria y preferencias, vista previa del mensaje y enlace a WhatsApp.
- Validación por sección del CSV, caché y respaldo ante fallos.

Restricciones técnicas fijadas por el usuario:

- Mantener **React y Vite**. Sin backend.
- **Mantener la estructura de Google Sheets** (pestañas, cabeceras y claves).
- **Conservar la lógica de pedidos por WhatsApp.**
- **Productos y precios reales:** la hoja publicada manda. A fecha 22/11/2026 los
  21 productos figuran como `precio_tipo=CONFIRMADO` y `disponible=SI`, con precios
  de S/ 59 a S/ 189; Suspiros 02 está con `consultar_precio=SI` («Por cotizar»).
  El diseño nunca fija precios ni disponibilidad en el código.
- **Prioridad móvil.**
- **Sin despliegues.**

Datos del negocio pendientes de confirmación (no inventar; mostrar como pendientes
o no mostrar):

- Horario de atención (la hoja dice «Horario pendiente de confirmación»).
- Zonas y costo de delivery, anticipación mínima.
- Medios de pago vigentes (el catálogo anuncia tarjetas, transferencias, Yape, Plin
  y efectivo; confirmar al coordinar).
- Tallas de Luna de rosa (rótulos ambiguos en el catálogo).
- Redes sociales (Instagram vacío en la hoja).
- Historia, equipo, años de experiencia, diferencial.

## Brand Commitments

Decisiones del usuario, vinculantes:

- **Respetar el logotipo original:** tres tulipanes dorados con la palabra
  ANTHALIS (`public/media/logo.webp`, raster de 325 × 353 px sobre fondo negro;
  no hay versión vectorial ni transparente disponible).
- **El negro y el dorado son representativos de la identidad** y deben estar
  presentes. Hay libertad para explorar colores complementarios, tipografías,
  recursos gráficos y composiciones.
- **El catálogo original es fuente de inspiración**, y **cada colección tiene su
  propia ambientación visual** en él (`../anthalis-recursos/catalogo/pagina-0.png` a
  `pagina-4.png`).
- No hay obligación de conservar ninguna composición del diseño web actual.
- La dirección buscada: memorable, personalizada, de nivel estudio profesional, y
  que no parezca una interfaz genérica generada por IA.
- Idioma: español (Perú).

Nombres de marca a respetar tal cual: «Anthalis», nombres de colecciones con su
ortografía («Todo de mí», «Órbitas doradas»), «Face to face» en inglés.

## Evidence on Hand

- **Catálogo original** (capturas del flip-book, 21/11/2026):
  `../anthalis-recursos/catalogo/pagina-0.png` a `pagina-4.png`. Origen:
  https://heyzine.com/flip-book/5e8c868b39.html
- **Logo:** `public/media/logo.webp`.
- **Fotos de producto:** 21 imágenes WebP 1254 × 1254 en `public/media/`
  (originales PNG en `../anthalis-recursos/imagenes-ia/individuales/`). **No alterar** su apariencia,
  cantidad de flores ni características comerciales. Son recreaciones con IA,
  no fotografías del local.
- **Contacto y dirección confirmados en el catálogo:** WhatsApp 984 997 937;
  Av. Vidaurrazaga Mz. K – Lt. 15, José Luis Bustamante y Rivero, Arequipa
  (catálogo: código postal 04009). Ficha de Google Maps:
  https://www.google.com/maps?cid=12545688971233272065 (no se pudo leer su contenido).

Ausencias que el trabajo futuro **no debe fabricar**: testimonios, reseñas,
valoraciones, número de clientes, años de trayectoria, historia del negocio o de
sus fundadores, fotos reales del local o del equipo, premios, garantías de entrega,
tiempos de entrega, cobertura de reparto, horarios.

## Product Principles

1. **El pedido por WhatsApp es la meta.** Todo recorrido debe acercar al visitante
   a un mensaje de pedido claro; nada debe interponerse en ese camino.
2. **Los productos son la prueba.** Las fotos y los nombres de colección llevan el
   peso; no se compensan con promesas, cifras o testimonios inventados.
3. **La hoja manda.** Contenido, precios y disponibilidad vienen de Google Sheets;
   el diseño debe sostener textos de longitud variable, productos añadidos o
   retirados y estados «Por cotizar» / «Por confirmar» sin romperse.
4. **Honestidad comercial.** Lo no confirmado se presenta como pendiente o se
   omite; nunca se presenta como hecho.
5. **Primero el móvil.** La experiencia se decide en pantalla de teléfono y luego
   se amplía.

## Accessibility & Inclusion

Sin requisito normativo específico establecido por el negocio. Se conserva el nivel
actual de la web: enlace para saltar al contenido, anuncios para lector de pantalla
al añadir productos, objetivos táctiles de 44 px y respeto a
`prefers-reduced-motion`.
