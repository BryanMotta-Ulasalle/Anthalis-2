import {mapsUrl, businessPhoneLabel} from '../config/site.js'

// Orla tallada: los datos prácticos en celdas de piedra.
export default function Footer({business, info}) {
  return <footer className="footer">
    <div className="frieze" aria-hidden="true"/>
    <div className="wrap orla">
      <div className="orla-cell orla-brand">
        <p className="orla-name">{business.nombre}</p>
        <p>{business.descriptor}</p>
        <p>{business.presentacion}</p>
      </div>
      <div className="orla-cell">
        <h2>Pedidos</h2>
        <a href={'https://wa.me/' + business.whatsapp} target="_blank" rel="noreferrer">WhatsApp {businessPhoneLabel}<span className="sr-only"> (abre WhatsApp)</span></a>
      </div>
      <div className="orla-cell">
        <h2>Tienda</h2>
        {business.direccion && <p>{business.direccion}</p>}
        <a href={mapsUrl} target="_blank" rel="noreferrer">Ver en Google Maps<span className="sr-only"> (abre en otra pestaña)</span></a>
      </div>
      {info.horario && <div className="orla-cell">
        <h2>Horario</h2>
        <p>{info.horario}</p>
      </div>}
    </div>
    <div className="wrap footer-base">
      <span>© {new Date().getFullYear()} {business.nombre}</span>
      <span>Flores para grandes momentos</span>
    </div>
  </footer>
}
