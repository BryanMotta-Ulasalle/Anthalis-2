import {useMemo,useState} from 'react'
import Icon from '../../components/Icon.jsx'
import ProductImage from '../../components/ProductImage.jsx'
import {collectionStyle,collectionTexture} from '../../config/collections.js'
import {bySelection,byPrice,priceLabel,stockLabel} from './summary.js'
import {tallaText} from './Facade.jsx'

function Piece({p, order, Heading = 'h4', style, texture, lead}) {
  const q = order.quantities[p.id] || 0
  return <li className={'piece' + (style ? ' piece-tinted' : '') + (lead ? ' piece-lead' : '')} style={style} data-texture={texture || undefined} data-lit={q > 0 || undefined}>
    <div className="piece-frame">
      <ProductImage image={p.imagen} alt={p.nombre + ', arreglo floral de Anthalis'} loading="lazy" width="600" height="600"/>
    </div>
    <Heading className="piece-name">{p.nombre}</Heading>
    <p className="piece-desc">{p.descripcion}</p>
    <div className="piece-foot">
      <p className="piece-price">{priceLabel(p)}</p>
      <p className="piece-stock">{tallaText([p.talla])} · {stockLabel(p)}</p>
      <button type="button" className="piece-add" onClick={() => order.change(p.id, 1)} disabled={p.disponible === 'NO' || q >= 99} aria-label={'Agregar ' + p.nombre + ' al pedido'}>
        <Icon name="plus" size={17}/>{q > 0 ? 'Añadir otro' : 'Añadir al pedido'}{q > 0 && <b aria-label={q + ' en tu pedido'}>{q}</b>}
      </button>
    </div>
  </li>
}

export default function Catalog({products, categories, order, selected, setSelected}) {
  const [query, setQuery] = useState(''), [sort, setSort] = useState('seleccion')
  const active = categories.some(c => c.id === selected) ? selected : 'todos'
  const needle = query.trim().toLocaleLowerCase('es')
  const filtered = useMemo(() => products
    .filter(p => (active === 'todos' || p.categoria === active) && (p.nombre + ' ' + p.descripcion + ' ' + p.talla).toLocaleLowerCase('es').includes(needle))
    .sort(sort === 'precio' ? byPrice : bySelection), [products, active, needle, sort])
  const grouped = sort === 'seleccion' && !needle
  const bands = categories.map((c, i) => ({c, i, items: filtered.filter(p => p.categoria === c.id)})).filter(b => b.items.length)
  const reset = () => { setQuery(''); setSelected('todos') }

  return <section id="coleccion" className="catalog" aria-labelledby="catalogo-title">
    <div className="wrap catalog-head">
      <h2 id="catalogo-title">Un detalle para <span className="script">cada emoción</span></h2>
      <p>{categories.length} colecciones y {products.length} arreglos. Cada diseño admite cambiar colores según la flor de temporada.</p>
    </div>
    <div className="catalog-tools">
      <div className="wrap">
        <div className="tabs" role="group" aria-label="Filtrar por colección">
          <button type="button" aria-pressed={active === 'todos'} onClick={() => setSelected('todos')}>Todas</button>
          {categories.map(c => <button type="button" key={c.id} aria-pressed={active === c.id} onClick={() => setSelected(c.id)}>{c.nombre}</button>)}
        </div>
        <div className="tools-row">
          <label className="search"><Icon name="search" size={18}/><span className="sr-only">Buscar arreglos</span><input value={query} onChange={e => setQuery(e.target.value)} type="search" maxLength={80} placeholder="Rosas, girasoles, lirios…"/></label>
          <label className="sort">Ordenar<select value={sort} onChange={e => setSort(e.target.value)}><option value="seleccion">Selección Anthalis</option><option value="precio">Menor precio</option></select></label>
        </div>
        <p className="tools-count" aria-live="polite">{filtered.length === 1 ? '1 arreglo' : filtered.length + ' arreglos'}</p>
      </div>
    </div>

    {grouped ? bands.map(({c, i, items}) => {
      const meta = tallaText([...new Set(items.map(p => p.talla))]) + ' · Color personalizable · ' + (items.length === 1 ? '1 arreglo' : items.length + ' arreglos')
      return <section key={c.id} className="band" style={collectionStyle(c.id, i)} aria-labelledby={'band-' + c.id}>
        <div className="band-field" data-texture={collectionTexture(c.id, i) || undefined} data-single={items.length === 1 || undefined}>
          <header className="band-head">
            <h3 id={'band-' + c.id} className="band-name">{c.nombre}</h3>
            <p>{meta}</p>
          </header>
          <ul className="pieces">{items.map((p, n) => <Piece key={p.id} p={p} order={order} lead={n === 0 && items.length > 2}/>)}</ul>
        </div>
      </section>
    })
    : filtered.length > 0 && <div className="wrap"><ul className="pieces pieces-flat">{filtered.map(p => {
        const i = categories.findIndex(c => c.id === p.categoria)
        return <Piece key={p.id} p={p} order={order} Heading="h3" style={collectionStyle(p.categoria, i)} texture={collectionTexture(p.categoria, i)}/>
      })}</ul></div>}

    {!filtered.length && <div className="wrap empty">
      <h3>No encontramos ese detalle.</h3>
      <p>Prueba con otra flor o mira todas las colecciones.</p>
      <button type="button" className="btn btn-stone" onClick={reset}>Ver todos los arreglos</button>
    </div>}
    <p className="wrap photo-caption">Imágenes de referencia. El arreglo final, sus colores y flores se confirman según la disponibilidad de temporada.</p>
  </section>
}
