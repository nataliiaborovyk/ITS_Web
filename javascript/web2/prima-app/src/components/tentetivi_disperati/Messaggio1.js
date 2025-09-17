import React from 'react'

const Messaggio1 = (props) => {
  return (
    <div>
        <h6>{props.titolo}</h6>
        <p>{props.testo}</p>
    </div>
  )
}

export default Messaggio1