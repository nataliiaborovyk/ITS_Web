import React from 'react'

//Qui facio destrutturazione: invece di scrivere props.nome, uso direttamente nome.
const Componente1 = ({ nome, cognome, eta }) => {

  return ( //Dice cosa deve essere mostrato a schermo.
    //Mostra i dati della persona, e anche i componenti Anagrafica e Messaggio (che per ora scrivono solo testo fisso).
    <div //È un contenitore HTML. Serve a raggruppare gli elementi dentro.
    style={{ //In React, lo stile si scrive come un oggetto JavaScript:
    color: "red", 
    fontWeight: "400", 
    border: "1px #000 solid", 
    margin: "15px", 
    padding: "15px" 
    }}>
      {/* //sto stampando le props ricevute (nome, cognome, età) nel testo. */}
      {nome} {cognome} di anni {eta} 
      {/* è un altro componente React che viene mostrato dentro la div. Significa che sta0 includendo il componente Anagrafica */}
      <Anagrafica></Anagrafica> 
      {/* sto includendo un altro componente chiamato Messaggio. Questi due componenti possono stampare altre informazioni */}
      <Messaggio></Messaggio>
    </div>
  )
}

const Anagrafica = () => {
  return (<div>Anagrafica</div>)
}
const Messaggio = () => {
  return (<div>Messaggio</div>)
}
export default Componente1

// Componente1
// │
// ├── Riceve props: nome, cognome, eta
// │
// ├── return:
// │   └── <div> con stile CSS diretto
// │       ├── Stampa: nome + cognome + età
// │       ├── Mostra componente <Anagrafica>
// │       └── Mostra componente <Messaggio>
