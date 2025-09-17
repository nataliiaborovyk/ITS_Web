import React from 'react'

const Persona = ({nome, cognome, eta}) => {
  return (
    <div className="card m-2 p-3">
    <p>Nome {nome}, cognome {cognome}, eta {eta}</p>
    </div>
  )
}

export default Persona