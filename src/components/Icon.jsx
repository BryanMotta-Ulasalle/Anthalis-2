export default function Icon({name,size=22,...props}) {
const paths={bag:<><path d="M5 7h14l1 14H4L5 7Z"/><path d="M9 8V5a3 3 0 0 1 6 0v3"/></>,arrow:<path d="M4 12h16m-6-6 6 6-6 6"/>,plus:<path d="M12 5v14M5 12h14"/>,minus:<path d="M5 12h14"/>,close:<path d="m6 6 12 12M18 6 6 18"/>,search:<><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,menu:<path d="M4 7h16M4 12h16M4 17h16"/>,flower:<><path d="M12 22V11M12 17q-8 0-8-7 8 0 8 7m0 3q8 0 8-7-8 0-8 7M12 12Q3 8 7 2l5 3 5-3q4 6-5 10Z"/></>,chat:<><path d="M21 11a9 9 0 0 1-13 8l-5 2 1-5a9 9 0 1 1 17-5Z"/><path d="M8 9h8M8 13h5"/></>,pin:<><path d="M12 22s8-8 8-14a8 8 0 0 0-16 0c0 6 8 14 8 14Z"/><circle cx="12" cy="8" r="2"/></>,heart:<path d="M12 21 4 13A5 5 0 0 1 12 6a5 5 0 0 1 8 7Z"/>}
return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]||paths.flower}</svg>
}

