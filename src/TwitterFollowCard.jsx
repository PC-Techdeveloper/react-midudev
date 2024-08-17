import './App.css'

/*Reutilizando los estilos usando las props de un componente*/
export function TwitterFollowCard({ userName, name, isFollowing }) {
  /*Imagen desde una constante ❌ No es buena práctica*/
  // const imgeSrc = `https://unavatar.io/${userName}`

  return (
    /*Estilos en React: Tailwindcss, CSS Modules, Styled Components, etc...*/
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUsername">@{userName}</span>
        </div>
      </header>

      <aside>
        {/*Utilzando las props del componente 🟨*/}
        <button className="tw-followCard-button">{isFollowing}</button>
      </aside>
    </article>
  )
}
