 import React from 'react'     
 import ReactDOM from 'react-dom/client'
// React.createElement=>Object => if we render the element HTMLElement in DOM(render)
 const heading = React.createElement('h1',{},'Hello React from foundation') 
 const root = ReactDOM.createRoot(document.getElementById('root'))
 root.render(heading)