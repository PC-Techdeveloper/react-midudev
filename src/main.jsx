// import React from 'react' -> Fragment: <Reat.Fragment></Reat.Fragment>
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Importando el componente App para utilizar
import './index.css' //Estilos globales
import { App } from './App'

createRoot(document.getElementById('root')).render(
  /*Colocando componente App*/
  /*Utilizando las props desde el componente TwitterFollowCard*/
  <StrictMode>
    <App />
  </StrictMode>
)
