import {useState} from 'react'
import {canOrder,orderItems,subtotal} from '../features/order/order.js'
export function useOrder(products){const [quantities,setQuantities]=useState({});const [notice,setNotice]=useState('');const items=orderItems(quantities,products)
function change(id,delta){const p=products.find(p=>p.id===id);if(delta>0&&!canOrder(p))return;setQuantities(q=>({...q,[id]:Math.max(0,Math.min(99,(q[id]||0)+delta))}));setNotice(delta>0?p.nombre+' agregado al pedido.':'Cantidad actualizada.')}
return {items,quantities,change,notice,count:items.reduce((s,p)=>s+p.quantity,0),total:subtotal(items)}}

