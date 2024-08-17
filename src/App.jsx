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
  /*Crenado una funciones como props*/
  // const formatedUserName = userName => `@${userName}`
  //Creando elementos como props
  // const formatedUserName = <span>@midudev</span>

  return (
    /*Pasando funciones como props*/
    /*Pasando elementos como props*/
    <section className="App">
      <TwitterFollowCard
        isFollowing
        userName={'midudev'}
        name={'Miguel Ángel Durán'}
      />
      <TwitterFollowCard
        isFollowing
        userName={'pheralb'}
        name={'Pablo Hernández'}
      />
      <TwitterFollowCard isFollowing userName={'elonmusk'} name={'Elon Musk'} />
    </section>
  )
}
