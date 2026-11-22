import {priceCents,money,whatsappLink} from '../../utils/content.js'
import {businessWhatsApp} from '../../config/site.js'
import {requiresQuote} from '../../utils/presentation.js'

export const canOrder = product => product && product.visible === 'SI' && product.disponible !== 'NO'
export function orderItems(quantities,products) {
  return Object.entries(quantities)
    .filter(([,quantity])=>quantity>0)
    .map(([id,quantity])=>({...products.find(product=>product.id===id),id,quantity}))
    .map(product=>({...product,excluded:!canOrder(product)}))
}
export const subtotal = items => items
  .filter(product=>!product.excluded&&!requiresQuote(product))
  .reduce((sum,product)=>sum+priceCents(product.precio)*product.quantity,0)

export function buildMessage(business,items,details) {
  const included = items.filter(product=>!product.excluded)
  const quoted = included.some(requiresQuote)
  const priced = included.some(product=>!requiresQuote(product))
  return [
    business.mensaje_inicial,
    ...included.map(product=>product.quantity+' × '+product.nombre+' ('+product.talla+') - '+
      (requiresQuote(product)?'por cotizar':money(priceCents(product.precio))+' c/u')),
    priced?'Subtotal: '+money(subtotal(included))+(quoted?' + productos por cotizar':'')+'; no incluye delivery.':'Importe por cotizar.',
    'Disponibilidad, colores y entrega por coordinar.',
    'Modalidad: '+details.modalidad,
    details.fecha&&'Fecha deseada: '+details.fecha,
    details.direccion&&'Dirección o zona: '+details.direccion,
    details.dedicatoria&&'Dedicatoria: '+details.dedicatoria,
    details.notas&&'Preferencias: '+details.notas,
    '¿Me confirman los detalles de mi pedido?',
  ].filter(Boolean).join('\n')
}
export const orderLink = (_business,message) => whatsappLink(businessWhatsApp,message)
