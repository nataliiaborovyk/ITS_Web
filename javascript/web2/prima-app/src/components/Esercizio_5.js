import React, { useEffect, useState } from 'react'
import { news } from '../dati/dati'
import CardDiTerrore from './Compito/CardDiTerrore';

const Esercizio_5 = (props) => {

  const [scuro, setScuro] = useState(false);
  const [notizie, setNotizie] = useState(true);

  useEffect(() => {
    if (scuro) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [scuro]);

  return (
<div>
    <button onClick={() => setScuro(!scuro)}>
      Cambia colore
    </button>

    <button onClick={() => setNotizie(!notizie)}>
    {notizie ? 'Nascondi News' : 'Visualizza News'}
    </button>

    {notizie && (   
       <div className="container">
      <div className='row'>
        {news.map(({id, titolo, contenuto}) => (
            <div className='col' key={id}>
              
                 {titolo} <br/>
                 {contenuto}
                
            </div>
        ))}
        </div>
    </div>
        )}


</div>
  )
}

export default Esercizio_5