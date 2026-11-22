# Anthalis

Web de Florería Anthalis en Arequipa, con React, Vite y Tailwind CSS.

## Ejecutar y construir

Requiere Node 22. Desde la carpeta del proyecto:

```sh
npm install
npm run dev
npm test
npm run build
npm run preview
```

La carpeta dist contiene la web lista para alojamiento estático en Netlify.
Los ocho controles automatizados y la compilación se verificaron correctamente.

## Contenido y contacto

Las seis secciones están conectadas a Google Sheets en src/config/site.js.
Los cambios de celdas no requieren reconstruir la web; la caché dura 10 minutos
y la publicación de Google puede añadir demora. Cada sección conserva respaldo
local si hay un fallo de conexión o validación.

WhatsApp comercial: **984 997 937** (51984997937), configurado por indicación del
usuario. Los pedidos y el enlace de contacto usan este número. El mensaje se
prepara para que el cliente lo revise y envíe desde WhatsApp.

Se quitaron los avisos de demostración del contenido visible, los metadatos,
el catálogo, el pedido y el pie de página. Las respuestas antiguas de la hoja
sobre el destino anterior se adaptan al mostrarse; los textos comerciales nuevos
editados en la hoja se conservan.

Los importes no confirmados se muestran **Por cotizar** y no se suman al subtotal.
Para publicar un precio, ajusta su valor en la hoja y establece
precio_tipo=CONFIRMADO y consultar_precio=NO. La disponibilidad no se inventa:
se respeta SI, NO o PENDIENTE según la hoja.

## Imágenes

Los 21 arreglos y la portada usan las imágenes individuales recreadas con IA.
La web utiliza WebP de 1254 × 1254 con encuadre completo y centrado. Los PNG
originales se conservan localmente fuera del paquete web.

Consulta docs/Guia-Anthalis.md y docs/Conexion-Google-Sheets.md para administrar
el contenido, los precios y las imágenes.

## Identidad del negocio

La cabecera, el pie y el favicon muestran los tres tulipanes y el nombre del
logo original de Anthalis. El símbolo y la palabra ANTHALIS se muestran desde
el archivo original public/media/logo.webp mediante encuadres SVG; se conserva
su dibujo y tipografía. El lema es Flores para grandes momentos. La sección
Nuestra esencia mantiene el logo completo. Los iconos de interfaz no sustituyen
la identidad del negocio.
