import React from 'react'

const Stampanumeri2 = () => {
        const lista2 = []
    for (let i = 0; i <= 20; i+=2){
        lista2.push(i)
    }
  return (
    <div> 
      <h3>Contatore</h3>
        {lista2.map(i => (
            <div key={i}>
                {i}
                </div>
        ))}

    </div>
  )
}

export default Stampanumeri2