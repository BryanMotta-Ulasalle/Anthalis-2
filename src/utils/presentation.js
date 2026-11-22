// Solo los importes confirmados se publican como precios de venta.
export const requiresQuote = product => product.consultar_precio === 'SI' || product.precio_tipo !== 'CONFIRMADO'

const customerAnswers = {
  comprar: 'Elige tus arreglos, ajusta las cantidades y completa los detalles. Revisa tu mensaje y envíalo por WhatsApp para coordinar disponibilidad, pago y entrega con Anthalis.',
  precio: 'Los precios publicados corresponden a los arreglos indicados. Si un diseño aparece como «Por cotizar», consulta su importe por WhatsApp. El costo de entrega se coordina por separado.',
}

// Compatibilidad con las respuestas antiguas que aún publica la hoja conectada.
export function customerQuestion(question) {
  if (customerAnswers[question.id] && /demostraci[oó]n|prueba|propuesta|fictici[oa]/i.test(question.respuesta)) {
    return { ...question, respuesta: customerAnswers[question.id] }
  }
  return question
}
