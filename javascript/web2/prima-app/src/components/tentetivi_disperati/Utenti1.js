import React from 'react'

const Utenti1 = (props) => {
    const {nome, eta} = props;


  return (
    <div>
        <p>{nome},{eta} anni</p>
    </div>
  )
}

export default Utenti1