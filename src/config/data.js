import catalog from './catalog.json' with {type:'json'}
import {cloudinaryImageUrl} from '../utils/imageSource.js'
export const backup=catalog
export const valuesOf=rows=>Object.fromEntries(rows.map(row=>[row.clave,row.valor]))
export const imageFor=key=>cloudinaryImageUrl(key)||(/^(suspiros|face-to-face|abrazos-de-flor|todo-de-mi|luna-de-rosa|orbitas-doradas)-0[1-4]$/.test(key)||['hero','logo'].includes(key)?'/media/'+key+'.webp':'/media/pendiente.svg')

