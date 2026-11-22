import Icon from '../../components/Icon.jsx'
import ProductImage from '../../components/ProductImage.jsx'
import {collectionStyle,collectionTexture} from '../../config/collections.js'
import {summarize} from './summary.js'
import {canOrder} from '../order/order.js'

export const tallaText = tallas => tallas.map(t => /confirmar/i.test(t) ? 'Talla por confirmar' : 'Talla ' + t.toLocaleLowerCase('es')).join(' · ')

// Portada de sillar: una hornacina por colección, con su arreglo principal.
export default function Facade({categories, products, order, onOpen}) {
  const niches = categories.map((c, i) => ({c, i, ...summarize(c, products, order.quantities)})).filter(n => n.lead)
  return <div className="facade">
    <ul className="facade-row" aria-label="Colecciones">
      {niches.map(({c, i, lead, tallas, from, inOrder, items}) =>
        <li key={c.id} className="niche" style={collectionStyle(c.id, i)} data-texture={collectionTexture(c.id, i) || undefined} data-lit={inOrder > 0 || undefined}>
          <div className="niche-arch">
            <div className="niche-hollow">
              <h3 className="niche-name">
                <button type="button" className="niche-open" onClick={() => onOpen(c.id)}>
                  {c.nombre}<span className="sr-only">: ver los {items.length} arreglos de la colección</span>
                </button>
              </h3>
              <div className="niche-canvas">
                <ProductImage image={lead.imagen} alt={lead.nombre + ', arreglo de la colección ' + c.nombre} width="400" height="400" loading={i < 2 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : undefined}/>
              </div>
            </div>
          </div>
          <div className="niche-plinth">
            <div>
              <p className="niche-size">{tallaText(tallas)}</p>
              <p className="niche-price">{from}</p>
              <p className="niche-count">{inOrder > 0 ? 'En tu pedido · ' + inOrder : items.length === 1 ? '1 arreglo' : items.length + ' arreglos'}</p>
            </div>
            <button type="button" className="niche-add" disabled={!canOrder(lead) || order.quantities[lead.id] >= 99} onClick={() => order.change(lead.id, 1)} aria-label={'Agregar ' + lead.nombre + ' al pedido'}>
              <Icon name="plus" size={20}/>
            </button>
          </div>
        </li>)}
    </ul>
  </div>
}
