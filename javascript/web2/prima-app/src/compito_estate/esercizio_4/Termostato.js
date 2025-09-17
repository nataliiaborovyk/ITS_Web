import React, { useState } from 'react'


const Termostato  = () =>  {
    const [temperatura, setTemperatura] = useState(20)
    return (
        <div>
            <h5>Temperatura: {temperatura}</h5>
            <button onClick = { () => setTemperatura(temperatura + 1)}>+</button>
            <button onClick = { () => setTemperatura(temperatura - 1)}>-</button>
        </div>
    );
}

export default Termostato;