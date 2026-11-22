# Guía de Anthalis

## Sitio y contacto

Anthalis presenta seis colecciones y 21 arreglos. WhatsApp comercial:
984 997 937, con prefijo internacional 51984997937. Los enlaces del pedido y
del pie de página usan el número de src/config/site.js.

El cliente elige sus arreglos, completa sus preferencias y revisa el mensaje
antes de enviarlo por WhatsApp. La coordinación del pedido corresponde al negocio.

## Ejecutar
Instala Node 22. Abre una terminal dentro de anthalis-demo:
```sh
npm install
npm run dev
```
Para verificar y construir:
```sh
npm test
npm run build
npm run preview
```

## Editar el Excel
El archivo Anthalis-Catalogo.xlsx tiene las seis pestañas publicables y Guia. Las cabeceras permanecen en la fila 1.

- negocio: nombre, descriptor, presentación, mensaje inicial, dirección y enlaces. Edita valor, conservando clave.
- portada: textos de presentación, botón y esencia.
- categorias: id, nombre, visible y orden. Añade filas para nuevas colecciones.
- productos: una fila por modelo. categoria debe coincidir con id de categorias.
- informacion: reparto, horario, personalización, anticipación y pagos.
- preguntas: preguntas y respuestas, visibilidad y orden.
- Guia: instrucciones; no se conecta a la web.

Controles:
- disponible=PENDIENTE permite consultar sin confirmar stock; SI afirma disponibilidad; NO desactiva el producto.
- precio: número en soles, por ejemplo 89.00. Sin símbolo monetario.
- precio_tipo=CONFIRMADO permite mostrar el precio cuando consultar_precio=NO. Los importes no confirmados se muestran Por cotizar y no se suman al subtotal.
- consultar_precio=SI muestra Por cotizar; NO muestra precio.
- visible y destacado: SI o NO.
- id: único, minúsculas, números y guiones. Conservar identificadores existentes.
- orden: número; los destacados aparecen antes en Selección Anthalis.

Para añadir un producto, copia una fila y completa todas las columnas, incluido id nuevo, talla, imagen y precio_tipo. Para añadir una categoría crea primero su fila y usa ese id en productos. Las tallas de Luna de rosa siguen por confirmar porque sus rótulos son ambiguos.

## Convertir y conectar Google Sheets
1. Sube el Excel a Drive y ábrelo con Hojas de cálculo de Google. Si corresponde, usa Archivo > Guardar como Hojas de cálculo de Google.
2. Abre Archivo > Compartir > Publicar en la Web.
3. Selecciona negocio y formato CSV. Publica y copia su URL.
4. Repite para portada, categorias, productos, informacion y preguntas. No publiques Guia.
5. Entrega los seis enlaces a Bryan o pégalos en sources de src/config/site.js, cada uno en su sección. Los seis enlaces de Anthalis ya están conectados y verificados; no hace falta repetir este paso mientras se conserve esta publicación.
6. Reconstruye la web y vuelve a desplegar. La conexión inicial requiere este paso; las siguientes ediciones de la hoja no requieren reconstruir.
7. Los cambios pueden tardar en propagarse por Google y por la caché de 10 minutos de la web. Recarga tras ese intervalo para comprobar.

Publica únicamente información comercial. No añadas datos de clientes, claves ni credenciales a esas pestañas.

La carga valida cada sección por separado. Un CSV inválido no sustituye datos válidos. Se utiliza la caché o el respaldo local y se avisa cuando una fuente configurada falla. El respaldo vive en src/config/catalog.json; actualizarlo requiere reconstruir.

## Imágenes
La columna imagen admite:
- Claves locales ya preparadas: suspiros-01 a suspiros-04, face-to-face-01 a face-to-face-04, abrazos-de-flor-01, todo-de-mi-01 a todo-de-mi-04, luna-de-rosa-01 a luna-de-rosa-04 y orbitas-doradas-01 a orbitas-doradas-04.
- Enlaces públicos HTTPS de entrega de Cloudinary con host res.cloudinary.com y ruta /image/upload/. Copia la URL del recurso, no el enlace de consola. No hacen falta API keys.

Cloudinary se optimiza a un máximo de 900 px para fichas y 180 px para el pedido, con calidad y formato automáticos. Se conserva una URL firmada sin modificar. Si falla una imagen aparece un recurso local de respaldo.

Para añadir otra clave local coloca el archivo en public/media y regístrala en imageFor de src/config/data.js. Para una imagen nueva sin modificar código utiliza Cloudinary.

La portada y el logo son recursos de diseño locales (hero.webp y logo.webp), fuera de la columna imagen. Sustitúyelos conservando esos nombres. Los 21 productos ya utilizan imágenes individuales recreadas con IA a partir del catálogo, centradas y sin sus textos ni fondos. Las versiones WebP para la web mantienen las claves locales de la columna imagen. El icono de la cabecera es una simplificación gráfica de interfaz; el logo del catálogo se conserva en Nuestra esencia.

## Desplegar en Netlify
Opción rápida:
1. Ejecuta npm run build.
2. Sube únicamente la carpeta dist a la zona de despliegue manual de Netlify.
3. Para actualizar manualmente, reconstruye y sube dist otra vez.

Con repositorio:
1. Crea un repositorio nuevo y sube el contenido de anthalis-demo, excluyendo node_modules y dist.
2. Conecta ese repositorio a un sitio NUEVO de Netlify.
3. Build: npm run build. Publish: dist. Node: 22.
4. Si el repositorio contiene otras carpetas, configura Base directory a anthalis-demo; si el proyecto está en la raíz, déjala vacía.
5. netlify.toml contiene estas opciones y el respaldo de rutas. No utiliza identificadores de otros sitios.

No hay backend ni servidor de pagos. Los CSV deben ser públicos. No incluyas secretos en variables VITE_.

## Precios, disponibilidad y publicación

Antes de publicar importes, confirma sus valores con Anthalis. En productos,
establece precio_tipo=CONFIRMADO y consultar_precio=NO para mostrar un precio.
Con consultar_precio=SI o un precio sin confirmar se muestra Por cotizar.

Completa el horario, las tallas pendientes, la cobertura, los costos y los medios
de pago en la hoja cuando el negocio los confirme. Conserva disponible=PENDIENTE
si se necesita consultar el stock. La web no procesa pagos.

El teléfono comercial ya está configurado y los metadatos permiten indexación.
Para publicar o actualizar un alojamiento estático, reconstruye y sube dist.

## Fuentes y supuestos
Fuente principal: capturas del catálogo Anthalis facilitadas el 21/11/2026; enlace de origen https://heyzine.com/flip-book/5e8c868b39.html.
Google Maps: enlace del local aportado por el usuario. No se pudo leer su ficha con las herramientas disponibles; no se atribuyeron reseñas, horarios ni redes.
Los nombres de colecciones y modelos numerados proceden del catálogo. Las descripciones se redactaron a partir de lo visible. Los textos comerciales y todos los precios son propuestas. No se inventaron dimensiones, cantidades de tallos ni garantías de entrega.

