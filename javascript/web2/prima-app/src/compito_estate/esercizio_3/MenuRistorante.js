import React from 'react'
import piatti from '../../dati/piatti'

const MenuRistorante = () =>  {
    return (
        <div>

            <h5>Menu</h5>

            {piatti.map((p) => (
                <div key={p.id}>
                    {p.nome} - {p.prezzo}
                </div>
            ))}
            
        </div>
    )
}

export default MenuRistorante


