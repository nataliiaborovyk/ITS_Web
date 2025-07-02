import React from 'react'

const Stampanumeri = () => {
    const lista = []
    for (let i = 0; i <= 10; i++){
        lista.push(i)
    }
  return (
    <div>
        <h3>Stampo i numeri da 1 a 10</h3>
        {lista.map(i => (
            <div key={i}>
                {i} </div>
        )

        )}

    </div>
  )
}

export default Stampanumeri