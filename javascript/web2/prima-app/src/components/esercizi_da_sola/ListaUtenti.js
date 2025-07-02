import React from 'react'
import { utenti } from "../../dati/dati"

function ListaUtenti(props) {
    return (
        <ul className="list-group">
            {utenti.map(({id, nome, professione}) => (
                <li key="id" className="list-group-item">
                    {nome} - {professione}
                </li>
            ))}
        </ul>
    );
}
export default ListaUtenti
