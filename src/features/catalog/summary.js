import {priceCents,money} from '../../utils/content.js'
import {requiresQuote} from '../../utils/presentation.js'

export const byOrder = (a,b) => Number(a.orden) - Number(b.orden)
export const bySelection = (a,b) => Number(b.destacado==='SI') - Number(a.destacado==='SI') || byOrder(a,b)
const priceKey = p => requiresQuote(p) ? Infinity : priceCents(p.precio)
export const byPrice = (a,b) => { const x = priceKey(a), y = priceKey(b); return x === y ? byOrder(a,b) : x < y ? -1 : 1 }

export const priceLabel = p => requiresQuote(p) ? 'Por cotizar' : money(priceCents(p.precio))
export const stockLabel = p => p.disponible === 'NO' ? 'No disponible' : p.disponible === 'PENDIENTE' ? 'Disponibilidad por confirmar' : 'Disponible'

// Resumen de una colección: arreglo principal, tallas, precio desde y unidades en el pedido.
export function summarize(category, products, quantities) {
  const items = products.filter(p => p.categoria === category.id).sort(bySelection)
  const priced = items.filter(p => !requiresQuote(p)).map(p => priceCents(p.precio))
  const tallas = [...new Set(items.map(p => p.talla).filter(Boolean))]
  return {
    items,
    lead: items[0],
    tallas,
    from: priced.length ? (items.length > 1 ? 'Desde ' : '') + money(Math.min(...priced)) : 'Por cotizar',
    inOrder: items.reduce((sum, p) => sum + (quantities[p.id] || 0), 0),
  }
}
