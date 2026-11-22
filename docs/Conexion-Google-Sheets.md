# Conexión Google Sheets de Anthalis

Las seis secciones se leen de la publicación CSV facilitada por el usuario.

| Sección | gid |
| --- | --- |
| productos | 1717655261 |
| negocio | 650554189 |
| portada | 398955295 |
| categorias | 1813452948 |
| informacion | 1783912183 |
| preguntas | 681883873 |

La asignación está en src/config/site.js. Edita las celdas sin cambiar las cabeceras
ni las claves existentes. Las claves de imagen siguen usando los 21 archivos IA
locales. Se admiten enlaces de entrega públicos de Cloudinary para nuevas imágenes.

La web carga los datos al abrir, conserva una caché de 10 minutos y vuelve a
consultar mientras la pestaña está visible. La publicación de Google también puede
tardar en reflejar cambios. No se requiere reconstruir la web por editar celdas;
sí hace falta hacerlo si cambian estos enlaces o los archivos de imágenes locales.

Cada sección se valida por separado. Si falla una descarga o el CSV es inválido,
se conserva la última caché válida o el respaldo src/config/catalog.json.

WhatsApp comercial: 984 997 937, configurado en src/config/site.js. Los importes
sin confirmar aparecen Por cotizar. Para mostrar un precio, configura
precio_tipo=CONFIRMADO y consultar_precio=NO en la fila del producto. La
disponibilidad se mantiene según la hoja. Las antiguas respuestas sobre el
destino anterior se adaptan automáticamente al mostrarse en la web.

## Verificación realizada

- Las seis publicaciones respondieron HTTP 200 y permiten lectura pública CORS.
- El cargador de la aplicación leyó negocio (8 filas), portada (8), categorias (6),
  productos (21), informacion (5) y preguntas (5) desde Google Sheets.
- Todas las categorías de los productos son válidas y las 21 claves de imagen
  conservan sus archivos WebP individuales.
- Suspiros 02 se recibió con consultar_precio=SI, según la edición de la hoja.
- Caché vigente verificada, ocho pruebas del proyecto aprobadas y build correcto.
