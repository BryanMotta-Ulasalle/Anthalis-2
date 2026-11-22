import {useState} from 'react'
import {imageFor} from '../config/data.js'
import {optimizedCloudinaryImage} from '../utils/imageSource.js'
function SafeImage({src,...props}){const [failed,setFailed]=useState(false);return <img {...props} src={failed?'/media/pendiente.svg':src} onError={failed?undefined:()=>setFailed(true)}/>}
export default function ProductImage({image,maxWidth=900,...props}){const src=optimizedCloudinaryImage(image,maxWidth)||imageFor(image);return <SafeImage key={src} src={src} {...props}/>}

