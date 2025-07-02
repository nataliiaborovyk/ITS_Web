import React from 'react'
const cifre = [8,2,3,4,5,6,7,8,9,10]
const Tabellina = ({num}) => {
  return (
    <div>
        <h3>Tabelina per {num}</h3>
        {cifre.map((p, i) => (
            <div key={i}>
                {num * p} 
            </div>
        ))}
        
        
    </div>
  )
}

export default Tabellina