import React from 'react'

const Saluto2 = (props) => {
  return (
    <div>
      <h3>Ciao, sono  {props.nome} </h3>
      <p>tentativo disperato {props.tentativo}</p>
    </div>
  )
}

export default Saluto2