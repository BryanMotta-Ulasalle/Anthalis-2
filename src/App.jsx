import {useRef} from 'react'
import {useContent} from './hooks/useContent.js'
import {useOrder} from './hooks/useOrder.js'
import {valuesOf} from './config/data.js'
import Header from './layout/Header.jsx'
import Footer from './layout/Footer.jsx'
import Home from './pages/Home.jsx'
import OrderDialog from './features/order/OrderDialog.jsx'
import Icon from './components/Icon.jsx'
import {businessWhatsApp} from './config/site.js'
import {customerQuestion} from './utils/presentation.js'

export default function App() {
  const content = useContent(), dialog = useRef(null)
  const business = {...valuesOf(content.negocio.rows), whatsapp: businessWhatsApp}, hero = valuesOf(content.portada.rows), info = valuesOf(content.informacion.rows)
  const categories = content.categorias.rows.filter(c => c.visible === 'SI').sort((a, b) => Number(a.orden) - Number(b.orden))
  const products = content.productos.rows.filter(p => p.visible === 'SI' && categories.some(c => c.id === p.categoria))
  const questions = content.preguntas.rows.filter(q => q.visible === 'SI').map(customerQuestion).sort((a, b) => Number(a.orden) - Number(b.orden))
  const order = useOrder(products), openOrder = () => dialog.current.showModal()
  return <>
    <a href="#contenido" className="skip-link">Saltar al contenido</a>
    <div id="inicio"/>
    <Header business={business} count={order.count} openOrder={openOrder}/>
    <Home {...{hero, info, questions, categories, products, order}} stale={Object.values(content).some(s => s.stale)}/>
    <Footer business={business} info={info}/>
    {order.count > 0 && <button type="button" className="floating-order" onClick={openOrder}>
      <Icon name="bag" size={19}/>Ver mi pedido<b>{order.count}</b>
    </button>}
    <span className="sr-only" role="status">{order.notice}</span>
    <OrderDialog {...{dialog, business, order}}/>
  </>
}
