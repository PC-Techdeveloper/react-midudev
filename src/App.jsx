/*
Estilar de esta forma para React Native
Estilos en línea: Como si fuera un objeto
<article style={{...}}>...</article>
*/

//Importando a nivel de componente
import { TwitterFollowCard } from './TwitterFollowCard'
import './App.css'

//Fragmentos:
//Importando fragmentos para mútiples componentes
// import { Fragment } from 'react'
// import React from 'react'

export function App() {
  return (
    <>
      <TwitterFollowCard
        userName={'midudev'}
        name={'Miguel Ángel Durán'}
        isFollowing={'Seguir'}
      />
      <TwitterFollowCard
        userName={'pheralb'}
        name={'Pablo Hernández'}
        isFollowing={'Seguir'}
      />
      <TwitterFollowCard
        userName={'elonmusk'}
        name={'Elon Musk'}
        isFollowing={'Seguir'}
      />
      <TwitterFollowCard
        userName={'johndoe'}
        name={'John Doe'}
        isFollowing={'Seguir'}
      />
    </>
  )
}
