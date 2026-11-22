// Ambientación visual de cada colección, tomada de las páginas del catálogo original.
// Una colección nueva añadida en la hoja recibe un ambiente de reserva por turno.
const ambience = {
  'suspiros': { bg: '#6e5644', ink: '#f7f0e6', soft: '#e6d6c2' },
  'face-to-face': { bg: '#26331f', ink: '#f2eee4', soft: '#cfd8c3' },
  'abrazos-de-flor': { bg: '#8a1426', ink: '#fdf0ec', soft: '#f3cfcf' },
  'todo-de-mi': { bg: '#f2c6dc', ink: '#2b1520', soft: '#5d3546' },
  'luna-de-rosa': { bg: '#2a1518', ink: '#f7ede9', soft: '#dcc2c5', texture: 'marmol' },
  'orbitas-doradas': { bg: '#8fbac9', ink: '#0f222a', soft: '#21424f' },
}
const reserve = [
  { bg: '#3b2a1f', ink: '#f6eee2', soft: '#dccbb6' },
  { bg: '#1d2a33', ink: '#eef2f4', soft: '#c3d0d8' },
  { bg: '#5a1f2c', ink: '#fbeef0', soft: '#ebc7cd' },
]
export function collectionAmbience(id, index = 0) {
  return ambience[id] || reserve[index % reserve.length]
}
export function collectionStyle(id, index) {
  const a = collectionAmbience(id, index)
  return { '--c-bg': a.bg, '--c-ink': a.ink, '--c-soft': a.soft }
}
export const collectionTexture = (id, index) => collectionAmbience(id, index).texture || null
