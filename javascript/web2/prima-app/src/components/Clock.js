import React from 'react'
//Componente che riceve le props: timezone, country, ecc.
const Clock = (props) => {
  //Calcola l'ora modificata secondo il fuso orario.
  const t=Date.now()+3600*props.timezone*1000
  //Stampa nella console del browser le props che riceve.
    console.log(props)
    //Crea un oggetto Date con l'orario corretto.
    const date = new Date(t)
  return (
    //Mostra la frase:  "In Italy sono le 16:00 nel giorno 18/06/2025"
    <h2>In {props.country} sono le {date.toLocaleTimeString()} nel giorno {date.toLocaleDateString()}</h2>
  )
}

export default Clock