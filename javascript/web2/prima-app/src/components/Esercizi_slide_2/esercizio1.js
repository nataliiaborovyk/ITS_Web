import React from 'react'

const ComponentePersona = ({ nome, cognome, eta }) => {
  return (
    <>
    <div>
      {nome} {cognome} di anni {eta}. Esercizio
    </div>
    </>
  )
}

export default ComponentePersona