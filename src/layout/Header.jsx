import {useState} from 'react'
import Icon from '../components/Icon.jsx'

// Símbolo y nombre recortados del logo original; no se redibuja la identidad.
export function Brand({name = 'Anthalis', descriptor = 'Florería en Arequipa'}) {
  return <a href="#inicio" className="brand" aria-label={name + ', ' + descriptor + ', inicio'}>
    <svg className="brand-symbol" viewBox="25 0 275 275" aria-hidden="true" focusable="false">
      <image href="/media/logo.webp" width="325" height="353"/>
    </svg>
    <svg className="brand-wordmark" viewBox="0 277 325 67" aria-hidden="true" focusable="false">
      <image href="/media/logo.webp" width="325" height="353"/>
    </svg>
  </a>
}

export default function Header({business, count, openOrder}) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="header">
    <div className="wrap header-inner">
      <Brand name={business.nombre} descriptor={business.descriptor}/>
      <nav id="menu" className="nav" data-open={open || undefined} aria-label="Principal">
        <a href="#coleccion" onClick={close}>Colecciones</a>
        <a href="#como-pedir" onClick={close}>Cómo pedir</a>
        <a href="#preguntas" onClick={close}>Preguntas</a>
      </nav>
      <div className="header-actions">
        <button type="button" className="bag" onClick={openOrder} aria-label={'Abrir mi pedido, ' + count + (count === 1 ? ' arreglo' : ' arreglos')}>
          <Icon name="bag" size={20}/><span className="bag-label">Mi pedido</span><b data-empty={count === 0 || undefined}>{count}</b>
        </button>
        <button type="button" className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'}/></button>
      </div>
    </div>
  </header>
}
