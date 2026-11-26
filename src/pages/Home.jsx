import {useState} from 'react'
import Icon from '../components/Icon.jsx'
import Facade from '../features/catalog/Facade.jsx'
import Catalog from '../features/catalog/Catalog.jsx'
import {mapsUrl} from '../config/site.js'

export default function Home({hero, info, questions, categories, products, order, stale}) {
  const [selected, setSelected] = useState('todos')
  const openCollection = id => { setSelected(id); requestAnimationFrame(() => document.getElementById('coleccion')?.scrollIntoView()) }
  const steps = [
    ['Elige tu arreglo', 'Recorre las colecciones y añade tus favoritos al pedido.'],
    ['Hazlo personal', info.personalizacion],
    ['Coordina la entrega', info.reparto],
    ['Envía tu pedido', 'Revisa el mensaje preparado y envíalo por WhatsApp. Disponibilidad, entrega y pago se confirman en la conversación.'],
  ].filter(([, text]) => text)

  return <main id="contenido">
    <section className="portada" aria-labelledby="portada-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-tag"><span aria-hidden="true"/>{hero.etiqueta}</p>
          <h1 id="portada-title">{hero.titulo}<br/><em>{hero.acento}</em></h1>
          <p className="hero-description">{hero.descripcion}</p>
          <a href="#coleccion" className="hero-button">{hero.boton}<Icon name="arrow" size={20}/></a>
          <div className="hero-footnote">
            <span>01 / {String(categories.length).padStart(2, '0')}</span>
            <p>Pequeños gestos.<br/>Recuerdos que se quedan.</p>
          </div>
        </div>
        <figure className="hero-photo">
          <img src="/media/hero.webp" width="1254" height="1254" alt="Ramo Abrazos de flor: rosas rosadas y lirios blancos con envoltura rosada, del catálogo Anthalis" fetchPriority="high"/>
          <figcaption>
            <span>La colección</span>
            <p>{hero.nota}</p>
            <a href="#coleccion" aria-label="Explorar colecciones"><Icon name="arrow" size={20}/></a>
          </figcaption>
        </figure>
      </div>
      <span className="hero-watermark" aria-hidden="true">ANTHALIS</span>
    </section>

    <Facade categories={categories} products={products} order={order} onOpen={openCollection}/>

    {stale && <p className="wrap notice" role="status">Mostramos contenido guardado. Confirma precios y disponibilidad al coordinar.</p>}

    <Catalog products={products} categories={categories} order={order} selected={selected} setSelected={setSelected}/>

    <section id="como-pedir" className="steps-section" aria-labelledby="pasos-title">
      <div className="wrap">
        <h2 id="pasos-title">Regalar, <span className="script">así de sencillo</span></h2>
        <ol className="stairs">
          {steps.map(([title, text], i) => <li key={title} style={{'--step': i}}>
            <span className="stair-numeral" aria-hidden="true">{['I', 'II', 'III', 'IV'][i]}</span>
            <div><h3>{title}</h3><p>{text}</p></div>
          </li>)}
        </ol>
      </div>
    </section>

    <section id="preguntas" className="faq" aria-labelledby="faq-title">
      <div className="wrap faq-grid">
        <div className="faq-aside">
          <h2 id="faq-title">Antes de regalar</h2>
          <dl>
            {info.horario && <><dt>Horario</dt><dd>{info.horario}</dd></>}
            {info.pagos && <><dt>Pagos</dt><dd>{info.pagos}</dd></>}
          </dl>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="text-link"><Icon name="pin" size={18}/>Ver la tienda en el mapa<span className="sr-only"> (abre Google Maps)</span></a>
        </div>
        <div className="faq-list">
          {info.anticipacion && <details><summary>¿Con cuánta anticipación puedo pedir?<Icon name="plus" size={18}/></summary><p>{info.anticipacion}</p></details>}
          {questions.map(q => <details key={q.id}><summary>{q.pregunta}<Icon name="plus" size={18}/></summary><p>{q.respuesta}</p></details>)}
        </div>
      </div>
    </section>

    <section id="esencia" className="essence" aria-labelledby="esencia-title">
      <div className="wrap essence-grid">
        <img className="essence-logo" src="/media/logo.webp" alt="Logo de Anthalis: tres tulipanes dorados y el nombre Anthalis" width="325" height="353" loading="lazy"/>
        <div>
          <h2 id="esencia-title">{hero.historia_titulo}</h2>
          <p>{hero.historia_texto}</p>
          <a href="#coleccion" className="btn btn-gold">Elige tu detalle<Icon name="arrow" size={18}/></a>
        </div>
      </div>
    </section>
  </main>
}
