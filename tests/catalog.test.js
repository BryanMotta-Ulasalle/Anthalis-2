import test from 'node:test'
import assert from 'node:assert/strict'
import {backup,valuesOf,imageFor} from '../src/config/data.js'
import {parseSection,validateSection,priceCents,loadSection} from '../src/utils/content.js'
import {orderItems,subtotal,buildMessage,orderLink} from '../src/features/order/order.js'
import {optimizedCloudinaryImage,cloudinaryImageUrl} from '../src/utils/imageSource.js'
import {sources,businessWhatsApp} from '../src/config/site.js'
import {requiresQuote,customerQuestion} from '../src/utils/presentation.js'
const csv=rows=>[Object.keys(rows[0]).join(','),...rows.map(r=>Object.values(r).map(v=>'"'+String(v).replaceAll('"','""')+'"').join(','))].join('\n')
test('seis secciones válidas, 21 productos y seis categorías coherentes',()=>{assert.equal(backup.productos.length,21);for(const [key,rows] of Object.entries(backup)){assert.equal(parseSection(key,csv(rows)).length,rows.length)}for(const p of backup.productos){assert(backup.categorias.some(c=>c.id===p.categoria));assert.equal(p.precio_tipo,'EJEMPLO');assert.equal(p.disponible,'PENDIENTE')}assert.deepEqual(Object.keys(sources).sort(),Object.keys(backup).sort());assert.equal(new Set(Object.values(sources)).size,6);for(const value of Object.values(sources)){const url=new URL(value);assert.equal(url.hostname,'docs.google.com');assert.equal(url.searchParams.get('output'),'csv');assert.equal(url.searchParams.get('single'),'true');assert(/^\d+$/.test(url.searchParams.get('gid')))}})
test('cantidades, subtotal exacto y WhatsApp del negocio',()=>{
  const products=[backup.productos[0],backup.productos[4]].map(p=>({...p,precio_tipo:'CONFIRMADO',consultar_precio:'NO'}))
  const [p,q]=products,items=orderItems({[p.id]:2,[q.id]:3},products)
  assert.equal(subtotal(items),priceCents(p.precio)*2+priceCents(q.precio)*3)
  const message=buildMessage(valuesOf(backup.negocio),items,{modalidad:'Delivery',dedicatoria:'Para mamá & papá',notas:'Rosado'})
  const link=new URL(orderLink({whatsapp:''},message))
  assert.equal(businessWhatsApp,'51984997937')
  assert.equal(link.pathname,'/'+businessWhatsApp)
  assert.equal(link.searchParams.get('text'),message)
  assert.match(message,/Para mamá & papá/)
  assert.doesNotMatch(message,/demostraci|prueba|demo|fictici|ejemplo/i)
})
test('los importes sin confirmar se cotizan y no se suman al subtotal',()=>{
  const pending={...backup.productos[0],consultar_precio:'NO'},confirmed={...backup.productos[1],precio_tipo:'CONFIRMADO',consultar_precio:'NO'}
  assert.equal(requiresQuote(pending),true)
  assert.equal(requiresQuote(confirmed),false)
  assert.equal(requiresQuote({...confirmed,consultar_precio:'SI'}),true)
  const items=orderItems({[pending.id]:2,[confirmed.id]:1},[pending,confirmed])
  assert.equal(subtotal(items),priceCents(confirmed.precio))
  const quotedMessage=buildMessage(valuesOf(backup.negocio),orderItems({[pending.id]:1},[pending]),{modalidad:'Recojo'})
  assert.match(quotedMessage,/Importe por cotizar/)
  assert.doesNotMatch(quotedMessage,/Subtotal|S\//)
  const mixedMessage=buildMessage(valuesOf(backup.negocio),items,{modalidad:'Delivery'})
  assert.match(mixedMessage,/Subtotal:/)
  assert.match(mixedMessage,/productos por cotizar/)
})
test('respuestas antiguas de Sheets no muestran el destino anterior ni textos internos',()=>{
  for(const id of ['comprar','precio']){
    const legacy={id,respuesta:'Esta propuesta usa un número de prueba y precios ficticios.'}
    const visible=customerQuestion(legacy)
    assert.doesNotMatch(visible.respuesta,/propuesta|prueba|fictici|demostraci/i)
    assert.match(visible.respuesta,/WhatsApp/)
  }
  const custom={id:'precio',respuesta:'Nuestros precios incluyen el envoltorio.'}
  assert.equal(customerQuestion(custom),custom)
})
test('retirados y no disponibles se excluyen; pendientes admiten consulta',()=>{const p={...backup.productos[0],disponible:'NO'};assert.equal(subtotal(orderItems({[p.id]:2},[p])),0);assert.equal(orderItems({missing:2},[])[0].excluded,true);assert.equal(orderItems({[p.id]:1},backup.productos)[0].excluded,false)})
test('CSV con coma, comillas y salto de línea; rechaza duplicados y precios erróneos',()=>{const rows=structuredClone(backup.productos);rows[0].descripcion='Flores, "rosadas"\ny blancas';assert.equal(parseSection('productos',csv(rows))[0].descripcion,rows[0].descripcion);rows[1].id=rows[0].id;assert.throws(()=>validateSection('productos',rows));assert.equal(priceCents('120,87'),12087);assert.throws(()=>priceCents('gratis'))})
test('Cloudinary optimizado, imágenes desconocidas y URLs inseguras',()=>{const url='https://res.cloudinary.com/demo/image/upload/v123/rosas.jpg';assert.match(optimizedCloudinaryImage(url),/c_limit,w_900/);assert.match(optimizedCloudinaryImage(url,180),/w_180/);assert.equal(cloudinaryImageUrl('http://res.cloudinary.com/demo/image/upload/x.jpg'),'');assert.equal(imageFor('https://evil.invalid/a.jpg'),'/media/pendiente.svg')})
test('CSV conectado, cache y respaldo ante fallo o CSV inválido',async()=>{const data=new Map(),storage=()=>({getItem:k=>data.get(k),setItem:(k,v)=>data.set(k,v)}),url='https://docs.google.com/anthalis-test.csv',now=()=>100000;const loaded=await loadSection('productos',{url,storage,now,fetcher:async()=>({ok:true,text:async()=>csv(backup.productos)})});assert.equal(loaded.source,'sheets');const cached=await loadSection('productos',{url,storage,now,fetcher:()=>{throw Error('No debería consultar')}});assert.equal(cached.source,'cache');const bad=await loadSection('productos',{url,storage:()=>{throw Error('Bloqueado')},fetcher:async()=>({ok:true,text:async()=>'<html>Error</html>'})});assert.equal(bad.source,'backup');assert.equal(bad.stale,true);assert.equal(bad.rows.length,21)})

