import React from 'react'

function Animale(props) {
    return (
        <div className="card p-3 m-2">
            <h5>{props.nome}</h5>
            <p>Tipo: {props.tipo}</p>
        </div>
    );
}

export default Animale