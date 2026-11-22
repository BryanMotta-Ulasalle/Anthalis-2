import {useState,useEffect,useRef} from 'react'
import Icon from '../../components/Icon.jsx'
import ProductImage from '../../components/ProductImage.jsx'
import {buildMessage,orderLink} from './order.js'
import {money} from '../../utils/content.js'
import {requiresQuote} from '../../utils/presentation.js'
import {businessPhoneLabel} from '../../config/site.js'
import {priceLabel} from '../catalog/summary.js'

export default function OrderDialog({dialog, business, order}) {
  const [details, setDetails] = useState({modalidad: 'Delivery por coordinar', fecha: '', direccion: '', dedicatoria: '', notas: ''}), [preview, setPreview] = useState(false)
  const close = useRef(null)
  const message = buildMessage(business, order.items, details), url = orderLink(business, message), valid = order.items.some(p => !p.excluded)
  useEffect(() => setPreview(false), [message])
  function update(key, value) { setDetails(d => ({...d, [key]: value})) }
  const priced = order.items.some(p => !p.excluded && !requiresQuote(p)), quoted = order.items.some(p => !p.excluded && requiresQuote(p))
  const today = new Intl.DateTimeFormat('sv-SE', {timeZone: 'America/Lima'}).format(new Date())

  return <dialog ref={dialog} className="order" aria-labelledby="order-title" onClose={() => setPreview(false)}>
    <div className="order-head">
      <h2 id="order-title">Tu pedido</h2>
      <button ref={close} autoFocus type="button" className="icon-button" aria-label="Cerrar pedido" onClick={() => dialog.current.close()}><Icon name="close"/></button>
    </div>
    {!order.items.length ? <div className="order-empty">
      <Icon name="flower" size={40}/>
      <h3>Aún no elegiste un arreglo.</h3>
      <p>Añade uno desde las colecciones y vuelve aquí para preparar tu mensaje.</p>
      <button type="button" className="btn btn-night" onClick={() => { dialog.current.close(); document.getElementById('coleccion').scrollIntoView() }}>Ver colecciones</button>
    </div> : <>
      <ul className="order-items">{order.items.map(p => <li key={p.id} data-excluded={p.excluded || undefined}>
        <ProductImage image={p.imagen} alt="" maxWidth={180} width="72" height="72"/>
        <div className="order-item-body">
          <strong>{p.nombre || 'Producto retirado'}</strong>
          <small>{p.excluded ? 'Retirado o no disponible · no se incluye' : (p.nombre ? priceLabel(p) + ' · ' : '') + (p.disponible === 'PENDIENTE' ? 'Disponibilidad por confirmar' : 'Disponible')}</small>
          <div className="quantity">
            <button type="button" aria-label={'Quitar una unidad de ' + p.nombre} onClick={() => { if (p.quantity === 1) close.current.focus(); order.change(p.id, -1) }}><Icon name="minus" size={15}/></button>
            <span>{p.quantity}</span>
            <button type="button" aria-label={'Agregar una unidad de ' + p.nombre} disabled={p.excluded || p.quantity >= 99} onClick={() => order.change(p.id, 1)}><Icon name="plus" size={15}/></button>
          </div>
        </div>
        <button type="button" className="remove" aria-label={'Eliminar ' + p.nombre} onClick={() => { close.current.focus(); order.change(p.id, -p.quantity) }}><Icon name="close" size={16}/></button>
      </li>)}</ul>
      <div className="subtotal">
        <span>{priced ? 'Subtotal' : 'Importe'}</span>
        <strong>{priced ? money(order.total) : 'Por cotizar'}{priced && quoted ? ' + cotización' : ''}</strong>
        <p>El delivery se coordina aparte. La disponibilidad y la fecha se confirman por WhatsApp.</p>
      </div>
      <form onSubmit={e => { e.preventDefault(); setPreview(true) }}>
        <h3>Personaliza tu detalle</h3>
        <div className="form-grid">
          <label>Modalidad<select value={details.modalidad} onChange={e => update('modalidad', e.target.value)}><option>Delivery por coordinar</option><option>Recojo por coordinar</option></select></label>
          <label>Fecha deseada<input type="date" min={today} value={details.fecha} onChange={e => update('fecha', e.target.value)}/></label>
        </div>
        <label>Dirección o zona <span>(opcional)</span><input value={details.direccion} maxLength={200} onChange={e => update('direccion', e.target.value)} placeholder="Para consultar la cobertura de entrega"/></label>
        <label>Dedicatoria <span>(opcional)</span><textarea rows="2" maxLength={240} value={details.dedicatoria} onChange={e => update('dedicatoria', e.target.value)} placeholder="Las palabras que acompañarán tus flores"/></label>
        <label>Colores y preferencias <span>(opcional)</span><textarea rows="2" maxLength={300} value={details.notas} onChange={e => update('notas', e.target.value)}/></label>
        <button className="btn btn-night full" disabled={!valid}><Icon name="chat" size={20}/>Revisar mensaje</button>
      </form>
      {preview && <div className="message-preview">
        <h3>Tu mensaje</h3>
        <textarea aria-label="Mensaje preparado" readOnly rows="10" value={message}/>
        {url && <a href={url} target="_blank" rel="noreferrer" className="btn btn-gold full">Continuar en WhatsApp<Icon name="arrow" size={18}/></a>}
        <p>Se enviará a Anthalis, {businessPhoneLabel}. Revisa el mensaje antes de enviarlo.</p>
      </div>}
    </>}
  </dialog>
}
