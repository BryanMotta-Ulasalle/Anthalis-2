export const businessWhatsApp = '51984997937'
export const businessPhoneLabel = '984 997 937'
const publishedSheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5uNz9O8yU2Bsh3jwdVwycQIRLKuEe0qpSbmf89TJdLPJe1mJpiz7U_dyyzT0nO7vOVhmEvOrHTql7/pub'
const csvFor = gid => `${publishedSheet}?gid=${gid}&single=true&output=csv`
export const sources = {
  negocio: csvFor('650554189'),
  portada: csvFor('398955295'),
  categorias: csvFor('1813452948'),
  productos: csvFor('1717655261'),
  informacion: csvFor('1783912183'),
  preguntas: csvFor('681883873'),
}
export const refreshMs = 10 * 60 * 1000
export const timeoutMs = 8000
export const mapsUrl = 'https://www.google.com/maps?cid=12545688971233272065'

